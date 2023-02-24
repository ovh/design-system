import { OcdkSurface } from './ocdk-surface';
import { OcdkAutoLayoutMeasurements } from './core/ocdk-auto-layout-measurements';
import { OcdkSurfaceAdapter } from './ocdk-surface-adapter';
import { OcdkSurfacePoint } from './core/ocdk-surface-point';
import { OcdkSurfaceDimensions } from './core/ocdk-surface-dimensions';
import { OcdkSurfaceCorner } from './core/ocdk-surface-corner';
import { ocdkSurfaceCssClasses, OcdkSurfaceDefaultConfig } from './ocdk-surface-default-config';
import { OcdkSurfaceCornerBit } from './core/ocdk-surface-corner-bit';
import { OcdkSurfaceDistance } from './core/ocdk-surface-distance';
import { OcdkLogger } from '../../logger/ocdk-logger';
import { OcdkSurfaceNormalizedCorner } from './core/ocdk-surface-normalized-corner';
import { OcdkSurfaceCornerPointsNormalized } from './core/ocdk-surface-corner-points-normalized';
import { OcdkSurfaceCornerPoints } from './core/ocdk-surface-corner-points';
import { OcdkSurfaceInspections } from './core/ocdk-surface-inspections';
import { OcdkSurfaceAnimationList } from './core/ocdk-surface-animation';
import { OcdkSurfaceStrategyDefiner } from './core/system/ocdk-surface-strategy-definer';
import { OcdkSurfaceInspectionValues } from './core/ocdk-surface-inspection-values';
import {
  OcdkSurfaceStrategyInspectorDetails,
  OcdkSurfaceStrategyInspectorDetailsFulFilled
} from './core/system/ocdk-surface-strategy-inspector-details';
import { OcdkSurfaceStrategyAppliers } from './core/system/ocdk-surface-strategy-appliers';
import {
  isOcdkSurfaceStrategyComputeResultPosition,
  OcdkSurfaceStrategyComputeResultPosition
} from './core/system/ocdk-surface-strategy-compute-result-position';
import { OcdkSurfaceStrategyComputeResult } from './core/system/ocdk-surface-strategy-compute-result';
import {
  isOcdkSurfaceStrategyInspectorsAndAppliers
} from './core/system/ocdk-surface-strategy-inspectors-and-appliers';
import {
  isOcdkSurfaceStrategyInspectorComfort,
  OcdkSurfaceStrategyInspectorComfort
} from './core/system/ocdk-surface-strategy-inspector-comfort';
import {
  isOcdkSurfaceStrategyInspectorLimit,
  OcdkSurfaceStrategyInspectorLimit
} from './core/system/ocdk-surface-strategy-inspector-limit';
import {
  isOcdkSurfaceStrategyInspectorFulfilled,
  OcdkSurfaceStrategyInspectorFulfilled
} from './core/system/ocdk-surface-strategy-inspector-fulfilled';
import { OcdkSurfaceStrategyInspectors } from './core/system/ocdk-surface-strategy-inspectors';
import { OcdkSurfaceOnePositionStrategy } from './core/ocdk-surface-one-position-strategy';
import { OcdkSurfaceConfig } from './core/ocdk-surface-config';
import { OcdkSurfaceMaxDimensions } from './core/ocdk-surface-max-dimensions';
import { OcdkSurfaceStrategyDefinerConfig } from './core/system/ocdk-surface-strategy-definer-config';

export class OcdkSurfaceController<StrategyConfig = any> {
  static totalIds = 0;
  animated = true;
  private adapter: OcdkSurfaceAdapter;
  /** type of animation and its default value */
  private animation = OcdkSurfaceDefaultConfig.DEFAULT_ANIMATION;
  private animationRequestId = 0;
  private closeAnimationEndTimerId = 0;
  private component: OcdkSurface;
  /** config of the surface */
  private config: OcdkSurfaceConfig = OcdkSurfaceDefaultConfig
  private customAnchorMargin?: OcdkSurfaceDistance;
  private customCornerPoints?: OcdkSurfaceCornerPoints;
  private dimensions!: OcdkSurfaceDimensions;
  private isSurfaceOpen = false;
  private itemHeight = 0;
  private maxDimensions!: OcdkSurfaceMaxDimensions;
  private minVisibleItem = 1;
  // private measurements?: OcdkAutoLayoutMeasurements;
  private openAnimationEndTimerId = 0;
  private strategy: OcdkSurfaceStrategyDefiner<StrategyConfig> = OcdkSurfaceDefaultConfig.POSITION_STRATEGY.strategy;
  private readonly surfacePosition: OcdkSurfacePoint = { x: 0, y: 0 };
  // private maxHeight = 0;
  private uniqueId = OcdkSurfaceController.totalIds++;
  // private openBottomBias = 0;
  private logger = new OcdkLogger(`OcdkSurface #${this.uniqueId}`);

