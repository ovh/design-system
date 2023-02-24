import { OcdkSurfaceCornerBit } from './ocdk-surface-corner-bit';
import { ocdkGetEnumNames } from '../../../types/ocdk-get-enum-names';

export enum OcdkSurfaceCorner {
  /** 0 */
  TOP_LEFT = 0,
  /** 4 */
  TOP_RIGHT = OcdkSurfaceCornerBit.RIGHT,
  /** 1 */
  BOTTOM_LEFT = OcdkSurfaceCornerBit.BOTTOM,
  /** 5 */
  BOTTOM_RIGHT = OcdkSurfaceCornerBit.BOTTOM | OcdkSurfaceCornerBit.RIGHT, // tslint:disable-line:no-bitwise
  /** 8 */
  TOP_START = OcdkSurfaceCornerBit.FLIP_RTL,
  /** 12 */
  TOP_END = OcdkSurfaceCornerBit.FLIP_RTL | OcdkSurfaceCornerBit.RIGHT, // tslint:disable-line:no-bitwise
  /** 9 */
  BOTTOM_START = OcdkSurfaceCornerBit.BOTTOM | OcdkSurfaceCornerBit.FLIP_RTL, // tslint:disable-line:no-bitwise
  /** 13 */
  BOTTOM_END = OcdkSurfaceCornerBit.BOTTOM | OcdkSurfaceCornerBit.RIGHT | OcdkSurfaceCornerBit.FLIP_RTL, // tslint:disable-line:no-bitwise
}

export const OcdkSurfaceCornerNameList = ocdkGetEnumNames(OcdkSurfaceCorner);
