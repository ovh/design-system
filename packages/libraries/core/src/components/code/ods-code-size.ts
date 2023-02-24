export enum OdsCodeSize {
  md = 'md'
}

export type OdsCodeSizeUnion = `${OdsCodeSize}`;

export const OdsCodeSizeList = Object.keys(OdsCodeSize)
  .map((key) => OdsCodeSize[key as OdsCodeSizeUnion]);

