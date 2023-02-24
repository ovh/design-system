export interface OdsFlagBehavior<Host extends HTMLElement = HTMLElement> {
  /**
   * reference to the host element of the component
   */
  hostElement: Host;

  /**
   * get the asset directory path in witch the content is serve.
   * could be like `build/` or empty.
   * in addition, the `ODS` asset path will be used.
   * @see OdsFlagController.getUrlForIso
   * @param url - computed url to override
   */
  getAssetPath(url: string): string;

  /**
   * trigger the content load.
   * should be triggered when `iso`, `assetPath` and `src` attributes changed.
   * should call controller's method `load` and change the svg content with the one received.
   * should define the `aria-label` to use with `iso` code.
   * @see OdsFlagController.load
   */
  load(): void;

  /**
   * clean up thing.
   * should call controller's method `onDestroy`
   * @see OdsFlagController.onDestroy
   */
  onDestroy(): void;

  /**
   * initialization of the component.
   * should call the controller's `onInit` method and store the state of visibility.
   * @see OdsFlagController.onInit
   */
  onInit(): void;
}
