# @ovhcloud/ods-stencil-component-dev

This package is used in all `stencil` components packages of `ODS`.
The concerned components are stored in the directory `packages/stencil/components` of the monorepo.
A `stencil` component package is a component designed thanks to `stencil`.
So it is fully specific to the ecosystem of `stencil`.

For a more generic `ODS` library without this kind of dependencies,
you can see `@ovhcloud/ods-library-dev`.

This package enables using all the same dependencies for each `stencil` component library.
The benefits are a more maintainable dependency's management.

Currently, for each `stencil` component library, we use:

- `Stencil`: the web component builder we are using
- `Jest`: for unit testing (in the same version as `stencil`)
- `Puppeteer`: for e2e testing (in the same version as `stencil`)
- `ts-jest`: for writing test in typescript
- `typedoc`: for auto generation of documentation
- `@ovhcloud/ods-theming`: for the utils and types about theming system
- `@ovhcloud/ods-testing`: generic utils for testing the components
- `@ovhcloud/ods-core`: generic behavior of components and core utils
- 

## Getting Started

Simply, declare a dependency to this package in your `ODS` component package
through the `package.json` file:
```json
{
  "...": "...",
  "devDependencies": {
    "@ovhcloud/ods-stencil-component-dev": "^10.0.1"
  }
}
```
