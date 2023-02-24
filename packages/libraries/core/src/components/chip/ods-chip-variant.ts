export enum OdsChipVariant {
  flat = 'flat',
  stroked = 'stroked'
}

export type OdsChipVariantUnion = `${OdsChipVariant}`;

export const OdsChipVariantList = Object.keys(OdsChipVariant)
  .map((key) => OdsChipVariant[key as OdsChipVariantUnion]);
