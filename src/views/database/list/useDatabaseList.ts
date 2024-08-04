import { computed, h } from 'vue';
import { ElMessageBox } from 'element-plus';
import DataSourceType from '@/components/core/database/DatabaseType.vue';
import useDataSourceService from '@/services/database/databaseService';
import {
  DATABASE_CONNECT_TYPE_HOSTS,
  DATABASE_CONNECT_TYPE_STANDARD,
  DATABASE_CONNECT_TYPE_URL,
  DATABASE_STATUS_OFFLINE,
  DATABASE_STATUS_ONLINE,
  DATABASE_TYPE_COCKROACHDB,
  DATABASE_TYPE_ELASTICSEARCH,
  DATABASE_TYPE_KAFKA,
  DATABASE_TYPE_MONGO,
  DATABASE_TYPE_MSSQL,
  DATABASE_TYPE_MYSQL,
  DATABASE_TYPE_POSTGRESQL,
  DATABASE_TYPE_SQLITE,
} from '@/constants/database';
import DataSourceStatus from '@/components/core/database/DatabaseStatus.vue';
import DataSourceConnectType from '@/components/core/database/DatabaseConnectType.vue';
import { getStore } from '@/store';
import { onListFilterChangeByKey, translate } from '@/utils';
import { getRouter } from '@/router';
import {
  ACTION_FILTER,
  ACTION_FILTER_SEARCH,
  ACTION_FILTER_SELECT,
  FILTER_OP_CONTAINS,
  FILTER_OP_EQUAL,
  TABLE_COLUMN_NAME_ACTIONS,
} from '@/constants';
import { ClNavLink, ClTag } from '@/components';
import { useList } from '@/layouts/content';

// i18n
const t = translate;

