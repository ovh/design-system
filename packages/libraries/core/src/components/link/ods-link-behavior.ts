export interface OdsLinkBehavior {
  /**
  * before render component function
  * should be called before component render
  * it have to check the validity of attributes.
  * @see OdsLinkController.validateAttributes
  */
  beforeRender(): void;
}
