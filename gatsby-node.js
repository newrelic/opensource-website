exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        http: false,
        https: false,
        zlib: false,
      },
    },
  });
};

exports.createSchemaCustomization = require('./gatsby/create-schema-customization');

exports.onCreateNode = require(`./gatsby/on-create-node`);

exports.createPages = require('./gatsby/create-pages');