const useDatabaseList = () => {
  // router
  const router = getRouter();

  // store
  const ns = 'database';
  const store = getStore();
  const { commit } = store;

  // services
  const { getList, deleteById } = useDataSourceService(store);

  const typeSelectOptions: SelectOption[] = [
    { label: t('components.ds.type.mongo'), value: DATABASE_TYPE_MONGO },
    { label: t('components.ds.type.mysql'), value: DATABASE_TYPE_MYSQL },
    {
      label: t('components.ds.type.postgresql'),
      value: DATABASE_TYPE_POSTGRESQL,
    },
    { label: t('components.ds.type.mssql'), value: DATABASE_TYPE_MSSQL },
    { label: t('components.ds.type.sqlite'), value: DATABASE_TYPE_SQLITE },
    {
      label: t('components.ds.type.cockroachdb'),
      value: DATABASE_TYPE_COCKROACHDB,
    },
    {
      label: t('components.ds.type.elasticsearch'),
      value: DATABASE_TYPE_ELASTICSEARCH,
    },
    { label: t('components.ds.type.kafka'), value: DATABASE_TYPE_KAFKA },
  ];

  const statusSelectOptions: SelectOption[] = [
    {
      label: t('components.ds.status.label.online'),
      value: DATABASE_STATUS_ONLINE,
    },
    {
      label: t('components.ds.status.label.offline'),
      value: DATABASE_STATUS_OFFLINE,
    },
  ];

  // nav actions
  const navActions = computed<ListActionGroup[]>(() => [
    {
      name: 'common',
      children: [
        {
          buttonType: 'label',
          label: t('views.ds.navActions.new.label'),
          tooltip: t('views.ds.navActions.new.tooltip'),
          icon: ['fa', 'plus'],
          type: 'success',
          onClick: () => {
            commit(`${ns}/showDialog`, 'create');
          },
        },
      ],
    },
    {
      action: ACTION_FILTER,
      name: 'filter',
      children: [
        {
          action: ACTION_FILTER_SEARCH,
          id: 'filter-search',
          className: 'search',
          placeholder: t('views.ds.navActions.filter.search.placeholder'),
          onChange: onListFilterChangeByKey(
            store,
            ns as any,
            'name',
            FILTER_OP_CONTAINS
          ),
        },
        {
          action: ACTION_FILTER_SELECT,
          id: 'filter-select-type',
          className: 'filter-select-type',
          label: t('views.ds.navActionsExtra.filter.select.type.label'),
          options: typeSelectOptions,
          onChange: onListFilterChangeByKey(
            store,
            ns as any,
            'type',
            FILTER_OP_EQUAL
          ),
        },
        {
          action: ACTION_FILTER_SELECT,
          id: 'filter-select-status',
          className: 'filter-select-status',
          label: t('views.ds.navActionsExtra.filter.select.status.label'),
          options: statusSelectOptions,
          onChange: onListFilterChangeByKey(
            store,
            ns as any,
            'status',
            FILTER_OP_EQUAL
          ),
        },
        {
          action: ACTION_FILTER_SEARCH,
          id: 'filter-search-connect-settings',
          className: 'search-connect-settings',
          placeholder: t(
            'views.ds.navActionsExtra.filter.search.connectSettings.placeholder'
          ),
          onChange: onListFilterChangeByKey(
            store,
            ns as any,
            'connect_settings',
            FILTER_OP_CONTAINS
          ),
        },
      ],
    },
  ]);

  // table columns
  const tableColumns = computed<TableColumns<Database>>(() => [
    {
      key: 'name',
      label: t('components.database.form.name'),
      icon: ['fa', 'font'],
      width: '150',
      value: (row: Database) =>
        h(ClNavLink, {
          path: `/databases/${row._id}`,
          label: row.name,
        }),
      hasSort: true,
      hasFilter: true,
      allowFilterSearch: true,
    },
    {
      key: 'type',
      label: t('components.database.form.type'),
      icon: ['fa', 'database'],
      width: '150',
      value: (row: Database) =>
        h(DataSourceType, {
          dataSource: row,
        }),
    },
    {
      key: 'status', // status
      label: t('components.ds.form.status'),
      icon: ['fa', 'heartbeat'],
      width: '120',
      value: (row: Database) => {
        return h(DataSourceStatus, {
          status: row.status,
          error: row.error,
        });
      },
      hasFilter: true,
      allowFilterItems: true,
      filterItems: statusSelectOptions,
    },
    {
      key: 'connect_type',
      label: t('components.ds.form.connectType'),
      icon: ['fa', 'wifi'],
      width: '120',
      value: (row: Database) => {
        return h(DataSourceConnectType, {
          dataSource: row,
        } as DatabaseConnectTypeProps);
      },
    },
    {
      key: 'connect_settings',
      label: t('components.ds.form.connectSettings'),
      icon: ['fa', 'map-marker-alt'],
      width: '210',
      value: (row: Database) => {
        let label: string | undefined;
        switch (row.connect_type) {
          case DATABASE_CONNECT_TYPE_STANDARD:
            label = `${row.host || '<' + t('components.ds.default.host') + '>'}:${row.port || '<' + t('components.ds.default.port') + '>'}`;
            return h(ClTag, {
              label,
            });
          case DATABASE_CONNECT_TYPE_URL:
            label = row.url;
            return h(ClTag, {
              label,
            });
          case DATABASE_CONNECT_TYPE_HOSTS:
            return row.hosts?.map(address => {
              label = address;
              return h(ClTag, {
                label: address,
              });
            });
        }
      },
    },
    {
      key: 'database',
      label: t('components.ds.form.database'),
      icon: ['fa', 'database'],
      width: '150',
    },
    {
      key: 'username',
      label: t('components.ds.form.username'),
      icon: ['fa', 'key'],
      width: '180',
    },
    {
      key: 'description',
      label: t('components.ds.form.description'),
      icon: ['fa', 'comment-alt'],
      width: 'auto',
      hasFilter: true,
      allowFilterSearch: true,
    },
    {
      key: TABLE_COLUMN_NAME_ACTIONS,
      label: t('components.table.columns.actions'),
      fixed: 'right',
      width: '200',
      buttons: [
        {
          type: 'primary',
          icon: ['fa', 'search'],
          tooltip: t('common.actions.view'),
          onClick: async row => {
            await router.push(`/databases/${row._id}`);
          },
        },
        {
          type: 'danger',
          size: 'small',
          icon: ['fa', 'trash-alt'],
          tooltip: t('common.actions.delete'),
          onClick: async (row: Database) => {
            const res = await ElMessageBox.confirm(
              t('common.messageBox.confirm.delete'),
              t('common.actions.delete'),
              {
                type: 'warning',
                confirmButtonClass: 'el-button--danger',
              }
            );

            if (res) {
              await deleteById(row._id as string);
            }
            await getList();
          },
        },
      ],
      disableTransfer: true,
    },
  ]);

  // options
  const opts = {
    navActions,
    tableColumns,
  } as UseListOptions<Database>;

  return {
    ...useList<Database>(ns, store, opts),
  };
};

export default useDatabaseList;