import {OcdkSurfaceCornerPointsNormalized} from '../ocdk-surface-corner-points-normalized';
import {OcdkSurfaceOnePositionStrategy} from '../ocdk-surface-one-position-strategy';

export type OcdkSurfaceStrategyComputeResultPosition<StrategyConfig> = {
  cornerPoints: OcdkSurfaceCornerPointsNormalized
  position?: OcdkSurfaceOnePositionStrategy<StrategyConfig>;
}

export function isOcdkSurfaceStrategyComputeResultPosition<StrategyConfig>(opt: any): opt is OcdkSurfaceStrategyComputeResultPosition<StrategyConfig> {
  const optAsPosition = opt as OcdkSurfaceStrategyComputeResultPosition<StrategyConfig>;
  return opt && optAsPosition.cornerPoints;
}
