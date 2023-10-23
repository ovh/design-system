import {OcdkSurfaceStrategyInspectorDetails} from './ocdk-surface-strategy-inspector-details';

export type OcdkSurfaceStrategyInspectorComfort<StrategyConfig> = {
  comfort: OcdkSurfaceStrategyInspectorDetails<StrategyConfig>
}

export function isOcdkSurfaceStrategyInspectorComfort<StrategyConfig>(arg: any): arg is OcdkSurfaceStrategyInspectorComfort<StrategyConfig> {
  return arg && arg.comfort;
}
