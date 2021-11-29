const schedules: LViewsSchedules = {
  table: {
    columns: {
      name: '名称',
      spider: '爬虫',
      mode: '模式',
      cron: 'Cron 表达式',
      enabled: '是否启用',
      entryId: 'Entry ID',
      description: '描述',
    }
  },
  navActions: {
    new: {
      label: '新建定时任务',
      tooltip: '添加一个新定时任务',
    }
  }
};

export default schedules;
