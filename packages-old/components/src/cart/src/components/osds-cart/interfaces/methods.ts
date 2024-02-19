interface OdsCartMethod {
  /**
   * get the number of cart items detected in the DOM
   */
  getItemQuantity(): Promise<number>;

  /**
   * Render manually the cart in order to refresh the component.
   */
  refresh(): Promise<void>;
}

export {
  OdsCartMethod,
};
