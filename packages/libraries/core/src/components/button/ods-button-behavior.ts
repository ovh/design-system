export interface OdsButtonBehavior {
  /**
   * before render component function
   * should be called before component render
   * it have to check the validity of attributes.
   * @see OdsButtonController.validateAttributes
   */
  beforeRender(): void;
  handleClick(event: MouseEvent): void;
  handleKey(event: KeyboardEvent): void;
}
