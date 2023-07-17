import { OcdkSurfaceCorner, OcdkSurfaceCornerNameList } from './ocdk-surface-corner';

export interface OcdkSurfaceCornerPoints {
  anchor: OcdkSurfaceCorner,
  origin: OcdkSurfaceCorner,
}

export const OcdkSurfaceCornerPointNameList = OcdkSurfaceCornerNameList.reduce<Array<string>>((acc, v) => {
  const filteredCombinations: string[] = [];

  OcdkSurfaceCornerNameList.forEach(w => {
    const vString = String(v);
    const wString = String(w);
    if (
      (vString === 'TOP_LEFT' && wString === 'TOP_RIGHT') ||
      (vString === 'TOP_RIGHT' && wString === 'TOP_LEFT') ||
      (vString === 'BOTTOM_LEFT' && wString === 'BOTTOM_RIGHT') ||
      (vString === 'BOTTOM_RIGHT' && wString === 'BOTTOM_LEFT') ||
      (vString === 'BOTTOM_LEFT' && wString === 'TOP_LEFT') ||
      (vString === 'TOP_LEFT' && wString === 'BOTTOM_LEFT') ||
      (vString === 'BOTTOM_RIGHT' && wString === 'TOP_RIGHT') ||
      (vString === 'TOP_RIGHT' && wString === 'BOTTOM_RIGHT') ||
      (vString === 'BOTTOM_CENTER' && wString === 'TOP_CENTER') ||
      (vString === 'TOP_CENTER' && wString === 'BOTTOM_CENTER')
    ) {
      filteredCombinations.push(v + ' ' + w);
    }
  });

  return acc.concat(filteredCombinations);
}, []);
