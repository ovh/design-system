export enum OdsTileSize {
  sm = 'sm',
  md = 'md'
}

export type OdsTileSizeUnion = `${OdsTileSize}`;

export const OdsTileSizeList = Object.keys(OdsTileSize)
  .map((key) => OdsTileSize[key as OdsTileSizeUnion]);
