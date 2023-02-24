export interface OdsIconBehavior {
  /**
   * before render component function
   * should be called before component render
   * it have to check the validity of attributes.
   * @see OdsIconController.validateAttributes
   */
  beforeRender(): void;
}
