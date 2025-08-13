import { Datepicker, DatepickerContent, DatepickerControl, type DatepickerControlProp, type DatepickerProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = DatepickerProp & DatepickerControlProp & {};

export default (prop: DemoProp) => (
  <Datepicker
    disabled={ prop.disabled }
    invalid={ prop.invalid }
    locale={ prop.locale }
    placeholder={ prop.placeholder }
    readOnly={ prop. readOnly }>
    <DatepickerControl
      clearable={ prop.clearable }
      loading={ prop.loading } />

    <DatepickerContent />
  </Datepicker>
);
