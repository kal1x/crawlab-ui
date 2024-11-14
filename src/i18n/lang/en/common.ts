const common: LCommon = {
  control: {
    enabled: 'Enabled',
    disabled: 'Disabled',
  },
  actions: {
    view: 'View',
    edit: 'Edit',
    clone: 'Clone',
    delete: 'Delete',
    run: 'Run',
    add: 'Add',
    bookmark: 'Bookmark',
    restart: 'Restart',
    cancel: 'Cancel',
    forceCancel: 'Force Cancel',
    confirm: 'Confirm',
    copy: 'Copy',
    create: 'Create',
    hide: 'Hide',
    start: 'Start',
    stop: 'Stop',
    clear: 'Clear',
    apply: 'Apply',
    search: 'Search',
    install: 'Install',
    uninstall: 'Uninstall',
    viewLogs: 'View Logs',
    viewSpiders: 'View Spiders',
    viewData: 'View Data',
    viewFiles: 'View Files',
    uploadFiles: 'Upload Files',
    viewTasks: 'View Tasks',
    viewSchedules: 'View Schedules',
    viewChanges: 'View Changes',
    viewCommits: 'View Commits',
    viewDatabases: 'View Databases',
    viewConsole: 'View Console',
    viewPages: 'View Pages',
    viewUsers: 'View Users',
    export: 'Export',
    configure: 'Configure',
    update: 'Update',
    upgrade: 'Upgrade',
    save: 'Save',
    change: 'Change',
    manage: 'Manage',
    inferDataFieldsTypes: 'Infer Data Fields Types',
    unlink: 'Unlink',
    goto: 'Go To',
    selectAll: 'Select All',
    viewMail: 'View Mail Settings',
    viewTemplate: 'View Template',
    viewChannels: 'View Channels',
    viewMonitoring: 'View Monitoring',
    previewData: 'Preview Data',
    insertBefore: 'Insert Before',
    insertAfter: 'Insert After',
    rename: 'Rename',
    drop: 'Drop',
    checkAll: 'Check All',
    uncheckAll: 'Uncheck All',
    sendTestMessage: 'Send Test Message',
  },
  messageBox: {
    confirm: {
      delete: 'Are you sure to delete?',
      restart: 'Are you sure to restart?',
      cancel: 'Are you sure to cancel?',
      forceCancel: 'Are you sure to force cancel?',
      run: 'Are you sure to run?',
      stop: 'Are you sure to stop?',
      install: 'Are you sure to install?',
      start: 'Are you sure to start?',
      deleteSelected: 'Are you sure to delete selected items?',
      proceed: 'Are you sure to proceed?',
      create: 'Are you sure to create?',
      continue: 'Are you sure to continue?',
    },
  },
  message: {
    success: {
      delete: 'Deleted successfully',
      restart: 'Restarted successfully',
      copy: 'Copied successfully',
      start: 'Started successfully',
      run: 'Run successfully',
      save: 'Saved successfully',
      upload: 'Uploaded successfully',
      install: 'Installed successfully',
      uninstall: 'Uninstalled successfully',
      startInstall: 'Started installation successfully',
      startUninstall: 'Started uninstallation successfully',
      enabled: 'Enabled successfully',
      disabled: 'Disabled successfully',
      action: 'Action successfully',
      update: 'Updated successfully',
    },
    info: {
      cancel: 'Attempt to cancel',
      forceCancel: 'Attempt to force cancel',
      stop: 'Attempt to stop',
    },
    error: {
      login: 'Login failed',
      action: 'Action failed',
    },
  },
  notification: {
    loggedOut: 'You have been logged-out, please login again.',
  },
  tabs: {
    overview: 'Overview',
    spiders: 'Spiders',
    schedules: 'Schedules',
    tasks: 'Tasks',
    files: 'Files',
    git: 'Git',
    data: 'Data',
    settings: 'Settings',
    logs: 'Logs',
    dependencies: 'Dependencies',
    triggers: 'Triggers',
    template: 'Template',
    remote: 'Remote',
    branches: 'Branches',
    tags: 'Tags',
    references: 'References',
    changes: 'Changes',
    commits: 'Commits',
    ignore: 'Ignore',
    monitoring: 'Monitoring',
    channels: 'Channels',
    mail: 'Mail Config',
    databases: 'Databases',
    console: 'Console',
    columns: 'Columns',
    indexes: 'Indexes',
    results: 'Results',
    output: 'Output',
  },
  status: {
    unassigned: 'Unassigned',
    unknown: 'Unknown',
    invalid: 'Invalid',
    currentlyUnavailable: 'Currently unavailable',
    unauthorized: 'Unauthorized',
    loading: 'Loading',
    upgradePro: 'Please upgrade to Crawlab Pro',
    alreadyUpToDate: 'Already up-to-date',
  },
  mode: {
    default: 'Default',
    other: 'Other',
    all: 'All',
  },
  placeholder: {
    empty: 'Empty',
  },
  select: {
    input: {
      noDataText: 'Please create an item by entering a value',
    },
  },
  error: {
    common: 'An error occurred',
  },
  order: {
    asc: 'Ascending',
    desc: 'Descending',
  },
  validate: {
    cannotBeEmpty: 'Cannot be empty',
  },
  boolean: {
    true: 'True',
    false: 'False',
  },
  builtin: {
    admin: 'Admin',
    rootAdmin: 'Root Admin',
  },
};

export default common;
