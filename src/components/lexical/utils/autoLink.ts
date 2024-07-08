import {
  $createAutoLinkNode,
  $isAutoLinkNode,
  $isLinkNode,
  AutoLinkNode,
  LinkAttributes,
} from '@lexical/link';
import {
  $createTextNode,
  $isElementNode,
  $isLineBreakNode,
  $isTextNode,
  type ElementNode,
  type LexicalEditor,
  LexicalNode,
  TextNode,
} from 'lexical';
import { MaybeRef, unref, watchEffect } from 'vue';
import invariant from 'tiny-invariant';
import { mergeRegister } from '@lexical/utils';
import urlRegex from 'url-regex';

type ChangeHandler = (url: string | null, prevUrl: string | null) => void;

interface LinkMatcherResult {
  attributes?: LinkAttributes;
  index: number;
  length: number;
  text: string;
  url: string;
}

type LinkMatcher = (text: string) => LinkMatcherResult | null;

export const EMAIL_MATCHER = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const matchers: ((text: string) => LinkMatcherResult)[] = [
  (text: string) => {
    const match = urlRegex().exec(text);
    return (
      match && {
        index: match.index,
        length: match[0].length,
        text: match[0],
        url: match[0],
      }
    );
  },
  (text: string) => {
    const match = EMAIL_MATCHER.exec(text);
    return (
      match && {
        index: match.index,
        length: match[0].length,
        text: match[0],
        url: `mailto:${match[0]}`,
      }
    );
  },
];

export function findFirstMatch(
  text: string,
  matchers: Array<LinkMatcher>
): LinkMatcherResult | null {
  for (let i = 0; i < matchers.length; i++) {
    const match = matchers[i](text);

    if (match) return match;
  }

  return null;
}

export const PUNCTUATION_OR_SPACE = /[.,;\s]/;

export function isSeparator(char: string): boolean {
  return PUNCTUATION_OR_SPACE.test(char);
}

export function endsWithSeparator(textContent: string): boolean {
  return isSeparator(textContent[textContent.length - 1]);
}

export function startsWithSeparator(textContent: string): boolean {
  return isSeparator(textContent[0]);
}

export function isPreviousNodeValid(node: LexicalNode): boolean {
  let previousNode = node.getPreviousSibling();
  if ($isElementNode(previousNode))
    previousNode = previousNode.getLastDescendant();

  return (
    !previousNode ||
    $isLineBreakNode(previousNode) ||
    ($isTextNode(previousNode) &&
      endsWithSeparator(previousNode.getTextContent()))
  );
}

export function isNextNodeValid(node: LexicalNode): boolean {
  let nextNode = node.getNextSibling();
  if ($isElementNode(nextNode)) nextNode = nextNode.getFirstDescendant();

  return (
    !nextNode ||
    $isLineBreakNode(nextNode) ||
    ($isTextNode(nextNode) && startsWithSeparator(nextNode.getTextContent()))
  );
}

export function isContentAroundIsValid(
  matchStart: number,
  matchEnd: number,
  text: string,
  node: TextNode
): boolean {
  const contentBeforeIsValid =
    matchStart > 0
      ? isSeparator(text[matchStart - 1])
      : isPreviousNodeValid(node);
  if (!contentBeforeIsValid) return false;

  return matchEnd < text.length
    ? isSeparator(text[matchEnd])
    : isNextNodeValid(node);
}

export function handleLinkCreation(
  node: TextNode,
  matchers: Array<LinkMatcher>,
  onChange: ChangeHandler
): void {
  const nodeText = node.getTextContent();
  let text = nodeText;
  let invalidMatchEnd = 0;
  let remainingTextNode = node;
  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = findFirstMatch(text, matchers))) {
    const matchStart = match.index;
    const matchLength = match.length;
    const matchEnd = matchStart + matchLength;
    const isValid = isContentAroundIsValid(
      invalidMatchEnd + matchStart,
      invalidMatchEnd + matchEnd,
      nodeText,
      node
    );

    if (isValid) {
      let linkTextNode;
      if (invalidMatchEnd + matchStart === 0) {
        [linkTextNode, remainingTextNode] = remainingTextNode.splitText(
          invalidMatchEnd + matchLength
        );
      } else {
        [, linkTextNode, remainingTextNode] = remainingTextNode.splitText(
          invalidMatchEnd + matchStart,
          invalidMatchEnd + matchStart + matchLength
        );
      }
      const linkNode = $createAutoLinkNode(match.url, match.attributes);
      const textNode = $createTextNode(match.text);
      textNode.setFormat(linkTextNode.getFormat());
      textNode.setDetail(linkTextNode.getDetail());
      linkNode.append(textNode);
      linkTextNode.replace(linkNode);
      onChange(match.url, null);
      invalidMatchEnd = 0;
    } else {
      invalidMatchEnd += matchEnd;
    }

    text = text.substring(matchEnd);
  }
}

