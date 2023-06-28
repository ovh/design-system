import { OdsCartSize } from './ods-cart-size';
import { OdsCartRounded } from './ods-cart-rounded';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsCartAttributes extends OdsComponentAttributes {
  /** is the cart is collapsed (if collapsible) */
  collapsed?: boolean
  /** is the cart can be collapsed in a smaller view */
  collapsible?: boolean
  /** inline or not: see component principles */
  inline?: boolean
  /** rounds corners of cart's outer border edge */
  rounded?: OdsCartRounded
  /** size: see component principles */
  size?: OdsCartSize
}
