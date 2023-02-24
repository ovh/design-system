import { OdsCartManagerFooter, isOdsCartManagerFooter } from './ods-cart-manager-footer';

import { OdsCartManager } from './ods-cart-manager';
import { OdsCartManagerService } from './ods-cart-manager.service';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';

/**
 * common controller logic for cart-manager component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartManagerController extends OdsComponentController<OdsCartManager> {
  private readonly logger = new OdsLogger('OdsCartManagerController');
  public service: OdsCartManagerService;

  constructor(component: OdsCartManager) {
    super(component);
    this.service = new OdsCartManagerService();
  }

  /**
   * Footer validation
   * @param newValue 
   */
  validateFooter(newValue?: OdsCartManagerFooter): void {
    if (!!newValue && !isOdsCartManagerFooter(newValue)) {
      throw new Error('You must specify a footer of type OdsCartFooter')
    }
  }

  /**
   * @see OdsCartManagerService.getTotalAmount
   */
  getTotalAmount(): number {
    const amount = this.service.getTotalAmount(this.component.sections, this.component.vatMode);
    this.logger.log('amount', amount);
    return amount;
  }

  /**
   * @see OdsCartManagerService.getProductQuantity
   */
  getProductQuantity(): number {
    const product = this.service.getProductQuantity(this.component.sections);
    this.logger.log('product', product);
    return product;
  }
}
