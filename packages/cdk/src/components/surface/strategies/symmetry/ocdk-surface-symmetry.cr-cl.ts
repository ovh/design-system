import { OcdkSurfaceSymmetryConfig } from './ocdk-surface-symmetry-strategy';
import { OcdkSurfaceNormalizedCorner } from '../../core/ocdk-surface-normalized-corner';
import { OcdkLogger } from '../../../../logger/ocdk-logger';
import { OcdkSurfaceSymmetryStrategyHelpers } from './ocdk-surface-symmetry-strategy.helpers';
import { isOcdkSurfaceStrategyComputeResultPosition } from '../../core/system/ocdk-surface-strategy-compute-result-position';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';

/**
 * ```
 *                       +-----------+
 *    +-----anchor-----+ |           |
 *    |                o o           |
 *    +----------------+ |           |
 *                       +--surface--+
 *
 *    o = normalized corner
 *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
 * ```
 */
export function ocdkSurfaceSymmetryCrCl(): OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig> {
  const loggerSymmetry = new OcdkLogger('ocdkSurfaceSymmetryCrCl');
  const helpers = OcdkSurfaceSymmetryStrategyHelpers;

  return {
    cornerPoints: {
      anchor: OcdkSurfaceNormalizedCorner.CENTER_RIGHT,
      origin: OcdkSurfaceNormalizedCorner.CENTER_LEFT },
    STRATEGIES: {
      standard: {
        inspectors: {
          comfort: {
            availableTop: (opt) => opt.measurements.viewportDistance.top - opt.config.anchorMargin.top - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableBottom: (opt) => opt.measurements.viewportDistance.bottom - opt.config.anchorMargin.bottom - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableLeft: (opt) => opt.measurements.viewportDistance.left - opt.config.anchorMargin.left - opt.config.MARGIN_TO_EDGE_COMFORT,
            availableRight: (opt) => opt.measurements.viewportDistance.right - opt.config.anchorMargin.right - opt.config.MARGIN_TO_EDGE_COMFORT,
          }
        },
        appliers: {
          maxHeight: (opt) => opt.inspections.comfort.availableTop,
          maxWidth: (opt) => opt.measurements.surfaceSize.width,
          verticalOffset: (opt) => (-opt.measurements.surfaceSize.height / 2) + (opt.measurements.anchorSize.height / 2),
          verticalAlignment: 'top',
          horizontalOffset: (opt) => -opt.config.anchorMargin.right - opt.measurements.surfaceSize.width,
          horizontalAlignment: 'right'
        }
      },
      FALLBACK: {
        inspectors: {
          comfort: {
            availableRight: (opt) => opt.measurements.viewportSize.width - 2 * opt.config.MARGIN_TO_EDGE_COMFORT,
          },
          limit: {
            availableRight: (opt) => opt.measurements.viewportSize.width - 2 * opt.config.MARGIN_TO_EDGE_LIMIT,
          }
        },
        appliers: {
          maxHeight: (opt) => helpers.symmetryFallbackMaxHeight(opt, opt.inspections.comfort.availableTop, opt.inspections.limit.availableTop, false),
          maxWidth: (opt) => helpers.symmetryFallbackMaxWidth(opt, opt.inspections.comfort.availableRight, opt.inspections.limit.availableRight, false),
          verticalOffset: (opt) => (-opt.measurements.surfaceSize.height / 2) + (opt.measurements.anchorSize.height / 2),
          verticalAlignment: 'top',
          horizontalOffset: (opt) => helpers.symmetryFallbackHorizontalOffset(opt, opt.inspections.comfort.availableRight, opt.inspections.limit.availableRight, true),
          horizontalAlignment: 'left',
        }
      },
      COMPUTE: (opt) => {
        loggerSymmetry.log('[COMPUTE] position CENTER_RIGHT CENTER_LEFT');
        // no enough available space on right, trigger a position change to left instead
        if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableRight) {
          // already in a switch process and this new position isn't good enough, go to the fallback of the last strategy position
          if (opt.switchFrom && isOcdkSurfaceStrategyComputeResultPosition(opt.switchFrom) && opt.switchFrom.position) {
            loggerSymmetry.log('[COMPUTE] already switched off but no enough space: continue with the fallback of cr-cl', opt.switchFrom);
            return opt.switchFrom.position.STRATEGIES.FALLBACK;
          }
          if ((opt.measurements.surfaceSize.height - opt.measurements.anchorSize.height) / 2 > opt.inspections.comfort.availableTop) {
            if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableLeft && opt.inspections.comfort.availableBottom > (opt.measurements.surfaceSize.height - opt.measurements.anchorSize.height) / 2) {
              return {
                cornerPoints: {
                  anchor: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
                  origin: OcdkSurfaceNormalizedCorner.TOP_RIGHT
                }
              };
            }
            return {
              cornerPoints: {
                anchor: OcdkSurfaceNormalizedCorner.TOP_LEFT,
                origin: OcdkSurfaceNormalizedCorner.TOP_RIGHT
              }
            };
          }
          else if ((opt.measurements.surfaceSize.height - opt.measurements.anchorSize.height) / 2 > opt.inspections.comfort.availableBottom) {
            if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableLeft) {
              return {
                cornerPoints: {
                  anchor: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
                  origin: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT
                }
              };
            }
            return {
              cornerPoints: {
                anchor: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
                origin: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT
              }
            };
          }
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.CENTER_LEFT,
              origin: OcdkSurfaceNormalizedCorner.CENTER_RIGHT
            }
          };
        }
        else if ((opt.measurements.surfaceSize.height - opt.measurements.anchorSize.height) / 2 > opt.inspections.comfort.availableTop) {
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
              origin: OcdkSurfaceNormalizedCorner.TOP_LEFT
            }
          };
        }
        else if ((opt.measurements.surfaceSize.height - opt.measurements.anchorSize.height) / 2 > opt.inspections.comfort.availableBottom) {
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
