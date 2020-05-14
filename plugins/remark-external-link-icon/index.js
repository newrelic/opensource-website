const visit = require('unist-util-visit');

const remarkExternalLinks = () => (tree, file) => {
  const isTarget = node => {
    return (
      node.type === 'link' && node.url.indexOf('opensource.newrelic.com') < 0
    );
  };

  visit(tree, isTarget, node => {
    const { url } = node;

    if (url) {
      // Protect
      node.data = {
        hProperties: {
          target: '__blank',
          rel: 'noopener noreferrer'
        }
      };
    }
  });
};

module.exports = remarkExternalLinks;
