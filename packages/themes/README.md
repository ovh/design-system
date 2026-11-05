# ODS Themes

## How to update ods-icon font?

The ods-icon font is managed through icomoon.

1. Update the font files and the selection:

- go to the icomoon app: https://icomoon.io/app/#/projects
- click on `Import Project` and select the `selection.json` file located in `assets/fonts/ods-icon/icomoon`
- add/remove/update the icons you want
- click on `Generate Font` on the bottom, double-check that all icons and names are correct, then click on `Download`
- unzip the downloaded file and copy all files from its `fonts` subdirectory plus the `selection.json` into `assets/fonts/ods-icon/icomoon`

2. Build the project

Run `npm run build:prod` at the root of the project. It also rewrites the base64 copy of the font
read by `fonts-base64`, `assets/fonts/ods-icon/icomoon/_icomoon.scss`: commit it with the font
files, `lint:css` fails when it is out of date.

The new font is now available for other projects to use.

3. Update `ods-icon`

Depending on your changes, you may need to go update the `ods-icon` component constants with the updated values.

You'll find the value of each icon content in the `style.css` file in the icomoon extracted directory previously downloaded.

/!\ Some components are using icon content directly, you need to double-check if your changes did not break anything for those.
(you can found them using a search on `@include icon.ods-icon();` in the `ods-react/src/components` directory)

/!\ Please check also the icon tags list on the storybook icon story (`storybook/src/constants/iconTags.ts`).

## How to update the theme values?

Each theme has its own folder, `src/aluminium` and `src/blue-jeans`, independent of the other. In
each, the palette values are in `_variables.scss`, and the semantic roles, which point at the
palette, are in `light.scss`. `dark.scss` uses `light.scss` and only re-declares what the dark mode
changes: a value shared by both modes, such as a radius, is set in `light.scss` only.

`pnpm build:prod` compiles each mode to a single stylesheet (`dist/<theme>/<mode>.css`, the two
modes merged into one `:root` by `scripts/bake-themes.js`) and regenerates its
`<mode>.tokens.json`. `pnpm tokens:resolve` prints what each token resolves to.
