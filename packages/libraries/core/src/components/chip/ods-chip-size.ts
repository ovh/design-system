export enum OdsChipSize {
  sm = 'sm',
  md = 'md'
}

export type OdsChipSizeUnion = `${OdsChipSize}`;

export const OdsChipSizeList = Object.keys(OdsChipSize)
  .map((key) => OdsChipSize[key as OdsChipSizeUnion]);
