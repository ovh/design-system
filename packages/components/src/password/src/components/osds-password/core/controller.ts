import type { OdsInputValueChangeEvent } from '../../../../../input/src';
import type { OsdsPassword } from '../osds-password';
import { OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';

class OdsPasswordController<T extends OsdsPassword> extends OdsCommonFieldMethodController<T> {
  beforeInit(): void {
    if (!this.component.value && this.component.defaultValue) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.component.value?.toString() ?? '');
  }

  hide(): void {
    if (this.component.disabled) {
      return;
    }
    this.component.masked = !this.component.masked;
    this.component.odsHide.emit();
  }

  onValueChange({ detail }: OdsInputValueChangeEvent): void {
    this.component.value = detail.value?.toString() ?? null;
    this.component.internals?.setFormValue?.(this.component.value?.toString() ?? '');
  }
}

export {
  OdsPasswordController,
};