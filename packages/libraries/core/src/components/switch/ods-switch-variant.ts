export enum OdsSwitchVariant {
    flat = 'flat',
  }
  
  export type OdsSwitchVariantUnion = `${OdsSwitchVariant}`;
  
  export const OdsSwitchVariantList = Object.keys(OdsSwitchVariant)
    .map((key) => OdsSwitchVariant[key as OdsSwitchVariantUnion]);
  
  