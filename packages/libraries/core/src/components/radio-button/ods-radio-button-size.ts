export enum OdsRadioButtonSize {
  sm = 'sm',
  md = 'md',
}

export type OdsRadioButtonSizeUnion = `${OdsRadioButtonSize}`;

export const OdsRadioButtonSizeList = Object.keys(OdsRadioButtonSize)
  .map((key) => OdsRadioButtonSize[key as OdsRadioButtonSizeUnion]);
