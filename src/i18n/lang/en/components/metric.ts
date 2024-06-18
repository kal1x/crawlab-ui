const metric: LComponentsMetric = {
  filters: {
    metricSource: 'Metric Source',
    timeUnit: 'Time Unit',
    timeRange: 'Time Range',
  },
  empty: {
    noMetricsSelected:
      'No metrics selected, please check one or more metrics on the left sidebar',
  },
  dashboard: {
    columns: {
      name: 'Name',
      type: 'Type',
      status: 'Status',
      metrics: {
        title: 'Metrics',
        node: {
          cpu: 'CPU',
          memory: 'Memory',
          disk: 'Disk',
          net: 'Net',
        },
        mongo: {},
      },
    },
  },
  type: {
    node: 'Node',
    mongo: 'MongoDB',
    seaweedfs: 'SeaweedFS',
  },
  progress: {
    detail: {
      name: 'Metric Name',
      value: 'Metric Value',
    },
  },
  snapshot: {
    node: {
      cpu: 'CPU Usage',
      mem: 'Memory Usage',
      disk: 'Disk Usage',
      net: 'Network Status',
    },
    mongo: {
      fs: 'MongoDB File System Usage',
      db: 'MongoDB Storage Percentage',
    },
  },
  status: {
    danger:
      'Dangerous status with high risk of system failure, should take immediate actions',
    warning:
      'Warning status with potentially high risk of system failure, should watch closely and pay attention',
    healthy: 'Healthy status, no actions needed at this moment',
    unknown: 'Unknown status',
  },
  metrics: {
    'performance:node:cpu:percent': 'CPU usage percentage',
    'performance:node:mem:total': 'Total memory in bytes',
    'performance:node:mem:available': 'Available memory in bytes',
    'performance:node:mem:used': 'Used memory in bytes',
    'performance:node:mem:used_percent': 'Used memory in percentage',
    'performance:node:disk:total': 'Total disk space in bytes',
    'performance:node:disk:free': 'Free disk space in bytes',
    'performance:node:disk:used': 'Used disk space in bytes',
    'performance:node:disk:used_percent': 'Used disk space in percentage',
    'performance:node:disk:io_read_bytes': 'Disk read IO in bytes',
    'performance:node:disk:io_read_count': 'Disk read IO count',
    'performance:node:disk:io_read_time': 'Disk read IO time',
    'performance:node:disk:io_write_bytes': 'Disk write IO in bytes',
    'performance:node:disk:io_write_count': 'Disk write IO count',
    'performance:node:disk:io_write_time': 'Disk write IO time',
    'performance:node:disk:io_read_bytes_rate':
      'Disk read IO bytes rate (per second)',
    'performance:node:disk:io_read_count_rate':
      'Disk read IO count rate (per second)',
    'performance:node:disk:io_read_time_rate':
      'Disk read IO time rate (per second)',
    'performance:node:disk:io_write_bytes_rate':
      'Disk write IO in bytes rate (per second)',
    'performance:node:disk:io_write_count_rate':
      'Disk write IO count rate (per second)',
    'performance:node:disk:io_write_time_rate':
      'Disk write IO time rate (per second)',
    'performance:node:net:io_bytes_sent':
      'Total number of bytes sent in network IO',
    'performance:node:net:io_bytes_recv':
      'Total number of bytes received in network IO',
    'performance:node:net:io_packets_sent':
      'Total number of packets sent in network IO',
    'performance:node:net:io_packets_recv':
      'Total number of packets sent in network IO',
    'performance:node:net:io_errin': 'Total number of errors while receiving',
    'performance:node:net:io_errout': 'Total number of errors while sending',
    'performance:node:net:io_dropin':
      'Total number of incoming packets which were dropped',
    'performance:node:net:io_dropout':
      'Total number of outgoing packets which were dropped (always 0 on OSX and BSD)',
    'performance:node:net:io_fifoin':
      'Total number of FIFO buffers errors while receiving',
    'performance:node:net:io_fifoout':
      'Total number of FIFO buffers errors while sending',
    'performance:node:net:io_bytes_sent_rate':
      'Number of bytes sent in network IO per second',
    'performance:node:net:io_bytes_recv_rate':
      'Number of bytes received in network IO per second',
    'performance:node:net:io_packets_sent_rate':
      'Number of packets sent in network IO per second',
    'performance:node:net:io_packets_recv_rate':
      'Number of packets sent in network IO per second',
    'performance:node:net:io_errin_rate':
      'Total number of errors while receiving per second',
    'performance:node:net:io_errout_rate':
      'Total number of errors while sending per second',
    'performance:node:net:io_dropin_rate':
      'Total number of incoming packets which were dropped per second',
    'performance:node:net:io_dropout_rate':
      'Total number of outgoing packets which were dropped (always 0 on OSX and BSD) per second',
    'performance:node:net:io_fifoin_rate':
      'Total number of FIFO buffers errors while receiving per second',
    'performance:node:net:io_fifoout_rate':
      'Total number of FIFO buffers errors while sending per second',
    'performance:mongo:size:fs_total_size':
      'Total size in bytes of the file system where MongoDB is running',
    'performance:mongo:size:fs_used_size':
      'Used size in bytes of the file system where MongoDB is running',
    'performance:mongo:size:total_size': 'Total size in bytes of MongoDB',
    'performance:mongo:size:total_free_storage_size':
      'Total free storage size in bytes of MongoDB',
    'performance:mongo:size:storage_size': 'Storage size of MongoDB in bytes',
    'performance:mongo:size:data_size': 'Data size of MongoDB in bytes',
    'performance:mongo:size:free_storage_size':
      'Free storage size of MongoDB in bytes',
    'performance:mongo:size:index_free_storage_size':
      'Index free storage size of MongoDB in bytes',
    'performance:mongo:size:index_size': 'Index size of MongoDB in bytes',
    'performance:mongo:size:avg_obj_size':
      'Average object size of MongoDB in bytes',
    'performance:mongo:size:fs_used_size_percent':
      'Used size in percentage of the file system where MongoDB is running',
    'performance:mongo:size:total_size_percent':
      'Total size of MongoDB in percentage',
    'performance:mongo:size:total_free_storage_size_percent':
      'Total free storage size of MongoDB in percentage',
    'performance:mongo:size:storage_size_percent':
      'Storage size of MongoDB in percentage',
    'performance:mongo:size:data_size_percent':
      'Data size of MongoDB in percentage',
    'performance:mongo:size:free_storage_size_percent':
      'Free storage size of MongoDB in percentage',
    'performance:mongo:size:index_free_storage_size_percent':
      'Index free storage size of MongoDB in percentage',
    'performance:mongo:size:index_size_percent':
      'Index size of MongoDB in percentage',
    'performance:mongo:count:collections': 'Number of collections in MongoDB',
    'performance:mongo:count:objects': 'Number of objects in MongoDB',
    'performance:mongo:count:views': 'Number of views in MongoDB',
    'performance:mongo:other:scale_factor': 'Scale factor of MongoDB',
  },
};

export default metric;
