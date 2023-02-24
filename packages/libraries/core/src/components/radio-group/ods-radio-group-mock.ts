import { OdsRadio } from '../radio/ods-radio';
import { OdsRadioGroup } from './ods-radio-group';
import { OdsRadioGroupController } from './ods-radio-group-controller';
import { OdsRadioGroupEvents } from './ods-radio-group-events';
import { OdsRadioGroupMethods } from './ods-radio-group-methods';

export class OdsRadioGroupMock implements OdsRadioGroup<OdsRadioGroupMethods, OdsRadioGroupEvents> {
  defaultValue?: unknown;
  disabled = false;
  name?: string;
  required?: boolean;
  save?: (({ value }: { value: string; }) => Promise<void>);
  afterSave?: (({ value }: { value: string; }) => Promise<void>);
  beforeSave?: (({ value }: { value: string; }) => Promise<void>);
  value = '';
  inputId = '';

  odsValueChange!: { newValue?: string; previousValue?: string };
  odsDisabledChange!: { value: boolean; };

  getRadios = jest.fn();
  registerRadio = jest.fn();
  unregisterRadio = jest.fn();
  updateState = jest.fn();

  el!: HTMLElement;
  radios: (HTMLElement & OdsRadio)[] = [];

  emitChange = jest.fn();
  emitDisabled = jest.fn();
  onDestroy = jest.fn();

  controller: OdsRadioGroupController = jest.fn() as unknown as OdsRadioGroupController;
}
