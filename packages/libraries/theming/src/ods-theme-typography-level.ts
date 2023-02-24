export enum OdsThemeTypographyLevel {
  heading = 'heading',
  subheading = 'subheading',
  body = 'body',
  caption = 'caption',
  button = 'button'
}

export type OdsThemeTypographyLevelUnion = `${OdsThemeTypographyLevel}`;

export const OdsThemeTypographyLevelList = Object.keys(OdsThemeTypographyLevel)
  .map((key) => OdsThemeTypographyLevel[ key as OdsThemeTypographyLevelUnion ]);

