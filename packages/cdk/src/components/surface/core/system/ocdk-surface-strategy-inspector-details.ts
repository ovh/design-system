import {OcdkSurfaceAvailableSpaceFct} from '../../ocdk-surface-default-config';

export interface OcdkSurfaceStrategyInspectorDetails<StrategyConfig> {
  /** space available at bottom of the anchor corner */
  availableBottom?: OcdkSurfaceAvailableSpaceFct<StrategyConfig>,
  /** space available at left of the anchor corner */
  availableLeft?: OcdkSurfaceAvailableSpaceFct<StrategyConfig>,
  /** space available at right of the anchor corner */
  availableRight?: OcdkSurfaceAvailableSpaceFct<StrategyConfig>
  /** space available at top of the anchor corner */
  availableTop?: OcdkSurfaceAvailableSpaceFct<StrategyConfig>
}

export type OcdkSurfaceStrategyInspectorDetailsFulFilled<StrategyConfig> = Required<OcdkSurfaceStrategyInspectorDetails<StrategyConfig>>;
