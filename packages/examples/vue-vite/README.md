# ODS Vue Example application with Vite

This package is an example to show how to integrate `ODS` vue components.
This is a mini application made with Vue that displays some components.

It was made with : `yarn create vite my-vue--vite-ods-app --template vue-ts`

There are examples of uses of the different feature from `ODS`:

- using independent package with only one component
- using component collection package with all components
- logger feature
- connect to your translation system for sentences
- configuring ods

# Initialization

**1. download the project**

You can install this project by downloading the code from the [repository](https://github.com/ovh/design-system)

```shell
git clone -b release/10.0 --single-branch ssh://git@github.com:ovh/design-system.git ods-temp
cp -a ods-temp/packages/examples/vue-vite my-vue-vite-ods-app
rm -rf ods-temp/
cd my-vue-vite-ods-app
```

> This clones the repo, copy the project and then clean up.

**2. Enable access (coming soon)**

This starter application is using `ODS` as dependency.
So you have to check if you have access to the registry with your credentials.

**3. Install dependencies**

```shell
npm install
```

# How to use it

You can start the dev server with:
`npm run dev`

You can build the app with:
`npm run build`

And finally, if you want to test the built app:

- `npm i -g serve`
- `serve -s dist`

# Information

- [ODS integration in Vue application](?path=/story/code-stencil-components-how-to-install--page#for-vue-framework)
- [ODS Getting Started](?path=/story/ovhcloud-design-system-get-started--page)
- [Vue script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)

Recommended IDE Setup:

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type
by default. In most cases this is fine if you don't really care about component prop types outside of templates.
However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using
manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look
   for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default,
   Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
