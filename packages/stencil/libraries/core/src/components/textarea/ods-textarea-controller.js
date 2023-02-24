import { OdsLogger } from './../../logger/ods-logger';
import { OdsTextAreaGetValidityState } from '../../form/validation/textarea/ods-get-textarea-validity-state';
import { OdsTextInputController } from '../../common/textinput/ods-textinput-controller';
/**
 * common controller logic for textarea component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTextAreaController extends OdsTextInputController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsTextAreaController');
  }
  /**
   * handle the change of value from the vanilla textarea.
   * @param newValue - value of the HTML textarea
   */
  handleTextAreaValue(newValue) {
    if (!this.component.disabled && newValue === '') {
      this.component.value = newValue;
    }
  }
  /**
   * get the validity object properties of the component.
   * it is based on the validity state of the vanilla textarea.
   * in case of no vanilla textarea passed, it returns the default value for each property
   * @param textAreaEl - vanilla textarea to analyze (may undefined if not already in the DOM during initialization)
   */
  getTextAreaValidity(textAreaEl) {
    return Object.assign({}, (textAreaEl ? Object.assign(Object.assign({}, OdsTextAreaGetValidityState(textAreaEl.validity)), { invalid: !textAreaEl.validity.valid }) : {
      valid: true,
      valueMissing: false,
      invalid: false,
      customError: false,
    }));
  }
  onInput(event) {
    var _a;
    event.preventDefault();
    this.logger.debug('oninput', (_a = this.component.textInputEl) === null || _a === void 0 ? void 0 : _a.value);
    this.component.textInputEl && this.handleTextAreaValue(this.component.textInputEl.value);
  }
  onBlur() {
    this.component.emitBlur();
    this.component.hasFocus = false;
  }
  onFocus() {
    this.component.emitFocus();
  }
  onChange() {
    var _a;
    this.logger.debug('onChange', (_a = this.component.textInputEl) === null || _a === void 0 ? void 0 : _a.value);
  }
  registerFormControl(formControl) {
    this.logger.log(`[textarea=${this.component.value}]`, 'onFormControlChange', formControl, formControl && formControl.id);
    if (formControl) {
      formControl.register(this.component);
    }
  }
  emitValue(value, oldValue) {
    this.logger.debug(`[textarea=${this.component.value}]`, 'value changed', { value, oldValue });
    this.component.emitChange(value, oldValue);
  }
  onDefaultValueChange(defaultValue) {
    this.logger.debug(`[textarea=${this.component.value}]`, 'defaultValue', defaultValue);
  }
  setValue(value = '') {
    if (this.component.textInputEl) {
      this.component.textInputEl.value = value;
    }
    this.component.value = value;
  }
  hasError() {
    return this.component.error || this.getTextAreaValidity().invalid;
  }
  beforeInit() {
    this.registerFormControl(this.component.formControl);
    this.emitValue(this.component.value);
    this.onDefaultValueChange(this.component.defaultValue);
    if (!this.component.value) {
      this.component.value = this.component.defaultValue || '';
    }
  }
  setTextAreaTabindex(value) {
    this.component.textInputTabIndex = value;
  }
}
