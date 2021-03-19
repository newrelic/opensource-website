const visit = require('unist-util-visit');

const remarkExternalLinks = () => (tree) => {
  const isTarget = (node) => {
    return (
      node.type === 'link' &&
      node.url.indexOf('opensource.newrelic.com') < 0 &&
      !node.url.startsWith('/')
    );
  };

  visit(tree, isTarget, (node) => {
    const { url } = node;

    if (url) {
      // Protect
      node.data = {
        hProperties: {
          target: '__blank',
          rel: 'noopener noreferrer',
        },
      };
    }
  });
};

module.exports = remarkExternalLinks;
