# ODS Common Style

This project is only a placeholder to allow integrators fo ODS to easily do `@import '@ovhcloud/ods-components/style';`
in their scss files.

Do not add any code to this project.

## Why not using `exports` in the parent project

It would have been nice to have something like that in `ods-component` package:

```json
{
  "exports": {
    ".": {
      "default": "./dist/index.cjs.js"
    },
    "./style": {
      "default": "./src/styles/index.scss"
    }
  }
}
```

But it doesn't work because of how the project is architectured with the React and Vue Wrappers.

Those two are imported as `import ... from '@ovhcloud/ods-components/react';` which will check the project definition
of each `package.json`, not the one from the parent. The code generated is then able to find its dependencies to the
Stencil components (through some wrapper code we don't really want to dig into).

Adding the `exports` will override this syntax, `/react` is now expected to be defined in the parent `exports`.

Sadly, this doesn't work:

```json
{
  "exports": {
    ".": {
      "default": "./dist/index.cjs.js"
    },
    "./react": {
      "default": "./react"
    },
    "./style": {
      "default": "./src/styles/index.scss"
    }
  }
}
```

So, unless spending too much time tweaking the wrapper generated code, it's easier to make this style project placeholder.
