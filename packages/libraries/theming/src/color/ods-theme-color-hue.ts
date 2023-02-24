export enum OdsThemeColorHue {
  _000 = '000',
  _050 = '050',
  _075 = '075',
  _100 = '100',
  _200 = '200',
  _300 = '300',
  _400 = '400',
  _500 = '500',
  _600 = '600',
  _700 = '700',
  _800 = '800',
  _900 = '900',
  _1000 = '1000'
}

export type OdsThemeColorHueUnion = `${OdsThemeColorHue}`;

export const OdsThemeColorHueList = Object.keys(OdsThemeColorHue)
  .map((key) => OdsThemeColorHue[ key as keyof typeof OdsThemeColorHue ]);
