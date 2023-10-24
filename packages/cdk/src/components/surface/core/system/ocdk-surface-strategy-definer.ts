import { OcdkSurfaceOnePositionStrategy } from '../ocdk-surface-one-position-strategy';

export interface OcdkSurfaceStrategyDefiner<StrategyConfig> {
  /**
   * define and return your own configuration for your strategy.
   */
  getConfig(): StrategyConfig;

  /**
   * Define and returns all the positions with all the positioning computing.
   * You must define at least one position.
   */
  getPositions(): [OcdkSurfaceOnePositionStrategy<StrategyConfig>, ...OcdkSurfaceOnePositionStrategy<StrategyConfig>[]];
}
