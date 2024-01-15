import type { OsdsInput } from '../osds-input';
import { OdsCommonFieldMethodController, OdsInputValue } from '@ovhcloud/ods-common-core';
import { OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';

/**
 * common controller logic for input component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsInputController<T extends OsdsInput> extends OdsCommonFieldMethodController<T> {

  constructor(component: T) {
    super(component, 'OdsInputController');
  }

  assertValue(value: OdsInputValue): void {
    this.validateValue(value as number);
    this.updateInputCustomValidation();
  }

  beforeInit(): void {
    super.beforeInit();
    this.assertValue(this.component.value);
    if (!this.component.value && this.component.value !== 0) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.component.value?.toString() ?? '');
  }

  override async clear(inputEl?: HTMLInputElement): Promise<void> {
    if (!this.component.disabled && inputEl) {
      inputEl.value = '';
    }

    return super.clear()
  }

  /**
   * handle the change of value from the vanilla input.
   * it will cast the component value to number if necessary
   * @param newValue - value of the HTML input
   */
  private handleInputValue(newValue: HTMLInputElement['value']): void {
    if(!this.component.disabled) {
      if (newValue === '') {
        this.component.value = newValue;
      } else {
        switch (this.component.type) {
        case 'number':
          this.component.value = Number(newValue);
          break;
        default:
          this.component.value = newValue;
        }
      }
    }
  }

  async hasError(): Promise<boolean> {
    if (!this.component.inputEl) {
      return false;
    }
    const validity = await this.getValidity(this.component.inputEl);
    return this.component.error || !validity.valid;
  }

  hide(): void {
    if (this.component.disabled) {
      return;
    }
    this.component.masked = !this.component.masked;
    this.component.odsHide?.emit();
  }

  onInput(event: Event): void {
    event.preventDefault();
    this.component.inputEl && this.handleInputValue(this.component.inputEl.value);
  }

  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): void {
    this.assertValue(value);
    this.component.internals.setFormValue(value?.toString() ?? '');
    this.component.emitChange(value, oldValue);
  }

  private updateInputCustomValidation(): void {
    if (this.hasForbiddenValue()) {
      this.component.inputEl?.setCustomValidity('forbiddenValue');
    } else {
      this.component.inputEl?.setCustomValidity('');
    }
  }

  stepDown(): void {
    const inputEvent = new CustomEvent('input', { bubbles: true });
    if (this.component.inputEl) {
      this.component.inputEl.stepDown();
      this.component.inputEl.dispatchEvent(inputEvent);
    }
  }

  stepUp(): void {
    const inputEvent = new CustomEvent('input', { bubbles: true });
    if (this.component.inputEl) {
      this.component.inputEl.stepUp();
      this.component.inputEl.dispatchEvent(inputEvent);
    }
  }

  private validateValue(value?: number): void {
    if (!value && value !== 0) {
      this.logger.warn('[OsdsInput] The value attribute must be a correct number');
    }
    if ((value || value === 0) && (this.component.min || this.component.min === 0) && (this.component.max || this.component.max === 0) && this.component.step) {
      OdsWarnComponentAttribute<number, OsdsInput>({
        attribute: +value,
        attributeName: 'value',
        logger: this.logger,
        max: this.component.max,
        min: this.component.min,
      });
      if (value && ((value - this.component.min) % this.component.step)) {
        this.logger.warn(
          `[OsdsInput] The value attribute must be a multiple of ${this.component.step}`,
        );
      }
    }
  }
}

export {
  OdsInputController,
};
