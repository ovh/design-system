import { OdsComputedUtils } from '@ovhcloud/ods-common-core';

import { isOdsCartManagerFooter } from '../helpers/type';
import type { OdsCartManagerFooter } from '../interfaces/attributes';
import type { OsdsCartManager } from '../osds-cart-manager';

class OdsCartManagerController {
  private component: OsdsCartManager;

  constructor(component: OsdsCartManager) {
    this.component = component;
  }

  /**
   * Footer validation
   * @param newValue
   */
  validateFooter(newValue?: OdsCartManagerFooter): void {
    if (!!newValue && !isOdsCartManagerFooter(newValue)) {
      throw new Error('You must specify a footer of type OdsCartFooter');
    }
  }

  /**
   * @see OdsCartManagerService.getTotalAmount
   */
  getTotalAmount(): number {
    const totalPriceItem = this.component.sections
      .map((section) => section.item.price)
      .reduce(OdsComputedUtils.sumReducer, 0);

    const totalVatItem = this.component.sections
      .map((section) => section.item.vat)
      .reduce(OdsComputedUtils.sumReducer, 0);

    const totalPriceOption = this.component.sections
      .map((section) => section.options
        .map((option) => option.price)
        .reduce(OdsComputedUtils.sumReducer, 0))
      .reduce(OdsComputedUtils.sumReducer, 0);

    const totalVatOption = this.component.sections
      .map((section) => section.options
        .map((option) => option.vat)
        .reduce(OdsComputedUtils.sumReducer, 0))
      .reduce(OdsComputedUtils.sumReducer, 0);

    if (this.component.vatMode) {
      return (totalPriceItem + totalVatItem) + (totalPriceOption + totalVatOption);
    } else {
      return totalPriceItem + totalPriceOption;
    }
  }

  /**
   * @see OdsCartManagerService.getProductQuantity
   */
  getProductQuantity(): number {
    const itemAsProduct = this.component.sections.filter((element) => element.item.product === true).length;
    const optionAsProduct = this.component.sections.filter((element) => element.options.some((el) => el.product === true)).length;

    return itemAsProduct + optionAsProduct;
  }
}

export {
  OdsCartManagerController,
};
