import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';
import { OcdkSurfaceSymmetryStrategyHelpers } from './ocdk-surface-symmetry-strategy.helpers';
import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceNormalizedCorner } from '../../core/ocdk-surface-normalized-corner';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';
import { isOcdkSurfaceStrategyComputeResultPosition } from '../../core/system/ocdk-surface-strategy-compute-result-position';

/**
 * ```
 *         +--surface--+
 *         |           |
 *         +-----------o
 *    +-----anchor-----o
 *    |                |
 *    +----------------+
 *
 *    o = normalized corner
 *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
 * ```
 */
export function ocdkSurfaceSymmetryTrBr(): OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig> {
  const loggerSymmetry = new OcdkLogger('ocdkSurfaceSymmetryTrBr');
  const helpers = OcdkSurfaceSymmetryStrategyHelpers;

  return {
    cornerPoints: {
      anchor: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
      origin: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
    },
    STRATEGIES: {
      standard: {
        inspectors: {
          comfort: {
            availableTop: (opt) => opt.measurements.viewportDistance.top - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableBottom: (opt) => opt.measurements.viewportDistance.bottom - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.height,
            availableLeft: (opt) => opt.measurements.viewportDistance.left - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.width,
            availableRight: (opt) => opt.measurements.viewportDistance.right - opt.config.MARGIN_TO_EDGE_COMFORT,
          },
        },
        appliers: {
          maxHeight: (opt) => opt.inspections.comfort.availableTop - opt.config.anchorMargin.top,
          maxWidth: (opt) => opt.inspections.comfort.availableLeft,
          verticalOffset: (opt) => -opt.config.anchorMargin.top - opt.measurements.surfaceSize.height,
          verticalAlignment: 'top',
          horizontalOffset: () => 0,
          horizontalAlignment: 'right',
        },
      },
      FALLBACK: {
        inspectors: {
          comfort: {
            availableTop: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_COMFORT,
          },
          limit: {
            availableTop: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_LIMIT,
          },
        },
        appliers: {
          maxHeight: (opt) => helpers.symmetryFallbackMaxHeight(opt, opt.inspections.comfort.availableTop, opt.inspections.limit.availableTop, false),
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => helpers.symmetryFallbackVerticalOffset(opt, opt.inspections.comfort.availableTop, opt.inspections.limit.availableTop, false),
          verticalAlignment: 'top',
          horizontalOffset: () => 0,
          horizontalAlignment: 'right',
        },
      },
      COMPUTE: (opt) => {
        loggerSymmetry.log('[COMPUTE] position TOP_RIGHT BOTTOM_RIGHT');
        // no enough available space on top, trigger a position change to bottom instead
        if (opt.measurements.surfaceSize.height > opt.inspections.comfort.availableTop) {
          // already in a switch process and this new position isn't good enough, go to the fallback of the last strategy position
          if (opt.switchFrom && isOcdkSurfaceStrategyComputeResultPosition(opt.switchFrom) && opt.switchFrom.position) {
            loggerSymmetry.log('[COMPUTE] already switched off but no enough space: continue with the fallback of tr-br', opt.switchFrom);
            return opt.switchFrom.position.STRATEGIES.FALLBACK;
          }
          if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableLeft) {
            return {
              cornerPoints: {
                anchor: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
                origin: OcdkSurfaceNormalizedCorner.TOP_LEFT,
              },
            };
          }
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
              origin: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
            },
          };
        } else if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableLeft) {
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.TOP_LEFT,
              origin: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
            },
          };
        }
        return; // no position switching: apply the current one
      },

    },
  };
}
