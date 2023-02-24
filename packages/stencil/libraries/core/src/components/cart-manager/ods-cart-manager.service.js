import { OdsLogger } from '../../logger/ods-logger';
export class OdsCartManagerService {
  constructor() {
    this.logger = new OdsLogger('OsdsCartManagerService');
  }
  /**
   * Get the total amount of the cart sections.
   * @param sections - the sections of items to sum
   * @param vatMode - get the total included VAT or not
   */
  getTotalAmount(sections, vatMode = false) {
    this.logger.log(sections);
    const totalPriceItem = sections
      .map(section => section.item.price)
      .reduce(OdsCartManagerService.sumReducer, 0);
    const totalVatItem = sections
      .map(section => section.item.vat)
      .reduce(OdsCartManagerService.sumReducer, 0);
    const totalPriceOption = sections
      .map(section => section.options
      .map(option => option.price)
      .reduce(OdsCartManagerService.sumReducer, 0))
      .reduce(OdsCartManagerService.sumReducer, 0);
    const totalVatOption = sections
      .map(section => section.options
      .map(option => option.vat)
      .reduce(OdsCartManagerService.sumReducer, 0))
      .reduce(OdsCartManagerService.sumReducer, 0);
    this.logger.log('totalPriceItem', totalPriceItem);
    this.logger.log('totalVatItem', totalVatItem);
    this.logger.log('totalPriceOption', totalPriceOption);
    this.logger.log('totalVatOption', totalVatOption);
    if (vatMode === true) {
      return (totalPriceItem + totalVatItem) + (totalPriceOption + totalVatOption);
    }
    else {
      return totalPriceItem + totalPriceOption;
    }
  }
  /**
   * Get the total number of items and / or options indicated as product.
   * @param sections - the sections of items
   */
  getProductQuantity(sections) {
    const itemAsProduct = sections.filter((element) => element.item.product === true).length;
    this.logger.log('itemAsProduct', itemAsProduct);
    const optionAsProduct = sections.filter((element) => element.options.some((el) => el.product === true)).length;
    this.logger.log('optionAsProduct', optionAsProduct);
    return itemAsProduct + optionAsProduct;
  }
  static sumReducer(acc, val) {
    return acc + (val || 0);
  }
}
