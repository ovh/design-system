# ODS React Starter application with Vite

This package is a starter to show how to integrate `ODS` react components.
This is a mini application made with React 18 that displays some components.

It was made with : `yarn create vite my-react-vite-ods-app --template react-ts`

There is examples of uses of the different feature from `ODS`: 

- using independent package with only one component
- using component collection package with all components
- logger feature
- connect to your translation system for sentences
- configuring ods

# Initialization

**1. download the starter**

You can install this starter by downloading the code from the [repository](https://github.com/ovh/design-system)

```shell
git clone -b release/10.0 --single-branch ssh://git@github.com:ovh/design-system.git ods-temp
cp -a ods-temp/packages/starters/react-vite my-react-vite-ods-app
rm -rf ods-temp/
cd my-react-vite-ods-app
```
> This clones the repo, copy the wanted starter and then clean up.

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

- [ODS integration in React application](?path=/story/code-stencil-components-how-to-install--page#for-react-framework)
- [ODS Getting Started](?path=/story/ovhcloud-design-system-get-started--page)
