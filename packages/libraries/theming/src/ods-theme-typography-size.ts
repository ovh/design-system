export enum OdsThemeTypographySize {
  _100 = '100',
  _200 = '200',
  _300 = '300',
  _400 = '400',
  _500 = '500',
  _600 = '600',
  _700 = '700',
  _800 = '800'
}

export type OdsThemeTypographySizeUnion = `${OdsThemeTypographySize}`;

export const OdsThemeTypographySizeList = Object.keys(OdsThemeTypographySize)
  .map((key) => OdsThemeTypographySize[ key as keyof typeof OdsThemeTypographySize ]);

