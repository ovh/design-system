export enum OcdkSurfaceTooltipPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BOTTOM_CENTER = 'BOTTOM_CENTER',
  TOP_CENTER = 'TOP_CENTER',
  CENTER_LEFT = 'CENTER_LEFT',
  CENTER_RIGHT = 'CENTER_RIGHT',
}

export type OcdkSurfaceTooltipPositionUnion = `${OcdkSurfaceTooltipPosition}`;

export const OcdkSurfaceTooltipPositionList = Object.keys(OcdkSurfaceTooltipPosition)
  .map((key) => OcdkSurfaceTooltipPosition[key as OcdkSurfaceTooltipPositionUnion]);
