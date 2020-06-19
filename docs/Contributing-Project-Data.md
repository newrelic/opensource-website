# Contributing project data

The process to contribute new data or update existing data to `opensource.newrelic.com` is the same.

1. `Fork` this repository.
2. Add/update the two project metadata files (described below) to your forked `opensource-website` repository.
3. Submit a `Pull Request` back to this project containing your new or updated files.
4. If/when your `PR` is accepted, the automation in this project will populate a related file in the `src/data/project-stats` directory, build the site, and deploy a new version of the code (including your project's new data) to `opensource.newrelic.com`.

To add your project to `opensource.newrelic.com`, you must include **the following two metadata files**. To accept and merge a PR, we check that these files are present, and if you're submitting an update, that at least one of these files has been changed.

## 1. Project metadata (JSON)

The JSON file contains the base information about the project detail pages, as well as the project search/exploration page.

**File format:** `src/data/projects/[GITHUB_ORG_NAME]-[GITHUB_REPO_NAME].json`

**Example:** `src/data/projects/newrelic-nr1-github.json`

**Template:** `examples/projects.json`

## 2. Project metadata (MDX)

This MDX file contains the markdown and optional React components that populate the left-hand column of a project detail page.

**File format:** `src/data/project-main-content/[GITHUB_ORG_NAME]-[GITHUB_REPO_NAME].mdx`

**Example:** `src/data/project-main-content/newrelic-nr1-github.mdx`

**Template:** `examples/project-main-content.mdx`