const visit = require('unist-util-visit');

const remarkExternalLinks = () => (tree, file) => {
  const isTarget = node => {
    return (
      node.type === 'link' && node.url.indexOf('opensource.newrelic.com') < 0
    );
  };

  visit(tree, isTarget, node => {
    const { url } = node;

    if (!url) {
      console.log(JSON.stringify(node, null, 2));
    }

    if (url) {
      // Protect
      node.data = {
        hProperties: {
          target: '__blank',
          rel: 'noopener noreferrer'
        }
      };

      // Add icon
      node.children.push({
        type: 'html',
        value: `<span class="iconify" data-icon="feather-external-link" data-inline="false"></span>`
      });
    }
  });
};

module.exports = remarkExternalLinks;
