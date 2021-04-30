This project is made up of a few components:

- React code, components, and page templates built primarily in [MDX](https://mdxjs.com/)
- Static [data](https://github.com/newrelic/opensource-website/tree/main/src/data) for each open source project listed and promoted on the site, including:
  - `project metadata` in the data/projects directory
  - `project stats` in the data/project-stats directory
  - `markdown content` in the data/project-main-content directory
- Static pages that promote New Relic's engagement in open standards and highlight specific features and collections in New Relic's open source capabilities.
- Automation to handle:
  - updating dynamic data in the `project stats` and `project metadata` directories
  - building the static pages
  - deploying the site to a static hosting platform
