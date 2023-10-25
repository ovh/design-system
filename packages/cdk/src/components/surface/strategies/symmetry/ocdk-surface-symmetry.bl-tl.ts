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
 *    o----------------+
 *    o--surface--+
 *    |           |
 *    +-----------+
 *
 *    o = normalized corner
 *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
 * ```
 */
export function ocdkSurfaceSymmetryBlTl(): OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig> {
  const loggerSymmetry = new OcdkLogger('ocdkSurfaceSymmetryBlTl');
  const helpers = OcdkSurfaceSymmetryStrategyHelpers;

  return {
    cornerPoints: { anchor: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT, origin: OcdkSurfaceNormalizedCorner.TOP_LEFT },
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
          maxWidth: (opt) => opt.inspections.comfort.availableRight,
          verticalOffset: (opt) => opt.measurements.anchorSize.height + opt.config.anchorMargin.bottom,
          verticalAlignment: 'top',
          horizontalOffset: () => 0,
          horizontalAlignment: 'left',
        },
      },
      /**
       * The main idea is to keep as much as possible the original principle: surface is below.
       * When the surface touch and has a height bigger than the bottom space between the anchor
       * and the comfort margin, it stays stuck to the bottom comfort margin and overlap the anchor:
       * ```
       *    x-----anchor-----+
       *    o--surface--+    |
       *    o-----------|----+
       * ---+-----------+------------- <-- comfort margin
       *
       *
       *    o--surface--+
       *    x-----anchor|----+
       *    |           |    |
       *    o-----------|----+
       * ---+-----------+------------- <-- comfort margin
       *
       *    o = normalized corner
       *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
       * ```
       *
       * Once it overlaps the top comfort margin, the surface stay centered vertically and grows until it
       * touches the top and bottom limit margin.
       * At the end, it will never overlap the limit margin:
       * ```
       * ---o--surface--+------------- <-- comfort margin
       *    x-----anchor|----+
       *    |           |    |
       *    o-----------|----+
       * ---+-----------+------------- <-- comfort margin
       *
       *
       *    o--surface--+
       * ---|-----------|------------- <-- comfort margin
       *    x-----anchor|----+
       *    |           |    |
       *    o-----------|----+
       * ---|-----------|------------- <-- comfort margin
       *    o-----------+
       *
       *
       * ---o--surface--+------------- <-- limit margin
       *    |           |
       * ---|-----------|------------- <-- comfort margin
       *    x-----anchor|----+
       *    |           |    |
       *    o-----------|----+
       * ---|-----------|------------- <-- comfort margin
       *    |           |
       * ---o-----------+------------- <-- limit margin
       *
       *    o = normalized corner
       *    x = reference for the position offset (at top/left - for verticalAlignment/horizontalAlignment)
       * ```
       *
       */
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
          horizontalOffset: () => 0,
          horizontalAlignment: 'left',
        },
      },
      COMPUTE: (opt) => {
        loggerSymmetry.log('[COMPUTE] position BOTTOM_LEFT TOP_LEFT');
        if (opt.measurements.surfaceSize.height > opt.inspections.comfort.availableBottom) {
          // already in a switch process and this new position isn't good enough, go to the fallback of the last strategy position
          if (opt.switchFrom && isOcdkSurfaceStrategyComputeResultPosition(opt.switchFrom) && opt.switchFrom.position) {
            loggerSymmetry.log('[COMPUTE] already switched off but no enough space: continue with the fallback of bl-tl', opt.switchFrom);
            return opt.switchFrom.position.STRATEGIES.FALLBACK;
          }
          if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableRight) {
            return {
              cornerPoints: {
                anchor: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
                origin: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
              },
            };
          }
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.TOP_LEFT,
              origin: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT,
            },
          };
        } else if (opt.measurements.surfaceSize.width > opt.inspections.comfort.availableRight) {
          return {
            cornerPoints: {
              anchor: OcdkSurfaceNormalizedCorner.BOTTOM_RIGHT,
              origin: OcdkSurfaceNormalizedCorner.TOP_RIGHT,
            },
          };
        }
        return; // no position switching: apply the current one
      },

    },
  };
}
