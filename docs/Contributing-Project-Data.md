The process to contribute new data or update existing data to `opensource.newrelic.com` is the same.

1. `Fork` this repository.
2. Add/update the two project metadata files (described below) to your forked `opensource-website` repository.
3. Submit a `Pull Request` back to this project containing your new or updated files.
4. If/when your `PR` is accepted, the automation in this project will populate a related file in the `src/data/project-stats` directory, build the site, and deploy a new version of the code (including your project's new data) to `opensource.newrelic.com`.

To add your project to `opensource.newrelic.com`, you must include **the following two metadata files**. To accept and merge a PR, we check that these files are present, and if you're submitting an update, that at least one of these files has been changed.

## 1. Project metadata (JSON)

The JSON file contains the base information about the project detail pages, as well as the project search/exploration page.

**File format:** `src/data/projects/[GITHUB_ORG_NAME]-[GITHUB_REPO_NAME].json`

**Example:** [src/data/projects/newrelic-nr1-github.json](https://github.com/newrelic/opensource-website/blob/develop/src/data/projects/newrelic-nr1-github.json)

**Template:** [examples/projects.json](https://github.com/newrelic/opensource-website/blob/develop/examples/projects.json)

### Note about projectTags

The Project metadata file contains a `projectTags` field that _must_ match the available Project Tags located in [src/data/project-tags/project-tags.json](https://github.com/newrelic/opensource-website/blob/develop/src/data/project-tags/project-tags.json). Also, don't include your project `language` as a tag; filtering on languages isn't meant to be facilitated by the `projectTags` field. If your project should warrant a new `tag`, please include an update to [src/data/project-tags/project-tags.json](https://github.com/newrelic/opensource-website/blob/develop/src/data/project-tags/project-tags.json) in your Pull Request.

## 2. Project metadata (MDX)

This MDX file contains the markdown and optional React components that populate the left-hand column of a project detail page.

**File format:** `src/data/project-main-content/[GITHUB_ORG_NAME]-[GITHUB_REPO_NAME].mdx`

**Example:** [src/data/project-main-content/newrelic-nr1-github.mdx](https://github.com/newrelic/opensource-website/blob/develop/src/data/project-main-content/newrelic-nr1-github.mdx)

**Template:** [examples/project-main-content.mdx](https://github.com/newrelic/opensource-website/blob/develop/examples/project-main-content.mdx)
