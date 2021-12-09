interface LComponentsTask {
  form: {
    spider: string;
    node: string;
    status: string;
    command: string;
    param: string;
    mode: string;
    priority: string;
    selectedTags: string;
    selectedNodes: string;
    tooltip: {
      goToSpider: string;
      goToNode: string;
      taskErrorMessage: string;
      cancelTask: string;
    };
  };
  status: {
    label: {
      pending: string;
      running: string;
      finished: string;
      error: string;
      cancelled: string;
      abnormal: string;
      unknown: string;
    };
    tooltip: {
      pending: string;
      running: string;
      finished: string;
      error: string;
      cancelled: string;
      abnormal: string;
      unknown: string;
    };
  };
  priority: {
    high: string;
    higher: string;
    medium: string;
    lower: string;
    low: string;
  };
  mode: {
    randomNode: string;
    allNodes: string;
    selectedNodes: string;
    selectedTags: string;
  };
  results: {
    results: string;
    noResults: string;
  };
  logs: {
    actions: {
      autoUpdateLogs: string;
    };
  };
}