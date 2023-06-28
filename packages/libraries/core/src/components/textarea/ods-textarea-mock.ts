import { OdsErrorStateControl } from "../../form/error/ods-error-state-control";
import { OdsFormControl } from "../../form/control/ods-form-control";
import { OdsTextArea } from "./ods-textarea";
import { OdsTextAreaController } from "./ods-textarea-controller";
import { OdsTextAreaEvents } from "./ods-textarea-events";
import { OdsTextAreaMethods } from "./ods-textarea-methods";
import { OdsTextAreaSize } from "./ods-textarea-size";
import { OdsTextAreaValidityState } from "../../form/validation/textarea/ods-textarea-validity-state";
import { OdsTextAreaValueChangeEventDetail } from "./ods-textarea-value-change-event-detail";
import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";

export class OdsTextAreaMock implements OdsTextArea<OdsTextAreaMethods, OdsTextAreaEvents> {
  textAreaId?: string;
  ariaLabel: HTMLElement['ariaLabel'] = null;
  ariaLabelledby?: string;
  color?: OdsThemeColorIntent;
  cols?: number;
  contrasted?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  errorStateControl?: OdsErrorStateControl;
  inline?: boolean;
  formControl?: OdsFormControl<OdsTextAreaValidityState>;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  resizable?: boolean;
  rows?: number;
  size?: OdsTextAreaSize;
  spellcheck: HTMLElement['spellcheck'] = false;
  value: string = '';
  hasFocus: boolean = false;

  odsValueChange!: OdsTextAreaValueChangeEventDetail;
  odsBlur!: void;
  odsFocus!: void;

  el!: HTMLElement;
  textInputEl?: HTMLTextAreaElement;

  textInputTabIndex: number = 0;

  controller: OdsTextAreaController = jest.fn() as unknown as OdsTextAreaController;

  reset = jest.fn();
  clear = jest.fn();
  setFocus = jest.fn();
  setTextAreaTabindex = jest.fn();
  getValidity = jest.fn();
  onBlur = jest.fn();
  onFocus = jest.fn();
  onInput = jest.fn();
  onChange = jest.fn();
  emitFocus = jest.fn();
  emitBlur = jest.fn();
  emitChange = jest.fn();
  beforeInit = jest.fn();
}
