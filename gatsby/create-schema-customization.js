const fs = require(`fs`);

module.exports = ({ actions }) => {
  const { createTypes } = actions;

  const additionalTypeDefs = fs.readFileSync(`type-defs.gql`, {
    encoding: `utf-8`
  });
  createTypes(additionalTypeDefs);
};
