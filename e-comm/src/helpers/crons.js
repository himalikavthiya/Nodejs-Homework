const cron=require('node-cron');

/**It's running on every 5 seconds */
cron.schedule('*/5 * * * * *', () => {
    console.log('running every 5 second');
  });