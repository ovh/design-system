export enum OdsPaginationSize {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type OdsPaginationSizeUnion = `${OdsPaginationSize}`;

export const OdsPaginationSizeList = Object.keys(OdsPaginationSize).map(key => OdsPaginationSize[key as OdsPaginationSizeUnion]);
