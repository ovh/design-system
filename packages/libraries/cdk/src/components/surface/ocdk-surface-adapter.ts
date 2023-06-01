import { OcdkSurfaceDimensions } from './core/ocdk-surface-dimensions';
import { OcdkSurfacePoint } from './core/ocdk-surface-point';
import { OcdkSurfaceDistance } from './core/ocdk-surface-distance';
import { OcdkSurfaceMaxDimensions } from './core/ocdk-surface-max-dimensions';

export interface OcdkSurfaceAdapter {
  addClass(className: string): void;
  removeClass(className: string): void;
  hasClass(className: string): boolean;
  hasAnchor(): boolean;

  isElementInContainer(el: Element): boolean;
  isFocused(): boolean;
  isRtl(): boolean;

  getInnerDimensions(): OcdkSurfaceDimensions;
  getMaxDimensions(): OcdkSurfaceMaxDimensions;
  getAnchorDimensions(): ClientRect | null;
  getWindowDimensions(): OcdkSurfaceDimensions;
  getBodyDimensions(): OcdkSurfaceDimensions;
  getWindowScroll(): OcdkSurfacePoint;
  setPosition(position: Partial<OcdkSurfaceDistance>): void;
  cleanUpStyles(): void;
  setMaxHeight(height: string): void;
  setMinHeight(height: string): void;
  setMaxWidth(width: string): void;
  setMinWidth(width: string): void;
  autoDetectItemHeight(): number;
  setTransformOrigin(origin: string): void;
  getOwnerDocument?(): Document;

}
