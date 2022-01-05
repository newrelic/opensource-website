# Component Documentation

## Global Components

Refer to the [New Relic Gatsby Theme](https://github.com/newrelic/gatsby-theme-newrelic/blob/develop/packages/gatsby-theme-newrelic/README.md)
component documentation for details on all the components used on this site.

## Open Source Site Components

### Github Sponsors

The [Github sponsor component](./src/components/githubSponsors.js) loads the sponsored projects section on the [OSS site home page]https://opensource.newrelic.com/).

When working locally you may see an error when running `yarn start`

```shell

 ERROR #11321  PLUGIN

"gatsby-source-github-api" threw an error while running the sourceNodes lifecycle:

token is undefined
```

- You can either ignore this message, or if you want to generate the projects in this component add a personal github API token that has read access for testing purposes.
- Just set a local environment variable called: `GITHUB_API_TOKEN` with your API token.
- See the [Gatsby documentation](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/) on how this is done.