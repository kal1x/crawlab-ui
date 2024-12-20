import { createStore as createVuexStore, Store } from 'vuex';
import common from '@/store/modules/common';
import layout from '@/store/modules/layout';
import node from '@/store/modules/node';
import project from '@/store/modules/project';
import spider from '@/store/modules/spider';
import task from '@/store/modules/task';
import file from '@/store/modules/file';
import dataCollection from '@/store/modules/dataCollection';
import schedule from '@/store/modules/schedule';
import user from '@/store/modules/user';
import role from '@/store/modules/role';
import token from '@/store/modules/token';
import git from '@/store/modules/git';
import notificationSetting from '@/store/modules/notificationSetting';
import notificationChannel from '@/store/modules/notificationChannel';
import notificationRequest from '@/store/modules/notificationRequest';
import notificationAlert from '@/store/modules/notificationAlert';
import database from '@/store/modules/database';
import dependency from '@/store/modules/dependency';
import environment from '@/store/modules/environment';
import system from '@/store/modules/system';

let _store: Store<RootStoreState>;

export const createStore = (): Store<RootStoreState> => {
  return createVuexStore<RootStoreState>({
    modules: {
      common,
      layout,
      node,
      project,
      spider,
      task,
      file,
      dataCollection,
      schedule,
      user,
      role,
      token,
      git,
      notificationSetting,
      notificationChannel,
      notificationRequest,
      notificationAlert,
      database,
      dependency,
      environment,
      system,
    },
  });
};

export const setStore = (store: Store<RootStoreState>) => {
  _store = store;
};

export const getStore = (): Store<RootStoreState> => {
  if (!_store) {
    _store = createStore();
  }
  return _store;
};

export const addStoreModule = <M>(
  path: string,
  module: M,
  store?: Store<RootStoreState>
) => {
  if (!store) {
    store = getStore();
  }
  store.registerModule(path, module as any);
};
