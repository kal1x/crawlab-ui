export declare global {
  type NotificationTriggerTarget = 'task' | 'node';

  type NotificationTrigger =
    | 'task_finish'
    | 'task_error'
    | 'task_empty_results'
    | 'task_never'
    | 'node_status_change'
    | 'node_online'
    | 'node_offline'
    | 'node_never';

  interface NotificationSetting extends BaseModel {
    name?: string;
    description?: string;
    enabled?: boolean;
    title?: string;
    template?: string; // legacy template content
    template_mode?: NotificationTemplateMode;
    template_markdown?: string;
    template_rich_text?: string;
    template_rich_text_json?: string;
    template_theme?: string;
    task_trigger?: string;
    trigger_target?: NotificationTriggerTarget;
    trigger?: NotificationTrigger;
    has_mail?: boolean;
    sender_email?: string;
    sender_name?: string;
    mail_to?: string;
    mail_cc?: string;
    mail_bcc?: string;
    channel_ids?: string[];
    channels?: NotificationChannel[];
  }

  type NotificationTemplateMode = 'rich-text' | 'markdown';

  type NotificationVariableCategory =
    | 'task'
    | 'node'
    | 'spider'
    | 'git'
    | 'project'
    | 'schedule'
    | 'user';

  interface NotificationVariable {
    category: NotificationVariableCategory;
    name: string;
    label?: string;
    icon?: Icon;
  }

  type NotificationChannelType = 'mail' | 'im';

  interface NotificationChannel extends BaseModel {
    type?: NotificationChannelType;
    name?: string;
    description?: string;
    provider?: string;
    smtp_server?: string;
    smtp_port?: string;
    smtp_username?: string;
    smtp_password?: string;
    webhook?: string;
  }

  interface NotificationChannelProvider {
    type: NotificationChannelType;
    name: string;
    icon: Icon;
  }
}
