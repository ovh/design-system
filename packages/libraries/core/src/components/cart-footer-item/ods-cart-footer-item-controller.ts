import { OdsComponentController } from '../ods-component-controller';
import { OdsCartFooterItem } from './ods-cart-footer-item';

/**
 * common controller logic for cart-footer component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartFooterItemController extends OdsComponentController<OdsCartFooterItem> {

  constructor(component: OdsCartFooterItem) {
    super(component);
  }
}
