export interface OdsMessageBehavior {
  /**
   * before init component function
   * should be called in connectedCallback stencil method
   * should validate color
   * should set color for type
   * @see OdsMessageController.validateColor
   * @see OdsMessageController.setColorForType
   */
  beforeInit(): void;

  /**
   * emit remove icon click event
   ° @see OdsMessageController.onRemoveClicked
   */
  removeClicked(): void;
}
