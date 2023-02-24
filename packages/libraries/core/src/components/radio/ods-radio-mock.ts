import { OdsRadioGroup } from './../radio-group/ods-radio-group';
import { OdsRadioCheckedChangeEventDetail } from '../radio-group/ods-radio-checked-change-event-detail';
import { OdsRadioCheckingChangeEventDetail } from '../radio-group/ods-radio-checking-change-event-detail';
import { OdsRadio } from './ods-radio';
import { OdsRadioController } from './ods-radio-controller';
import { OdsRadioEvents } from './ods-radio-events';
import { OdsRadioMethods } from './ods-radio-methods';

export class OdsRadioMock implements OdsRadio<OdsRadioMethods, OdsRadioEvents> {
  ariaLabel = '';
  ariaLabelledby?: string;
  checked = false;
  checking = false;
  disabled = false;
  label?: string;
  name?: string;
  save?: (({ checked, value }: { checked: boolean; value: string; }) => Promise<void>);
  beforeSave?: (({ checked, value }: { checked: boolean; value: string; }) => Promise<void>);
  afterSave?: (({ checked, value }: { checked: boolean; value: string; }) => Promise<void>);
  value = '';
  buttonTabindex = 0;

  odsValueChange!: { checked: boolean; value: string; };
  odsCheckedChange!: OdsRadioCheckedChangeEventDetail;
  odsCheckingChange!: OdsRadioCheckingChangeEventDetail;
  odsFocus!: void;
  odsBlur!: void;

  setButtonTabindex = jest.fn();
  setFocus = jest.fn();
  updateState = jest.fn();

  el!: HTMLElement;
  radioGroup!: (HTMLElement & OdsRadioGroup);
  radioizedComponent = null;

  onFocus = jest.fn();
  onBlur = jest.fn();
  emitFocus = jest.fn();
  emitBlur = jest.fn();
  emitChecked = jest.fn();
  emitChecking = jest.fn();

  beforeInit = jest.fn();
  afterInit = jest.fn();
  onDestroy = jest.fn();

  controller: OdsRadioController = jest.fn() as unknown as OdsRadioController;
}
