const path = require(`path`);
const _ = require('lodash');
const remarkExternalLinks = require('./plugins/remark-external-link-icon');

module.exports = {
  flags: {
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `New Relic Open Source`,
    description: `New Relic's open source website makes it easy for you to explore the projects we're maintaining as well as our involvement in open standards.`,
    author: `@newrelic`,
    repository: 'https://github.com/newrelic/opensource-website',
    siteUrl: 'https://opensource.newrelic.com',
    branch: 'develop',
  },
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        layout: {
          maxWidth: '1236px',
          contentPadding: '28px',
          mobileBreakpoint: '760px',
        },
        newrelic: {
          // Keyed by process.env.NODE_ENV
          configs: {
            /*
            ;NREUM.loader_config={accountID:"10175106",trustKey:"1",agentID:"21547964",licenseKey:"23448da482",applicationID:"21547964"}
            ;NREUM.info={beacon:"staging-bam.nr-data.net",errorBeacon:"staging-bam.nr-data.net",licenseKey:"23448da482",applicationID:"21547964",sa:1}
            */
            production: {
              instrumentationType: 'proAndSPA', // Options are 'lite', 'pro', 'proAndSPA'
              accountId: '10956800',
              trustKey: '1',
              agentID: '30713728',
              licenseKey: 'NRJS-649173eb1a7b28cd6ab',
              applicationID: '30713728',
              beacon: 'staging-bam-cell.nr-data.net',
              errorBeacon: 'staging-bam-cell.nr-data.net',
            },
            // Our "staging" site (on AWS Amplify) named after the branch it comes from "develop"

            /*
            ;NREUM.loader_config={accountID:"10175106",trustKey:"1",agentID:"21548202",licenseKey:"23448da482",applicationID:"21548202"}
            ;NREUM.info={beacon:"staging-bam.nr-data.net",errorBeacon:"staging-bam.nr-data.net",licenseKey:"23448da482",applicationID:"21548202",sa:1}
            */
            staging: {
              instrumentationType: 'proAndSPA', // Options are 'lite', 'pro', 'proAndSPA'
              accountId: '10956800',
              trustKey: '1',
              agentID: '30713728',
              licenseKey: 'NRJS-649173eb1a7b28cd6ab',
              applicationID: '30713728',
              beacon: 'staging-bam-cell.nr-data.net',
              errorBeacon: 'staging-bam-cell.nr-data.net',
            },

            // For local development, uncomment and replace information
            // development: {
            //   instrumentationType: 'proAndSPA', // Options are 'lite', 'pro', 'proAndSPA'
            //   accountId: '',
            //   trustKey: '',
            //   agentID: '',
            //   licenseKey: '',
            //   applicationID: ''
            // }
          },
        },
        tessen: {
          tessenVersion: '1.14.0',
          product: 'OSS',
          subproduct: 'TOSS',
          segmentWriteKey: 'FoEoyHDGF4dDczR4Vt12vuysG1Rl4n8z',
          trackPageViews: true,
          pageView: {
            eventName: 'pageView',
            category: 'OssPageView',
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
        ignore: [`**/.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        // Override the default behavior that adds `Json` to the end of data types
        // Found here - https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-json/src/gatsby-node.js#L8-L20
        typeName: ({ node, object, isArray }) => {
          // eslint-disable-next-line no-unused-vars
          const getType = function ({ node, object, isArray }) {
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
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `New Relic Open source`,
        short_name: `NR OSS`,
        start_url: `/`,
        background_color: `#007e8a`,
        theme_color: `#007e8a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [remarkExternalLinks],
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

              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
        // remarkPlugins: [require(`gatsby-remark-copy-linked-files`)],
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        allPageHeaders: ['Referrer-Policy: no-referrer-when-downgrade'],
      },
    },
  ],
};
