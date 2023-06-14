import { OcdkSurfaceStrategyDefiner } from '../../core/system/ocdk-surface-strategy-definer';
import { OcdkSurfaceStrategyDefinerConfig } from '../../core/system/ocdk-surface-strategy-definer-config';
import { ocdkSurfaceSymmetryBlBr } from './ocdk-surface-symmetry.bl-br';
import { ocdkSurfaceSymmetryBlTl } from './ocdk-surface-symmetry.bl-tl';
import { ocdkSurfaceSymmetryBrBl } from './ocdk-surface-symmetry.br-bl';
import { ocdkSurfaceSymmetryBrTr } from './ocdk-surface-symmetry.br-tr';
import { ocdkSurfaceSymmetryTlBl } from './ocdk-surface-symmetry.tl-bl';
import { ocdkSurfaceSymmetryTrBr } from './ocdk-surface-symmetry.tr-br';
import { ocdkSurfaceSymmetryTlTr } from './ocdk-surface-symmetry.tl-tr';
import { ocdkSurfaceSymmetryTrTl } from './ocdk-surface-symmetry.tr-tl';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';

/**
 * global config to implement for the `symmetry` strategy
 */
export interface OcdkSurfaceSymmetryConfig extends OcdkSurfaceStrategyDefinerConfig {
}

/**
 * `symmetry` positioning strategy for the CDK overlay
 */
export class OcdkSurfaceSymmetryStrategy implements OcdkSurfaceStrategyDefiner<OcdkSurfaceSymmetryConfig> {

  getConfig(): OcdkSurfaceSymmetryConfig {
    return {};
  }

  getPositions(): [OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig>, ...OcdkSurfaceOnePositionStrategy<OcdkSurfaceSymmetryConfig>[]] {
    return [
      // ### anchored at bottom
      ocdkSurfaceSymmetryBlTl(), // BottomLeft and TopLeft
      ocdkSurfaceSymmetryBrTr(), // BottomRight and TopRight
      // todo: BottomRight and BottomLeft
      // todo: BottomLeft and BottomRight
      ocdkSurfaceSymmetryBrBl(), // BottomRight and BottomLeft
      ocdkSurfaceSymmetryBlBr(), // BottomLeft and BottomRight


      // ### anchored at top
      ocdkSurfaceSymmetryTlBl(), // TopLeft and BottomLeft
      ocdkSurfaceSymmetryTrBr(), // TopRight and BottomRight
      // todo: TopRight and TopLeft
      // todo: TopLeft and TopRight
      ocdkSurfaceSymmetryTrTl(), // TopRight and TopLeft
      ocdkSurfaceSymmetryTlTr()  // TopLeft and TopRight
    ];
  }

}
