import { OdsCart } from "../cart/ods-cart";

export interface OdsCartItemBehavior {
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
  beforeInit(): Promise<void>;

  /**
   * on destroy component function
   * should be called in disconnectedCallback stencil method
   */
  onDestroy(): Promise<void>;
}
