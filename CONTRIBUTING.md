# Contributing to ODS project

OVHcloud Design System is an evolving project, and we welcome contributions from the community.
By keeping our repository open source, we aim to make it easier for anyone to suggest improvements, fix issues, or share ideas.

Whether it’s a small fix or a new feature, every contribution helps improve the quality and usability of the system.
We appreciate the time and effort of anyone who chooses to take part.

Please note that while we welcome contributions, we encourage you to discuss major changes with our team to ensure alignment with the project's goals and overall quality.
Additionally, if you're interested in proposing a new feature, please reach us out first to avoid duplicating effort, as we may already be working on a similar development.

## Project installation

### Pre-requisites

- [Node.js](https://nodejs.org/) >= 22
- [Yarn](https://yarnpkg.com/) >= 2.4.0
- [Chrome browser](https://www.google.com/intl/fr_fr/chrome/) locally installed (if you need to run the [lighthouse](https://github.com/GoogleChrome/lighthouse#readme) tests)

### Building the project

1. Fork the ODS repository.
2. Clone your new repository.
3. At the root of the repository, run the following commands:

```shell
# Install the dependencies and link the monorepo.
yarn

# Build the different packages.
yarn build:prod
```

### Running the documentation locally

At the root of the repository, run the following commands:

```shell
# Generate all the needed documentation files.
yarn doc

# Start the storybook local server.
yarn storybook
```

## Project architecture

ODS is a monorepo project split into multiple sub-projects under the `/packages` directory:
- `examples` regroups example projects to test some specific behavior (a11y, SSR, bundlers, ...).
- `ods-react` contains the React implementation of the component library.
- `ods-recipes` contains ODS recipe implementations (see [how to contribute](https://github.com/ovh/design-system/blob/master/packages/ods-recipex/README.md)).
- `storybook` is the public documentation.
- `themes` regroups all the existing ODS themes and the design assets (fonts, design tokens, ...).

## Creating a new component

To create a new component, run the following command at the root of the repository and follow the prompt:

```shell
yarn new:component
```

This will generate all the component resources and the documentation files in the storybook package.

## Working on an existing component

Each component can be run as an autonomous project, so you don't have to build the whole package each time.

All the following implies that you're under the `/packages/ods-react/src/components/<component-name>` directory.

### Component directory overview

All files/directories not detailed underneath should **NOT** be updated and can be ignored.

```text
src/
  components/
    <component-name>/
      <componentName>.scss (only if the component need specific style)
      <ComponentName>.tsx
  contexts/ (if needed)
    use<...>.tsx
  controller/ (if needed)
    <...>.tsx
tests/
  behavior/ (if needed)
    <component-name>.e2e.ts
    <component>.stories.tsx
  controller/ (if needed)
    <...>.spec.ts
  rendering/
    <component-name>.e2e.ts
    <component>.stories.tsx
```

### Dev server

To test how the component renders and behaves, we run a dedicated minimal Storybook that executes all the stories
defined in the src/dev.stories.tsx file.

To start the server, run:
```shell
yarn start
```

You can add as many stories as needed to help you handle all the use cases of the component.

Please keep in mind that those stories are for dev purposes only; they do not replace actual unit or E2E tests.

### Linters

When you're done, ensure that your codebase follows the linter rules by running:

```shell
yarn lint:ts
yarn lint:scss
```

Fix the potential errors, warnings until all commands passes.

### Unit tests

Ensure all functions you add (usually grouped in the controller files) are covered by unit tests.

When you're done, ensure that your tests still pass by running:
```shell
yarn test:spec
```

### E2e tests

Ensure all rendering/behaviour changes added to the component are covered by e2e tests.

When you're done, ensure that your tests still pass by running:
```shell
yarn test:e2e
```

### Updating the style

ODS uses [Sass](https://sass-lang.com/) and follows the [BEM](https://getbem.com/) convention.

When adding/updating style, please ensure that:
- a component only refers to style defined in its matching scss file.
- the BEM convention is followed.

If you need to reuse generic style or style from other components (like focus, disabled state, ...),
you can include common mixins defined in the `style` directory.

## Updating documentation

When you're done with the component and all the above pre-requisites, you may have to
update the documentation accordingly, depending on the changes.

### Storybook directory overview

All files/directory not detailed underneath should **NOT** be updated and can be ignored.

```text
src/
  <contains custom React components used internally by our storybook>
stories/
  components/
    <component-name>/
      <component-name>.stories.tsx
      documentation.mdx
      technical-information.mdx
  ovhcloud-design-system/
    <contains more generic information about the whole library>
```

If some of your changes impacts how the component behave (in a functional way), please update its `documentation.mdx` file accordingly.

If some of your changes impacts the technical side of the component:
- check that the generated interfaces/definitions are correct (run `yarn doc` at the root to get the latest data).
- if relevant, add some stories in the `<component-name>.stories.tsx` file, then reference them in the `technical-information.mdx` file.

If you've updated the attributes list of a component, check that the `Demo` page controls are still relevant.

# Code submission

The contributions should be submitted through Github Pull Requests and follow the DCO defined below.

Before submitting your Pull Request:

- make sure all commit messages follows the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) rules
- make sure all commits are [signed](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
- ensure all the following commands succeed (run at the root of the project):

```shell
yarn lint
yarn test:spec:ci
yarn test:e2e:ci
```

# Licensing for new files

ODS is licensed under a Apache 2 license. Anything
contributed to ODS must be released under this license.

# Developer Certificate of Origin (DCO)

```
To improve tracking of contributions to this project we will use a
process modeled on the modified DCO 1.1 and use a "sign-off" procedure
on patches that are being emailed around or contributed in any other
way.

The sign-off is a simple line at the end of the explanation for the
patch, which certifies that you wrote it or otherwise have the right
to pass it on as an open-source patch.  The rules are pretty simple:
if you can certify the below:

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I have
the right to submit it under the open source license indicated in
the file; or

(b) The contribution is based upon previous work that, to the best of
my knowledge, is covered under an appropriate open source License
and I have the right under that license to submit that work with
modifications, whether created in whole or in part by me, under
the same open source license (unless I am permitted to submit
under a different license), as indicated in the file; or

(c) The contribution was provided directly to me by some other person
who certified (a), (b) or (c) and I have not modified it.

(d) The contribution is made free of any other party's intellectual
property claims or rights.

(e) I understand and agree that this project and the contribution are
public and that a record of the contribution (including all
personal information I submit with it, including my sign-off) is
maintained indefinitely and may be redistributed consistent with
this project or the open source license(s) involved.

then you just add a line saying

    Signed-off-by: Random J Developer <random@example.org>

using your real name (sorry, no pseudonyms or anonymous contributions.)
```
