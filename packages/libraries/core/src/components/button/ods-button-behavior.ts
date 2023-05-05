export interface OdsButtonBehavior {
  /**
   * before render component function
   * should be called before component render
   * it have to check the validity of attributes.
   * @see OdsButtonController.validateAttributes
   */
  beforeRender(): void;
  /**
   * Called after a click is done on the component.
   * @see OdsButtonController.handleClick
   */
  handleClick(event: MouseEvent): void;
  /**
   * Called after a keypress is done on the component.
   * @see OdsButtonController.handleKey
   */
  handleKey(event: KeyboardEvent): void;
}
