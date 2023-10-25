import { OcdkSurfaceDimensions } from './ocdk-surface-dimensions';
import { OcdkSurfaceDistance } from './ocdk-surface-distance';
import { OcdkSurfaceMaxDimensions } from './ocdk-surface-max-dimensions';
import { OcdkSurfacePoint } from './ocdk-surface-point';

export interface OcdkAutoLayoutMeasurements {
  anchorSize: OcdkSurfaceDimensions;
  bodySize: OcdkSurfaceDimensions;
  surfaceSize: OcdkSurfaceDimensions;
  surfaceMaxSize: OcdkSurfaceMaxDimensions;
  viewportDistance: OcdkSurfaceDistance;
  viewportSize: OcdkSurfaceDimensions;
  windowScroll: OcdkSurfacePoint;
}
