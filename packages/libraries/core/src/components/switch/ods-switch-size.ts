export enum OdsSwitchSize {
    sm = 'sm',
    md = 'md'
  }
  
  export type OdsSwitchSizeUnion = `${OdsSwitchSize}`;
  
  export const OdsSwitchSizeList = Object.keys(OdsSwitchSize)
    .map((key) => OdsSwitchSize[key as OdsSwitchSizeUnion]);
  
  