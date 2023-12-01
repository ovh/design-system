import { OcdkSurface } from './ocdk-interactive-surface';
import { OcdkLogger } from '../../logger/ocdk-logger';

export class OcdkSurfaceController<StrategyConfig = any> {
  static totalIds = 0;
  animated = true;
  private adapter: OcdkSurfaceAdapter;
  /** type of animation and its default value */
  private animation = OcdkSurfaceDefaultConfig.DEFAULT_ANIMATION;
  private animationRequestId = 0;
  private closeAnimationEndTimerId = 0;
  /** config of the surface */
  private config: OcdkSurfaceConfig = OcdkSurfaceDefaultConfig;
  private customAnchorMargin?: OcdkSurfaceDistance;
  private customCornerPoints?: OcdkSurfaceCornerPoints;
  private dimensions!: OcdkSurfaceDimensions;
  private isSurfaceOpen = false;
  private itemHeight = 0;
  private maxDimensions!: OcdkSurfaceMaxDimensions;
  private MIN_VISIBLE_ITEM = 1;
  // private measurements?: OcdkAutoLayoutMeasurements;
  private openAnimationEndTimerId = 0;
  private strategy: OcdkSurfaceStrategyDefiner<StrategyConfig> = OcdkSurfaceDefaultConfig.POSITION_STRATEGY.strategy;
  private readonly surfacePosition: OcdkSurfacePoint = { x: 0, y: 0 };
  // private maxHeight = 0;
  private uniqueId = OcdkSurfaceController.totalIds++;
  // private openBottomBias = 0;
  private logger = new OcdkLogger(`OcdkSurface #${this.uniqueId}`);

  constructor(component: OcdkSurface) {
    this.adapter = component.adapter;
    this.init();
  }

  /**
   * Closes the menu surface.
   */
  close(): void {
    if (!this.isSurfaceOpen) {
      return;
    }

    if (this.animated) {

      this.openAnimationEndTimerId && this.endOpeningAnimation();

      this.adapter.addClass(ocdkSurfaceCssClasses.ANIMATING_CLOSED);
      requestAnimationFrame(() => {
        this.adapter.removeClass(ocdkSurfaceCssClasses.OPEN);
        this.adapter.removeClass(ocdkSurfaceCssClasses.IS_OPEN_BELOW);
        const duration = this.config.ANIMATIONS[ this.animation ].TRANSITION_CLOSE_DURATION;
        this.logger.log('[close]', 'remove css in', duration);
        this.closeAnimationEndTimerId = window.setTimeout(
          this.endClosingAnimation.bind(this),
          duration);
      });

      this.isSurfaceOpen = false;

    } else {

      this.isSurfaceOpen = false;

      this.adapter.removeClass(ocdkSurfaceCssClasses.OPEN);
      this.adapter.removeClass(ocdkSurfaceCssClasses.IS_OPEN_BELOW);
      this.cleanUpAutoPosition();

      return;
    }
  }

  init():void {
    const { OPEN } = ocdkSurfaceCssClasses;

    if (this.adapter.hasClass(OPEN)) {
      this.isSurfaceOpen = true;
    }
  }
}
