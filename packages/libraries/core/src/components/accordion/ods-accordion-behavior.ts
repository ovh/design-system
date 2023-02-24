import { OdsAccordionGroup } from "../accordion-group/ods-accordion-group";
export interface OdsAccordionBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
  * reference to the native details element inside the component.
  * could be undefined if the reference is not yet filled.
  */
  detailsEl?: HTMLDetailsElement;

  /**
  * reference to the OdsAccordionGroup outside the component.
  * could be null if the reference is not yet filled.
  */
  accordionGroup: (HTMLElement & OdsAccordionGroup) | null;

  /**
   * emit accordion opened status when toggle event is triggered
   */
  emitToggle(opened: boolean): void;

  /**
   * before init component function
   * should be called in connectedCallback stencil method
   */
  beforeInit(): void;

  /**
   * after init component function
   */
  afterInit(): void;

  /**
   * on destroy component function
   * should be called in disconnectedCallback stencil method
   */
  onDestroy(): void;
}