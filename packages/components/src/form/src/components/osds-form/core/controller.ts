import type { OsdsForm } from '../osds-form';
import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import { parseStringToRecord } from '@ovhcloud/ods-common-core';

class OdsFormController {
  constructor(private readonly component: OsdsForm) {
    this.component = component;
  }

  getInitialValues(): Record<string, OdsInputValue> {
    function onError(): void {
      console.warn('[OsdsForm] initialValues string could not be parsed.');
    }
    return parseStringToRecord(this.component.initialValues, onError);
  }
}

export {
  OdsFormController,
};
