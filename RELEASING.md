# Deployment and versioning

**NB:** releases process is handled by ODS core team but you can still have a look here about our process.

## Overview

Publishing a release is mostly automated. As a releaser, you only:

1. Create a release branch
2. Add a "What's New" entry
3. Run the version command (which tags and pushes)
4. Merge the release branch back to `master`

Everything in between — building the packages, publishing them to npm, and deploying the documentation — is handled automatically by our CI as soon as the version tag is pushed. No manual action is needed while it runs.

## Making a release

Before starting, make sure you are on a release branch, your working tree is clean, your branch is up to date, and you have added a migration guide if the release contains breaking changes.

### 1. Create the release branch

For a major or minor version, create a new `release/X.Y` branch. For a patch, use the existing release branch that matches its scope.

### 2. Add a "What's New" entry

Edit `packages/storybook/stories/ovhcloud-design-system/whatsnew/whatsnew.mdx`, add a short description of the release, and commit it. Your working tree must be clean before the next step.

### 3. Bump the version

Run `pnpm ods:<VERSION_TYPE>` (see the table below to choose the type). This bumps every package, updates the changelogs, creates the version tag, and pushes it. You will be asked to confirm the new version — type `y`.

Once the tag is pushed, our CI takes over and the release is out shortly after.

### 4. Merge back to `master`

Open a pull request from your `release/*` branch to `master` and merge it, so the version bump, changelogs, and "What's New" entry land on `master`.

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

The release branch will be used for bugfixes later (patch).
Once the support for the version has ended, the branch will be un-referenced.

### Major: breaking changes

You added breaking changes:

Create a release branch from up-to-date `master` that corresponds to the version you are going to release like `release/X.Y`.
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
pnpm ods:major
```

The release branch will be used for bugfixes later (patch).
Once the support for the version has ended, the branch will be unreferenced.
