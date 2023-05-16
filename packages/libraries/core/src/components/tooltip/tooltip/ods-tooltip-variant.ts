export enum OdsTooltipVariant {
  standard = 'standard',
  tip = 'tip',
}

export type OdsTooltipVariantUnion = `${OdsTooltipVariant}`;

export const OdsTooltipVariantList = Object.keys(OdsTooltipVariant)
  .map((key) => OdsTooltipVariant[key as OdsTooltipVariantUnion]);
