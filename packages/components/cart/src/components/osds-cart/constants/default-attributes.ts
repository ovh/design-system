import type {OdsCartAttribute} from '../interfaces/attributes';
import {ODS_CART_SIZE} from './cart-size';
import {ODS_CART_ROUNDED} from './cart-rounded';

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
