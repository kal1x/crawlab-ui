const node: LComponentsNode = {
  form: {
    key: 'Unique Identity Key',
    name: 'Name',
    tags: 'Tags',
    type: 'Type',
    ip: 'IP',
    mac: 'MAC Address',
    hostname: 'Hostname',
    enabled: 'Enabled',
    max_runners: 'Max Runners',
    description: 'Description',
  },
  nodeType: {
    label: {
      master: 'Master',
      worker: 'Worker',
    },
  },
  nodeStatus: {
    label: {
      unregistered: 'Unregistered',
      registered: 'Registered',
      online: 'Online',
      offline: 'Offline',
      unknown: 'Unknown',
    },
    tooltip: {
      unregistered: 'Node is waiting to be registered',
      registered: 'Node is registered and wait to be online',
      online: 'Node is currently online',
      offline: 'Node is currently offline',
      unknown: 'Unknown node status',
    },
  },
  nodeRunners: {
    tooltip: {
      unavailable: 'No runners available at this moment',
      running: '{running} out of {max} runners are running',
      available: 'All runners available',
    },
  },
  metric: {
    select: {
      placeholder: 'Select Metric',
    },
    metrics: {
      cpu_usage_percent: 'CPU Usage (%)',
      total_memory: 'Total Memory',
      available_memory: 'Available Memory',
      used_memory: 'Used Memory',
      used_memory_percent: 'Used Memory (%)',
      total_disk: 'Total Disk',
      available_disk: 'Available Disk',
      used_disk: 'Used Disk',
      used_disk_percent: 'Used Disk (%)',
      disk_read_bytes_rate: 'Disk Read IO',
      disk_write_bytes_rate: 'Disk Write IO',
      network_bytes_sent_rate: 'Network Sent IO',
      network_bytes_recv_rate: 'Network Recv IO',
    },
    groups: {
      disk_io_bytes_rate: 'Disk IO',
      network_io_bytes_rate: 'Network IO',
    },
    timeUnits: {
      s: 'sec',
      m: 'min',
      h: 'hr',
      d: 'd',
      w: 'wk',
      M: 'mon',
      y: 'yr',
    },
    timeRanges: {
      '1h': 'Past 1 Hour',
      '24h': 'Past 24 Hours',
      '7d': 'Past 7 Days',
      '30d': 'Past 30 Days',
    },
    noData: {
      label: 'No Data',
      tooltip: 'No recent monitoring data available for this node',
    },
  },
};

export default node;
