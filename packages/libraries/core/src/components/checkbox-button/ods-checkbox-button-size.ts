export enum OdsCheckboxButtonSize {
  sm = 'sm',
  md = 'md',
}

export type OdsCheckboxButtonSizeUnion = `${OdsCheckboxButtonSize}`;

export const OdsCheckboxButtonSizeList = Object.keys(OdsCheckboxButtonSize)
  .map((key) => OdsCheckboxButtonSize[key as OdsCheckboxButtonSizeUnion]);
