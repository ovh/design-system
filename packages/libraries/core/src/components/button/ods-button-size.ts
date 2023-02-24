export enum OdsButtonSize {
  sm = 'sm',
  md = 'md'
}

export type OdsButtonSizeUnion = `${OdsButtonSize}`;

export const OdsButtonSizeList = Object.keys(OdsButtonSize)
  .map((key) => OdsButtonSize[key as OdsButtonSizeUnion]);

