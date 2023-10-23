import {OcdkSurfaceAnimation} from './ocdk-surface-animation';
import {OcdkSurfaceStrategy} from './system/ocdk-surface-strategy';
import {OcdkSurfaceStrategyDefiner} from './system/ocdk-surface-strategy-definer';
import {OcdkSurfaceDistance} from './ocdk-surface-distance';
import {OcdkSurfaceCornerPoints} from './ocdk-surface-corner-points';

export interface OcdkSurfaceConfig {
  ANIMATIONS: Record<OcdkSurfaceAnimation, {
    TRANSITION_OPEN_DURATION: number,
    TRANSITION_OPEN_DURATION_CSS: string,
    TRANSITION_CLOSE_DURATION: number,
    TRANSITION_CLOSE_DURATION_CSS: string,
    TRANSITION_FADE_IN_DURATION: number,
    TRANSITION_FADE_IN_DURATION_CSS: string,
    TRANSITION_FADE_OUT_DURATION: number,
    TRANSITION_FADE_OUT_DURATION_CSS: string,
  }>,
  DEFAULT_ANIMATION: OcdkSurfaceAnimation;
  /**
   * Standard margin left to the edge of the viewport when menu-surface is at maximum
   * possible height/width (nominal use case)
   */
  MARGIN_TO_EDGE_COMFORT: number;
  /**
   * Minimal Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height/width (very compressed use case)
   */
  MARGIN_TO_EDGE_LIMIT: number;
  POSITION_STRATEGY: {
    //POSITIONS: [OcdkOnePositionStrategy, ...OcdkOnePositionStrategy[]],
    /** default embedded strategy to apply */
    defaultStrategy: OcdkSurfaceStrategy,
    strategy: OcdkSurfaceStrategyDefiner<any>
  };
  /** margin between the surface container and the anchor container */
  anchorMargin: OcdkSurfaceDistance,
  cornerPoints: OcdkSurfaceCornerPoints;
}
