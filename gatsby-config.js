// import { camelCase, upperFirst } from 'lodash';
const path = require(`path`);
const _ = require('lodash');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        // Override the default behavior that adds `Json` to the end of data types
        // Found here - https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-json/src/gatsby-node.js#L8-L20
        typeName: ({ node, object, isArray }) => {
          // eslint-disable-next-line no-unused-vars
          const getType = function({ node, object, isArray }) {
            if (node.internal.type !== `File`) {
              return _.upperFirst(_.camelCase(`${node.internal.type}`));
            } else if (isArray) {
              return _.upperFirst(_.camelCase(`${node.name}`));
            } else {
              return _.upperFirst(_.camelCase(`${path.basename(node.dir)}`));
            }
          };
          const typeName = getType({ node, object, isArray });
          return typeName;
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    }
  ]
};
