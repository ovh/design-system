import type {ODS_CART_SIZE} from '../constants/cart-size';
import type {ODS_CART_ROUNDED} from '../constants/cart-rounded';

interface OdsCartAttribute {
  /** is the cart is collapsed (if collapsible) */
  collapsed?: boolean
  /** is the cart can be collapsed in a smaller view */
  collapsible?: boolean
  /** full width or not: see component principles */
  inline?: boolean
  /** rounds corners of cart's outer border edge */
  rounded?: ODS_CART_ROUNDED
  /** size: see component principles */
  size?: ODS_CART_SIZE
}

export {
  OdsCartAttribute,
};
