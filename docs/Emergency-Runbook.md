# opensource.newrelic.com runbook

This site is hosted on [AWS Amplify](https://aws.amazon.com/amplify/) by New Relic's OpenSource team and is maintained and supported by New Relic's developer experience team. If you have any questions or comments, please reach out to opensource@newrelic.com.

## Alerts

[Alerts](https://staging-one.newrelic.com/launcher/nrai.launcher?launcher=eyJhY2NvdW50SWQiOjEwMTc1MTA2fQ==&pane=eyJuZXJkbGV0SWQiOiJhbGVydGluZy11aS1jbGFzc2ljLnBvbGljaWVzIiwibmF2IjoiUG9saWNpZXMiLCJwb2xpY3lJZCI6IjUzNjE3In0=&sidebars[0]=eyJuZXJkbGV0SWQiOiJucmFpLm5hdmlnYXRpb24tYmFyIiwibmF2IjoiUG9saWNpZXMifQ==)

To diagnose a particular alert, we've started a [Common Issues](#Common-Issues)

## CI/CD

This site is deployed utilizing Github Actions for continuous integration (CI) combined with AWS Amplify's branch-based continuous deployment (CD).

### Staging/Production Deployment

Amplify is connected to the `master` and `deploy` branches, and has webhooks set on the repo that listen for pushes to those branches. On push, an atomic deploy is triggered. If the build/deploy fails, the site will continue to run with the existing version.

> Note: Any commit with `[skip-cd]` will bypass the build process in Amplify.

**Production** deployments are exclusively handled through merging a PR into the `master` branch. If an ad-hoc deployment is required, please reach out to a project maintainer.

**Staging** deployments will happen frequently, and should be used to QA changes prior to opening a Pull Request to `master`.

If it seems like builds/deploys should be occurring but aren't, please contact a project maintainer.

### GitHub Actions

* Generation of project-stats data
  * Triggered every 4 hours
* Docs/Wiki Sync
  * Triggered on pushes to `develop` branch when the `docs` directory changes
* Pull Request build/test/lint checking
  * Triggered on pull requests being opened
* Release management
  * Triggered on pushes to `develop` following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

### Project-Stats Generation

Every 4 hours, the project-stats workflow kicks off. After running this Actions, it will commit and push to both the `develop` and `master` branch. Then, this will trigger builds on Amplify.

### Rollback a release

Use the Amplify Console UI to select a previous build and redeploy that build.

First, determine the desired previous build:

1. Navigate to the [Releases](https://github.com/newrelic/opensource-website/releases) tab in the opensource-website repo.
2. Determine which release to rollback to. Typically, this should be `latest_release - 1`. However, you might need to go back further. Click the commit hash (in this case, `12f5187`).
  ![Releases](https://github.com/newrelic/opensource-website/blob/develop/docs/images/screenshot_01.png)
3. Use this commit message/hash value to locate the corresponding build in the Amplify Console.
  ![Commits](https://github.com/newrelic/opensource-website/blob/develop/docs/images/screenshot_02.png)

Steps to redeploy in Amplify:

1. Log into the Amplify Console via nr-prod okta.
2. Select the `opensource-website` app. Under `Frontend environments`, select `master`.
  ![Amplify Console](https://github.com/newrelic/opensource-website/blob/develop/docs/images/screenshot_03.png)
3. Click the `View build history` button to see all the previous builds that have run.
4. Find the appropriate build corresponding to the release you located from the repo releases. This is the build to roll back to. Click `Build #xxx` to select that build. In this case, you'd select `Build #10`.
  ![Builds](https://github.com/newrelic/opensource-website/blob/develop/docs/images/screenshot_04.png)
5. Click `Redeploy this version`. Validate once the deploy is finished.

## Environments

This project supports three environments, local development, staging (a.ka. development), and production.

Note: When building the site, Gatsby coerces anything you've set in `NODE_ENV` to `production`

### Production

Corresponds to the [`master`](https://github.com/newrelic/opensource-website/master/develop) branch

New Relic Domains: [https://opensource.newrelic.com](https://opensource.newrelic.com)

[New Relic Browser monitoring](https://staging-one.newrelic.com/launcher/nr1-core.explorer?launcher=eyJVTlNUQUJMRV9maWx0ZXJzIjpbeyJ0eXBlIjoic2VhcmNoUXVlcnkiLCJ2YWx1ZSI6Im9wZW5zb3VyY2UifV0sInRhZ3MiOnt9LCJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJicm93c2VyLWVudGl0eS1wcmV2aWV3LmJyb3dzZXItYXBwbGljYXRpb24tcHJldmlldyIsImlzT3ZlcnZpZXciOnRydWUsImVudGl0eUlkIjoiTVRBeE56VXhNRFo4UWxKUFYxTkZVbnhCVUZCTVNVTkJWRWxQVG53eU1UVTBOemsyTkEifQ==&sidebars[0]=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5hY3Rpb25zIiwiZW50aXR5SWQiOiJNVEF4TnpVeE1EWjhRbEpQVjFORlVueEJVRkJNU1VOQlZFbFBUbnd5TVRVME56azJOQSIsInNlbGVjdGVkTmVyZGxldCI6eyJuZXJkbGV0SWQiOiJicm93c2VyLWVudGl0eS1wcmV2aWV3LmJyb3dzZXItYXBwbGljYXRpb24tcHJldmlldyIsImlzT3ZlcnZpZXciOnRydWV9fQ==)

### Staging (Development)

Corresponds to the [`develop`](https://github.com/newrelic/opensource-website/tree/develop) branch

Amplify Domain: [https://develop.d2pwh5nf8rvczf.amplifyapp.com/](https://develop.d2pwh5nf8rvczf.amplifyapp.com/)
New Relic Domains:

- [https://beta-opensource.newrelic-external.com](https://beta-opensource.newrelic-external.com)
- [https://staging-opensource.newrelic.com](https://staging-opensource.newrelic.com)

[New Relic Browser monitoring](https://staging-one.newrelic.com/launcher/nr1-core.explorer?launcher=eyJVTlNUQUJMRV9maWx0ZXJzIjpbeyJ0eXBlIjoic2VhcmNoUXVlcnkiLCJ2YWx1ZSI6Im9wZW5zb3VyY2UifV0sInRhZ3MiOnt9LCJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJicm93c2VyLWVudGl0eS1wcmV2aWV3LmJyb3dzZXItYXBwbGljYXRpb24tcHJldmlldyIsImlzT3ZlcnZpZXciOnRydWUsImVudGl0eUlkIjoiTVRBeE56VXhNRFo4UWxKUFYxTkZVbnhCVUZCTVNVTkJWRWxQVG53eU1UVTBPREl3TWciLCJhZ2dyZWdhdG9yIjoiQXZlcmFnZSJ9&sidebars[0]=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5hY3Rpb25zIiwiZW50aXR5SWQiOiJNVEF4TnpVeE1EWjhRbEpQVjFORlVueEJVRkJNU1VOQlZFbFBUbnd5TVRVME9ESXdNZyIsInNlbGVjdGVkTmVyZGxldCI6eyJuZXJkbGV0SWQiOiJicm93c2VyLWVudGl0eS1wcmV2aWV3LmJyb3dzZXItYXBwbGljYXRpb24tcHJldmlldyIsImlzT3ZlcnZpZXciOnRydWV9fQ==)

### Local Development

To run, execute `npm start` from the root of this repository.

Should you want New Relic Browser instrumentation while developing locally, you will need to add an additional configuration option to `gatsby-config.js` for the `gatsby-plugin-newrelic` plugin.

## Architecture

The site is a combination of [template-generated pages](https://github.com/newrelic/opensource-website/tree/develop/src/templates) and [single pages](https://github.com/newrelic/opensource-website/tree/develop/src/pages) built using React, markup, and [MDX](https://mdxjs.com/). 

Beyond the CI/CD automation, GitHub Actions are used to keep the [stats data](https://github.com/newrelic/opensource-website/tree/develop/src/data/project-stats) related to each [project](https://github.com/newrelic/opensource-website/tree/develop/src/data/projects) updated on a [scheduled basis](https://github.com/newrelic/opensource-website/blob/develop/.github/workflows/ci.yml#L4). Some of the architecture consequences of that change are described [here](https://github.com/newrelic/opensource-website#design-choice-project-stats-automation-commits-will-appear-out-of-sync). 

## Common Issues

No issues yet!

## How to get help

