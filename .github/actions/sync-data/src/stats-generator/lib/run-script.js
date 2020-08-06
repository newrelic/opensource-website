const P = require('bluebird');

// override NODE_ENV so logger can decide what to do with colors
process.env.NODE_ENV = 'script';

const log = require('./log');

const runScript = async (scriptFunc) => {
  try {
    await scriptFunc();
    log.green('Script exited.');
    // this gives scripts a little time to finish async operations that are still pending
    // sometimes it's handy
    await P.delay(50);
    process.exit(0);
  } catch (error) {
    log.warn('💥 	Script execution failed!');
    log.error(error);
    process.exit(1);
  }
};

module.exports = runScript;
