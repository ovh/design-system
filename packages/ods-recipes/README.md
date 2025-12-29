# ODS Recipes

## Create a new recipe

From the root of the `design-system` project, run the following:

```shell
yarn new:recipe
```
Then follow the prompt.

## Repository structure

When working on a recipe, you'll have your own small project to work with located under `ods-recipes/src/components/<your-component>`.

You should not update any files outside of this directory.

### Commands

In your component directory, you have access to the following commands:

- `yarn start`: start a development storybook that you can use to implement your recipe
- `yarn lint:css`: run the linter rules regarding CSS files (if any)
- `yarn lint:scss`: run the linter rules regarding SCSS files (if any)
- `yarn lint:ts`: run the linter rules regarding TS files

### Folders

#### Implementation directories

You'll mainly work under the `src` directory under which you'll find one or more implementation directory,
depending on the configuration you choose during the init script prompt
(by default you should at least see a `css-modules` directory).

Each contains an `index.tsx` file where you should write the integrality of your recipe code
(for now, we don't support splitting the codebase into multiple tsx files).

Please implement each of those directories before submitting any recipe.

The `css-modules` implementation is mandatory and should not be bypassed.

#### Dev stories

The file `dev.stories.tsx` contains all the test frames that will be rendered on the development storybook when running `yarn start`.

Use this file as you please to create as many use case that you need to validate your recipe.

Example of two stories:
```tsx
export const Default = () => (
  <MyComponent.CssModule />
);

export const Disabled = () => (
  <MyComponent.CssModule disabled />
);
```

#### index.ts

The file `index.ts` contains the metadata of the recipe (used by our documentation system), when adding a new recipe
you'll have to define the right `SEARCH_TAG` tags for the recipe (you can leave the rest untouched).

In case, you think a tag is missing for your use case, feel free to add it to the enum list in `ods-recipes/src/constants/search-tag.ts`
(if you have any doubt about how relevant the tag may be, feel free to contact us).

## Validation workflow

When all implementations for your recipe are done, please run locally the linter commands and fix any possible errors.

You can then submit a Pull Request under the ODS repository. We'll review it as soon as possible.
