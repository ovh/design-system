import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';
import { OcdkSurfaceNormalizedCorner } from '../../core/ocdk-surface-normalized-corner';
import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceSymmetryStrategyHelpers } from './ocdk-surface-symmetry-strategy.helpers';
import {
  isOcdkSurfaceStrategyComputeResultPosition
} from '../../core/system/ocdk-surface-strategy-compute-result-position';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';

/**
 * ```
 *    +-----anchor-----+
 *    |                |
 *    +----------------o
 *         +--surface--o
 *         |           |
 *         +-----------+
 *
 *    o = normalized corner
 *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
 * ```
 */
export function ocdkSurfaceSymmetryBrTr(): OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig> {
  const loggerSymmetry = new OcdkLogger('OcdkSurfaceSymmetryBrTr');
  const helpers = OcdkSurfaceSymmetryStrategyHelpers;

  return {
    cornerPoints: {
      anchor: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
      origin: OcdkSurfaceNormalizedCorner.TOP_RIGHT
    },
    STRATEGIES: {
      standard: {
        inspectors: {
          comfort: {
            availableTop: (opt) => opt.measurements.viewportDistance.top - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.height,
            availableBottom: (opt) => opt.measurements.viewportDistance.bottom - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableLeft: (opt) => opt.measurements.viewportDistance.left - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.width,
            availableRight: (opt) => opt.measurements.viewportDistance.right - opt.config.MARGIN_TO_EDGE_COMFORT,
          }
        },
        appliers: {
          maxHeight: (opt) => opt.inspections.comfort.availableBottom - opt.config.anchorMargin.bottom,
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => opt.measurements.anchorSize.height + opt.config.anchorMargin.bottom,
          verticalAlignment: 'top',
          horizontalOffset: () => 0,
          horizontalAlignment: 'right'
        }
      },
      FALLBACK: {
        inspectors: {
          comfort: {
            availableBottom: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_COMFORT
          },
          limit: {
            availableBottom: (opt) => opt.measurements.viewportSize.height - 2 * opt.config.MARGIN_TO_EDGE_LIMIT
          },
        },
        appliers: {
          maxHeight: (opt) => helpers.symmetryFallbackMaxHeightBxTx(opt, opt.inspections.comfort.availableBottom, opt.inspections.limit.availableBottom),
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => helpers.symmetryFallbackVerticalOffsetBxTx(opt, opt.inspections.comfort.availableBottom, opt.inspections.limit.availableBottom),
          verticalAlignment: 'top',
          horizontalOffset: () => 0,
          horizontalAlignment: 'right'
        }
      },
      COMPUTE: (opt) => {
        loggerSymmetry.log('[COMPUTE] position BOTTOM_RIGHT TOP_RIGHT');
        // no enough available space on bottom, trigger a position change to top instead
        if (opt.measurements.surfaceSize.height > opt.inspections.comfort.availableBottom) {
          // already in a switch process and this new position isn't good enough, go to the fallback of the last strategy position
          if (opt.switchFrom && isOcdkSurfaceStrategyComputeResultPosition(opt.switchFrom) && opt.switchFrom.position) {
            loggerSymmetry.log('[COMPUTE] already switched off but no enough space: continue with the fallback of br-tr', opt.switchFrom);
            return opt.switchFrom.position.STRATEGIES.FALLBACK;
          }
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
              origin: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT
            }
          };
        }
        return; // no position switching: apply the current one
      }

    }
  };
}
