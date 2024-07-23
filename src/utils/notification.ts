import { translate } from '@/utils/i18n';

const t = translate;

export const allVariables: NotificationVariable[] = [
  {
    category: 'task',
    name: 'id',
    label: t('components.notification.variables.common.id'),
    icon: ['fa', 'hashtag'],
  },
  {
    category: 'task',
    name: 'status',
    label: t('components.notification.variables.task.status'),
    icon: ['fa', 'check-square'],
  },
  {
    category: 'task',
    name: 'mode',
    label: t('components.notification.variables.task.mode'),
    icon: ['fa', 'cog'],
  },
  {
    category: 'task',
    name: 'cmd',
    label: t('components.notification.variables.task.cmd'),
    icon: ['fa', 'terminal'],
  },
  {
    category: 'task',
    name: 'param',
    label: t('components.notification.variables.task.param'),
    icon: ['fa', 'dollar'],
  },
  {
    category: 'task',
    name: 'priority',
    label: t('components.notification.variables.task.priority'),
    icon: ['fa', 'exclamation-circle'],
  },
  {
    category: 'task',
    name: 'error',
    label: t('components.notification.variables.task.error'),
    icon: ['fa', 'exclamation-triangle'],
  },
  {
    category: 'task',
    name: 'pid',
    label: t('components.notification.variables.task.pid'),
    icon: ['fa', 'microchip'],
  },
  {
    category: 'task',
    name: 'created_ts',
    label: t('components.notification.variables.common.createdAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'task',
    name: 'created_by',
    label: t('components.notification.variables.common.createdBy'),
    icon: ['fa', 'user'],
  },
  {
    category: 'task',
    name: 'updated_ts',
    label: t('components.notification.variables.common.updatedAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'task',
    name: 'updated_by',
    label: t('components.notification.variables.common.updatedBy'),
    icon: ['fa', 'user'],
  },
  {
    category: 'task_stat',
    name: 'start_ts',
    label: t('components.notification.variables.taskStat.startTs'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'task_stat',
    name: 'end_ts',
    label: t('components.notification.variables.taskStat.endTs'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'task_stat',
    name: 'wait_duration',
    label: t('components.notification.variables.taskStat.waitDuration'),
    icon: ['fa', 'hourglass'],
  },
  {
    category: 'task_stat',
    name: 'runtime_duration',
    label: t('components.notification.variables.taskStat.runtimeDuration'),
    icon: ['fa', 'hourglass-half'],
  },
  {
    category: 'task_stat',
    name: 'total_duration',
    label: t('components.notification.variables.taskStat.totalDuration'),
    icon: ['fa', 'hourglass-end'],
  },
  {
    category: 'task_stat',
    name: 'result_count',
    label: t('components.notification.variables.taskStat.resultCount'),
    icon: ['fa', 'chart-bar'],
  },
  {
    category: 'spider',
    name: 'id',
    label: t('components.notification.variables.common.id'),
    icon: ['fa', 'hashtag'],
  },
  {
    category: 'spider',
    name: 'name',
    label: t('components.notification.variables.spider.name'),
    icon: ['fa', 'font'],
  },
  {
    category: 'spider',
    name: 'description',
    label: t('components.notification.variables.spider.description'),
    icon: ['fa', 'comment'],
  },
  {
    category: 'spider',
    name: 'mode',
    label: t('components.notification.variables.spider.mode'),
    icon: ['fa', 'cog'],
  },
  {
    category: 'spider',
    name: 'cmd',
    label: t('components.notification.variables.spider.cmd'),
    icon: ['fa', 'terminal'],
  },
  {
    category: 'spider',
    name: 'param',
    label: t('components.notification.variables.spider.param'),
    icon: ['fa', 'dollar'],
  },
  {
    category: 'spider',
    name: 'priority',
    label: t('components.notification.variables.spider.priority'),
    icon: ['fa', 'exclamation-circle'],
  },
  {
    category: 'spider',
    name: 'created_ts',
    label: t('components.notification.variables.common.createdAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'spider',
    name: 'created_by',
    label: t('components.notification.variables.common.createdBy'),
    icon: ['fa', 'user'],
  },
  {
    category: 'spider',
    name: 'updated_ts',
    label: t('components.notification.variables.common.updatedAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'spider',
    name: 'updated_by',
    label: t('components.notification.variables.common.updatedBy'),
    icon: ['fa', 'user'],
  },
  {
    category: 'spider_stat',
    name: 'results',
    label: t('components.notification.variables.spiderStat.results'),
    icon: ['fa', 'chart-bar'],
  },
  {
    category: 'spider_stat',
    name: 'wait_duration',
    label: t('components.notification.variables.spiderStat.waitDuration'),
    icon: ['fa', 'hourglass'],
  },
  {
    category: 'spider_stat',
    name: 'runtime_duration',
    label: t('components.notification.variables.spiderStat.runtimeDuration'),
    icon: ['fa', 'hourglass-half'],
  },
  {
    category: 'spider_stat',
    name: 'total_duration',
    label: t('components.notification.variables.spiderStat.totalDuration'),
    icon: ['fa', 'hourglass-end'],
  },
  {
    category: 'spider_stat',
    name: 'average_wait_duration',
    label: t(
      'components.notification.variables.spiderStat.averageWaitDuration'
    ),
    icon: ['fa', 'hourglass'],
  },
  {
    category: 'spider_stat',
    name: 'average_runtime_duration',
    label: t(
      'components.notification.variables.spiderStat.averageRuntimeDuration'
    ),
    icon: ['fa', 'hourglass-half'],
  },
  {
    category: 'schedule',
    name: 'id',
    label: t('components.notification.variables.common.id'),
    icon: ['fa', 'hashtag'],
  },
  {
    category: 'schedule',
    name: 'name',
    label: t('components.notification.variables.schedule.name'),
    icon: ['fa', 'font'],
  },
  {
    category: 'schedule',
    name: 'description',
    label: t('components.notification.variables.schedule.description'),
    icon: ['fa', 'comment'],
  },
  {
    category: 'schedule',
    name: 'cron',
    label: t('components.notification.variables.schedule.cron'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'schedule',
    name: 'cmd',
    label: t('components.notification.variables.schedule.cmd'),
    icon: ['fa', 'terminal'],
  },
  {
    category: 'schedule',
    name: 'param',
    label: t('components.notification.variables.schedule.param'),
    icon: ['fa', 'dollar'],
  },
  {
    category: 'schedule',
    name: 'priority',
    label: t('components.notification.variables.schedule.priority'),
    icon: ['fa', 'exclamation-circle'],
  },
  {
    category: 'schedule',
    name: 'mode',
    label: t('components.notification.variables.schedule.mode'),
    icon: ['fa', 'cog'],
  },
  {
    category: 'schedule',
    name: 'enabled',
    label: t('components.notification.variables.schedule.enabled'),
    icon: ['fa', 'check-square'],
  },
  {
    category: 'schedule',
    name: 'created_ts',
    label: t('components.notification.variables.common.createdAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'schedule',
    name: 'created_by',
    label: t('components.notification.variables.common.createdBy'),
    icon: ['fa', 'user'],
  },
  {
    category: 'schedule',
    name: 'updated_ts',
    label: t('components.notification.variables.common.updatedAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'schedule',
    name: 'updated_by',
    label: t('components.notification.variables.common.updatedBy'),
    icon: ['fa', 'user'],
  },
  {
    category: 'node',
    name: 'id',
    label: t('components.notification.variables.common.id'),
    icon: ['fa', 'hashtag'],
  },
  {
    category: 'node',
    name: 'key',
    label: t('components.notification.variables.node.key'),
    icon: ['fa', 'key'],
  },
  {
    category: 'node',
    name: 'name',
    label: t('components.notification.variables.node.name'),
    icon: ['fa', 'font'],
  },
  {
    category: 'node',
    name: 'description',
    label: t('components.notification.variables.node.description'),
    icon: ['fa', 'comment'],
  },
  {
    category: 'node',
    name: 'status',
    label: t('components.notification.variables.node.status'),
    icon: ['fa', 'check-square'],
  },
  {
    category: 'node',
    name: 'created_ts',
    label: t('components.notification.variables.common.createdAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'node',
    name: 'created_by',
    label: t('components.notification.variables.common.createdBy'),
    icon: ['fa', 'user'],
  },
  {
    category: 'node',
    name: 'updated_ts',
    label: t('components.notification.variables.common.updatedAt'),
    icon: ['fa', 'clock'],
  },
  {
    category: 'node',
    name: 'updated_by',
    label: t('components.notification.variables.common.updatedBy'),
    icon: ['fa', 'user'],
  },
];

export const isValidVariable = ({
  category,
  name,
}: {
  category?: NotificationVariableCategory;
  name: string;
}) => {
  if (!category) {
    return allVariables.some(v => `${v.category}:${v.name}` === name);
  }

  return allVariables.some(v => v.category === category && v.name === name);
};
