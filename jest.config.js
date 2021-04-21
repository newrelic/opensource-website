module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>/.github`,
    `<rootDir>/src/pages/__tests__/fixtures/`,
    `<rootDir>/src/components/__tests__/fixtures`,
    `<rootDir>/src/templates/__tests__/fixtures`,
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby||gatsby-plugin-mdx||@newrelic/gatsby-theme-newrelic||@elastic/react-search-ui-views)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
