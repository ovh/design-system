export interface OdsToggleBehavior {
  /**
   * before render component function
   * should be called before component render
   * it have to check the validity of attributes.
   * @see OdsToggleController.validateAttributes
   */
  beforeRender(): void;
}