  constructor(component: OcdkSurface) {
    this.component = component;
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

  getAnimation() {
    return this.animation;
  }

  /**
   * Corner of the surface to which surface is attached to anchor.
   * ```
   * example for LTR:
   *  Anchor corner --->+----------+
   *  (TOP_START)       |  ANCHOR  |
   *                    +----------+
   *  Origin corner --->+--------------+
   *  (TOP_START)       |              |
   *                    |              |
   *                    |   SURFACE    |
   *                    |              |
   *                    |              |
   *                    +--------------+
   * ```
   */
  getCornerPoints() {
    return this.customCornerPoints || this.config.cornerPoints;
  }

  init():void {
    const { OPEN } = ocdkSurfaceCssClasses;

    if (this.adapter.hasClass(OPEN)) {
      this.isSurfaceOpen = true;
    }
  }

  onDestroy(): void {
    clearTimeout(this.openAnimationEndTimerId);
    clearTimeout(this.closeAnimationEndTimerId);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId);
  }

  open(): void {
    this.logger.log('[open]', { opened: this.component.opened });
    if (this.isSurfaceOpen) {
      return;
    }

    this.logger.log('[open]', 'open the surface');

    this.closeAnimationEndTimerId && this.endClosingAnimation();

    if (this.animated) {
      this.adapter.addClass(ocdkSurfaceCssClasses.ANIMATING_OPEN);
      this.animationRequestId = requestAnimationFrame(() => {
        this.dimensions = this.adapter.getInnerDimensions();
        this.maxDimensions = this.adapter.getMaxDimensions();
        this.itemHeight = this.adapter.autoDetectItemHeight();
        this.autoPosition();
        this.adapter.addClass(ocdkSurfaceCssClasses.OPEN);
        const duration = this.config.ANIMATIONS[ this.animation ].TRANSITION_CLOSE_DURATION;
        this.logger.log('[open]', 'remove css in', duration);
        this.openAnimationEndTimerId = window.setTimeout(
          this.endOpeningAnimation.bind(this),
          duration);
      });

      this.isSurfaceOpen = true;
    } else {
      this.isSurfaceOpen = true;
      this.adapter.addClass(ocdkSurfaceCssClasses.OPEN);
      this.dimensions = this.adapter.getInnerDimensions();
      this.maxDimensions = this.adapter.getMaxDimensions();
      this.logger.log('[open]', { dimensions: this.dimensions });
      this.autoPosition();
    }
  }

  resetDefaultAnimation(): void {
    this.animation = this.config.DEFAULT_ANIMATION;
  }

  setAnchorCorner(anchorCorner: OcdkSurfaceCorner) {
    this.customCornerPoints = {
      anchor: anchorCorner,
      origin: this.customCornerPoints?.origin ?? this.config.cornerPoints.origin
    };
  }

  setAnchorMargin(margin: Partial<OcdkSurfaceDistance>) {
    this.customAnchorMargin = {
      top: margin.top || 0,
      right: margin.right || 0,
      bottom: margin.bottom || 0,
      left: margin.left || 0
    }
  }

  setAnimation(name?: string) {
    if (name) {
      const upper = name.toUpperCase();
      const animation = OcdkSurfaceAnimationList.find((anim) => anim === upper);
      if (animation) {
        this.animation = animation;
      } else {
        this.logger.warn('[setAnimation]', `wrong animation name. ignoring.`, { name });
      }
    } else {
      this.resetDefaultAnimation();
    }
  }

  setCornerPoints(cornerPoints: Partial<OcdkSurfaceCornerPoints>) {
    this.customCornerPoints = {
      anchor: cornerPoints.anchor ?? this.config.cornerPoints.anchor,
      origin: cornerPoints.origin ?? this.config.cornerPoints.origin
    };
  }

  setOriginCorner(originCorner: OcdkSurfaceCorner) {
    this.customCornerPoints = {
      anchor: this.customCornerPoints?.anchor ?? this.config.cornerPoints.anchor,
      origin: originCorner
    };
  }

