export enum OdsSpinnerSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg'
}
  
export type OdsSpinnerSizeUnion = `${OdsSpinnerSize}`;

export const OdsSpinnerSizeList = Object.keys(OdsSpinnerSize)
    .map((key) => OdsSpinnerSize[key as OdsSpinnerSizeUnion]);
