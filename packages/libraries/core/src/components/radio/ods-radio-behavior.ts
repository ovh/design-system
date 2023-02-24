import { OdsRadioGroup } from "../radio-group/ods-radio-group";
import { OdsRadioizable } from "../../utils/radio/ods-radioizable";

export interface OdsRadioBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * reference to the OdsRadioGroup outside the component.
   * could be null if the reference is not yet filled.
   */
  radioGroup: (HTMLElement & OdsRadioGroup) | null;
  buttonTabindex: number;
  radioizedComponent: (HTMLElement & OdsRadioizable) | null;

  /*
   * process the focus on the component.
   * the method should be call when focus event is triggered on component (by click, keyboard)
   * this method has to call OdsRadioController.onFocus
   * @see OdsRadioController.onFocus
   */
  onFocus(): void;

  /*
   * process the blur on the component.
   * the method should be call when blur event is triggered on component (by click, keyboard)
   * this method has to call OdsRadioController.onBlur
   * @see OdsRadioController.onBlur
   */
  onBlur(): void;

  /**
   * when a focus is triggered, this method emit the event
   */
  emitFocus(): void;

  /**
   * when a blur is triggered, this method emit the event
   */
  emitBlur(): void;

  /**
   * this method emit the checked event
   */
  emitChecked(): void;

  /**
   * this method emit the checking event
   */
  emitChecking(): void;

   /**
   * before init component function.
   * should be called before component init.
   * should update checked on child
   * should update disabled on child
   * should register radio if radio group
   * should update state
   * should add event listeners for disabled and value change
   * @see OdsRadioController.beforeInit
   */
  beforeInit(): void;

  /**
   * after init component function.
   * should be called after component init.
   * should set radioizedComponent
   * should update checked on child
   * should update disabled on child
   * @see OdsRadioController.afterInit
   */
  afterInit(): void;

  /**
   * on destroy component function
   * should be called in disconnectedCallback stencil method
   * should unregister radio
   * should remove envent listeners for disabled and value change
   * should reset radio group
   * @see OdsRadioController.onDestroy
   */
  onDestroy(): void;
}
