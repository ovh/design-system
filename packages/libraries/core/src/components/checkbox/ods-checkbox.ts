import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCheckboxMethods } from './ods-checkbox-methods';
import { OdsCheckboxEvents } from './ods-checkbox-events';
import { OdsCheckboxAttributes } from './ods-checkbox-attributes';
import { OdsCheckboxController } from './ods-checkbox-controller';
import { OdsCheckboxable } from '../../utils/checkbox/ods-checkboxable';

/**
 * internal methods to implement.
 * public method are in OdsCheckboxMethods
 * @see OdsCheckboxMethods
 */
export interface OdsCheckboxBehavior<CheckboxableComponent extends HTMLElement = HTMLElement, Host extends HTMLElement = HTMLElement> {
  /**
   * reference to the host element of the component
   */
  hostElement: Host;

  /**
   * reference to the native input element inside the component.
   * could be undefined if the reference is not yet filled.
   */
  inputEl?: HTMLInputElement;

  /**
   * current tab index parameter.
   * this will be ignored in case of component disabled.
   * must be `0` by default
   */
  tabindex: number;

  /**
   * component that have to be managed by the checkbox smart component.
   * for instance: a tile, a toggle
   */
  checkboxableComponent: (CheckboxableComponent & OdsCheckboxable) | null;

  /**
   * emit an event when the checked state changed
   * @see OdsCheckboxController.emitChecked
   */
  emitChecked(): void;

  /**
   * emit an event when the checked state is being updated
   * @see OdsCheckboxController.emitUpdating
   */
  emitUpdating(): void;

  /**
   * propagate disabled attribute to the <checkboxed> component (like tile or toggle).
   * this method should be call on `disabled` attribute changed.
   * this method has to call OdsCheckboxController.propagateDisabledToChild
   * @see OdsCheckboxController.propagateDisabledToChild
   */
  propagateDisabledToChild(disabled: boolean): void;

  /**
   * propagate checked attribute to the <checkboxed> component (like tile or toggle).
   * this method should be call on `checked` attribute changed.
   * this method has to call OdsCheckboxController.propagateCheckedToChild
   * @see OdsCheckboxController.propagateCheckedToChild
   */
  propagateCheckedToChild(checked: boolean): void;

  /**
   * propagate hasFocus attribute to the <checkboxed> component (like tile or toggle).
   * this method should be call on `hasFocus` attribute changed.
   * this method has to call OdsCheckboxController.propagateHasFocusToChild
   * @see OdsCheckboxController.propagateHasFocusToChild
   */
  propagateHasFocusToChild(checked: boolean): void;

  /**
   * handle toggle check on keyboardEvent.
   * this method has to call OdsCheckboxController.handleToggleByKeyEvent
   * @see OdsCheckboxController.handleToggleByKeyEvent
   */
  handleToggleByKeyEvent(event: KeyboardEvent): void;

  /**
   * handle toggle check on click MouseEvent.
   * this method has to call OdsCheckboxController.handleToggleByClick
   * @see OdsCheckboxController.handleToggleByClick
   */
  handleToggleByClick(event: MouseEvent): void;

  /**
   * method executed after initialization of component
   * (`componentDidLoad` with stenciljs for instance).
   * this method has to call OdsCheckboxController.afterInit
   * @see OdsCheckboxController.afterInit
   */
  afterInit(): void;

  /**
   * process the blur of the component.
   * this method has to call OdsCheckboxController.onBlur
   * @see OdsCheckboxController.onBlur
   */
  onBlur(): void;

  /**
   * process the focus on the component.
   * the method should be call when focus event is triggered on component (by click, keyboard)
   * this method has to call OdsCheckboxController.onFocus
   * @see OdsCheckboxController.onFocus
   */
  onFocus(): void;

  /**
   * get the current tab index.
   * this method has to call OdsCheckboxController.getTabIndex
   * @see OdsCheckboxController.getTabIndex
   */
  getTabIndex(): number;

  /**
   * when a focus is triggered, this method emit the event
   */
  emitFocus(): void;

  /**
   * when a blur is triggered, this method emit the event
   */
  emitBlur(): void;
}

/**
 * interface description of all implementation of `ods-checkbox`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCheckbox<ComponentMethods extends OdsComponentGenericMethods<OdsCheckboxMethods> = OdsComponentGenericMethods<OdsCheckboxMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCheckboxEvents> = OdsComponentGenericEvents<OdsCheckboxEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCheckboxAttributes, OdsCheckboxController, OdsCheckboxBehavior>;
