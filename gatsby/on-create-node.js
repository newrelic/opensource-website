// https://www.gatsbyjs.org/docs/actions/#createNode

const { v4: uuidv4 } = require('uuid');

const isMdx = (type) => type === 'Mdx';
const isProject = (type) => type === 'Projects';

const slugFromAbsoluteFilePath = (rootDir, fileAbsolutePath) => {
  // Directory
  if (fileAbsolutePath.indexOf('index.mdx') >= 0) {
    const start = fileAbsolutePath.indexOf(rootDir) + rootDir.length;
    const end = fileAbsolutePath.length - '/index.mdx'.length;
    const slug = fileAbsolutePath.slice(start, end);
    return slug;
  }

  // Single file
  const slug = fileAbsolutePath
    .slice(
      fileAbsolutePath.indexOf(rootDir) + rootDir.length,
      fileAbsolutePath.length
    )
    .replace('.mdx', '');
  return slug;
};

const createProjectMainContent = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
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
    slug,
  };

  createNodeField({
    node,
  });

  createNode({
    ...fieldData,

    // Required fields.
    id: uuidv4(),
    parent: node.id,
    children: [],
    internal: {
      type: `ProjectMainContent`,
      contentDigest: node.internal.contentDigest, // We can safely reuse this hash since it's content-based
    },
  });
};

module.exports = (params) => {
  const { node } = params;

  if (isProject(node.internal.type)) {
    if (!node.projectType) {
      node.projectType = 'newrelic';
    }
  }

  // Transform readmes into an object type of ProjectMainContent which we'll stitch into GraphQL in `type-defs.gql`
  // This will enable us to get all data needed for a page with one dynamic query
  if (isMdx(node.internal.type)) {
    createProjectMainContent(params);
  }
};
