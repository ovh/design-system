export enum OdsTileVariant {
  flat = 'flat',
  stroked = 'stroked',
  ghost = 'ghost',
  hollow = 'hollow'
}

export type OdsTileVariantUnion = `${OdsTileVariant}`;

export const OdsTileVariantList = Object.keys(OdsTileVariant)
  .map((key) => OdsTileVariant[key as OdsTileVariantUnion]);
