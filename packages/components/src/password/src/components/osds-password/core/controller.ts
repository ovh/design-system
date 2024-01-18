import type { OsdsPassword } from '../osds-password';
import { OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';

class OdsPasswordController<T extends OsdsPassword> extends OdsCommonFieldMethodController<T> {
  constructor(component: T) {
    super(component);
  }

  hide(): void {
    if (this.component.disabled) {
      return;
    }
    this.component.masked = !this.component.masked;
    this.component.odsHide.emit();
  }
}

export {
  OdsPasswordController,
};