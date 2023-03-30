import { isOdsCartManagerFooter } from './ods-cart-manager-footer';
import { OdsCartManagerService } from './ods-cart-manager.service';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
/**
 * common controller logic for cart-manager component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartManagerController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsCartManagerController');
    this.service = new OdsCartManagerService();
  }
  /**
   * Footer validation
   * @param newValue
   */
  validateFooter(newValue) {
    if (!!newValue && !isOdsCartManagerFooter(newValue)) {
      throw new Error('You must specify a footer of type OdsCartFooter');
    }
  }
  /**
   * @see OdsCartManagerService.getTotalAmount
   */
  getTotalAmount() {
    const amount = this.service.getTotalAmount(this.component.sections, this.component.vatMode);
    this.logger.log('amount', amount);
    return amount;
  }
  /**
   * @see OdsCartManagerService.getProductQuantity
   */
  getProductQuantity() {
    const product = this.service.getProductQuantity(this.component.sections);
    this.logger.log('product', product);
    return product;
  }
}
