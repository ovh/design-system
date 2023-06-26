export interface OdsBreadcrumbBehavior {
  /**
   * Reference to the host element.
   */
  el: HTMLElement;

  /**
   * Items initialisation on first render
   */
  componentWillLoad(): void;

  /**
   * Receive and handle a collapsed item click event.
   */
  onBreadcrumbItemCollapsedClick(): void;
}
