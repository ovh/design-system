import {OcdkSurfaceStrategyInspectorDetails} from './ocdk-surface-strategy-inspector-details';

export type OcdkSurfaceStrategyInspectorLimit<StrategyConfig> = {
  limit: OcdkSurfaceStrategyInspectorDetails<StrategyConfig>
}

export function isOcdkSurfaceStrategyInspectorLimit<StrategyConfig>(arg: any): arg is OcdkSurfaceStrategyInspectorLimit<StrategyConfig> {
  return arg && arg.limit;
}
