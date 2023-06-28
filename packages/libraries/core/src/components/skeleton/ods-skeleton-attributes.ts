import { OdsSkeletonSize } from './ods-skeleton-size';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsSkeletonAttributes extends OdsComponentAttributes {
  /**
   * Wether or not skeleton size fill its parent
   */
  inline?: boolean
  /**
   * Wether or not skeleton size is randomized
   */
  randomized?: boolean
  /**
   * Skeleton size
   */
  size?: OdsSkeletonSize
}
