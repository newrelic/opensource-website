// https://www.gatsbyjs.org/docs/actions/#createNode

const { v4: uuidv4 } = require('uuid');

const isMdx = type => type === 'Mdx';
const slugFromAbsoluteFilePath = (dir, fileAbsolutePath) =>
  fileAbsolutePath
    .slice(fileAbsolutePath.indexOf(dir) + dir.length, fileAbsolutePath.length)
    .replace('.mdx', '');

const createProjectMainContent = ({ node, actions }) => {
  const { createNode } = actions;
  const projectMainContentDir = 'src/data/project-main-content/';
  const isMainContent =
    node.fileAbsolutePath.indexOf(projectMainContentDir) >= 0;

  if (!isMainContent) {
    return;
  }

  const fileAbsolutePath = node.fileAbsolutePath;
  const slug = slugFromAbsoluteFilePath(
    projectMainContentDir,
    fileAbsolutePath
  );

  const fieldData = {
    slug
  };
  createNode({
    ...fieldData,

    // Required fields.
    id: uuidv4(),
    parent: node.id,
    children: [],
    internal: {
      type: `ProjectMainContent`,
      contentDigest: node.internal.contentDigest // We can safely reuse this hash since it's content-based
    }
  });
};

module.exports = params => {
  const { node } = params;

  // if (node.internal.type === `projectsJson`) {
  //   const basePath = `projects`;
  //   const slug = createFilePath({ node, getNode, basePath });
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug
  //   });
  // }

  // Transform readmes into an object type of ProjectMainContent which we'll stitch into GraphQL in `type-defs.gql`
  // This will enable us to get all data needed for a page with one dynamic query
  if (isMdx(node.internal.type)) {
    createProjectMainContent(params);
  }
};
