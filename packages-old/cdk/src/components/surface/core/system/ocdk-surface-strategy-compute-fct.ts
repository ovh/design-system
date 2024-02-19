import { OcdkSurfaceStrategyComputeResult } from './ocdk-surface-strategy-compute-result';
import { OcdkAutoLayoutMeasurements } from '../ocdk-auto-layout-measurements';
import { OcdkSurfaceConfig } from '../ocdk-surface-config';
import { OcdkSurfaceInspections } from '../ocdk-surface-inspections';

export type OcdkSurfaceStrategyComputeFct<StrategyConfig> = (
  opt: {
    config: OcdkSurfaceConfig,
    strategyConfig: StrategyConfig,
    measurements: OcdkAutoLayoutMeasurements,
    inspections: OcdkSurfaceInspections,
    switchFrom?: OcdkSurfaceStrategyComputeResult<StrategyConfig>
  }
) => OcdkSurfaceStrategyComputeResult<StrategyConfig>
