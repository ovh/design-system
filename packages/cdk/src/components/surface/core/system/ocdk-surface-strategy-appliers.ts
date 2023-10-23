import {OcdkSurfaceAvailableSpaceFct2, OcdkSurfaceMaxHeightOpt, OcdkSurfaceMaxWidthOpt} from '../../ocdk-surface-default-config';

export interface OcdkSurfaceStrategyAppliers<StrategyConfig> {
  horizontalAlignment: 'left' | 'center' | 'right'
  horizontalOffset: (opt: OcdkSurfaceAvailableSpaceFct2<StrategyConfig>) => number,
  /** max space for the height of the surface */
  maxHeight: (opt: OcdkSurfaceMaxHeightOpt<StrategyConfig>) => number,
  maxWidth: (opt: OcdkSurfaceMaxWidthOpt<StrategyConfig>) => number,
  verticalAlignment: 'top' | 'bottom',
  verticalOffset: (opt: OcdkSurfaceAvailableSpaceFct2<StrategyConfig>) => number,
}
