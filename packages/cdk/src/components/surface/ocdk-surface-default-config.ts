import {OcdkSurfaceAnimation} from './core/ocdk-surface-animation';
import {OcdkAutoLayoutMeasurements} from './core/ocdk-auto-layout-measurements';
import {OcdkSurfaceCorner} from './core/ocdk-surface-corner';
import {OcdkSurfaceInspections} from './core/ocdk-surface-inspections';
import {OcdkSurfaceSymmetryStrategy} from './strategies/symmetry/ocdk-surface-symmetry-strategy';
import {OcdkSurfaceStrategy} from './core/system/ocdk-surface-strategy';
import {OcdkSurfaceConfig} from './core/ocdk-surface-config';

export type OcdkSurfaceAvailableSpaceFctOpt<StrategyConfig> = {
  config: OcdkSurfaceConfig;
  strategyConfig: StrategyConfig;
  measurements: OcdkAutoLayoutMeasurements
};

export type OcdkSurfaceAvailableSpaceFct<StrategyConfig> = (opt: OcdkSurfaceAvailableSpaceFctOpt<StrategyConfig>) => number;

export type OcdkSurfaceAvailableSpaceFct2<StrategyConfig> = {
  config: OcdkSurfaceConfig;
  strategyConfig: StrategyConfig;
  measurements: OcdkAutoLayoutMeasurements,
  inspections: OcdkSurfaceInspections,
  maxHeight: number;
  maxWidth: number;
}


export type OcdkSurfaceMaxHeightOpt<StrategyConfig> = {
  config: OcdkSurfaceConfig;
  strategyConfig: StrategyConfig;
  measurements: OcdkAutoLayoutMeasurements,
  inspections: OcdkSurfaceInspections
}

export type OcdkSurfaceMaxWidthOpt<StrategyConfig> = {
  config: OcdkSurfaceConfig;
  strategyConfig: StrategyConfig;
  measurements: OcdkAutoLayoutMeasurements,
  inspections: OcdkSurfaceInspections
}


export const OcdkSurfaceDefaultConfig: OcdkSurfaceConfig = {
  cornerPoints:
    {anchor: OcdkSurfaceCorner.BOTTOM_START, origin: OcdkSurfaceCorner.TOP_START},
  anchorMargin: {top: 10, right: 10, bottom: 10, left: 10},
  MARGIN_TO_EDGE_COMFORT: 32,
  MARGIN_TO_EDGE_LIMIT: 4,
  DEFAULT_ANIMATION: OcdkSurfaceAnimation.SCALING,
  ANIMATIONS: {
    'SCALING': {
      TRANSITION_OPEN_DURATION: 120,
      TRANSITION_OPEN_DURATION_CSS: '.12s',
      TRANSITION_CLOSE_DURATION: 120,
      TRANSITION_CLOSE_DURATION_CSS: '.12s',
      TRANSITION_FADE_IN_DURATION: 0.03,
      TRANSITION_FADE_IN_DURATION_CSS: '0.03s',
      TRANSITION_FADE_OUT_DURATION: 0.075,
      TRANSITION_FADE_OUT_DURATION_CSS: '0.075s',
    },
    'SLIPPING': {
      TRANSITION_OPEN_DURATION: 120,
      TRANSITION_OPEN_DURATION_CSS: '.12s',
      TRANSITION_CLOSE_DURATION: 120,
      TRANSITION_CLOSE_DURATION_CSS: '.12s',
      TRANSITION_FADE_IN_DURATION: 120,
      TRANSITION_FADE_IN_DURATION_CSS: '.12s',
      TRANSITION_FADE_OUT_DURATION: 120,
      TRANSITION_FADE_OUT_DURATION_CSS: '.12s',
    },
  },
  POSITION_STRATEGY: {
    defaultStrategy: OcdkSurfaceStrategy.SYMMETRY,
    strategy: new OcdkSurfaceSymmetryStrategy(),
  },
};

export const ocdkSurfaceCssClasses = {
  ANCHOR: 'ocdk-surface--anchor',
  ANIMATING_CLOSED: 'ocdk-surface--animating-closed',
  ANIMATING_OPEN: 'ocdk-surface--animating-open',
  FIXED: 'ocdk-surface--fixed',
  IS_OPEN_BELOW: 'ocdk-surface--is-open-below',
  OPEN: 'ocdk-surface--open',
  ROOT: 'ocdk-surface',
};
