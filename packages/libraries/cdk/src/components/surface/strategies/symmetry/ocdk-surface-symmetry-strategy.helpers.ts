import { OcdkLogger } from '../../../../logger/ocdk-logger';
import {
  OcdkSurfaceAvailableSpaceFct2,
  OcdkSurfaceMaxHeightOpt,
  OcdkSurfaceMaxWidthOpt,
} from '../../ocdk-surface-default-config';
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
   * - anchor: TOP_LEFT origin: BOTTOM_LEFT
   * - anchor: TOP_RIGHT origin: BOTTOM_RIGHT
   * @param opt - options with computed spacings
   * @param availableHeightComfort - total height available in comfort margin mode
   * @param availableHeightLimit - total height available in limit margin mode
   * @param isBxTx - is from bottom anchor to top origin or not
   */
  static symmetryFallbackMaxHeight(opt: OcdkSurfaceMaxHeightOpt<OcdkSurfaceSymmetryConfig>, availableHeightComfort: number, availableHeightLimit: number, isBxTx: boolean) {
    const logger = isBxTx ? this.loggerSymmetryBxTx : this.loggerSymmetryTxBx;

    if (opt.measurements.surfaceSize.height > availableHeightComfort) {
      logger.log('[maxHeight] vertical surface height is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.height > availableHeightLimit) {
        logger.log('[maxHeight] vertical surface height is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return isBxTx ? opt.inspections.limit.availableBottom : opt.inspections.limit.availableTop;
      } else {
        logger.log('[maxHeight] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.measurements.surfaceSize.height;
      }
    }

    logger.log('[maxHeight] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE');
    return isBxTx ? opt.inspections.comfort.availableBottom : opt.inspections.comfort.availableTop;
  }

  /**
   * fallback width applicable for the corner points :
   * - anchor: TOP_RIGHT origin: TOP_LEFT
   * - anchor: BOTTOM_RIGHT origin: BOTTOM_LEFT
   * - anchor: TOP_LEFT origin: TOP_RIGHT
   * - anchor: BOTTOM_LEFT origin: BOTTOM_RIGHT
   * @param opt - options with computed spacings
   * @param availableWidthComfort - total width available in comfort margin mode
   * @param availableWidthLimit - total width available in limit margin mode
   * @param isRxLx - is from right anchor to left origin or not
   */
  static symmetryFallbackMaxWidth(opt: OcdkSurfaceMaxWidthOpt<OcdkSurfaceSymmetryConfig>, availableWidthComfort: number, availableWidthLimit: number, isRxLx: boolean) {
    const logger = isRxLx ? this.loggerSymmetryRxLx : this.loggerSymmetryLxRx;

    if (opt.measurements.surfaceSize.width > availableWidthComfort) {
      logger.log('[maxWidth] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.width > availableWidthLimit) {
        logger.log('[maxWidth] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return isRxLx ? opt.inspections.limit.availableRight : opt.inspections.limit.availableLeft;
      } else {
        logger.log('[maxWidth] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE_LIMIT');
        return opt.measurements.surfaceSize.width;
      }
    }

    logger.log('[maxWidth] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE');
    return isRxLx ? opt.inspections.comfort.availableRight : opt.inspections.comfort.availableLeft;
  }

  /**
   * fallback vertical offset applicable for the corner points :
   * - anchor: BOTTOM_LEFT origin: TOP_LEFT
   * - anchor: BOTTOM_RIGHT origin: TOP_RIGHT
   * - anchor: TOP_LEFT origin: BOTTOM_LEFT
   * - anchor: TOP_RIGHT origin: BOTTOM_RIGHT
   * @param opt - options with computed spacings
   * @param availableHeightComfort - total height available in comfort margin mode
   * @param availableHeightLimit - total height available in limit margin mode
   * @param isBxTx - is from bottom anchor to top origin or not
   */
  static symmetryFallbackVerticalOffset(opt: OcdkSurfaceAvailableSpaceFct2<OcdkSurfaceSymmetryConfig>, availableHeightComfort: number, availableHeightLimit: number, isBxTx: boolean) {
    const logger = isBxTx ? this.loggerSymmetryBxTx : this.loggerSymmetryTxBx;

    if (opt.measurements.surfaceSize.height > availableHeightComfort) {
      const maxVerticalOffsetComfort = -opt.measurements.viewportDistance.top + opt.config.MARGIN_TO_EDGE_COMFORT;
      const maxVerticalOffsetLimit = -opt.measurements.viewportDistance.top + opt.config.MARGIN_TO_EDGE_LIMIT;
      logger.log('[verticalOffset] vertical surface height is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.height > availableHeightLimit) {
        logger.log('[verticalOffset] vertical surface height is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return maxVerticalOffsetLimit;
      } else {
        const comfortOverlapHeight = opt.measurements.surfaceSize.height - availableHeightComfort;
        return maxVerticalOffsetComfort - (comfortOverlapHeight / 2);
      }
    }

    const verticalOffset = isBxTx ? opt.measurements.viewportDistance.bottom - opt.config.MARGIN_TO_EDGE_COMFORT - opt.measurements.surfaceSize.height + opt.measurements.anchorSize.height : -(opt.measurements.viewportDistance.top - opt.config.MARGIN_TO_EDGE_COMFORT);
    logger.log('[verticalOffset] vertical surface height is less than or equal to viewport minus MARGIN_TO_EDGE');
    return verticalOffset;
  }

  /**
   * fallback horizontal offset applicable for the corner points :
   * - anchor: TOP_RIGHT origin: TOP_LEFT
   * - anchor: BOTTOM_RIGHT origin: BOTTOM_LEFT
   * - anchor: TOP_LEFT origin: TOP_RIGHT
   * - anchor: BOTTOM_LEFT origin: BOTTOM_RIGHT
   * @param opt - options with computed spacings
   * @param availableWidthComfort - total width available in comfort margin mode
   * @param availableWidthLimit - total width available in limit margin mode
   * @param isRxLx - is from right anchor to left origin or not
   */
  static symmetryFallbackHorizontalOffset(opt: OcdkSurfaceAvailableSpaceFct2<OcdkSurfaceSymmetryConfig>, availableWidthComfort: number, availableWidthLimit: number, isRxLx: boolean) {
    const logger = isRxLx ? this.loggerSymmetryRxLx : this.loggerSymmetryLxRx;

    if (opt.measurements.surfaceSize.width > availableWidthComfort) {
      const maxHorizontalOffsetComfort = isRxLx ? -opt.measurements.viewportDistance.right + opt.config.MARGIN_TO_EDGE_COMFORT : -opt.measurements.viewportDistance.left + opt.config.MARGIN_TO_EDGE_COMFORT;
      const maxHorizontalOffsetLimit = isRxLx ? -opt.measurements.viewportDistance.right + opt.config.MARGIN_TO_EDGE_LIMIT : -opt.measurements.viewportDistance.left + opt.config.MARGIN_TO_EDGE_LIMIT;
      logger.log('[horizontalOffset] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE');
      if (opt.measurements.surfaceSize.width > availableWidthLimit) {
        logger.log('[horizontalOffset] horizontal surface width is greater than viewport minus MARGIN_TO_EDGE_LIMIT');
        return maxHorizontalOffsetLimit;
      } else {
        const comfortOverlapWidth = opt.measurements.surfaceSize.width - availableWidthComfort;
        return maxHorizontalOffsetComfort - (comfortOverlapWidth / 2);
      }
    }

    const horizontalOffset = isRxLx ? opt.measurements.viewportDistance.right - opt.config.MARGIN_TO_EDGE_COMFORT - opt.measurements.surfaceSize.width + opt.measurements.anchorSize.width : -(opt.measurements.viewportDistance.left - opt.config.MARGIN_TO_EDGE_COMFORT);
    logger.log('[horizontalOffset] horizontal surface width is less than or equal to viewport minus MARGIN_TO_EDGE');
    return horizontalOffset;
  }
}
