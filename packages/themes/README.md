# ODS Themes

## How to update ods-icon font?

The ods-icon font is managed through icomoon.

1. Update the font files and the selection:

- go to the icomoon app: https://icomoon.io/app/#/projects
- click on `Import Project` and select the `selection.json` file located in `assets/fonts/ods-icon/icomoon`
- add/remove/update the icons you want
- click on `Generate Font` on the bottom, double-check that all icons and names are correct, then click on `Download`
- unzip the downloaded file and copy all files from its `fonts` subdirectory plus the `selection.json` into `assets/fonts/ods-icon/icomoon`

2. Transform into base64:

As we can't provide the font from an external source for now, we have to embed it in the css.
We'll use only the `.woff` file.

From the `packages/themes` directory, run the following command to generate the `_icomoon.scss` file:
```bash
echo "\$base64: url(data:application/octet-stream;base64,$(base64 -b 0 -i ./assets/fonts/ods-icon/icomoon/icomoon.woff));" > ./assets/fonts/ods-icon/icomoon/_icomoon.scss
```

3. Build the project

Run `npm run build:prod` at the root of the project.

The new font is now available for other projects to use.

4. Update `ods-icon`

Depending on your changes, you may need to go update the `ods-icon` component constants with the updated values.

You'll find the value of each icon content in the `style.css` file in the icomoon extracted directory previously downloaded.

/!\ Some components are using icon content directly, you need to double-check if your changes did not break anything for those.
(you can found them using a search on `@include icon.ods-icon();` in the `ods-react/src/components` directory)

/!\ Please check also the icon tags list on the storybook icon story (`storybook/stories/components/icon/icon.stories.ts`).

## How to update theme-generated variables?

In each theme, there is a list of variables that come from FIGMA. This list is generated and should not be updated manually.

If some changes have been done on the FIGMA side, you can sync those back using the `design-tokens` workflow on the CI tool.

At the end of the workflow you can download the generated archive and replace the `_variables.scss` file content
with the newly generated list.

/!\ The list may not be correctly sorted, so you may need to manually reorder it.
