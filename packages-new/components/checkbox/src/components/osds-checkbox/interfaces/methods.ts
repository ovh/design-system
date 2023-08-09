interface OdsCheckboxMethod {

  /**
   * set the tab index.
   * this method has to call OdsCheckboxController.setTabindex
   * @public
   * @see OdsCheckboxController.setTabindex
   */
  setTabindex(index: number): Promise<void>;

  /**
   * programmatically set the focus on the checkbox.
   * this method has to call OdsCheckboxController.setFocus
   * @public
   * @see OdsCheckboxController.setFocus
   */
  setFocus(): Promise<void>;
}

export {
  OdsCheckboxMethod,
}