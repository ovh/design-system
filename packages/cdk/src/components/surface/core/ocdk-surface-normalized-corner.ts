import { OcdkSurfaceCornerBit } from './ocdk-surface-corner-bit';

export enum OcdkSurfaceNormalizedCorner {
  /** 0 */
  TOP_LEFT = 0,
  /** 4 */
  TOP_RIGHT = OcdkSurfaceCornerBit.RIGHT,
  /** 2 */
  TOP_CENTER = OcdkSurfaceCornerBit.CENTER,
  /** 1 */
  BOTTOM_LEFT = OcdkSurfaceCornerBit.BOTTOM,
  /** 5 */
  BOTTOM_RIGHT = OcdkSurfaceCornerBit.BOTTOM | OcdkSurfaceCornerBit.RIGHT, // tslint:disable-line:no-bitwise
  /** 3 */
  BOTTOM_CENTER = 3,
  CENTER_LEFT = 6,
  CENTER_RIGHT = 7,
}
