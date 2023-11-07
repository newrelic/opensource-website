const babelOptions = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
