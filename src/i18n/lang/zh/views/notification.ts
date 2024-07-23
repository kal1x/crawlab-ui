const notification: LViewsNotification = {
  settings: {
    navActions: {
      new: {
        label: '新建通知配置',
        tooltip: '创建一个新的通知配置',
      },
      filter: {
        search: {
          placeholder: '搜索通知配置',
        },
      },
    },
    form: {
      name: '名称',
      description: '描述',
      enabled: '是否启用',
      title: '标题',
      template: '模板',
      templateContent: '模板内容',
      triggerTarget: '触发目标',
      trigger: '触发器',
      hasMail: '是否有邮件',
      senderEmail: '发件人邮箱',
      senderName: '发件人姓名',
      mailTo: '发送至',
      mailCc: '抄送',
      mailBcc: '密送',
    },
    triggerTargets: {
      task: '任务',
      node: '节点',
    },
    triggers: {
      task: {
        finish: '任务完成时触发',
        error: '任务失败时触发',
        emptyResults: '任务结果为空时触发',
      },
      node: {
        statusChange: '节点状态变化时触发',
        online: '节点上线时触发',
        offline: '节点下线时触发',
      },
    },
    warnings: {
      missingMailConfigFields: {
        content:
          '您选择了至少一个邮件通知渠道。为了发送邮件消息通知，您必须在邮件配置中设置必填字段。',
        action: '前往邮件配置',
      },
      emptyChannel: {
        content: '请选择至少一个通知渠道。',
      },
      noWarning: {
        content: '通知配置有效。',
      },
    },
  },
  channels: {
    navActions: {
      new: {
        label: '新建通知渠道',
        tooltip: '创建一个新的通知渠道',
      },
      filter: {
        search: {
          placeholder: '搜索通知渠道',
        },
      },
    },
    form: {
      type: '类型',
      name: '名称',
      description: '描述',
      provider: '服务商',
      smtpServer: 'SMTP 服务器',
      smtpPort: 'SMTP 端口',
      smtpUsername: 'SMTP 用户名',
      smtpPassword: 'SMTP 密码',
      webhookUrl: 'Webhook URL',
    },
    types: {
      mail: '邮件 (Email)',
      im: '即时通讯 (IM)',
    },
    providers: {
      gmail: '谷歌邮箱 (Gmail)',
      outlook: '微软邮箱 (Outlook)',
      qq: 'QQ 邮箱',
      '163': '163 邮箱',
      icloud: 'iCloud 邮箱',
      yahoo: '雅虎 (Yahoo)',
      aol: '美国在线 (AOL)',
      zoho: '卓豪 (Zoho)',
      exmail: '腾讯企业邮箱 (Tencent Exmail)',
      wechat_work: '企业微信 (Wechat Work)',
      dingtalk: '钉钉 (DingTalk)',
      lark: '飞书 (Lark)',
      slack: 'Slack',
      ms_teams: '微软团队 (Teams)',
      telegram: '电报 (Telegram)',
      discord: 'Discord',
      custom: '自定义',
    },
    providerDocs: {
      title: '服务商配置文档',
      label: '文档链接',
    },
  },
};

export default notification;
