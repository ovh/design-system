export enum OdsSkeletonSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type OdsSkeletonSizeUnion = `${OdsSkeletonSize}`;

export const OdsSkeletonSizeList = Object.keys(OdsSkeletonSize)
  .map((key) => OdsSkeletonSize[key as OdsSkeletonSizeUnion]);
