import { OdsComponentController } from '../ods-component-controller';
import { OdsSkeleton } from './ods-skeleton';

/**
 * common controller logic for skeleton component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSkeletonController extends OdsComponentController<OdsSkeleton> {
  constructor(component: OdsSkeleton) {
    super(component);
  }

  /**
   * mandatory function
   */
  afterInit(): void {}
}
