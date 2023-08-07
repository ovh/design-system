import type { OsdsInput } from '@ovhcloud/ods-component-input';

export interface OdsQuantityBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
  * reference to the osds-input or native input element inside the component.
  * could be null if the reference is not yet filled.
  */
  input: (OsdsInput & HTMLElement) | HTMLInputElement | null;

  /**
  * reference to the minus slot inside the component.
  * could be null if the reference is not yet filled.
  */
  minus: HTMLSlotElement | null;

  /**
  * reference to the plus slot inside the component.
  * could be null if the reference is not yet filled.
  */
  plus: HTMLSlotElement | null;

  /**
  * after init component function
  * should be called after component loads
  * should process input value change
  * @see OdsQuantityController.processInputValueChange
  */
  afterInit(): void;

  /**
  * after render component function
  * should be called after component render
  * should init input
  * should init slots
  * @see OdsQuantityController.initSlots
  */
  afterRender(): void;

  /**
  * after init component function
  * should be called after component loads
  * should clear event listeners
  * @see OdsQuantityController.clearEventListeners
  */
  onDestroy(): void;
}
