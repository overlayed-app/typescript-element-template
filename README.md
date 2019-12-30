# typescript-element-template

![Latest release](https://github.com/overlayed-app/typescript-element-template/workflows/Release%20CD/badge.svg)
![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/overlayed-app/typescript-element-template?include_prereleases)

Template repository for a typescript element. This is meant to be a base for the development of Overlayed elements. To use it, You'll need to complete the following steps in sequence:

- use the template on GitHub
- clone the repo created from the template
- change the `name` field in `package.json`
- update the component logic in `src/lib/component.tsx`
- update the test in `src/lib/__tests__/component.spec.ts`
- use [commitizen](https://github.com/commitizen/cz-cli) to `git cz` and commit your changes
- push these changes onto a branch, up to GitHub
- Create a PR from your branch, on GitHub
- GitHub will run `.github/workflows/pr_validation.yml` to validate your PR
- Merging the PR will trigger `.github/workflows/release.yml` to generate and tag a release
- The release tag will contain your `dist` folder contents
- Using [jsDelivr](https://www.jsdelivr.com/features#gh) you can now reference your element at `https://cdn.jsdelivr.net/gh/<YOUR_GH_USERNAME>/<YOUR_REPO_NAME>@<YOUR_LATEST_TAG_SEMVER_NUMBER>`
- Optionally, submit a PR to [the registry](https://github.com/overlayed-app/elements)

> Detailed walkthrough coming soon.

# License

MIT
