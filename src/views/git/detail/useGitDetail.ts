import { computed, ref, onBeforeMount, onBeforeUnmount, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import useGitService from '@/services/git/gitService';
import { getTabName } from '@/utils/route';
import { ElMessage, ElMessageBox } from 'element-plus';
import { sendEvent } from '@/admin/umeng';
import { translate } from '@/utils/i18n';
import Form from '@/components/form/Form.vue';
import {
  GIT_REF_TYPE_BRANCH,
  GIT_STATUS_CLONING,
  GIT_STATUS_ERROR,
  GIT_STATUS_PENDING,
  GIT_STATUS_READY,
} from '@/constants/git';
import useDetail from '@/layouts/content/detail/useDetail';
import useGit from '@/components/git/git';
import { TAB_NAME_OVERVIEW } from '@/constants';

// i18n
const t = translate;

const gitCheckoutFormRef = ref<typeof Form>();

const gitCheckoutForm = ref({
  type: GIT_REF_TYPE_BRANCH,
  name: '',
});

const gitDialogVisible = ref({
  checkout: false,
});

const gitLoading = ref({
  checkout: false,
  pull: false,
  commit: false,
});

const useGitDetail = () => {
  const ns = 'git';
  const store = useStore();
  const { git: state } = store.state as RootStoreState;

  const router = useRouter();

  const route = useRoute();

  const id = computed<string>(() => route.params.id as string);

  const { create: createGitForm, updateById: updateGitFormById } =
    useGitService(store);

  const activeTabName = computed<string>(() => getTabName(router));

  const saveGit = async () => {
    if (!id.value || !state.form.url || activeTabName.value !== 'git') return;
    if (state.form._id) {
      await updateGitFormById(state.form._id, state.form);
    } else {
      const res = await createGitForm({
        _id: state.form._id,
        ...state.form,
      });
      await store.dispatch(`git/getById`, res.data?._id);
    }
    await store.dispatch(`${ns}/getGit`, { id: id.value });
  };

  const gitActions = {
    onClickPull: async () => {
      await ElMessageBox.confirm(
        t('components.git.common.messageBox.confirm.pull'),
        t('components.git.common.actions.pull'),
        {
          type: 'warning',
        }
      );
      gitLoading.value.pull = true;
      await saveGit();
      try {
        const res = await store.dispatch(`${ns}/gitPull`, { id: id.value });
        if (res) {
          ElMessage.success(t('components.git.common.message.success.pull'));
        }
        await store.dispatch(`${ns}/getGit`, { id: id.value });
      } finally {
        gitLoading.value.pull = false;
      }

      sendEvent('click_spider_detail_git_pull');
    },
    onDialogCheckoutConfirm: async () => {
      await gitCheckoutFormRef.value?.validate();
      gitDialogVisible.value.checkout = false;
      gitLoading.value.checkout = true;
      try {
        await store.dispatch(`${ns}/gitCheckout`, {
          id: id.value,
          branch: gitCheckoutForm.value.name,
        });
        ElMessage.success(t('components.git.common.message.success.checkout'));
        await store.dispatch(`${ns}/getGit`, { id: id.value });
      } finally {
        gitLoading.value.checkout = false;
      }

      sendEvent('click_spider_detail_git_checkout_confirm');
    },
  };

  const currentBranch = computed<GitRef | undefined>(() => state.currentBranch);

  const gitDataLoading = computed(() => state.gitDataLoading);

  const gitLocalBranches = computed<GitRef[]>(() => state.gitBranches);
  const gitLocalBranchesDict = computed<Record<string, GitRef>>(() => {
    const dict: Record<string, GitRef> = {};
    gitLocalBranches.value?.forEach(branch => {
      dict[branch.hash || ''] = branch;
    });
    return dict;
  });

  const gitRemoteBranches = computed<GitRef[] | undefined>(
    () => state.gitRemoteBranches
  );
  const gitRemoteBranchesDict = computed<Record<string, GitRef>>(() => {
    const dict: Record<string, GitRef> = {};
    gitRemoteBranches.value?.forEach(branch => {
      dict[branch.hash || ''] = branch;
    });
    return dict;
  });

  // redirect to overview tab if the current tab is disabled
  watch(
    () => state.disabledTabKeys,
    () => {
      if (state.disabledTabKeys.includes(activeTabName.value)) {
        router.push(`/gits/${id.value}/${TAB_NAME_OVERVIEW}`);
      }
    }
  );

  return {
    ...useDetail('git'),
    gitCheckoutFormRef,
    gitCheckoutForm,
    gitDialogVisible,
    gitLoading,
    ...gitActions,
    currentBranch,
    gitDataLoading,
    gitLocalBranches,
    gitLocalBranchesDict,
    gitRemoteBranches,
    gitRemoteBranchesDict,
  };
};

export default useGitDetail;
