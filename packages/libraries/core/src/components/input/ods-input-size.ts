export enum OdsInputSize {
  md = 'md'
}

export type OdsInputSizeUnion = `${OdsInputSize}`;

export const OdsInputSizeList = Object.keys(OdsInputSize)
  .map((key) => OdsInputSize[key as OdsInputSizeUnion]);

