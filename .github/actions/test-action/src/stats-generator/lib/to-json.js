const stringify = require('fast-safe-stringify');

// pattern copied from https://github.com/davidmarkclements/fast-safe-stringify#protip
// basically it's a perf optimization JSON.stringify is fast, but can't deal with circular references
// so when it fails we use fast-safe-stringify instead
function tryJSONStringify(obj) {
  try {
    // for production we want JSON to be single line, but for development
    // it should be nicely formatted
    return process.env.NODE_ENV === 'production'
      ? JSON.stringify(obj)
      : JSON.stringify(obj, '', ' ');
  } catch (_) {
    return undefined;
  }
}

const toJson = (obj) => tryJSONStringify(obj) || stringify(obj);

module.exports = toJson;
