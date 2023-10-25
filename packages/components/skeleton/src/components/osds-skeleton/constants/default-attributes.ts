import { ODS_SKELETON_SIZE } from './skeleton-size';
import type { OdsSkeletonAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsSkeletonAttribute = Object.freeze({
  inline: false,
  randomized: false,
  size: ODS_SKELETON_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};