export function handleLinkEdit(
  linkNode: AutoLinkNode,
  matchers: Array<LinkMatcher>,
  onChange: ChangeHandler
): void {
  // Check children are simple text
  const children = linkNode.getChildren();
  const childrenLength = children.length;
  for (let i = 0; i < childrenLength; i++) {
    const child = children[i];
    if (!$isTextNode(child) || !child.isSimpleText()) {
      replaceWithChildren(linkNode);
      onChange(null, linkNode.getURL());
      return;
    }
  }

  // Check text content fully matches
  const text = linkNode.getTextContent();
  const match = findFirstMatch(text, matchers);
  if (match === null || match.text !== text) {
    replaceWithChildren(linkNode);
    onChange(null, linkNode.getURL());
    return;
  }

  // Check neighbors
  if (!isPreviousNodeValid(linkNode) || !isNextNodeValid(linkNode)) {
    replaceWithChildren(linkNode);
    onChange(null, linkNode.getURL());
    return;
  }

  const url = linkNode.getURL();
  if (url !== match.url) {
    linkNode.setURL(match.url);
    onChange(match.url, url);
  }

  if (match.attributes) {
    const rel = linkNode.getRel();
    if (rel !== match.attributes.rel) {
      linkNode.setRel(match.attributes.rel || null);
      onChange(match.attributes.rel || null, rel);
    }

    const target = linkNode.getTarget();
    if (target !== match.attributes.target) {
      linkNode.setTarget(match.attributes.target || null);
      onChange(match.attributes.target || null, target);
    }
  }
}

// Bad neighbours are edits in neighbor nodes that make AutoLinks incompatible.
// Given the creation preconditions, these can only be simple text nodes.
export function handleBadNeighbors(
  textNode: TextNode,
  onChange: ChangeHandler
): void {
  const previousSibling = textNode.getPreviousSibling();
  const nextSibling = textNode.getNextSibling();
  const text = textNode.getTextContent();

  if ($isAutoLinkNode(previousSibling) && !startsWithSeparator(text)) {
    replaceWithChildren(previousSibling);
    onChange(null, previousSibling.getURL());
  }

  if ($isAutoLinkNode(nextSibling) && !endsWithSeparator(text)) {
    replaceWithChildren(nextSibling);
    onChange(null, nextSibling.getURL());
  }
}

export function replaceWithChildren(node: ElementNode): Array<LexicalNode> {
  const children = node.getChildren();
  const childrenLength = children.length;

  for (let j = childrenLength - 1; j >= 0; j--) node.insertAfter(children[j]);

  node.remove();
  return children.map(child => child.getLatest());
}

export function useAutoLink(
  editor: LexicalEditor,
  matchers: MaybeRef<Array<LinkMatcher>>,
  onChange?: ChangeHandler
) {
  watchEffect(onInvalidate => {
    if (!editor.hasNodes([AutoLinkNode]))
      invariant(
        false,
        'LexicalAutoLinkPlugin: AutoLinkNode not registered on editor'
      );

    const onChangeWrapped = (url: string | null, prevUrl: string | null) => {
      if (onChange) onChange(url, prevUrl);
    };

    const fn = mergeRegister(
      editor.registerNodeTransform(TextNode, (textNode: TextNode) => {
        const parent = textNode.getParentOrThrow();
        if ($isAutoLinkNode(parent)) {
          handleLinkEdit(parent, unref(matchers), onChangeWrapped);
        } else if (!$isLinkNode(parent)) {
          if (textNode.isSimpleText())
            handleLinkCreation(textNode, unref(matchers), onChangeWrapped);

          handleBadNeighbors(textNode, onChangeWrapped);
        }
      }),

      editor.registerNodeTransform(AutoLinkNode, (linkNode: AutoLinkNode) => {
        handleLinkEdit(linkNode, unref(matchers), onChangeWrapped);
      })
    );

    onInvalidate(fn);
  });
}
