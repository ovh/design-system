# @ovhcloud/ods-library-dev

This package is used in all generic libraries of `ODS`.
The concerned libraries are stored in the directory `packages/libraries` of the monorepo.
A generic library is a library not specifically designed to be used with `stencil` for instance.
It is generic as possible without dependencies with oriented component builder libraries.

For a specific dependent library like with `stencil`,
you can see `@ovhcloud/ods-stencil-library`.

This package enables using all the same dependencies for each generic library.
The benefits are a more maintainable dependency's management.

Currently, for each `ODS` generic library, we use:

- `Jest`: for testing
- `ts-jest`: for writing test in typescript
- `typedoc`: for auto generation of documentation

## Getting Started

Simply, declare a dependency to this package in your `ODS` generic library
through the `package.json` file:
```json
{
  "...": "...",
  "devDependencies": {
    "@ovhcloud/ods-library-dev": "^10.0.1"
  }
}
```
