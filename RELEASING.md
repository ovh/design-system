# Deployment and versioning

**NB:** releases process is handled by ODS core team but you can still have a look here about our process.

## Overview

Publishing a release is mostly automated. As a releaser, you only:

1. Create a release branch
2. Add a "What's New" entry
3. Run the version command (which tags and pushes)
4. Merge the release branch back to `master`

Everything in between (building the packages, publishing them, and deploying the documentation) is handled by our CI as soon as the version tag is pushed, see [What the CI does](#what-the-ci-does).

## Making a release

Before starting, make sure you are on a release branch, your working tree is clean, your branch is up to date, your tags are fetched (`git fetch --tags`), and you have added a migration guide if the release contains breaking changes.

### 1. Create the release branch

Create a branch named after the version you are about to release, from up-to-date `master`: `release/20.1.0`, `release/20.0.0-alpha.1`. The previous release must already be merged back into `master` (step 4), so that `lerna.json` holds its version. A fix for an older line is the exception, see [Maintenance](#maintenance-fix-an-older-line).

The changelog lists the commits since the previous release tag. Release commits come back to `master` through a rebase merge, which leaves that tag behind, so the version command grafts it onto your branch locally (`git replace`: never pushed, files unchanged) and prints how to remove the graft afterwards. Your branch stays free of the tag's commits and still rebase-merges into `master`.

Commits made directly on a release branch come back to `master` as new commits, and the next changelog lists them again: land fixes on `master` first.

### 2. Add a "What's New" entry

Edit `packages/docs/src/content/guides/whats-new.mdx` (the current major version; previous majors have their own `whats-new-vX.mdx` page), add a short description of the release, and commit it. Your working tree must be clean before the next step.

### 3. Bump the version

Run `pnpm ods:<VERSION_TYPE>` (see the table below to choose the type). This bumps every package, updates the changelogs, creates the version tag, and pushes it. You will be asked to confirm the new version: type `y`.

Before committing, the command rebuilds every package and regenerates the LLM documentation (`packages/docs/assets/llms`), which embeds the version number. This takes several minutes. The CI rebuilds the same files and stops if they differ from the committed ones.

The release commit must be GPG-signed with a key our CI knows (`commit.gpgsign true`): the CI silently ignores a tag on an unsigned commit.

Once the tag is pushed, our CI takes over and the release is out shortly after.

### 4. Merge back to `master`

Open a pull request from your release branch to `master` and rebase-merge it, so the version bump, changelogs, and "What's New" entry land on `master` before the next release branch is cut. Do not merge back a fix for an older line: port the fix to `master` on its own.

## What the CI does

Our internal CI runs the release workflow, defined outside this repository, on every `v*` tag:

1. It builds the packages, the API documentation and the documentation site, and fails if `packages/docs/assets/llms` differs from the committed files.
2. It publishes every public package listed by `pnpm exec lerna list` (`@ovhcloud/ods-react`, `@ovhcloud/ods-recipes`, `@ovhcloud/ods-themes`, `@ovhcloud/ods-docs` and `@ovhcloud/ods-mcp`) to the internal registry. Only the newest final version gets `latest`: a prerelease gets `alpha` (`alpha-<major>` for an older major), an older final version `latest-<major>` (`latest-<major>.<minor>` within the newest major).
3. It opens the npm sync pull request, which a maintainer must approve. The packages reach npmjs.com once that pull request is merged. The sync refuses a final version older than the newest one it already published, since npmjs.com could make it `latest`, and skips a version it already lists, so running it again is safe.
4. It rebuilds the GitHub Pages site from the published documentation packages (`@ovhcloud/ods-storybook` up to 19.7.3, `@ovhcloud/ods-docs` after) and pushes it to the `gh-pages` branch. `latest` only moves forward: a prerelease or a fix for an older line leaves it on the newest final version.

If the documentation deploy fails, run that job of the release again, or run the manual documentation deploy on the tag: a run on `master` is untagged and never moves `latest`. Two tags pushed close together can make the second deploy fail to push `gh-pages`: run it again. Running the deploy of an older release again puts its root `llms.txt` back: deploy the newest version afterwards.

## After the release

Merging the npm sync pull request cannot be undone: npmjs.com never gives a version number back. Before approving it, check that:

- `https://ovh.github.io/design-system/vX.Y.Z/` serves the new documentation, and its version selector lists the previous versions.
- `https://ovh.github.io/design-system/latest/` serves the newest final version: the new one, unless it is a prerelease or a maintenance release of an older line.

Once it is merged, `npm view @ovhcloud/ods-react dist-tags` shows the new version.

## Versioning commands: what level of tag to use?

| Command          | Usage                                | version before | version after |
|------------------|--------------------------------------|----------------|---------------|
| `pnpm ods:patch` | Fix a bug                            | `1.0.0`        | `1.0.1`       |
| `pnpm ods:minor` | Add features without breaking change | `1.0.0`        | `1.1.0`       |
| `pnpm ods:major` | Add breaking change                  | `1.0.0`        | `2.0.0`       |

You can find all explanations for these commands below:

### Patch: fix a bug

You fixed a bug **(without any other breaking changes)**.
Create a release branch from up-to-date `master` like `release/X.Y.Z`, then release from it:

```bash
pnpm ods:patch
```

### Minor: add extra features

You added one or several features **without any breaking changes**.
Create a release branch from up-to-date `master` that corresponds to the version you are going to release like `release/X.Y.Z`.

Then, you have to generate a minor version from your branch.

```bash
pnpm ods:minor
```

### Major: breaking changes

You added breaking changes:

Create a release branch from up-to-date `master` that corresponds to the version you are going to release like `release/X.Y.Z`.

Then add a migration guide for the version you are going to release:

1. Write the guide in `packages/docs/src/content/guides/migration-X-to-Y.mdx` (plain MDX, no imports or Meta needed — guide files are picked up automatically).
2. Register the page in the navigation model, `packages/docs/src/nav/model.ts` (Upgrade section, like the existing `guides/migration-*` entries).
3. Add an entry for it in `packages/docs/src/content/guides/guides.json` so it lands in the generated LLM documentation (the build fails with a "guide inventory drift" error until the entry exists).

Also move the release notes of the previous major version out of the current "What's New" page:

1. Move all the `vX.*` entries of `packages/docs/src/content/guides/whats-new.mdx` to a new `whats-new-vX.mdx` page, and update the intro line of both pages.
2. Register that page in `packages/docs/src/nav/model.ts` (under *What's new in previous versions*), in `packages/docs/src/content/guides/guides.json`, and in `packages/docs/tests/sweep.mjs`.

Links to the old `whats-new#vX-…` anchors are redirected to the new page automatically.

Then, you have to generate a major version from your branch.

```bash
pnpm ods:major
```

### Maintenance: fix an older line

Cut the branch from the last tag of that line instead of `master`, for instance `release/19.7.4` from `v19.7.3`, commit the fix there, then run `pnpm ods:patch`. That branch keeps the scripts of its line. The CI publishes the packages under `latest-<major>` on the internal registry and leaves the `latest` documentation on the newest version.

The npm sync refuses it, since npmjs.com could make it `latest`. Once you have agreed with the maintainers of the npm sync on how it will be tagged, publish it with the manual npm sync and its override, then check that `npm view @ovhcloud/ods-react dist-tags` still shows the newest version as `latest`.

Do not merge this branch back into `master`.

### Prerelease: try a version before it is final

Each from its own release branch cut from `master`, publish prereleases first, then the final version:

```bash
pnpm ods:premajor    # 1.0.0 -> 2.0.0-alpha.0
pnpm ods:prerelease  # 2.0.0-alpha.0 -> 2.0.0-alpha.1
pnpm ods:graduate    # 2.0.0-alpha.1 -> 2.0.0
```

A prerelease is public: it reaches npmjs.com like any release, under the `alpha` dist-tag, so `latest` and semver ranges keep resolving to the last final version. A package published for the first time has no final version yet: the registry gives it `latest` too. The `latest` documentation stays where it is.

`pnpm ods:graduate` only lists the commits since the last prerelease in the changelog: the earlier ones stay under the prerelease entries.

Keep the default `alpha` identifier: the documentation version selector only hides `-alpha.N` versions, and the npmjs sync has never published another one.
