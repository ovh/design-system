export interface OdsTextAreaBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * reference to the native textarea element inside the component.
   * could be undefined if the reference is not yet filled.
   */
  textInputEl?: HTMLTextAreaElement;

  /**
   * current tab index parameter.
   * this will be ignored in case of component disabled.
   * must be `0` by default
   */
  textInputTabIndex: number;

  /**
   * process the blur of the component.
   * this method has to call OdsTextAreaController.onBlur
   * @see OdsTextAreaController.onBlur
   */
  onBlur(): void;

  /**
   * process the focus on the component.
   * the method should be call when focus event is triggered on component (by click, keyboard)
   * this method has to call OdsTextAreaController.onFocus
   * @see OdsTextAreaController.onFocus
   */
  onFocus(): void;

  /**
   * process the input of the component.
   * this method has to call OdsTextAreaController.onInput
   * @see OdsTextAreaController.onInput
   */
  onInput(event: Event): void;

  /**
   * process the value change of the component.
   * this method has to call OdsTextAreaController.onChange
   * @see OdsTextAreaController.onChange
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
   * when value change is triggered, this method emit the event
   */
  emitChange(value: HTMLTextAreaElement['value'], oldValue?: HTMLTextAreaElement['value']): void;

  /**
   * before init component function.
   * should be called before component init.
   * should register form control
   * should emit value
   * should set value with default if undefined
   * @see OdsTextAreaController.beforeInit
   */
  beforeInit(): void;
}
