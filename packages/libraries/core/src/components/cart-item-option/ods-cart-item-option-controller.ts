import { OdsComponentController } from '../ods-component-controller';
import { OdsCartItemOption } from './ods-cart-item-option';

/**
 * common controller logic for cart-item-option component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartItemOptionController extends OdsComponentController<OdsCartItemOption> {

  constructor(component: OdsCartItemOption) {
    super(component);
  }
}
