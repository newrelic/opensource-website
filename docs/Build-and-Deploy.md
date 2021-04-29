# Overview

This site is deployed utilizing Github Actions for continuous integration (CI) combined with AWS Amplify's branch-based continuous deployment (CD).

* [GitHub Actions (CI)](https://github.com/newrelic/opensource-website/wiki/Build-and-Deploy#github-actions-ci)
  * [Project Stats Generation](https://github.com/newrelic/opensource-website/wiki/Build-and-Deploy#project-stats-generation)
* [Staging/Production Deployment (CD)](https://github.com/newrelic/opensource-website/wiki/Build-and-Deploy#stagingproduction-deployment-cd)
  * [Production Deployment](https://github.com/newrelic/opensource-website/wiki/Build-and-Deploy#production-deployment)
  * [Staging Deployment](https://github.com/newrelic/opensource-website/wiki/Build-and-Deploy#staging-deployment)

## Github Actions (CI)

* Generation of project-stats data
  * Triggered every 4 hours
* Docs/Wiki Sync
  * Triggered on pushes to `develop` branch when the `docs` directory changes
  * Triggered when wiki is edited (though this is discouraged - all changes _should_ happen in the docs directory via pull request)
* Pull Request build/test/lint checking
  * Triggered on pull requests being opened
* Release management
  * Triggered on pushes to `develop` following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

### Project-Stats Generation

Every 4 hours, the project-stats workflow kicks off. After running this Action, it will commit and push to both the `develop` and `main` branch. Then, this will trigger builds on Amplify.

## Staging/Production Deployment (CD)

Amplify is connected to the `main` and `deploy` branches, and has webhooks set on the repo that listen for pushes to those branches. On push, an atomic deploy is triggered. If the build/deploy fails, the site will continue to run with the existing version.

> Note: Any commit with `[skip-cd]` will bypass the build process in Amplify.

### Production Deployment

**Production** deployments are exclusively handled through merging a Pull Request into the `main` branch. If an ad-hoc deployment is required, please reach out to a project maintainer.

**Opening a Pull Request**: the direction should be `develop` -> `main`. Once all checks have passed, merge via `Merge Pull Request` option (using `Create a merge commit` as the strategy). This will merge the commits in from develop (effectively "catching" `main` up with `develop`), plus issue the merge commit on top.

**Merging**: use a [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) message indicating this is a release:

```sh
chore(release): updating production to vX.X.X
```

The intent is: semantic-release issued a new tag/release on the `develop` branch, so we are now promoting that to production. If for whatever reason there wasn't a release, include what the update is and provide the release at the end of the message:

```sh
chore(release): content updates but no new site features [vX.X.X]
```

> Note: Since semantic-release is only running on the `develop` branch, there won't be a new tag/release cut from the main branch. We might revisit this idea in the future if the tooling evolves.

### Staging Deployment

**Staging** deployments will happen frequently, and should be used to QA changes prior to opening a Pull Request to `main`.

These deployments happen automagically every time a commit is made to `develop`. This is handled via Amplify's Git-based continuous deployment.

If it seems like builds/deploys should be occurring but aren't, please contact a project maintainer.

> Final Note: PRs that are opened from a branch in this repo (not forks) will generate preview links on Amplify automatically.
