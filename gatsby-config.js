const path = require(`path`);
const _ = require('lodash');

module.exports = {
  siteMetadata: {
    title: `New Relic Open Source`,
    description: `New Relic <3's open source. We built this site to make it easy for you to explore hundreds of projects we're maintaining as well as our involvement in open standards.`,
    author: `@newrelic`
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
        name: `New Relic Open source`,
        short_name: `NR OSS`,
        start_url: `/`,
        background_color: `#007e8a`,
        theme_color: `#007e8a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#remark-plugins
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              // ignoreFileExtensions: []

              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ],
        // remarkPlugins: [require(`gatsby-remark-copy-linked-files`)],
        extensions: [`.mdx`, `.md`]
      }
    }
  ]
};
