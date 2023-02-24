import { OdsComponentController } from '../ods-component-controller';
import { OdsCartSection } from './ods-cart-section';

/**
 * common controller logic for cart-section component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartSectionController extends OdsComponentController<OdsCartSection> {

  constructor(component: OdsCartSection) {
    super(component);
  }
}
