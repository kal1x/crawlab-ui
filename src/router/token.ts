import { RouteRecordRaw } from 'vue-router';
import { ClTokenList } from '@/views';

const endpoint = 'tokens';

export default [
  {
    name: 'TokenList',
    path: endpoint,
    component: () => ClTokenList,
  },
] as Array<RouteRecordRaw>;
