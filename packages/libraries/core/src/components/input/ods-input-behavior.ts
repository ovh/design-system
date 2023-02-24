import { OdsInputValue } from "./ods-input-value";

export interface OdsInputBehavior {
  /**
   * reference to the input element.
   */
  inputEl?: HTMLInputElement;

  hasFocus: boolean;
  inputTabindex: number;
  /*
   * process the focus on the component.
   * the method should be call when focus event is triggered on component (by click, keyboard)
   * this method has to call OdsInputController.onFocus
   * @see OdsInputController.onFocus
   */
  onFocus(): void;

  /*
   * process the blur on the component.
   * the method should be call when blur event is triggered on component (by click, keyboard)
   * this method has to call OdsInputController.onBlur
   * @see OdsInputController.onBlur
   */
  onBlur(): void;

  /**
   * process the input of the component.
   * this method has to call OdsInputController.onInput
   * @see OdsInputController.onInput
   */
  onInput(event: Event): void;

  /**
   * process the change of the component.
   * @see OdsInputController.onChange
   */
  onChange(): void;
  
  /**
   * when a focus is triggered, this method emit the event
   */
  emitFocus(): void;
  
  /**
   * when a blur is triggered, this method emit the event
   */
  emitBlur(): void;

  /**
   * when a input change is triggered, this method emit the event
   */
  emitChange(value: OdsInputValue, oldValue?: OdsInputValue): void;

  /**
   * before init component function.
   * should be called before component init.
   * should register form control
   * should emit value
   * should set value with default if undefined
   * @see OdsInputController.beforeInit
   */
  beforeInit(): void;
}
