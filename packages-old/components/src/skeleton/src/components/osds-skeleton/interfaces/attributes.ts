import type { ODS_SKELETON_SIZE } from '../constants/skeleton-size';

interface OdsSkeletonAttribute {
  /** inline or not: see component principles */
  inline?: boolean;
  /** whether or not skeleton size is randomized */
  randomized?: boolean
  /** skeleton size */
  size?: ODS_SKELETON_SIZE
}

export type {
  OdsSkeletonAttribute,
};
