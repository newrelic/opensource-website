/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require(`fs`)

/**
 * Custom Type Definitions
 */
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  const additionalTypeDefs = fs.readFileSync(`type-defs.gql`, {
    encoding: `utf-8`,
  })
  createTypes(additionalTypeDefs)
}