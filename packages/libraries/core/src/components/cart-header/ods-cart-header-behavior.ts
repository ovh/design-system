import { OdsCart } from '../cart/ods-cart';

export interface OdsCartHeaderBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * reference to the parent osds-cart.
   * could be null if the reference is not yet filled.
   */
  cart: (HTMLElement & OdsCart) | null;

  /**
   * before init component function
   * should be called in connectedCallback stencil method
   */
  beforeInit(): void;
}
