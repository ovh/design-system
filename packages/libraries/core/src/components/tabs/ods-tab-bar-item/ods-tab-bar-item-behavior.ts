export interface OdsTabBarItemBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * select item in order to make the corresponding panel displayed after
   */
  select(): void;

  /**
   * will find the contrasted attribute of the tabs (parent main component)
   * and set here the contrast automatically
   */
  beforeInit(): void;

  /** get the tab index of the item */
  getTabIndex(): number | string;

  /**
   * handle the click on item.
   * it will trigger the selection by calling select
   */
  handleClick(): void;

  /**
   * handle the keyboard selection
   * @param event - keyboard event
   */
  handlePanelKeyEvent(event: KeyboardEvent): void;
}
