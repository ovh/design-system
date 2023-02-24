export interface OdsLocationTileBehavior {
  /**
  * before render component function
  * should be called before component render
  * should validatate attributes
  * @see OdsLocationTileController.validateAttributes
  */
  beforeRender(): void;
}
