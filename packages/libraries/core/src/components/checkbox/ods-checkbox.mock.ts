/* eslint-disable @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars */
import { OdsCheckbox } from './ods-checkbox';
import { OdsCheckboxMethods } from './ods-checkbox-methods';
import { OdsCheckboxEvents } from './ods-checkbox-events';
import { OdsCheckboxable } from '../../utils/checkbox/ods-checkboxable';
import { OdsCheckboxController } from './ods-checkbox-controller';
import { OdsCheckboxFocusChangeEventDetail } from './ods-checkbox-focus-change-event-detail';
import { OdsCheckboxUpdatingChangeEventDetail } from './ods-checkbox-updating-change-event-detail';
import { OdsCheckboxCheckedChangeEventDetail } from './ods-checkbox-checked-change-event-detail';

/**
 * Mocked generic implementation that represents an `OdsCheckbox`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsCheckboxMock implements OdsCheckbox<OdsCheckboxMethods, OdsCheckboxEvents> {
  ariaLabel = '';
  ariaLabelledby = '';
  checkboxableComponent: (HTMLElement & OdsCheckboxable) | null = null;
  checked = false;
  controller: OdsCheckboxController = jest.fn() as unknown as OdsCheckboxController;
  disabled = false;
  hasFocus = false;
  hostElement!: HTMLElement;
  inputEl?: HTMLInputElement;
  label = '';
  name: HTMLInputElement["name"] = '';
  odsBlur!: OdsCheckboxFocusChangeEventDetail;
  odsCheckedChange!: OdsCheckboxCheckedChangeEventDetail;
  odsFocus!: OdsCheckboxFocusChangeEventDetail;
  odsUpdatingChange!: OdsCheckboxUpdatingChangeEventDetail;
  tabindex = 0;
  updating = false;
  value: HTMLInputElement["value"] = '';

  emitBlur = jest.fn();

  emitChecked = jest.fn();

  emitFocus = jest.fn();

  emitUpdating = jest.fn();

  getTabIndex = jest.fn();

  handleToggleByClick = jest.fn();

  handleToggleByKeyEvent = jest.fn()

  onBlur = jest.fn();

  onFocus = jest.fn();

  propagateCheckedToChild = jest.fn()

  propagateDisabledToChild = jest.fn()

  propagateHasFocusToChild = jest.fn()

  setFocus = jest.fn();

  setTabindex = jest.fn()

  afterInit = jest.fn();
}
