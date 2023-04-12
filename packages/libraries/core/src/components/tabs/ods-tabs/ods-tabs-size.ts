export enum OdsTabsSize {
    md = 'md',
  }

export type OdsTabsSizeUnion = `${OdsTabsSize}`;

export const odsTabsSizeList = Object.keys(OdsTabsSize).map(key => OdsTabsSize[key as OdsTabsSizeUnion]);
