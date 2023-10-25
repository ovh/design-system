import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';
import { OcdkSurfaceSymmetryStrategyHelpers } from './ocdk-surface-symmetry-strategy.helpers';
import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceNormalizedCorner } from '../../core/ocdk-surface-normalized-corner';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';
import {
  isOcdkSurfaceStrategyComputeResultPosition,
} from '../../core/system/ocdk-surface-strategy-compute-result-position';

/**
 * ```
 *    x-----anchor-----+
 *    |                |
 *    o----------------o
 *      o--surface--o
 *      |           |
 *      +-----------+
 *
 *    o = normalized corner
 *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
 * ```
 */
export function ocdkSurfaceSymmetryBcTc(): OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig> {
  const loggerSymmetry = new OcdkLogger('ocdkSurfaceSymmetryBcTc');
  const helpers = OcdkSurfaceSymmetryStrategyHelpers;

  return {
    cornerPoints: { anchor: OcdkSurfaceNormalizedCorner.BOTTOM_CENTER, origin: OcdkSurfaceNormalizedCorner.TOP_CENTER },
    STRATEGIES: {
      standard: {
        inspectors: {
          comfort: {
            availableTop: (opt) => opt.measurements.viewportDistance.top - opt.config.anchorMargin.top - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.height,
            availableBottom: (opt) => opt.measurements.viewportDistance.bottom - opt.config.anchorMargin.bottom - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableLeft: (opt) => opt.measurements.viewportDistance.left - opt.config.anchorMargin.left - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableRight: (opt) => opt.measurements.viewportDistance.right - opt.config.anchorMargin.right - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.width,
          },
        },
        appliers: {
          maxHeight: (opt) => opt.inspections.comfort.availableBottom,
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => opt.measurements.anchorSize.height + opt.config.anchorMargin.bottom,
          verticalAlignment: 'top',
          // center surface
          horizontalOffset: (opt) => (opt.measurements.anchorSize.width - opt.measurements.surfaceSize.width)/2,
          horizontalAlignment: 'right',
        },
      },
      FALLBACK: {
        inspectors: {
          comfort: {
            availableBottom: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_COMFORT,
          },
          limit: {
            availableBottom: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_LIMIT,
          },
        },
        appliers: {
          maxHeight: (opt) => helpers.symmetryFallbackMaxHeight(opt, opt.inspections.comfort.availableBottom, opt.inspections.limit.availableBottom, true),
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => helpers.symmetryFallbackVerticalOffset(opt, opt.inspections.comfort.availableBottom, opt.inspections.limit.availableBottom, true),
          verticalAlignment: 'top',
          horizontalOffset: (opt) => (opt.measurements.anchorSize.width - opt.measurements.surfaceSize.width)/2,
          horizontalAlignment: 'right',
        },
      },
      COMPUTE: (opt) => {
        loggerSymmetry.log('[COMPUTE] position BOTTOM_CENTER TOP_CENTER');
        if (opt.measurements.surfaceSize.height > opt.inspections.comfort.availableBottom) {
          // already in a switch process and this new position isn't good enough, go to the fallback of the last strategy position
          if (opt.switchFrom && isOcdkSurfaceStrategyComputeResultPosition(opt.switchFrom) && opt.switchFrom.position) {
            loggerSymmetry.log('[COMPUTE] already switched off but no enough space: continue with the fallback of bc-tc', opt.switchFrom);
            return opt.switchFrom.position.STRATEGIES.FALLBACK;
          }
          //   Check available space on right and left
          switch (true) {
          case opt.measurements.surfaceSize.width > opt.inspections.comfort.availableRight:
            return {
              cornerPoints: {
                anchor: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
                origin: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
              },
            };
          case opt.measurements.surfaceSize.width > opt.inspections.comfort.availableLeft:
            return {
              cornerPoints: {
                anchor: OcdkSurfaceNormalizedCorner.TOP_LEFT,
                origin: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
              },
            };
          default:
            return {
              cornerPoints: {
                anchor: OcdkSurfaceNormalizedCorner.TOP_CENTER,
                origin: OcdkSurfaceNormalizedCorner.BOTTOM_CENTER,
              },
            };
          }
        }
        // Check available space on right and left
        switch (true) {
        case opt.measurements.surfaceSize.width > opt.inspections.comfort.availableRight:
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
              origin: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
            },
          };
        case opt.measurements.surfaceSize.width > opt.inspections.comfort.availableLeft:
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
              origin: OcdkSurfaceNormalizedCorner.TOP_LEFT,
            },
          };
        }
        return; // no position switching: apply the current one
      },

    },
  };
}
