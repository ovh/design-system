import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceAvailableSpaceFct2, OcdkSurfaceMaxHeightOpt } from '../../ocdk-surface-default-config';
import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';

export class OcdkSurfaceSymmetryStrategyHelpers {
  private static loggerSymmetryBxTx = new OcdkLogger('SYMMETRY STRATEGY BxTx');
  private static loggerSymmetryTxBx = new OcdkLogger('SYMMETRY STRATEGY TxBx');

  /**
   * fallback height applicable for the corner points :
   * - anchor: BOTTOM_LEFT origin: TOP_LEFT
   * - anchor: BOTTOM_RIGHT origin: TOP_RIGHT
   * @param opt - options with computed spacings
   * @param availableHeightComfort - total height available in comfort margin mode
   * @param availableHeightLimit - total height available in limit margin mode
   */
  static symmetryFallbackMaxHeightBxTx(opt: OcdkSurfaceMaxHeightOpt<OcdkSurfaceSymmetryConfig>, availableHeightComfort: number, availableHeightLimit: number) {
    if (opt.measurements.surfaceSize.height > availableHeightComfort) {
      this.loggerSymmetryBxTx.log('[maxHeight] vertical surface height is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.height > availableHeightLimit) {
        this.loggerSymmetryBxTx.log('[maxHeight] vertical surface height is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.inspections.limit.availableBottom;
      } else {
        this.loggerSymmetryBxTx.log('[maxHeight] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.measurements.surfaceSize.height;
      }
    }

    this.loggerSymmetryBxTx.log('[maxHeight] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE');
    return opt.inspections.comfort.availableBottom;
  }

  static symmetryFallbackMaxHeightTxBx(opt: OcdkSurfaceMaxHeightOpt<OcdkSurfaceSymmetryConfig>, availableHeightComfort: number, availableHeightLimit: number) {
    if (opt.measurements.surfaceSize.height > availableHeightComfort) {
      this.loggerSymmetryTxBx.log('[maxHeight] vertical surface height is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.height > availableHeightLimit) {
        this.loggerSymmetryTxBx.log('[maxHeight] vertical surface height is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.inspections.limit.availableTop;
      } else {
        this.loggerSymmetryTxBx.log('[maxHeight] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.measurements.surfaceSize.height;
      }
    }

    this.loggerSymmetryTxBx.log('[maxHeight] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE');
    return opt.inspections.comfort.availableTop;
  }

  /**
   * fallback vertical offset applicable for the corner points :
   * - anchor: BOTTOM_LEFT origin: TOP_LEFT
   * - anchor: BOTTOM_RIGHT origin: TOP_RIGHT
   * @param opt - options with computed spacings
   * @param availableHeightComfort - total height available in comfort margin mode
   * @param availableHeightLimit - total height available in limit margin mode
   */
  static symmetryFallbackVerticalOffsetBxTx(opt: OcdkSurfaceAvailableSpaceFct2<OcdkSurfaceSymmetryConfig>, availableHeightComfort: number, availableHeightLimit: number) {
    if (opt.measurements.surfaceSize.height > availableHeightComfort) {
      const maxVerticalOffsetComfort = -opt.measurements.viewportDistance.top + opt.config.MARGIN_TO_EDGE_COMFORT;
      const maxVerticalOffsetLimit = -opt.measurements.viewportDistance.top + opt.config.MARGIN_TO_EDGE_LIMIT;
      this.loggerSymmetryBxTx.log('[verticalOffset] vertical surface height is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.height > availableHeightLimit) {
        this.loggerSymmetryBxTx.log('[verticalOffset] vertical surface height is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return maxVerticalOffsetLimit;
      } else {
        const comfortOverlapHeight = opt.measurements.surfaceSize.height - availableHeightComfort;
        return maxVerticalOffsetComfort - (comfortOverlapHeight / 2)
      }
    }

    const verticalOffset = opt.measurements.viewportDistance.bottom - opt.config.MARGIN_TO_EDGE_COMFORT - opt.measurements.surfaceSize.height + opt.measurements.anchorSize.height;
    this.loggerSymmetryBxTx.log('[verticalOffset] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE');
    return verticalOffset;
  }


  static symmetryFallbackVerticalOffsetTxBx(opt: OcdkSurfaceAvailableSpaceFct2<OcdkSurfaceSymmetryConfig>, availableHeightComfort: number, availableHeightLimit: number) {
    if (opt.measurements.surfaceSize.height > availableHeightComfort) {
      const maxVerticalOffsetComfort = -opt.measurements.viewportDistance.top + opt.config.MARGIN_TO_EDGE_COMFORT;
      const maxVerticalOffsetLimit = -opt.measurements.viewportDistance.top + opt.config.MARGIN_TO_EDGE_LIMIT;
      this.loggerSymmetryTxBx.log('[verticalOffset] vertical surface height is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.height > availableHeightLimit) {
        this.loggerSymmetryTxBx.log('[verticalOffset] vertical surface height is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return maxVerticalOffsetLimit;
      } else {
        const comfortOverlapHeight = opt.measurements.surfaceSize.height - availableHeightComfort;
        return maxVerticalOffsetComfort - (comfortOverlapHeight / 2)
      }
    }

    const verticalOffset = -( opt.measurements.viewportDistance.top - opt.config.MARGIN_TO_EDGE_COMFORT);
    this.loggerSymmetryTxBx.log('[verticalOffset] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE');
    return verticalOffset;
  }
}
