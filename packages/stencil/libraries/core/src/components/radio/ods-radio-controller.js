import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
/**
 * common controller logic for radio component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsRadioController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsRadioController');
  }
  onFocus() {
    this.component.emitFocus();
  }
  onBlur() {
    this.component.emitBlur();
  }
  setButtonTabindex(value) {
    this.component.buttonTabindex = value;
  }
  updateDisabledOnChild(disabled) {
    this.logger.log(`[radio=${this.component.value}]`, 'disabled changed. update child', { disabled });
    if (this.component.radioizedComponent) {
      if (disabled) {
        this.component.radioizedComponent.setAttribute('disabled', '');
      }
      else {
        this.component.radioizedComponent.removeAttribute('disabled');
      }
    }
  }
  updateCheckingOnChild(checking) {
    this.logger.log(`[radio=${this.component.value}]`, 'checking changed. update child', { checking });
    if (this.component.radioizedComponent) {
      if (checking) {
        this.component.radioizedComponent.setAttribute('checking', '');
      }
      else {
        this.component.radioizedComponent.removeAttribute('checking');
      }
    }
  }
  updateCheckOnChild(checked) {
    this.logger.log(`[radio=${this.component.value}]`, 'checked changed. update child', { checked });
    if (this.component.radioizedComponent) {
      if (checked) {
        this.component.radioizedComponent.setAttribute('checked', '');
      }
      else {
        this.component.radioizedComponent.removeAttribute('checked');
      }
    }
  }
  /**
   *
   * @param value
   */
  watchValue(value) {
    this.logger.log(`[radio=${this.component.value}]`, 'value changed', { value });
  }
  /**
   *
   */
  beforeInit() {
    this.logger.log(`[radio=${this.component.value}]`, 'connectedCallback');
    this.updateCheckOnChild(this.component.checked);
    this.updateDisabledOnChild(this.component.disabled);
    const radioGroup = this.component.radioGroup = this.component.el.closest('osds-radio-group');
    if (radioGroup) {
      radioGroup.registerRadio(this.component.el);
      this.updateState();
      radioGroup.addEventListener('odsDisabledChange', (() => this.updateState()));
      radioGroup.addEventListener('odsValueChange', (() => this.updateState()));
    }
  }
  /**
   *
   */
  afterInit() {
    this.component.radioizedComponent = this.component.el.firstElementChild;
    if (!this.component.radioizedComponent) {
      this.logger.warn(`[radio=${this.component.value}]`, 'you must place a radioizable element inside the radio component');
    }
    else {
      this.updateCheckOnChild(this.component.checked);
      this.updateDisabledOnChild(this.component.disabled);
    }
  }
  /**
   *
   */
  onDestroy() {
    const radioGroup = this.component.radioGroup;
    if (radioGroup) {
      radioGroup.unregisterRadio(this.component.el);
      radioGroup.removeEventListener('odsDisabledChange', (() => this.updateState()));
      radioGroup.removeEventListener('odsValueChange', (() => this.updateState()));
      this.component.radioGroup = null;
    }
  }
  /**
   *
   * @param checking
   */
  updateState(checking) {
    if (this.component.radioGroup) {
      this.logger.log(`[radio=${this.component.value}]`, 'updateState', this.component.radioGroup.value, this.component.value);
      this.component.checked = (this.component.radioGroup.value !== undefined && this.component.value !== undefined) ? this.component.radioGroup.value === this.component.value : false;
      if (this.component.checked) {
        this.component.checking = false;
      }
      if (checking === false || checking) {
        this.component.checking = checking;
      }
      this.component.disabled = this.component.radioGroup.disabled;
    }
  }
  /**
   *
   * @param event
   */
  async handleLabelClick(event) {
    this.logger.log(`[radio=${this.component.value}]`, 'click');
    event.preventDefault();
    await this.handleLabelEvent();
  }
  /**
   *
   * @param event
   */
  async handleLabelKeyEvent(event) {
    this.logger.log(`[radio=${this.component.value}]`, 'key event', { event });
    if (event.code === 'Space' || event.code.includes('Enter')) {
      await this.handleLabelEvent();
    }
  }
  async onComponentSave() {
    this.logger.log(`[radio=${this.component.value}]`, 'pessimistic update');
    try {
      this.logger.log(`[radio=${this.component.value}]`, 'calling save');
      this.component.checking = true;
      this.component.emitChecking();
      this.component.beforeSave && await this.component.beforeSave({ checked: this.component.checked, value: this.component.value });
      this.component.save && await this.component.save({ checked: this.component.checked, value: this.component.value });
      this.logger.log(`[radio=${this.component.value}]`, 'calling save done');
      this.component.checked = true;
    }
    catch (e) {
      this.logger.log(`[radio=${this.component.value}]`, 'calling save failed');
      this.component.checked = false;
    }
    finally {
      this.component.checking = false;
      this.component.emitChecking();
      this.component.afterSave && await this.component.afterSave({ checked: this.component.checked, value: this.component.value });
    }
  }
  onRadioGroupSave() {
    this.logger.log(`[radio=${this.component.value}]`, 'pessimistic update led by radio-group');
    this.component.checking = true;
    this.component.emitChecking();
  }
  async handleLabelEvent() {
    var _a;
    if (!this.component.disabled && !this.component.checked) {
      if (this.component.save) {
        await this.onComponentSave();
      }
      else {
        if ((_a = this.component.radioGroup) === null || _a === void 0 ? void 0 : _a.save) {
          this.onRadioGroupSave();
        }
        else {
          this.logger.log(`[radio=${this.component.value}]`, 'optimistic update');
          this.component.checked = true;
        }
      }
      this.component.emitChecked();
    }
  }
}
