# Deployment and versioning

**NB:** releases process is handled by ODS core team but you can still have a look here about our process.

<!-- TOC -->

* [Deployment and versioning](#deployment-and-versioning)
* [Deployment](#deployment)
* [Releases](#releases)
* [Versioning commands: what level of tag to use?](#versioning-commands--what-level-of-tag-to-use)
* [Patch: fix a bug](#patch--fix-a-bug)
* [Minor: add extra features](#minor--add-extra-features)
* [Major: breaking changes](#major--breaking-changes)
* [PRE-patch: prepare a future patch release](#pre-patch--prepare-a-future-patch-release)
* [PRE-minor: prepare a future release without breaking changes](#pre-minor--prepare-a-future-release-without-breaking-changes)
* [PRE-major: prepare a future release with breaking changes](#pre-major--prepare-a-future-release-with-breaking-changes)
* [PRE-release: prepare a new pre-release](#pre-release--prepare-a-new-pre-release)
* [Graduate a release](#graduate-a-release)

<!-- TOC -->

## Deployment

release/next acts as our main branch, then for major and minor versioning a new release/* branch is created.

For patch versioning, it can be added in the specific release/* or release/next, depending on its scope.

## Releases

In order to make a new release of the `ODS` packages, you must:

- be sure that you are on a release branch like `release/next` or `release/X.Y`
- no local changes to commit
- your local branch is up-to-date
- add a migration guide when there are breaking changes

Then, to make a release, you have to execute the npm script `yarn ods:<VERSION_TYPE>`
where `<VERSION_TYPE>` can be `patch`, `minor`, `major`, `premajor` `prerelase` or `graduate`.

### Versioning commands: what level of tag to use?

Here's a summed up table of which command to launch to create the appropriate tag:

| Command               | Target       | Usage                                | version before   | version after   |
|-----------------------|--------------|--------------------------------------|------------------|-----------------|
| `yarn ods:prepatch`   | `testing`    | Prepare patch release                | `1.0.0`          | `1.0.1-alpha.0` |
| `yarn ods:preminor`   | `testing`    | Prepare minor release                | `1.0.0`          | `1.1.0-alpha.0` |
| `yarn ods:premajor`   | `testing`    | Prepare major release                | `1.0.0`          | `2.0.0-alpha.0` |
| `yarn ods:prerelease` | `testing`    | Prepare a new pre-release            | `1.2.3-alpha.2`  | `1.2.3-alpha.3` |
| `yarn ods:patch`      | `production` | Fix a bug                            | `1.0.0`          | `1.0.1`         |
| `yarn ods:minor`      | `production` | Add features without breaking change | `1.0.0`          | `1.1.0`         |
| `yarn ods:major`      | `production` | Add breaking change                  | `1.0.0`          | `2.0.0`         |
| `yarn ods:graduate`   | `production` | From `-alpha` versions to plain tag  | `3.1.2-alpha.21` | `3.1.2`         |

You can find all explanations for these commands below:

### Patch: fix a bug

You fixed a bug **(without any other breaking changes)** for a released version in the branch `release/X.Y`.
You have to release it from the same branch:

```bash
yarn ods:patch
```

### Minor: add extra features

You added one or several features **without any breaking changes** in the branch `release/next`.
Create a release branch from up-to-date `release/next` that corresponds to the version you are going to release like `release/X.Y`.

Then, you have to generate a minor version from your branch.

```bash
yarn ods:minor
```

The release branch will be used for bugfixes later (patch).
It will be used for bug fixes later (patch).
Once the support for the version has ended, the branch will be un-referenced.

### Major: breaking changes

You added breaking changes in the `release/next` branch:

Create a release branch from up-to-date `release/next` that corresponds to the version you are going to release like `release/X.Y`.
In `docs/migration`, rename the migration guide previously created according to the version like `MIGRATION-x.y-to-next.mdx` to `MIGRATION-x.y-to-z.y.mdx`.
Create a new empty migration guide for future release: `MIGRATION-x.y-to-next.mdx`.

Then, in `packages/tools/storybook/stories/code/migration`, create a stories for the version you are going to release.
And add the following imports and Meta title:
```typescript
import { Meta, Description } from '@storybook/addon-docs';
import MigrationXxToYx from '../../../../../../packages/doc/src/migration/MIGRATION-X.x-to-Y.x.mdx';

<Meta title="Code/Migration guide/X.x to Y.x" />

<MigrationXxToYx />
```

Then, you have to generate a major version from your branch.

```bash
yarn ods:major
```

The release branch will be used for bugfixes later (patch).
Once the support for the version has ended, the branch will be unreferenced.

### PRE-patch: prepare a future patch release

You fixed a bug in the `release/next` branch, and you want to release it as a candidate for testing purpose only **(not
production)**.

You can generate a PRE-patch version from `release/next` branch:

```bash
yarn ods:prepatch
```

Once this version is finalized, you will have to graduate the release: see graduate release below.

### PRE-minor: prepare a future release without breaking changes

You added features in the `release/next` branch, and you want to release it as a candidate for testing purpose only **(
not production)**.

You can generate a PRE-minor version from `release/next` branch:

```bash
yarn ods:preminor
```

Once this version is finalized, you will have to graduate the release: see Graduate a release below.

### PRE-major: prepare a future release with breaking changes

You added features in the `release/next` branch, and you want to release it as a candidate for testing purpose only **(
not production)**.

You can generate a PRE-major version from `release/next` branch:

```bash
yarn ods:premajor
```

Then create a release branch from the commit tag that correspond to the version like `release/X.Y-alpha`.
It will be used later in case of modification (fix, features, breaking changes).
Once this version is finalized, you will have to graduate the release: see Graduate a release below.

### PRE-release: prepare a new pre-release

You already are in a prerelease version with `alpha.x` (meaning you previously made a `pre-major`, `pre-minor`
or `pre-patch`).

You want to prerelease a new one and increment the `alpha` number. You want to continue prerelease for testing purpose
only **(not production)**.

You have to generate a new PRE-release version from `release/X.Y-alpha` branch:

```bash
yarn ods:prerelease
```

Once this version is finalized, you will have to graduate the release: see Graduate a release below.

### Graduate a release

You already released a `pre-major/minor/patch` or a `pre-release`.

All tests are valid, you want to release the final version like from `1.2.0-alpha-X` to `1.2.0`.

You have to graduate the version from `release/X.Y-alpha` branch:

```bash
yarn ods:graduate
```

Then, create a release branch from the commit tag that correspond to the version like `release/X.Y`.
It will be used for bug fixes later (patch).
Once the support for the version has ended, the branch will be un-referenced.
