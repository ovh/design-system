import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';
import { OcdkSurfaceNormalizedCorner } from '../../core/ocdk-surface-normalized-corner';
import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceSymmetryStrategyHelpers } from './ocdk-surface-symmetry-strategy.helpers';
import { isOcdkSurfaceStrategyComputeResultPosition } from '../../core/system/ocdk-surface-strategy-compute-result-position';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';

/**
 * ```
 *    +--surface--+
 *    |           | +-----anchor-----+
 *    |           | |                |
 *    +-----------o o----------------+
 *
 *
 *    o = normalized corner
 *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
 * ```
 */
export function ocdkSurfaceSymmetryBlBr(): OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig> {
  const loggerSymmetry = new OcdkLogger('ocdkSurfaceSymmetryBlBr');
  const helpers = OcdkSurfaceSymmetryStrategyHelpers;

  return {
    cornerPoints: {
      anchor: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
      origin: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT
    },
    STRATEGIES: {
      standard: {
        inspectors: {
            comfort: {
              availableTop: (opt) => opt.measurements.viewportDistance.top  - opt.config.MARGIN_TO_EDGE_COMFORT,
              availableBottom: (opt) => opt.measurements.viewportDistance.bottom - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.height,
              availableLeft: (opt) => opt.measurements.viewportDistance.left - opt.config.MARGIN_TO_EDGE_COMFORT,
              availableRight: (opt) => opt.measurements.viewportDistance.right - opt.config.MARGIN_TO_EDGE_COMFORT + opt.measurements.anchorSize.width,
            }
          },
          appliers: {
            maxHeight: (opt) => opt.inspections.comfort.availableBottom /*- opt.config.anchorMargin.top*/,
            maxWidth: (opt) => opt.inspections.comfort.availableLeft,
            verticalOffset: () => 0,
            verticalAlignment: 'bottom',
            horizontalOffset: (opt) => /*opt.measurements.anchorSize.width + opt.config.anchorMargin.right*/ -opt.config.anchorMargin.left - opt.measurements.surfaceSize.width,
            horizontalAlignment: 'left'
          }
      },
      FALLBACK: {
        inspectors: {
          comfort: {
            availableLeft: (opt) => opt.measurements.viewportSize.width - 2 * opt.config.MARGIN_TO_EDGE_COMFORT
          },
          limit: {
            availableLeft: (opt) => opt.measurements.viewportSize.width - 2 * opt.config.MARGIN_TO_EDGE_LIMIT
          }
        },
        appliers: {
          maxHeight: (opt) => opt.measurements.surfaceSize.height,
          maxWidth: (opt) => helpers.symmetryFallbackMaxWidthLxRx(opt, opt.inspections.comfort.availableLeft, opt.inspections.limit.availableLeft),
          verticalOffset: () => 0,
          verticalAlignment: 'bottom',
          horizontalOffset: (opt) => helpers.symmetryFallbackHorizontalOffsetLxRx(opt, opt.inspections.comfort.availableLeft, opt.inspections.limit.availableLeft),
          horizontalAlignment: 'right'
        }
      },
      COMPUTE: (opt) => {
        loggerSymmetry.log('[COMPUTE] position BOTTOM_LEFT BOTTOM_RIGHT');
        // no enough available space on left, trigger a position change to right instead
        if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableLeft) {
          // already in a switch process and this new position isn't good enough, go to the fallback of the last strategy position
          if (opt.switchFrom && isOcdkSurfaceStrategyComputeResultPosition(opt.switchFrom) && opt.switchFrom.position) {
            loggerSymmetry.log('[COMPUTE] already switched off but no enough space: continue with the fallback of bl-br', opt.switchFrom);
            return opt.switchFrom.position.STRATEGIES.FALLBACK;
          }
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
              origin: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT
            }
          };
        }
        return; // no position switching: apply the current one
      }

    }
  };
}
