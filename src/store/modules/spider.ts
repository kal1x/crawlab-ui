import {
  getDefaultStoreActions,
  getDefaultStoreGetters,
  getDefaultStoreMutations,
  getDefaultStoreState
} from '@/utils/store';
import useRequest from '@/services/request';
import {
  TAB_NAME_DATA, TAB_NAME_DEPENDENCIES,
  TAB_NAME_FILES,
  TAB_NAME_OVERVIEW,
  TAB_NAME_SCHEDULES,
  TAB_NAME_TASKS
} from '@/constants/tab';
import {TASK_MODE_RANDOM} from '@/constants/task';
import {translate} from '@/utils/i18n';
import {FILE_UPLOAD_MODE_DIR} from '@/constants';

// i18n
const t = translate;

const endpoint = '/spiders';

const {
  get,
  post,
  getList,
  del,
} = useRequest();

const state = {
  ...getDefaultStoreState<Spider>('spider'),
  newFormFn: () => {
    return {
      mode: TASK_MODE_RANDOM,
      priority: 5,
    };
  },
  tabs: [
    {id: TAB_NAME_OVERVIEW, title: t('common.tabs.overview')},
    {id: TAB_NAME_FILES, title: t('common.tabs.files')},
    {id: TAB_NAME_TASKS, title: t('common.tabs.tasks')},
    {id: TAB_NAME_SCHEDULES, title: t('common.tabs.schedules')},
    {id: TAB_NAME_DATA, title: t('common.tabs.data')},
    {id: TAB_NAME_DEPENDENCIES, title: t('common.tabs.dependencies')},
    // {id: TAB_NAME_SETTINGS, title: t('common.tabs.settings')},
  ],
  fileNavItems: [],
  activeNavItem: undefined,
  fileMode: FILE_UPLOAD_MODE_DIR,
  files: [],
  fileContent: '',
  defaultFilePaths: [],
  dataDisplayAllFields: false,
} as SpiderStoreState;

const getters = {
  ...getDefaultStoreGetters<Spider>(),
} as SpiderStoreGetters;

const mutations = {
  ...getDefaultStoreMutations<Spider>(),
  setFileNavItems: (state: SpiderStoreState, navItems: FileNavItem[]) => {
    state.fileNavItems = navItems;
  },
  setActiveFileNavItem: (state: SpiderStoreState, navItem: FileNavItem) => {
    state.activeNavItem = navItem;
  },
  resetActiveFileNavItem: (state: SpiderStoreState) => {
    state.activeNavItem = undefined;
  },
  setFileMode: (state: SpiderStoreState, mode: FileUploadMode) => {
    state.fileMode = mode;
  },
  resetFileMode: (state: SpiderStoreState) => {
    state.fileMode = FILE_UPLOAD_MODE_DIR;
  },
  setFiles: (state: SpiderStoreState, files) => {
    state.files = files;
  },
  resetFiles: (state: SpiderStoreState) => {
    state.files = [];
  },
  setFileContent: (state: SpiderStoreState, content: string) => {
    state.fileContent = content;
  },
  resetFileContent: (state: SpiderStoreState) => {
    state.fileContent = '';
  },
  setDefaultFilePaths: (state: SpiderStoreState, paths: string[]) => {
    state.defaultFilePaths = paths;
  },
  resetDefaultFilePaths: (state: SpiderStoreState) => {
    state.defaultFilePaths = [];
  },
  setDataDisplayAllFields: (state: SpiderStoreState, display: boolean) => {
    state.dataDisplayAllFields = display;
  },
} as SpiderStoreMutations;

const actions = {
  ...getDefaultStoreActions<Spider>(endpoint),
  getList: async ({state, commit}: StoreActionContext<SpiderStoreState>) => {
    const payload = {
      ...state.tablePagination,
      conditions: JSON.stringify(state.tableListFilter),
      sort: JSON.stringify(state.tableListSort),
      stats: true,
    };
    const res = await getList(`/spiders`, payload);
    commit('setTableData', {data: res.data || [], total: res.total});
    return res;
  },
  runById: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {
    id,
    options
  }: { id: string; options: SpiderRunOptions }) => {
    const res = await post(`/spiders/${id}/run`, options);
    return res;
  },
  listDir: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id, path}: FileRequestPayload) => {
    const res = await get(`${endpoint}/${id}/files/list`, {path});
    const navItems = res.data as FileNavItem[];
    commit('setFileNavItems', navItems);
    return res;
  },
  getFile: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id, path}: FileRequestPayload) => {
    const res = await get(`${endpoint}/${id}/files/get`, {path});
    commit('setFileContent', res.data);
    return res;
  },
  getFileInfo: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id, path}: FileRequestPayload) => {
    return await get(`${endpoint}/${id}/files/info`, {path});
  },
  saveFile: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id, path, data}: FileRequestPayload) => {
    return await post(`${endpoint}/${id}/files/save`, {path, data});
  },
  saveFileBinary: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {
    id,
    path,
    file
  }: FileRequestPayload) => {
    const data = new FormData();
    data.set('path', path as string);
    data.set('file', file as File, file?.name);
    return await post(`${endpoint}/${id}/files/save`, data, null, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  },
  saveFilesBinary: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {
    id,
    files,
  }: SaveFilesRequestPayload) => {
    const data = new FormData();
    files.forEach(({path, file}) => {
      data.append(path, file as File);
    });
    return await post(`${endpoint}/${id}/files/save/batch`, data, null, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  },
  saveDir: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id, path}: FileRequestPayload) => {
    return await post(`${endpoint}/${id}/files/save/dir`, {path});
  },
  renameFile: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {
    id,
    path,
    new_path
  }: FileRequestPayload) => {
    return await post(`${endpoint}/${id}/files/rename`, {path, new_path});
  },
  deleteFile: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id, path}: FileRequestPayload) => {
    return await del(`${endpoint}/${id}/files`, {path});
  },
  copyFile: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id, path, new_path}: FileRequestPayload) => {
    return await post(`${endpoint}/${id}/files/copy`, {path, new_path});
  },
  exportFiles: async ({commit}: StoreActionContext<BaseStoreState<Spider>>, {id}: { id: string }) => {
    return await post(`${endpoint}/${id}/files/export`, {}, {}, {responseType: 'arraybuffer'}) as any;
  },
} as SpiderStoreActions;

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as SpiderStoreModule;
