import { OcdkSurfaceCornerBit } from './ocdk-surface-corner-bit';

export enum OcdkSurfaceNormalizedCorner {
  /** 0 */
  TOP_LEFT = 0,
  /** 4 */
  TOP_RIGHT = OcdkSurfaceCornerBit.RIGHT,
  /** 1 */
  BOTTOM_LEFT = OcdkSurfaceCornerBit.BOTTOM,
  /** 5 */
  BOTTOM_RIGHT = OcdkSurfaceCornerBit.BOTTOM | OcdkSurfaceCornerBit.RIGHT, // tslint:disable-line:no-bitwise
}