  private autoPosition() {
    this.logger.log('[autoposition]');
    const cornerPoints = this.getCornerPoints();
    const wantedAnchorCorner = cornerPoints.anchor;
    const wantedOriginCorner = cornerPoints.origin;
    this.logger.log('[autoposition]', { wantedAnchorCorner });
    this.logger.log('[autoposition]', { wantedOriginCorner });

    const normalizedCornerPoints = this.getNormalizedCorners();

    // Compute measurements for auto position methods reuse.
    const measurements = this.getAutoLayoutMeasurements();
    this.logger.log('[findOnePosition]', { measurements });

    let inspectors: OcdkSurfaceStrategyInspectors<StrategyConfig>;
    let appliers: OcdkSurfaceStrategyAppliers<StrategyConfig>;
    const newPos = this.findOnePosition(normalizedCornerPoints, measurements);
    let wantedPositionStrategy = newPos.wantedPositionStrategy;
    let inspections = newPos.inspections;
    let positionComputed: OcdkSurfaceStrategyComputeResultPosition<StrategyConfig>;
    inspectors = wantedPositionStrategy.STRATEGIES.standard.inspectors;
    appliers = wantedPositionStrategy.STRATEGIES.standard.appliers;

    if (isOcdkSurfaceStrategyInspectorsAndAppliers<StrategyConfig>(newPos.positionComputed)) {
      this.logger.error('[autoposition]', 'positionComputed is a custom fallback at first', { positionComputed: newPos.positionComputed });
      return;
    } else {
      positionComputed = newPos.positionComputed || newPos.wantedPositionStrategy;
      if (positionComputed.cornerPoints.anchor === wantedPositionStrategy.cornerPoints.anchor && positionComputed.cornerPoints.origin === wantedPositionStrategy.cornerPoints.origin) {
        this.logger.info('[autoposition]', 'keep applicable position strategy');
      } else {
        this.logger.info('[autoposition]', 'must find an applicable position strategy');
        const fallbackFrom = positionComputed;
        const newPos = this.findOnePosition(positionComputed.cornerPoints, measurements, fallbackFrom);
        wantedPositionStrategy = newPos.wantedPositionStrategy;
        inspections = newPos.inspections;
        inspectors = wantedPositionStrategy.STRATEGIES.standard.inspectors;
        appliers = wantedPositionStrategy.STRATEGIES.standard.appliers;

        if (isOcdkSurfaceStrategyInspectorsAndAppliers<StrategyConfig>(newPos.positionComputed)) {
          this.logger.info('[autoposition]', 'positionComputed is a custom fallback at the end', { positionComputed });
          inspectors = newPos.positionComputed.inspectors;
          appliers = newPos.positionComputed.appliers
          inspections = this.getInspections(inspectors, measurements);
          this.logger.log('[autoposition]', { inspections });
        } else {
          positionComputed = newPos.positionComputed || newPos.wantedPositionStrategy;
          if (!positionComputed || (positionComputed.cornerPoints.anchor === wantedPositionStrategy.cornerPoints.anchor && positionComputed.cornerPoints.origin === wantedPositionStrategy.cornerPoints.origin)) {
            this.logger.info('[autoposition]', 'apply new position', { wantedPositionStrategy });
          } else {
            this.logger.error('[autoposition]', 'no found applicable position strategy');
          }
        }


      }
    }


    const originCorner = positionComputed.cornerPoints.anchor;
    this.logger.log('[autoposition]', { computedOriginCorner: originCorner });

    let maxSurfaceHeight = this.getMaxHeight(appliers, inspections, measurements);
    this.logger.log('[autoposition]', { maxMenuSurfaceHeight: maxSurfaceHeight });

    if (this.maxDimensions.maxHeight !== null && maxSurfaceHeight >= this.maxDimensions.maxHeight) {
      maxSurfaceHeight = this.maxDimensions.maxHeight;
      this.logger.info('[autoposition]', 'computed maxHeight oversize the css max-height of the surface. set to the max to the css value', { maxSurfaceHeight });
    }

    const verticalAlignment = this.getVerticalAlignment(appliers);

    const horizontalAlignment = this.getHorizontalAlignment(appliers);
    this.logger.log('[autoposition]', { verticalAlignment, horizontalAlignment });

    const horizontalOffset = this.getHorizontalOffset(appliers, inspections, measurements, maxSurfaceHeight);
    this.logger.log('[autoposition]', { horizontalOffset });

    const verticalOffset = this.getVerticalOffset(appliers, inspections, measurements, maxSurfaceHeight);
    this.logger.log('[autoposition]', { verticalOffset });

    const position: Partial<OcdkSurfaceDistance> = {
      [ horizontalAlignment ]: horizontalOffset,
      [ verticalAlignment ]: verticalOffset,
    };

    this.logger.log('[autoposition]', 'setTransformOrigin', { horizontalAlignment, verticalAlignment });
    this.adapter.setTransformOrigin(`${horizontalAlignment} ${verticalAlignment}`);

    this.logger.log('[autoposition]', 'setPosition', { position });
    this.adapter.setPosition(position);
    this.adapter.setMaxHeight(maxSurfaceHeight ? maxSurfaceHeight + 'px' : '');
    this.adapter.setMinHeight(this.itemHeight ? (this.itemHeight * this.minVisibleItem) + 'px' : '');

    // If it is opened from the top then add is-open-below class
    if (!this.hasBit(originCorner, OcdkSurfaceCornerBit.BOTTOM)) {
      this.adapter.addClass(ocdkSurfaceCssClasses.IS_OPEN_BELOW);
    }
  }

