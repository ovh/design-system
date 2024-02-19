import type { OdsInputValueChangeEvent } from '../../../../../input/src';
import type { OsdsPassword } from '../osds-password';

class OdsPasswordController {
  private readonly component: OsdsPassword;

  constructor(component: OsdsPassword) {
    this.component = component;
  }

  beforeInit(): void {
    if (!this.component.value && this.component.defaultValue) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.component.value?.toString() ?? '');
  }

  onValueChange({ detail }: OdsInputValueChangeEvent): void {
    this.component.value = detail.value?.toString() ?? '';
    this.component.internals?.setFormValue?.(this.component.value?.toString() ?? '');
  }
}

export {
  OdsPasswordController,
};
