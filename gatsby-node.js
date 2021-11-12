/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * https://www.gatsbyjs.org/docs/node-apis/#createSchemaCustomization
 */
exports.createSchemaCustomization = require('./gatsby/create-schema-customization');
/**
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */
exports.onCreateNode = require(`./gatsby/on-create-node`);

/**
 * https://www.gatsbyjs.org/docs/node-apis/#createPages
 */
exports.createPages = require('./gatsby/create-pages');
