import { OcdkSurfaceCornerPointsNormalized } from './ocdk-surface-corner-points-normalized';
import { OcdkSurfaceStrategyComputeFct } from './system/ocdk-surface-strategy-compute-fct';
import { OcdkSurfaceStrategyFallback } from './system/ocdk-surface-strategy-fallback';
import { OcdkSurfaceStrategyStandard } from './system/ocdk-surface-strategy-standard';

export type OcdkSurfaceOnePositionStrategy<StrategyConfig> = {
  cornerPoints: OcdkSurfaceCornerPointsNormalized,
  STRATEGIES: {
    standard: OcdkSurfaceStrategyStandard<StrategyConfig>,
    FALLBACK: OcdkSurfaceStrategyFallback<StrategyConfig>,
    COMPUTE: OcdkSurfaceStrategyComputeFct<StrategyConfig>
  }
}
