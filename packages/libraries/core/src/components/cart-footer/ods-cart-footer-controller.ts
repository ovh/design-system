import { OdsComponentController } from '../ods-component-controller';
import { OdsCartFooter } from './ods-cart-footer';

/**
 * common controller logic for cart-footer component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartFooterController extends OdsComponentController<OdsCartFooter> {

  constructor(component: OdsCartFooter) {
    super(component);
  }
}
