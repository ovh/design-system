export enum OdsLocationTileVariant {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export type OdsLocationTileVariantUnion = `${OdsLocationTileVariant}`;

export const OdsLocationTileVariantList = Object.keys(OdsLocationTileVariant)
  .map((key) => OdsLocationTileVariant[key as OdsLocationTileVariantUnion]);
