const R = require('ramda');

// converts arbitrary string to HEX color value
// hashes string first, allows to map strings to colors
// useful in certain UI aspects when color should be the same
// given some string, but we don't know strings upfront to define it
const stringToColor = (str) => {
  if (!str) {
    return '#000000';
  }

  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  return colour;
};

const removeNewLines = (x) => (x ? R.replace(/(\r\n|\n|\r)/gm, '', x) : x);
const removeTabsAndSpaces = (x) => (x ? R.replace(/[ \t]+/g, ' ', x) : x);
const removeEscapedCharacters = (x) =>
  x ? R.replace(/( |\\t|\\n)/g, ' ', x) : x;

const rnd = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
};

module.exports = {
  removeEscapedCharacters,
  removeNewLines,
  removeTabsAndSpaces,
  stringToColor,
  rnd,
};
