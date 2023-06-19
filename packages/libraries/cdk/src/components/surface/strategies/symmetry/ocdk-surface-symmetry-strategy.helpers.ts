import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceAvailableSpaceFct2, OcdkSurfaceMaxHeightOpt } from '../../ocdk-surface-default-config';
import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';

export class OcdkSurfaceSymmetryStrategyHelpers {
  private static loggerSymmetryBxTx = new OcdkLogger('SYMMETRY STRATEGY BxTx');
  private static loggerSymmetryTxBx = new OcdkLogger('SYMMETRY STRATEGY TxBx');
  private static loggerSymmetryRxLx = new OcdkLogger('SYMMETRY STRATEGY RxLx');
  private static loggerSymmetryLxRx = new OcdkLogger('SYMMETRY STRATEGY LxRx');

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
   * fallback width applicable for the corner points :
   * - anchor: TOP_RIGHT origin: TOP_LEFT
   * - anchor: BOTTOM_RIGHT origin: BOTTOM_LEFT
   * @param opt - options with computed spacings
   * @param availableWidthComfort - total width available in comfort margin mode
   * @param availableWidthLimit - total width available in limit margin mode
   */
  static symmetryFallbackMaxWidthRxLx(opt: OcdkSurfaceMaxHeightOpt<OcdkSurfaceSymmetryConfig>, availableWidthComfort: number, availableWidthLimit: number) {
    if (opt.measurements.surfaceSize.width > availableWidthComfort) {
      this.loggerSymmetryRxLx.log('[maxWidth] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.width > availableWidthLimit) {
        this.loggerSymmetryRxLx.log('[maxWidth] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.inspections.limit.availableRight;
      } else {
        this.loggerSymmetryRxLx.log('[maxWidth] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.measurements.surfaceSize.width;
      }
    }

    this.loggerSymmetryRxLx.log('[maxWidth] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE');
    return opt.inspections.comfort.availableRight;
  }

  static symmetryFallbackMaxWidthLxRx(opt: OcdkSurfaceMaxHeightOpt<OcdkSurfaceSymmetryConfig>, availableWidthComfort: number, availableWidthLimit: number) {
    if (opt.measurements.surfaceSize.width > availableWidthComfort) {
      this.loggerSymmetryLxRx.log('[maxWidth] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.width > availableWidthLimit) {
        this.loggerSymmetryLxRx.log('[maxWidth] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.inspections.limit.availableLeft;
      } else {
        this.loggerSymmetryLxRx.log('[maxWidth] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.measurements.surfaceSize.width;
      }
    }

    this.loggerSymmetryLxRx.log('[maxWidth] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE');
    return opt.inspections.comfort.availableLeft;
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

  /**
   * fallback horizontal offset applicable for the corner points :
   * - anchor: TOP_RIGHT origin: TOP_LEFT
   * - anchor: BOTTOM_RIGHT origin: BOTTOM_LEFT
   * @param opt - options with computed spacings
   * @param availableWidthComfort - total width available in comfort margin mode
   * @param availableWidthLimit - total width available in limit margin mode
   */
  static symmetryFallbackHorizontalOffsetRxLx(opt: OcdkSurfaceAvailableSpaceFct2<OcdkSurfaceSymmetryConfig>, availableWidthComfort: number, availableWidthLimit: number) {
    if (opt.measurements.surfaceSize.width > availableWidthComfort) {
      const maxHorizontalOffsetComfort = -opt.measurements.viewportDistance.right + opt.config.MARGIN_TO_EDGE_COMFORT;
      const maxHorizontalOffsetLimit = -opt.measurements.viewportDistance.right + opt.config.MARGIN_TO_EDGE_LIMIT;
      this.loggerSymmetryRxLx.log('[horizontalOffset] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.width > availableWidthLimit) {
        this.loggerSymmetryRxLx.log('[horizontalOffset] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return maxHorizontalOffsetLimit;
      } else {
        const comfortOverlapWidth = opt.measurements.surfaceSize.width - availableWidthComfort;
        return maxHorizontalOffsetComfort - (comfortOverlapWidth / 2)
      }
    }

    const horizontalOffset = opt.measurements.viewportDistance.right - opt.config.MARGIN_TO_EDGE_COMFORT - opt.measurements.surfaceSize.width + opt.measurements.anchorSize.width;;
    this.loggerSymmetryRxLx.log('[horizontalOffset] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE');
    return horizontalOffset;
  }

  static symmetryFallbackHorizontalOffsetLxRx(opt: OcdkSurfaceAvailableSpaceFct2<OcdkSurfaceSymmetryConfig>, availableWidthComfort: number, availableWidthLimit: number) {
    if (opt.measurements.surfaceSize.width > availableWidthComfort) {
      const maxHorizontalOffsetComfort = -opt.measurements.viewportDistance.left + opt.config.MARGIN_TO_EDGE_COMFORT;
      const maxHorizontalOffsetLimit = -opt.measurements.viewportDistance.left + opt.config.MARGIN_TO_EDGE_LIMIT;
      this.loggerSymmetryLxRx.log('[horizontalOffset] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.width > availableWidthLimit) {
        this.loggerSymmetryLxRx.log('[horizontalOffset] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return maxHorizontalOffsetLimit;
      } else {
        const comfortOverlapWidth = opt.measurements.surfaceSize.width - availableWidthComfort;
        return maxHorizontalOffsetComfort - (comfortOverlapWidth / 2)
      }
    }

    const horizontalOffset = -( opt.measurements.viewportDistance.left - opt.config.MARGIN_TO_EDGE_COMFORT);
    this.loggerSymmetryLxRx.log('[horizontalOffset] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE');
    return horizontalOffset;
  }
}
