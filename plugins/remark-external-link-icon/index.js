const visit = require('unist-util-visit');
const feather = require('feather-icons');

// https://github.com/feathericons/feather#feathericonsnametosvgattrs
const externalLinkSvg = feather.icons['external-link'].toSvg({
  color: '#007e8a',
  width: 14,
  height: 14
});

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

      // Add icon
      node.children.push({
        type: 'html',
        value: externalLinkSvg
      });
    }
  });
};

module.exports = remarkExternalLinks;
