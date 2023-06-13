const R = require('ramda');
const chalk = require('chalk');
const util = require('util');
const toJson = require('./to-json');

let prefix;
const coloredOutput = false;

const createMsg = (type = '') => (color, ...args) => {
  const stringifiedArgs = args.map((arg) => {
    if (arg instanceof Error) {
      const remainingProps = R.omit(['message', 'stack'], arg);
      return R.isEmpty(remainingProps)
        ? `${arg.message}\n${arg.stack}`
        : `${arg.message}\n${arg.stack}\nAdditional error props: ${toJson(
            remainingProps
          )}`;
    }
    const logStr = typeof arg === 'object' ? toJson(arg) : arg;
    return logStr;
  });

  const typePrefix = type ? `[${type}]` : '';

  if (prefix) {
    const formattedPrefix = `[${prefix}]`;

    return chalk[color](`${formattedPrefix}${typePrefix}`, ...stringifiedArgs);
  }

  return chalk[color](typePrefix, ...stringifiedArgs);
};

/* eslint-disable no-console */
const log = {
  log: (...args) => console.log(createMsg('log')('white', ...args)),
  error: (...args) => console.error(createMsg('error')('red', ...args)),
  trace: (...args) => console.trace(createMsg('trace')('red', ...args)),
  info: (...args) => console.info(createMsg('info')('gray', ...args)),
  warn: (...args) => console.warn(createMsg('warn')('yellow', ...args)),
  warnTrace: (...args) => console.trace(createMsg('warn')('yellow', ...args)),
  warning: (...args) => console.warn(createMsg('warn')('yellow', ...args)),
  debug: (...args) => console.log(createMsg('debug')('blue', ...args)),
  time: (...args) => console.time(createMsg('info')('cyan', ...args)),
  timeEnd: (...args) => console.timeEnd(createMsg('info')('cyan', ...args)),
  // colors
  cyan: (...args) => console.log(createMsg()('cyan', ...args)),
  magenta: (...args) => console.log(createMsg()('magenta', ...args)),
  blue: (...args) => console.log(createMsg()('blue', ...args)),
  gray: (...args) => console.log(createMsg()('gray', ...args)),
  white: (...args) => console.log(createMsg()('white', ...args)),
  green: (...args) => console.log(createMsg()('green', ...args)),
  yellow: (...args) => console.log(createMsg()('yellow', ...args)),
  red: (...args) => console.log(createMsg()('red', ...args)),

  json: (x, { colors = coloredOutput, depth = 4 } = {}) =>
    process.env.NODE_ENV === 'production'
      ? console.log(toJson(x))
      : console.log(util.inspect(x, { colors, depth })),
};
/* eslint-enable no-console */

module.exports = log;
