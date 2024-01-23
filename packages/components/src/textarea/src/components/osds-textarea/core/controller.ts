import type { OsdsTextarea } from '../osds-textarea';
import { OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';

class OdsTextareaController<T extends OsdsTextarea> extends OdsCommonFieldMethodController<T> {
  private assertValue(): void {
    if (this.component.textareaElement) {
      if (this.hasForbiddenValue()) {
        this.component.textareaElement.setCustomValidity('forbiddenValue');
      } else {
        this.component.textareaElement.setCustomValidity('');
      }
    }
  }

  beforeInit(): void {
    super.beforeInit();

    if (!this.component.value) {
      this.component.value = this.component.defaultValue ?? null;
    }
    this.component.internals.setFormValue(this.component.value ?? '');
  }

  async hasError(): Promise<boolean> {
    if (!this.component.textareaElement) {
      return false;
    }
    const validity = await this.getValidity(this.component.textareaElement);
    return this.component.error || !validity.valid;
  }

  onInput(event: Event): void {
    event.preventDefault();

    if (!this.component.disabled) {
      this.component.value = this.component.textareaElement?.value || null;
    }
  }

  onValueChange(value: string, oldValue?: string): Promise<void> {
    this.assertValue();
    this.component.internals.setFormValue(value);

    return this.component.emitChange(value, oldValue);
  }
}

export {
  OdsTextareaController,
};
