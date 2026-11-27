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

Each theme has its own folder, `src/aluminium`, `src/blue-jeans` and `src/white-label`, independent
of the others. In each, the palette values are in `_variables.scss`, and the semantic roles, which
point at the palette, are in `light.scss`. `dark.scss` uses `light.scss` and only re-declares what the dark mode
changes: a value shared by both modes, such as a radius, is set in `light.scss` only.

`pnpm build:prod` compiles each mode to a single stylesheet (`dist/<theme>/<mode>.css`, the two
modes merged into one `:root` by `scripts/bake-themes.js`) and regenerates its
`<mode>.tokens.json`. `pnpm tokens:resolve` prints what each token resolves to.

## The white label theme

`src/white-label` is a neutral theme with no OVHcloud brand color, in light (`white-label/css`) and
dark (`white-label-dark/css`). It declares every semantic token, so a product using only it renders
every ODS component. Its look is graphite on slate: the primary (`brand`) is near-black in light and
near-white in dark, the page is white and the other neutrals (text, borders, header, muted areas,
selection) carry a faint blue-gray tint, and the status colors are those of Aluminium. The focus
ring is blue, `blue-600` in light and `blue-400` in dark, so it stays visible next to a graphite
primary.

Two choices differ from the other themes:

- The `slate` family is new, added to the palette of the white label only. The accent ramp points
  at it. The white label has no `navy` family.
- The `brand` ramp re-indexes the `gray` family: `brand-500` is `gray-800` (`#333333`), `brand-600`
  is `gray-900` and `brand-700` is black. `brand-600` is the hover of the solid controls, and
  `brand-700` the visited link, apart from the `brand-500` link at rest and on hover, and the brand
  color (the fill of the Logo). The roles that read `brand-500` get graphite, while a theme that
  re-aims the brand ramp at a family with a 500 pivot keeps a sensible primary.

`pnpm build:prod` ends with `pnpm check:contrast`, which reads the two white label `tokens.json`
and prints the ratio of each text, control and accent pair. It exits with 1, and fails the build,
when a pair is under its minimum (4.5:1 for text, 3:1 for control borders and non-text), when a
token is missing or when a file cannot be read. The other themes are not checked yet: Aluminium
dark and the two Blue Jeans modes fail some pairs. From a clone of this repository (`scripts/` is
not published), run the script on a theme by hand to see them:

```bash
node scripts/check-contrast.js dist/aluminium/dark.tokens.json
```
