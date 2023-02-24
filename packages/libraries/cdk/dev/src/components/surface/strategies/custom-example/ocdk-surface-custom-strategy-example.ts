import {
  OcdkLogger,
  OcdkSurfaceNormalizedCorner,
  OcdkSurfaceOnePositionStrategy,
  OcdkSurfaceStrategyDefiner,
  OcdkSurfaceStrategyDefinerConfig
} from '@ovhcloud/ods-cdk';

/**
 * global config to implement for the `custom` example strategy
 */
export interface OcdkSurfaceCustomStrategyConfigExample extends OcdkSurfaceStrategyDefinerConfig {
}

/**
 * `custom` positioning strategy example for the CDK overlay
 */
export class OcdkSurfaceCustomStrategyExample implements OcdkSurfaceStrategyDefiner<OcdkSurfaceCustomStrategyConfigExample> {
  logger = new OcdkLogger('OcdkSurfaceCustomStrategyExample');

  getConfig(): OcdkSurfaceCustomStrategyConfigExample {
    return {};
  }

  getPositions(): [OcdkSurfaceOnePositionStrategy<OcdkSurfaceCustomStrategyConfigExample>, ...OcdkSurfaceOnePositionStrategy<OcdkSurfaceCustomStrategyConfigExample>[]] {
    return [
      // ### anchored at bottom
      {
        cornerPoints: { anchor: OcdkSurfaceNormalizedCorner.BOTTOM_LEFT, origin: OcdkSurfaceNormalizedCorner.TOP_LEFT },
        STRATEGIES: {
          // main mode : standard
          standard: {
            inspectors: {
              // analyze spaces in your own way (comfort margin mode)
              comfort: {
                availableBottom: () => 0,
                availableLeft: () => 0,
                availableRight: () => 0,
                availableTop: () => 0,
              },
              // analyze spaces in your own way (limit margin mode)
              limit: {
                availableBottom: () => 0,
                availableLeft: () => 0,
                availableRight: () => 0,
                availableTop: () => 0,
              }
            },
            // use analyzed spaces (limit and margin) and fill final values
            appliers: {
              maxHeight: (opt) => opt.measurements.surfaceSize.height,
              verticalOffset: () => 0,
              verticalAlignment: 'top',
              horizontalOffset: (opt) => -opt.measurements.surfaceSize.width,
              horizontalAlignment: 'right'
            }
          },
          // fallback mode
          FALLBACK: {
            inspectors: {
              // analyze comfort spaces in your own alternative way (standard mode has no enough space)
              comfort: {
                availableBottom: () => 0,
                availableLeft: () => 0,
                availableRight: () => 0,
                availableTop: () => 0,
              },
              // analyze limit spaces in your own alternative way (standard mode has no enough space)
              limit: {
                availableBottom: () => 0,
                availableLeft: () => 0,
                availableRight: () => 0,
                availableTop: () => 0,
              },
            },
            // use analyzed spaces (limit and margin) and fill final values
            appliers: {
              maxHeight: () => 100,
              verticalOffset: () => 0,
              verticalAlignment: 'top',
              horizontalOffset: () => 0,
              horizontalAlignment: 'left'
            }
          },
          // make a choice of position: keep, switch or fallback
          COMPUTE: () => {
            this.logger.log('[COMPUTE] position BOTTOM_LEFT TOP_LEFT');
            return undefined; // no position switching: apply the current one
          }

        }
      }
      // write here all the other positions of the strategy table position
    ];
  }
}
