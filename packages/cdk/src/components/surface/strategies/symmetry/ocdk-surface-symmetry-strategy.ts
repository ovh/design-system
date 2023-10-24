import { OcdkSurfaceStrategyDefiner } from '../../core/system/ocdk-surface-strategy-definer';
import { OcdkSurfaceStrategyDefinerConfig } from '../../core/system/ocdk-surface-strategy-definer-config';
import { OcdkSurfaceOnePositionStrategy } from '../../core/ocdk-surface-one-position-strategy';
import { ocdkSurfaceSymmetryBcTc } from './ocdk-surface-symmetry.bc-tc';
import { ocdkSurfaceSymmetryBlBr } from './ocdk-surface-symmetry.bl-br';
import { ocdkSurfaceSymmetryBlTl } from './ocdk-surface-symmetry.bl-tl';
import { ocdkSurfaceSymmetryBrBl } from './ocdk-surface-symmetry.br-bl';
import { ocdkSurfaceSymmetryBrTr } from './ocdk-surface-symmetry.br-tr';
import { ocdkSurfaceSymmetryTlBl } from './ocdk-surface-symmetry.tl-bl';
import { ocdkSurfaceSymmetryTrBr } from './ocdk-surface-symmetry.tr-br';
import { ocdkSurfaceSymmetryTlTr } from './ocdk-surface-symmetry.tl-tr';
import { ocdkSurfaceSymmetryTrTl } from './ocdk-surface-symmetry.tr-tl';
import { ocdkSurfaceSymmetryTcBc } from './ocdk-surface-symmetry.tc-bc';
import { ocdkSurfaceSymmetryClCr } from './ocdk-surface-symmetry.cl-cr';
import { ocdkSurfaceSymmetryCrCl } from './ocdk-surface-symmetry.cr-cl';

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
      ocdkSurfaceSymmetryBrBl(), // BottomRight and BottomLeft
      ocdkSurfaceSymmetryBlBr(), // BottomLeft and BottomRight
      ocdkSurfaceSymmetryBcTc(), // BottomCenter and TopCenter

      // ### anchored at top
      ocdkSurfaceSymmetryTlBl(), // TopLeft and BottomLeft
      ocdkSurfaceSymmetryTrBr(), // TopRight and BottomRight
      ocdkSurfaceSymmetryTrTl(), // TopRight and TopLeft
      ocdkSurfaceSymmetryTlTr(), // TopLeft and TopRight
      ocdkSurfaceSymmetryTcBc(), // TopCenter and BottomCenter

      // ### anchored at center,
      ocdkSurfaceSymmetryClCr(), // CenterLeft and CenterRight
      ocdkSurfaceSymmetryCrCl(), // CenterRight and CenterLeft
    ];
  }

}
