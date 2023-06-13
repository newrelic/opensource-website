const R = require('ramda');

const pathGetter = R.compose(R.path, R.split('.'));

const pathGetterOrDefault = (path, d, obj) =>
  R.pipe(R.split('.'), R.pathOr(d))(path)(obj);

const get = R.curry((path, obj) => pathGetter(path)(obj));
const getOrDefault = R.curryN(3, pathGetterOrDefault);

const strReplaceAll = R.curry((search, replacement, str) =>
  R.replace(new RegExp(search, 'g'), replacement, str)
);

const isNilOrEmpty = R.either(R.isNil, R.isEmpty);

/**
 * Like R.indexBy, but acceps extra transformer function to transform the
 * value for the given key.
 */
const indexByWith = R.curry((keygenFunc, fn, items) =>
  R.reduce(
    (acc, item) => {
      acc[keygenFunc(item)] = fn(item);
      return acc;
    },
    {},
    items
  )
);

const findMaxBy = R.curry((path, arr) =>
  R.pipe(R.reduce((acc, x) => (path(acc) > path(x) ? acc : x), {}))(arr)
);

/* Updates item in a list found using given predicate. */
const updateBy = R.curry((func, value, target) =>
  R.update(R.findIndex(func, target), value, target)
);

/* Generic memoize funciton that works for any number of arguments */
const memoize = R.memoizeWith((...args) => R.toString(args));

// like R.any, but return false for empty lists
const includesAny = R.curry((predicate, list) =>
  !isNilOrEmpty(list) ? R.any(predicate, list) : false
);

module.exports = {
  get,
  getOrDefault,
  strReplaceAll,
  isNilOrEmpty,
  indexByWith,
  memoize,
  findMaxBy,
  updateBy,
  includesAny,
};