  private cleanUpAutoPosition() {
    this.adapter.cleanUpStyles();
  }

  private computePosition(
    position: OcdkSurfaceOnePositionStrategy<StrategyConfig>,
    measurements: OcdkAutoLayoutMeasurements,
    inspections: OcdkSurfaceInspections,
    fallbackFrom?: OcdkSurfaceStrategyComputeResult<StrategyConfig>
  ) {
    const computeFct = position.STRATEGIES.COMPUTE;
    return computeFct({
      config: this.config,
      strategyConfig: this.strategy.getConfig(),
      measurements,
      inspections,
      switchFrom: fallbackFrom
    });
  }

  /**
   * terminate the `closing` animation by cancel the timer,
   * removing the animation class, clean up styles
   * and notify it is ended
   */
  private endClosingAnimation() {
    clearTimeout(this.closeAnimationEndTimerId);
    this.closeAnimationEndTimerId = 0;
    this.adapter.removeClass(ocdkSurfaceCssClasses.ANIMATING_CLOSED);
    this.cleanUpAutoPosition();
  }

  private endOpeningAnimation() {
    clearTimeout(this.openAnimationEndTimerId);
    this.openAnimationEndTimerId = 0;
    this.adapter.removeClass(ocdkSurfaceCssClasses.ANIMATING_OPEN);
  }

  private fillInspectors(inspectors: OcdkSurfaceStrategyInspectors<StrategyConfig>): OcdkSurfaceStrategyInspectorFulfilled<StrategyConfig> {
    const genDefaultDetails: () => OcdkSurfaceStrategyInspectorDetailsFulFilled<StrategyConfig> = () => ({
      availableTop: () => 0,
      availableRight: () => 0,
      availableBottom: () => 0,
      availableLeft: () => 0,
    });
    const inspectionFulfilled: OcdkSurfaceStrategyInspectorFulfilled<StrategyConfig> = {
      comfort: genDefaultDetails(),
      limit: genDefaultDetails()
    };

    const fill = (details: OcdkSurfaceStrategyInspectorDetails<StrategyConfig>, overload: OcdkSurfaceStrategyInspectorDetails<StrategyConfig>) => {
      details.availableTop = overload.availableTop ?? details.availableTop;
      details.availableRight = overload.availableRight ?? details.availableRight;
      details.availableBottom = overload.availableBottom ?? details.availableBottom;
      details.availableLeft = overload.availableLeft ?? details.availableLeft;
    }

    const fillComfort = (inspectors: OcdkSurfaceStrategyInspectorComfort<StrategyConfig>) => {
      fill(inspectionFulfilled.comfort, inspectors.comfort);
    }
    const fillLimit = (inspectors: OcdkSurfaceStrategyInspectorLimit<StrategyConfig>) => {
      fill(inspectionFulfilled.limit, inspectors.limit);
    }

    if (isOcdkSurfaceStrategyInspectorFulfilled(inspectors)) {
      fillComfort(inspectors);
      fillLimit(inspectors);
    } else if (isOcdkSurfaceStrategyInspectorLimit(inspectors)) {
      fillLimit(inspectors);
    } else if (isOcdkSurfaceStrategyInspectorComfort(inspectors)) {
      fillComfort(inspectors);
    }

    return inspectionFulfilled;
  }

