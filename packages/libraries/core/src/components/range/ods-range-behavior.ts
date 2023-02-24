import { OdsRangeValue } from "./ods-range-value";

export interface OdsRangeBehavior {
  /**
   * Reference to the native input element inside the component.
   * Could be undefined if the reference is not yet filled.
   */
  inputEl?: HTMLInputElement;

  /**
   * Reference to the native input element inside the component when dual.
   * Could be undefined if the reference is not yet filled.
   */
  dualInputEl?: HTMLInputElement;

  /**
   * Before init component function
   * This method has to call OdsRangeController.beforeInit
   * @see OdsRangeController.beforeInit
   */
  beforeInit(): void;

  /**
   * Before render component function
   * This method has to call OdsRangeController.initValue
   * @see OdsRangeController.initValue
   */
  beforeRender(): void;

  /**
   * After render component function
   * This method has to call OdsRangeController.validateAttributes
   * @see OdsRangeController.validateAttributes
   */
  afterRender(): void;

  /**
   * When the value of the input has changed, this method immediately emit the event
   * @param event
   * @param inputEl
   * @param dual
   */
  onInput(event: Event, inputEl: HTMLInputElement, dual?: boolean): void;

  /**
   * When the user releases a key, this method emit the event
   * @param event
   * @param inputEl
   * @param dual
   */
  onKeyup(event: Event, inputEl: HTMLInputElement, dual?: boolean): void;

  /**
   * When a change of value is triggered, this method emit the event
   * @param newValue
   * @param oldValue
   */
  emitChange(newValue: OdsRangeValue, oldValue?: OdsRangeValue): void;
}
