# Thanks for submitting a pull request to newrelic/opensource-website.

If possible, please help the maintainers by leveraging the following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) standards in your pull request title and commit messages.

## Use `chore`

- for changes / additions / corrections to content in the `src/data/project-main-content`, `src/data/projects` directories
- for changes / additions / corrections to images in the `static/images` directory
- for functional changes / additions to code in the `examples` directory

### Example

```bash
git add src/data/projects/newrelic-nr1-github.json
git add src/data/project-main-content/newrelic-nr1-github.mdx
git commit -m "chore(nr1-github): adjusting config and content"
git push
```

## Use `fix`

- for functional corrections to code in the `src/components`, `src/templates`, `src/fragments`, `src/pages` or directories
- for corrections in the `src/data/oss-category` or `src/data/project-tags` directories
- for functional corrections to code in the `examples` directory

### Example

```bash
git add src/pages/code-of-conduct.mdx
git commit -m "fix: typo and prop error in the code of conduct"
git push
```

## Use `feat`

- for functional changes / additions to code in the `src/components`, `src/templates`, `src/fragments`, `src/pages` or directories
- for changes / additions in the `src/data/oss-category` or `src/data/project-tags` directories

### Example

```bash
git add src/pages/video.js
git commit -m "feat(media): creating a video landing page"
git push
```
