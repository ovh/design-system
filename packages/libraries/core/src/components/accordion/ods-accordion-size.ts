export enum OdsAccordionSize {
  md = 'md'
}

export type OdsAccordionSizeUnion = `${OdsAccordionSize}`;

export const OdsAccordionSizeList = Object.keys(OdsAccordionSize)
  .map((key) => OdsAccordionSize[key as OdsAccordionSizeUnion]);

