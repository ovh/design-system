export enum OcdkSurfaceSelectPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export type OcdkSurfaceSelectPositionUnion = `${OcdkSurfaceSelectPosition}`;

export const OcdkSurfaceSelectPositionList = Object.keys(OcdkSurfaceSelectPosition)
  .map((key) => OcdkSurfaceSelectPosition[key as OcdkSurfaceSelectPositionUnion]);