  private findOnePosition(
    normalizedCornerPoints: OcdkSurfaceCornerPointsNormalized,
    measurements: OcdkAutoLayoutMeasurements,
    fallbackFrom?: OcdkSurfaceStrategyComputeResult<StrategyConfig>
  ) {
    const wantedPositionStrategy = this.findOnePositionStrategy(normalizedCornerPoints);

    const inspections = this.getInspections(wantedPositionStrategy.STRATEGIES.standard.inspectors, measurements);
    this.logger.log('[findOnePosition]', { inspections });

    const positionComputed = this.computePosition(wantedPositionStrategy, measurements, inspections, fallbackFrom);
    if (isOcdkSurfaceStrategyComputeResultPosition<StrategyConfig>(positionComputed)) {
      positionComputed.position = wantedPositionStrategy;
    }
    this.logger.log('[findOnePosition]', { positionComputed });
    return {
      wantedPositionStrategy,
      inspections,
      positionComputed
    }
  }

  private findOnePositionStrategy(normalizedCornerPoints: OcdkSurfaceCornerPointsNormalized): OcdkSurfaceOnePositionStrategy<StrategyConfig> {
    const foundPositionStrategy = this.strategy.getPositions()
      .find(pos => pos.cornerPoints.anchor === normalizedCornerPoints.anchor && pos.cornerPoints.origin === normalizedCornerPoints.origin);
    const defaultPositionStrategy = this.strategy.getPositions()[ 0 ];

    if (foundPositionStrategy) {
      return foundPositionStrategy;
    } else {
      this.logger.error('[findOnePositionStrategy]', 'no position found for anchor and origin', {
        normalizedCornerPoints
      });
    }
    this.logger.warn('[findOnePositionStrategy]', 'using the default position strategy (first one)');
    return defaultPositionStrategy;
  }

  private getAnchorMargin() {
    return this.customAnchorMargin || this.config.anchorMargin;
  }

  private getAutoLayoutMeasurements(): OcdkAutoLayoutMeasurements {
    const anchorDimensionsRetrieved = this.adapter.getAnchorDimensions();
    const bodySize = this.adapter.getBodyDimensions();
    const viewportSize = this.adapter.getWindowDimensions();
    const windowScroll = this.adapter.getWindowScroll();

    let anchorRect: ClientRect;
    if (!anchorDimensionsRetrieved) {
      // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
      anchorRect = {
        top: this.surfacePosition.y,
        right: this.surfacePosition.x,
        bottom: this.surfacePosition.y,
        left: this.surfacePosition.x,
        width: 0,
        height: 0,
      } as never;
      // tslint:enable:object-literal-sort-keys
    } else {
      anchorRect = anchorDimensionsRetrieved;
    }

    return {
      anchorSize: anchorRect,
      bodySize,
      surfaceSize: this.dimensions,
      surfaceMaxSize: this.maxDimensions,
      viewportDistance: {
        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left,
        // tslint:enable:object-literal-sort-keys
      },
      viewportSize,
      windowScroll,
    };
  }

  private getAvailableSpace(inspector: OcdkSurfaceStrategyInspectorDetailsFulFilled<StrategyConfig>, measurements: OcdkAutoLayoutMeasurements): OcdkSurfaceInspectionValues {
    this.logger.log('[getAvailableSpace]', { inspector });
    const opt = {
      config: this.getOverriddenConfig(),
      strategyConfig: this.strategy.getConfig(),
      measurements
    };
    const availableTop = inspector.availableTop(opt);
    const availableBottom = inspector.availableBottom(opt);
    const availableLeft = inspector.availableLeft(opt);
    const availableRight = inspector.availableRight(opt);

    return {
      availableTop,
      availableBottom,
      availableLeft,
      availableRight
    }
  }

  private getHorizontalAlignment(appliers: OcdkSurfaceStrategyAppliers<StrategyConfig>) {
    return appliers.horizontalAlignment;
  }

  private getHorizontalOffset(
    appliers: OcdkSurfaceStrategyAppliers<StrategyConfig>, inspections: OcdkSurfaceInspections,
    measurements: OcdkAutoLayoutMeasurements,
    maxHeight: number) {
    return appliers.horizontalOffset({
      config: this.getOverriddenConfig(),
      strategyConfig: this.strategy.getConfig(),
      measurements,
      inspections,
      maxHeight
    });
  }

  private getInspections(inspectors: OcdkSurfaceStrategyInspectors<StrategyConfig>, measurements: OcdkAutoLayoutMeasurements): OcdkSurfaceInspections {
    const filledInspectors = this.fillInspectors(inspectors);
    return {
      comfort: this.getAvailableSpace(filledInspectors.comfort, measurements),
      limit: this.getAvailableSpace(filledInspectors.limit, measurements)
    };
  }

