import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';
import { OcdkSurfaceNormalizedCorner } from '../../core/ocdk-surface-normalized-corner';
import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceSymmetryStrategyHelpers } from './ocdk-surface-symmetry-strategy.helpers';
import { isOcdkSurfaceStrategyComputeResultPosition } from '../../core/system/ocdk-surface-strategy-compute-result-position';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';

/**
 * ```
 *    +--surface--+
 *    |           |
 *    o-----------+
 *    o-----anchor-----+
 *    |                |
 *    +----------------+
 *
 *    o = normalized corner
 *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
 * ```
 */
export function ocdkSurfaceSymmetryTlBl(): OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig> {
  const loggerSymmetry = new OcdkLogger('ocdkSurfaceSymmetryTlBl');
  const helpers = OcdkSurfaceSymmetryStrategyHelpers;

  return {
    cornerPoints: { anchor: OcdkSurfaceNormalizedCorner.TOP_LEFT, origin: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT },
    STRATEGIES: {
      standard: {
        inspectors: {
          comfort: {
            availableTop: (opt) => opt.measurements.viewportDistance.top - opt.config.anchorMargin.top - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableBottom: (opt) => opt.measurements.viewportDistance.bottom - opt.config.anchorMargin.bottom - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.height,
            availableLeft: (opt) => opt.measurements.viewportDistance.left - opt.config.anchorMargin.left - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableRight: (opt) => opt.measurements.viewportDistance.right - opt.config.anchorMargin.right - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.width,
          }
        },
        appliers: {
          maxHeight: (opt) => opt.inspections.comfort.availableTop,
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => -opt.config.anchorMargin.top - opt.measurements.surfaceSize.height,
          verticalAlignment: 'top',
          horizontalOffset: () => 0,
          horizontalAlignment: 'left'
        }
      },
      FALLBACK: {
        inspectors: {
          comfort: {
            availableTop: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_COMFORT
          },
          limit: {
            availableTop: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_LIMIT
          }
        },
        appliers: {
          maxHeight: (opt) => helpers.symmetryFallbackMaxHeightTxBx(opt, opt.inspections.comfort.availableTop, opt.inspections.limit.availableTop),
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => helpers.symmetryFallbackVerticalOffsetTxBx(opt, opt.inspections.comfort.availableTop, opt.inspections.limit.availableTop),
          verticalAlignment: 'top',
          horizontalOffset: () => 0,
          horizontalAlignment: 'left'
        }
      },
      COMPUTE: (opt) => {
        loggerSymmetry.log('[COMPUTE] position TOP_LEFT BOTTOM_LEFT');
        // no enough available space on top, trigger a position change to bottom instead
        if (opt.measurements.surfaceSize.height > opt.inspections.comfort.availableTop) {
          // already in a switch process and this new position isn't good enough, go to the fallback of the last strategy position
          if (opt.switchFrom && isOcdkSurfaceStrategyComputeResultPosition(opt.switchFrom) && opt.switchFrom.position) {
            loggerSymmetry.log('[COMPUTE] already switched off but no enough space: continue with the fallback of tl-bl', opt.switchFrom);
            return opt.switchFrom.position.STRATEGIES.FALLBACK;
          }
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
              origin: OcdkSurfaceNormalizedCorner.TOP_LEFT
            }
          };
        }
        return; // no position switching: apply the current one
      }

    }
  };
}
