interface OdsRadioMethod {
  /**
   * Set the tab index.
   * useful between radio-group and radio
   * @internal
   * @param value - index
   */
  setButtonTabindex(value: number): Promise<void>;

  /**
   * set the focus.
   * useful between radio-group and radio
   * @internal
   */
  setFocus(): Promise<void>;

  /**
   * update the state according to the different attributes (checking, checked, etc).
   * useful between radio-group and radio
   * @internal
   * @param checking
   */
  updateState(checking?: boolean): Promise<void>;
}

export {
  OdsRadioMethod,
};