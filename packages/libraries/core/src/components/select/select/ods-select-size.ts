export enum OdsSelectSize {
  md = 'md',
}

export type OdsSelectSizeUnion = `${OdsSelectSize}`;

export const OdsSelectSizeList = Object.keys(OdsSelectSize)
  .map((key) => OdsSelectSize[key as OdsSelectSizeUnion]);
