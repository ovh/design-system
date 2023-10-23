import {OcdkSurfaceStrategyInspectorComfortFulfilled} from './ocdk-surface-strategy-inspector-comfort-fulfilled';
import {OcdkSurfaceStrategyInspectorLimitFulFilled} from './ocdk-surface-strategy-inspector-limit-fulfilled';

export type OcdkSurfaceStrategyInspectorFulfilled<StrategyConfig> =
  OcdkSurfaceStrategyInspectorComfortFulfilled<StrategyConfig>
  & OcdkSurfaceStrategyInspectorLimitFulFilled<StrategyConfig>;

export function isOcdkSurfaceStrategyInspectorFulfilled<StrategyConfig>(arg: any): arg is OcdkSurfaceStrategyInspectorFulfilled<StrategyConfig> {
  return arg && arg.comfort && arg.limit;
}
