import { OdsComponentController } from '../ods-component-controller';
import { OdsCartManagerService } from './ods-cart-manager.service';
/**
 * common controller logic for cart-manager component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartManagerController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.service = new OdsCartManagerService();
  }
}
