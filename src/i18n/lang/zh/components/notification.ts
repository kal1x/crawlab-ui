const notification: LComponentsNotification = {
  dialog: {
    insertVariable: {
      title: '插入变量',
      form: {
        variableCategory: '变量类别',
        variable: '变量',
      },
      formRules: {
        variableEmpty: '请选择一个变量',
      },
    },
  },
  trigger: {
    label: '触发器',
    tooltip: '消息通知触发器设置',
    target: {
      label: '触发目标',
      change: {
        label: '切换触发目标',
        note: '注意：切换触发目标可能导致模板中的变量不可用',
      },
    },
    targets: {
      task: '任务',
      node: '节点',
    },
  },
  template: {
    mode: {
      change: {
        label: '切换编辑模式',
        note: '注意：切换编辑模式可能会导致样式或内容丢失',
      },
    },
    modes: {
      richText: '富文本',
      markdown: 'Markdown',
    },
  },
  variableCategories: {
    task: '任务',
    node: '节点',
    spider: '爬虫',
    schedule: '定时任务',
  },
  variables: {
    invalid: '无效变量',
    common: {
      id: 'ID',
      createdAt: '创建时间',
      createdBy: '创建者',
      updatedAt: '更新时间',
      updatedBy: '更新者',
    },
    task: {
      status: '状态',
      mode: '模式',
      cmd: '命令',
      param: '参数',
      priority: '优先级',
      error: '错误信息',
      pid: '进程 ID',
    },
    taskStat: {
      startTs: '开始时间',
      endTs: '结束时间',
      waitDuration: '等待时长 (秒)',
      runtimeDuration: '运行时长 (秒)',
      totalDuration: '总时长 (秒)',
      resultCount: '结果数',
    },
    node: {
      key: '唯一识别号',
      name: '名称',
      description: '描述',
      ip: 'IP 地址',
      mac: 'MAC 地址',
      hostname: '主机名',
      isMaster: '是否主节点',
      status: '状态',
      enabled: '是否启用',
      active: '是否活跃',
      activeAt: '活跃时间',
      availableRunners: '可用运行器数',
      maxRunners: '最大运行器数',
    },
    spider: {
      name: '名称',
      description: '描述',
      mode: '模式',
      cmd: '命令',
      param: '参数',
      priority: '优先级',
    },
    spiderStat: {
      results: '结果数',
      waitDuration: '等待时长 (秒)',
      runtimeDuration: '运行时长 (秒)',
      totalDuration: '总时长 (秒)',
      averageWaitDuration: '平均等待时长 (秒)',
      averageRuntimeDuration: '平均运行时长 (秒)',
      averageTotalDuration: '平均总时长 (秒)',
    },
    schedule: {
      name: '名称',
      description: '描述',
      cron: 'Cron 表达式',
      cmd: '执行命令',
      param: '参数',
      priority: '优先级',
      mode: '模式',
      enabled: '是否启用',
    },
  },
  channel: {
    label: '通知渠道',
    tooltip: '消息通知渠道设置',
  },
  setting: {
    templates: {
      task_finish: {
        label: '任务完成',
        name: '任务完成',
        description: '任务完成通知模板',
        title: '任务完成',
        template_markdown: `# 任务完成

- 爬虫名称: \${spider:name}
- 定时任务名称: \${schedule:name}
- 节点名称: \${node:name}
- 任务 ID: \${task:id}
- 任务状态: \${task:status}
- 任务错误: \${task:error}
- 任务模式: \${task:mode}
- 任务命令: \${task:cmd}
- 任务参数: \${task:param}
- 任务优先级: \${task:priority}
- 任务创建者: \${task:created_by}
- 任务创建时间: \${task:created_ts}
- 任务开始时间: \${task_stat:start_ts}
- 任务结束时间: \${task_stat:end_ts}
- 任务等待时长: \${task_stat:wait_duration}
- 任务运行时长: \${task_stat:runtime_duration}
- 任务总时长: \${task_stat:total_duration}
- 任务结果数: \${task_stat:result_count}`,
      },
      task_error: {
        label: '任务错误',
        name: '任务错误',
        description: '任务错误通知模板',
        title: '任务错误',
        template_markdown: `# 任务错误

- 爬虫名称: \${spider:name}
- 定时任务名称: \${schedule:name}
- 节点名称: \${node:name}
- 任务 ID: \${task:id}
- 任务状态: \${task:status}
- 任务错误: \${task:error}
- 任务模式: \${task:mode}
- 任务命令: \${task:cmd}
- 任务参数: \${task:param}
- 任务优先级: \${task:priority}
- 任务创建者: \${task:created_by}
- 任务创建时间: \${task:created_ts}
- 任务开始时间: \${task_stat:start_ts}
- 任务结束时间: \${task_stat:end_ts}
- 任务等待时长 (秒): \${task_stat:wait_duration}
- 任务运行时长 (秒): \${task_stat:runtime_duration}
- 任务总时长 (秒): \${task_stat:total_duration}
- 任务结果数: \${task_stat:result_count}`,
      },
    },
  },
};

export default notification;
