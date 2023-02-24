export enum OdsButtonVariant {
  flat = 'flat',
  stroked = 'stroked',
  ghost = 'ghost'
}

export type OdsButtonVariantUnion = `${OdsButtonVariant}`;

export const OdsButtonVariantList = Object.keys(OdsButtonVariant)
  .map((key) => OdsButtonVariant[key as OdsButtonVariantUnion]);

