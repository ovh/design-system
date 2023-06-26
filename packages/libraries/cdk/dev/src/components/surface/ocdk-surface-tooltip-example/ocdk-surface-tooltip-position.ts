export enum OcdkSurfaceTooltipPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export type OcdkSurfaceTooltipPositionUnion = `${OcdkSurfaceTooltipPosition}`;

export const OcdkSurfaceTooltipPositionList = Object.keys(OcdkSurfaceTooltipPosition)
  .map((key) => OcdkSurfaceTooltipPosition[key as OcdkSurfaceTooltipPositionUnion]);
