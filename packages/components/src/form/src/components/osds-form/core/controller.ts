import { OdsInputValue, parseStringToRecord } from '@ovhcloud/ods-common-core';
import { OsdsForm } from '../osds-form';


class OdsFormController {
  constructor(private readonly component: OsdsForm) {
    this.component = component;
  }

  getInitialValues(): Record<string, OdsInputValue> {
    const onError = (): void => {
      this.component.logger.warn('[OsdsForm] initialValues string could not be parsed.');
    };
    return parseStringToRecord(this.component.initialValues, onError);
  }
 
}

export {
  OdsFormController,
};
