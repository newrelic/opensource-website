// https://www.gatsbyjs.org/docs/actions/#createNode

// TO DO - allow input parameters from gatsby-config.js
const githubUrl = () => {
  const options = {
    host: 'https://github.com',
    org: 'newrelic',
    repo: 'opensource-website',
    defaultBranch: 'develop'
  };

  const { host, org, repo, defaultBranch } = options;
  const githubBaseUrl = [host, org, repo, 'tree', defaultBranch].join('/');
  return githubBaseUrl;
};

const editLinksMap = {
  '/projects/(.*)': `src/data/project-main-content/$match.mdx`,
  '^/$': `src/pages/index.js`
};

const getEditLinkFromPath = ({ path }) => {
  const result = Object.entries(editLinksMap).reduce(
    (previousValue, [expression, value]) => {
      if (previousValue.link) {
        return previousValue;
      }

      const match = path.match(expression);

      if (Array.isArray(match) && match[0]) {
        if (value.indexOf('$match') >= 0) {
          return { link: value, slug: match[1] };
        }
        return { link: value, slug: '' };
      }

      return previousValue;
    },
    { link: false, slug: '' }
  );

  if (result.link) {
    if (result.link.indexOf('$match') >= 0) {
      const link = result.link.replace('$match', result.slug.replace('/', '-'));
      return link;
    }
    const link = result.link;
    return link;
  }
};

module.exports = params => {
  const { node, actions } = params;
  const { createNodeField } = actions;
  const { path, componentPath } = node;
  const cwd = process.cwd();

  if (node.internal.type === 'SitePage') {
    if (!path || !componentPath) {
      // console.log(JSON.stringify(node, null, 2));
      return;
    }
    const githubBaseUrl = githubUrl();
    const mappedEditLink = getEditLinkFromPath({
      path
    });

    const sourceFilePath = componentPath.replace(`${cwd}/`, '');
    const editLink = !mappedEditLink ? sourceFilePath : mappedEditLink;

    const fullUrl = [githubBaseUrl, editLink].join('/');
    // console.log(fullUrl);

    createNodeField({
      node,
      name: `contentEditLink`,
      value: fullUrl
    });
  }
};
