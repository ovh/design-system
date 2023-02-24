import { OdsAccordion } from '../accordion/ods-accordion';

export interface OdsAccordionGroupBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * reference to the accordion list inside the component.
   */
   accordions: (HTMLElement & OdsAccordion)[];

  /**
   * reference to the accordion group id.
   */
   accordionGroupId?: string;

   /**
   * before init component function
   * should be called in connectedCallback stencil method
   */
   beforeInit: () => void;

  /**
   * on destroy component function
   * should be called in disconnectedCallback stencil method
   */
   onDestroy: () => void;
}
