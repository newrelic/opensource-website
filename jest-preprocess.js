const babelOptions = {
  presets: ['babel-preset-gatsby', '@emotion/babel-preset-css-prop'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
