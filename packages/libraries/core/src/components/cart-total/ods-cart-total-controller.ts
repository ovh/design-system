import { OdsComponentController } from '../ods-component-controller';
import { OdsCartTotal } from './ods-cart-total';

/**
 * common controller logic for cart-total component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartTotalController extends OdsComponentController<OdsCartTotal> {

  constructor(component: OdsCartTotal) {
    super(component);
  }
}
