import { OdsSkeletonAttributes } from './ods-skeleton-attributes';
import { OdsSkeletonSize } from './ods-skeleton-size';

/**
 * Default attribute values of Skeleton component
 * (these are values for `odsSkeletonDefaultAttributes`)
 * @enum
 */
export const odsSkeletonDefaultAttributesDoc = {
  flex: false,
  randomized: false,
  size: OdsSkeletonSize.md,
} as const;

export const odsSkeletonDefaultAttributes = odsSkeletonDefaultAttributesDoc as OdsSkeletonAttributes;
