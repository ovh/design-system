import { OcdkSurfaceStrategyAppliers } from './ocdk-surface-strategy-appliers';
import { OcdkSurfaceStrategyInspectors } from './ocdk-surface-strategy-inspectors';

export interface OcdkSurfaceStrategyInspectorsAndAppliers<StrategyConfig> {
  appliers: OcdkSurfaceStrategyAppliers<StrategyConfig>
  inspectors: OcdkSurfaceStrategyInspectors<StrategyConfig>;
}

export function isOcdkSurfaceStrategyInspectorsAndAppliers<StrategyConfig>(arg: any): arg is OcdkSurfaceStrategyInspectorsAndAppliers<StrategyConfig> {
  const argAsTarget = arg as OcdkSurfaceStrategyInspectorsAndAppliers<StrategyConfig>;
  return arg && argAsTarget.appliers && argAsTarget.inspectors;
}
