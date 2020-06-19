# Build and Deploy

This project utilizes Amplify for the hosting environment, and we've decided to employ a modified GitFlow workflow for branch management. This allows us to drive our staging and production sites from branches.

How this works:

- `develop` is the default branch and represents the staging site. Commits (either from PR or directly to the branch) will trigger a deploy to the staging website.
  - One the site is somewhat "stable", ideally all new work will take place in `feature/...` and `fix/...` branches, which are PR'ed to the `develop` branch.
- `master` is our stable production branch and represents the production site. Commits must be initiated via PR's from `develop` -> `master`, and the strategy should be to `rebase and merge` for a cleaner view into the production history (and it will be easier to tell what's in `develop` vs `master`). This will trigger a deploy to the production website.

Our GitHub Actions automation will pick up commits to these branches and act accordingly to build and deploy the site.

In summary, `feature/fix` -> `develop` -> `master` eventually becomes the flow, and automation (via Actions) handles build/deploy behind the scenes.

> Final Note: PRs that are opened from a branch in this repo (not forks) will generate preview links on Amplify automatically.