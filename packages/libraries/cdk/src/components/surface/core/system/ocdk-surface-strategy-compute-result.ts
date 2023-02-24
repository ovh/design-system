import { OcdkSurfaceStrategyComputeResultPosition } from './ocdk-surface-strategy-compute-result-position';
import { OcdkSurfaceStrategyFallback } from './ocdk-surface-strategy-fallback';

export type OcdkSurfaceStrategyComputeResult<StrategyConfig> =
  undefined
  | OcdkSurfaceStrategyComputeResultPosition<StrategyConfig>
  | OcdkSurfaceStrategyFallback<StrategyConfig>;
