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

/!\ Please check also the icon tags list on the storybook icon story (`storybook/src/constants/iconTags.ts`).

## How to update the theme values?

The palette values are in `src/default/_variables.scss`, transcribed by hand from MDS / Figma. The
semantic roles, which point at the palette, are in `src/default/index.scss`.

`pnpm build:prod` regenerates `dist/default/tokens.json`, and `pnpm tokens:resolve` prints what
each token resolves to.
