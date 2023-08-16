import { ODS_SKELETON_SIZE } from '../constants/skeleton-size';

interface OdsSkeletonAttribute {
  /** inline or not: see component principles */
  inline?: boolean;
  /**
   * Wether or not skeleton size is randomized
   */
  randomized?: boolean
  /**
   * Skeleton size
   */
  size?: ODS_SKELETON_SIZE
}

export {
  OdsSkeletonAttribute,
};
