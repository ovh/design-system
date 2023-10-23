import type {OdsCartManagerAttribute} from '../interfaces/attributes';
import {ODS_CART_SIZE} from '../../osds-cart/constants/cart-size';

const DEFAULT_ATTRIBUTE: OdsCartManagerAttribute = Object.freeze({
  footer: undefined,
  i18n: undefined,
  inline: false,
  period: undefined,
  sections: [],
  size: ODS_CART_SIZE.sm,
  vatMode: false,
});

export {
  DEFAULT_ATTRIBUTE,
};
