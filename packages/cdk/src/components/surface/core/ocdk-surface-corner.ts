import {OcdkSurfaceCornerBit} from './ocdk-surface-corner-bit';
import {ocdkGetEnumNames} from '../../../types/ocdk-get-enum-names';

export enum OcdkSurfaceCorner {
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
  /** 8 */
  TOP_START = OcdkSurfaceCornerBit.FLIP_RTL,
  /** 12 */
  TOP_END = OcdkSurfaceCornerBit.FLIP_RTL | OcdkSurfaceCornerBit.RIGHT, // tslint:disable-line:no-bitwise
  /** 9 */
  BOTTOM_START = OcdkSurfaceCornerBit.BOTTOM | OcdkSurfaceCornerBit.FLIP_RTL, // tslint:disable-line:no-bitwise
  /** 13 */
  BOTTOM_END = OcdkSurfaceCornerBit.BOTTOM | OcdkSurfaceCornerBit.RIGHT | OcdkSurfaceCornerBit.FLIP_RTL, // tslint:disable-line:no-bitwise
  CENTER_LEFT = 6,
  CENTER_RIGHT = 7,
}

export const OcdkSurfaceCornerNameList = ocdkGetEnumNames(OcdkSurfaceCorner);
