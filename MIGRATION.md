# Migration Guide
Migration guide can help you migrate from an older version of `ODS` to a new one.
All the migration guides are available inside the `docs/migration` directory in the monorepo.

Example of entry in the migration guide:
```

# [1.0.0](##V1.0.0_LINK##) to [2.0.0](##V2.0.0_LINK##)
[compare](##V1.0.0_TO_V2.0.0_COMPARE_LINK##)

### @ovhcloud/ods-core

* `ExampleCode` interface has changed his signature

**before**
``typescript
// ExampleCode.ts
export interface ExampleCode {a: string};

// Example of use
const exampleCode: ExampleCode = {a: 'a'}
``
**after**
``typescript
// ExampleCode.ts
export interface ExampleCode {ha: string};

// Example of use
const exampleCode: ExampleCode = {ha: 'a'}
``

```
