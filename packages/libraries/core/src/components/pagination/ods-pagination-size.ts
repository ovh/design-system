export enum OdsPaginationSize {
  md = 'md'
}

export type OdsPaginationSizeUnion = `${OdsPaginationSize}`;

export const OdsPaginationSizeList = Object.keys(OdsPaginationSize)
  .map((key) => OdsPaginationSize[key as OdsPaginationSizeUnion]);
