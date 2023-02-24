export interface OdsTileBehavior {
  /**
   * before render component function
   * should be called before component render
   * it have to check the validity of attributes.
   * @see OdsTileController.validateAttributes
   */
  beforeRender(): void;
}
