import {OcdkSurfaceCorner, OcdkSurfaceCornerNameList} from './ocdk-surface-corner';

export interface OcdkSurfaceCornerPoints {
  anchor: OcdkSurfaceCorner,
  origin: OcdkSurfaceCorner,
}

export const OcdkSurfaceCornerPointNameList = OcdkSurfaceCornerNameList.reduce<Array<string>>( (acc, v) =>
  acc.concat((OcdkSurfaceCornerNameList as unknown as string[]).map( (w) => v + ' ' + w ) as any),
[]);
