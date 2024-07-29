const common: LCommon = {
  control: {
    enabled: '已启用',
    disabled: '已禁用',
  },
  actions: {
    view: '查看',
    edit: '编辑',
    clone: '复制',
    delete: '删除',
    run: '运行',
    add: '添加',
    bookmark: '添加书签',
    restart: '重新运行',
    cancel: '取消',
    confirm: '确认',
    copy: '复制',
    create: '创建',
    hide: '隐藏',
    start: '启动',
    stop: '停止',
    clear: '清除',
    apply: '应用',
    search: '搜索',
    install: '安装',
    uninstall: '卸载',
    viewLogs: '查看日志',
    viewData: '查看数据',
    viewFiles: '查看文件',
    uploadFiles: '上传文件',
    export: '导出',
    configure: '配置',
    update: '更新',
    save: '保存',
    change: '更改',
    manage: '管理',
    inferDataFieldsTypes: '推断数据字段类型',
    unlink: '取消链接',
    goto: '访问',
    selectAll: '全选',
    viewTemplate: '查看模板',
    viewChannels: '查看通知渠道',
    viewMonitoring: '查看监控',
  },
  messageBox: {
    confirm: {
      delete: '您是否确定删除?',
      restart: '您是否确定重新运行?',
      cancel: '您是否确定取消?',
      run: '您是否确定运行?',
      stop: '您是否确定停止?',
      install: '您是否确定安装?',
      start: '您是否确定启动?',
      deleteSelected: '您是否确定删除已选项?',
      proceed: '您是否确定继续?',
      create: '您是否确定创建?',
      continue: '您是否确定继续?',
    },
  },
  message: {
    success: {
      delete: '删除成功',
      restart: '重新运行成功',
      run: '运行成功',
      copy: '复制成功',
      start: '启动成功',
      save: '保存成功',
      upload: '上传成功',
      install: '安装成功',
      uninstall: '卸载成功',
      startInstall: '开始安装',
      startUninstall: '开始卸载',
      enabled: '已启用',
      disabled: '已禁用',
      action: '操作成功',
      update: '更新成功',
    },
    info: {
      cancel: '尝试取消',
      stop: '尝试停止',
    },
    error: {
      login: '登陆失败',
    },
  },
  notification: {
    loggedOut: '您已退出登陆，请重新登陆',
  },
  tabs: {
    overview: '概览',
    spiders: '爬虫',
    schedules: '定时任务',
    tasks: '任务',
    files: '文件',
    git: 'Git',
    data: '数据',
    settings: '设置',
    logs: '日志',
    dependencies: '依赖',
    triggers: '触发',
    template: '模板',
    remote: '远程',
    branches: '分支',
    tags: '标签',
    references: '引用',
    changes: '变更',
    ignore: '忽略',
    monitoring: '监控',
    channels: '通知渠道',
    mail: '邮件配置',
  },
  status: {
    unassigned: '未指定',
    unknown: '未知',
    invalid: '无效',
    currentlyUnavailable: '暂不可用',
    unauthorized: '未授权',
    loading: '加载中',
  },
  mode: {
    default: '默认',
    other: '其他',
    all: '全部',
  },
  placeholder: {
    empty: '空',
  },
  select: {
    input: {
      noDataText: '请输入一个值创建值',
    },
  },
  error: {
    common: '发生错误',
  },
};

export default common;
