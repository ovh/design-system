import { OdsErrorStateControl } from '../../form/error/ods-error-state-control';
import { OdsFormControl } from '../../form/control/ods-form-control';
import { OdsFormForbiddenValues } from '../../form/validation/ods-form-forbidden-values';
import { OdsIconName } from '../icon/ods-icon-size';
import { OdsInput } from './ods-input';
import { OdsInputController } from './ods-input-controller';
import { OdsInputEvents } from './ods-input-events';
import { OdsInputMethods } from './ods-input-methods';
import { OdsInputSize } from './ods-input-size';
import { OdsInputType } from './ods-input-type';
import { OdsInputValidityState } from './ods-input-validity-state';
import { OdsInputValue } from './ods-input-value';
import { OdsInputValueChangeEventDetail } from './ods-input-value-change-event-detail';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { odsInputDefaultAttributes } from './ods-input-default-attributes';

export class OdsInputMock implements OdsInput<OdsInputMethods, OdsInputEvents> {
  inputEl?: HTMLInputElement | undefined;

  ariaLabel: HTMLElement['ariaLabel'] = null;
  ariaLabelledby?: string;
  color?: OdsThemeColorIntent;
  contrasted?: boolean;
  defaultValue: OdsInputValue = odsInputDefaultAttributes.defaultValue;
  disabled?: boolean;
  error?: boolean;
  errorStateControl?: OdsErrorStateControl;
  flex?: boolean;
  forbiddenValues: OdsFormForbiddenValues<number> = odsInputDefaultAttributes.forbiddenValues;
  formControl?: OdsFormControl<OdsInputValidityState>;
  icon?: OdsIconName;
  label?: string;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: OdsInputSize;
  step?: number;
  type: OdsInputType = odsInputDefaultAttributes.type;
  value: OdsInputValue = odsInputDefaultAttributes.value;

  hasFocus: boolean = false;
  inputTabindex: number = 0;

  odsValueChange!: OdsInputValueChangeEventDetail;
  odsInputFocus!: void;
  odsInputBlur!: void;

  reset = jest.fn();
  clear = jest.fn();
  setFocus = jest.fn();
  setInputTabindex = jest.fn();
  stepUp = jest.fn();
  stepDown = jest.fn();
  getValidity = jest.fn();

  onFocus = jest.fn();
  onBlur = jest.fn();
  onInput = jest.fn();
  onChange = jest.fn();
  emitFocus = jest.fn();
  emitBlur = jest.fn();
  emitChange = jest.fn();
  beforeInit = jest.fn();

  controller: OdsInputController = jest.fn() as unknown as OdsInputController;
}