  private getMaxHeight(appliers: OcdkSurfaceStrategyAppliers<StrategyConfig>, inspections: OcdkSurfaceInspections, measurements: OcdkAutoLayoutMeasurements) {
    const opt = {
      config: this.getOverriddenConfig(),
      inspections,
      measurements,
      strategyConfig: this.strategy.getConfig()
    };
    return appliers.maxHeight(opt);
  }

  private getNormalizedCorners(): OcdkSurfaceCornerPointsNormalized {
    const isRtl = this.adapter.isRtl();
    const cornerPoints = this.getCornerPoints();
    let anchorCorner = cornerPoints.anchor;
    let originCorner = cornerPoints.origin;

    if (isRtl && this.hasBit(anchorCorner, OcdkSurfaceCornerBit.FLIP_RTL)) {
      if (this.hasBit(anchorCorner, OcdkSurfaceCornerBit.RIGHT)) {
        anchorCorner = this.unsetBit(anchorCorner, OcdkSurfaceCornerBit.RIGHT);
      } else {
        anchorCorner = this.setBit(anchorCorner, OcdkSurfaceCornerBit.RIGHT);
      }
    }
    const anchorCornerNormalized = this.normalizeBit(anchorCorner);


    if (isRtl && this.hasBit(originCorner, OcdkSurfaceCornerBit.FLIP_RTL)) {
      if (this.hasBit(originCorner, OcdkSurfaceCornerBit.RIGHT)) {
        originCorner = this.unsetBit(originCorner, OcdkSurfaceCornerBit.RIGHT);
      } else {
        originCorner = this.setBit(originCorner, OcdkSurfaceCornerBit.RIGHT);
      }
    }
    const originCornerNormalized = this.normalizeBit(originCorner);

    return {
      anchor: anchorCornerNormalized,
      origin: originCornerNormalized
    }
  }

  private getOverriddenConfig(): OcdkSurfaceConfig {
    return {
      ...this.config,
      anchorMargin: this.getAnchorMargin()
    }
  }

  private getVerticalAlignment(appliers: OcdkSurfaceStrategyAppliers<StrategyConfig>) {
    return appliers.verticalAlignment;
  }

  private getVerticalOffset(
    appliers: OcdkSurfaceStrategyAppliers<StrategyConfig>, inspections: OcdkSurfaceInspections,
    measurements: OcdkAutoLayoutMeasurements,
    maxHeight: number) {
    return appliers.verticalOffset({
      config: this.getOverriddenConfig(),
      strategyConfig: this.strategy.getConfig(),
      measurements,
      inspections,
      maxHeight
    });
  }

  /**
   * Set your own position strategy.
   * When you define a custom strategy, you must use `OcdkSurfaceStrategyDefiner`.
   * You have to define a config and the different positions with all the inspectors and appliers.
   * @see OcdkSurfaceCustomStrategyExample
   * @param strategy - your strategy
   */
  setCustomStrategy<CustomStrategyConfig extends OcdkSurfaceStrategyDefinerConfig>(strategy: OcdkSurfaceStrategyDefiner<CustomStrategyConfig>) {
    this.strategy = strategy as unknown as OcdkSurfaceStrategyDefiner<StrategyConfig>;
  }

  private hasBit<T extends OcdkSurfaceNormalizedCorner | OcdkSurfaceCorner>(corner: T, bit: OcdkSurfaceCornerBit): boolean {
    return Boolean(corner & bit);  // tslint:disable-line:no-bitwise
  }

  private normalizeBit(corner: OcdkSurfaceCorner): OcdkSurfaceNormalizedCorner {
    if (corner & OcdkSurfaceCornerBit.FLIP_RTL) {
      return corner ^ OcdkSurfaceCornerBit.FLIP_RTL;
    }
    return corner as unknown as OcdkSurfaceNormalizedCorner;
  }

  private setBit<T extends OcdkSurfaceNormalizedCorner | OcdkSurfaceCorner>(corner: T, bit: OcdkSurfaceCornerBit): T {
    return (corner | bit) as T;  // tslint:disable-line:no-bitwise
  }

  private unsetBit<T extends OcdkSurfaceNormalizedCorner | OcdkSurfaceCorner>(corner: T, bit: OcdkSurfaceCornerBit): T {
    return (corner ^ bit) as T;
  }
}
