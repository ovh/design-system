export enum OdsTextAreaSize {
  md = 'md'
}

export type OdsTextAreaSizeUnion = `${OdsTextAreaSize}`;

export const OdsTextAreaSizeList = Object.keys(OdsTextAreaSize)
  .map((key) => OdsTextAreaSize[key as OdsTextAreaSizeUnion]);

