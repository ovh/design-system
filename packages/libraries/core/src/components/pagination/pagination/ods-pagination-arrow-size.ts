export enum OdsPaginationArrowSize {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type OdsPaginationArrowSizeUnion = `${OdsPaginationArrowSize}`;

export const OdsPaginationArrowSizeList = Object.keys(OdsPaginationArrowSize).map(key => OdsPaginationArrowSize[key as OdsPaginationArrowSizeUnion]);
