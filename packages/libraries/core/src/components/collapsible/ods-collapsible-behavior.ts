export interface OdsCollapsibleBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * emit collapsible opened status when toggle event is triggered
   */
  emitToggle(opened: boolean): void;
}