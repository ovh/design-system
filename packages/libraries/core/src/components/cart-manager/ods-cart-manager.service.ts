import { OdsCartManagerSection } from './ods-cart-manager-section';
import { OdsComputedUtils } from '../../utils/computed/ods-computed-utils';
import { OdsLogger } from '../../logger/ods-logger';

export class OdsCartManagerService {
  private logger = new OdsLogger('OsdsCartManagerService');

  /**
   * Get the total amount of the cart sections.
   * @param sections - the sections of items to sum
   * @param vatMode - get the total included VAT or not
   */
  public getTotalAmount(sections: OdsCartManagerSection[], vatMode = false): number {
    this.logger.log(sections);

    const totalPriceItem = sections
      .map(section => section.item.price)
      .reduce(OdsComputedUtils.sumReducer, 0);

    const totalVatItem = sections
      .map(section => section.item.vat)
      .reduce(OdsComputedUtils.sumReducer, 0);

    const totalPriceOption = sections
      .map(section => section.options
        .map(option => option.price)
        .reduce(OdsComputedUtils.sumReducer, 0))
      .reduce(OdsComputedUtils.sumReducer, 0);

    const totalVatOption = sections
      .map(section => section.options
        .map(option => option.vat)
        .reduce(OdsComputedUtils.sumReducer, 0))
      .reduce(OdsComputedUtils.sumReducer, 0);

    this.logger.log('totalPriceItem', totalPriceItem);
    this.logger.log('totalVatItem', totalVatItem);
    this.logger.log('totalPriceOption', totalPriceOption);
    this.logger.log('totalVatOption', totalVatOption);
    if (vatMode === true) {
      return (totalPriceItem + totalVatItem) + (totalPriceOption + totalVatOption);
    } else {
      return totalPriceItem + totalPriceOption;
    }
  }

  /**
   * Get the total number of items and / or options indicated as product.
   * @param sections - the sections of items
   */
  public getProductQuantity(sections: OdsCartManagerSection[]) : number {
    const itemAsProduct = sections.filter((element) => element.item.product === true).length;
    this.logger.log('itemAsProduct', itemAsProduct);
    const optionAsProduct = sections.filter((element) => element.options.some((el) => el.product === true)).length;
    this.logger.log('optionAsProduct', optionAsProduct);
    return itemAsProduct + optionAsProduct;
  }
}
