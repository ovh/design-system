interface OdsCartManagerMethod {
  /**
   * get the number of item flagged as product
   * @see OdsCartManagerItem.product
   */
  getProductQuantity(): Promise<number>;

  /**
   * get the total amount of the cart
   * @param vat - include or not the Taxes
   */
  getTotalAmount(vat: boolean): Promise<number>;
}

export {
  OdsCartManagerMethod,
};
