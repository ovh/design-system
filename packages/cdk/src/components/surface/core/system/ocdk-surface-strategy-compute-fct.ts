import {OcdkAutoLayoutMeasurements} from '../ocdk-auto-layout-measurements';
import {OcdkSurfaceInspections} from '../ocdk-surface-inspections';
import {OcdkSurfaceStrategyComputeResult} from './ocdk-surface-strategy-compute-result';
import {OcdkSurfaceConfig} from '../ocdk-surface-config';

export type OcdkSurfaceStrategyComputeFct<StrategyConfig> = (
  opt: {
    config: OcdkSurfaceConfig,
    strategyConfig: StrategyConfig,
    measurements: OcdkAutoLayoutMeasurements,
    inspections: OcdkSurfaceInspections,
    switchFrom?: OcdkSurfaceStrategyComputeResult<StrategyConfig>
  }
) => OcdkSurfaceStrategyComputeResult<StrategyConfig>
