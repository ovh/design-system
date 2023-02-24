import { OdsCartHeader } from "../cart-header/ods-cart-header";

export interface OdsCartBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * reference to the osds-cart-header inside the component.
   * could be null if the reference is not yet filled.
   */
  cartHeader: HTMLElement & OdsCartHeader | null;
}
