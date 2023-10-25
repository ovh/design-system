import { ODS_CART_ROUNDED } from './cart-rounded';
import { ODS_CART_SIZE } from './cart-size';
import type { OdsCartAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsCartAttribute = Object.freeze({
  collapsed: false,
  collapsible: false,
  inline: false,
  rounded: ODS_CART_ROUNDED.all,
  size: ODS_CART_SIZE.sm,
});

export {
  DEFAULT_ATTRIBUTE,
};
