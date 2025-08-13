import { Timepicker, TimepickerControl, type TimepickerProp, TimepickerTimezoneList } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = TimepickerProp & {
  withTimezones?: boolean,
}

export default (prop: DemoProp) => (
  <Timepicker
    disabled={ prop.disabled }
    invalid={ prop.invalid }
    readOnly={ prop.readOnly }
    withSeconds={ prop.withSeconds }>
    <TimepickerControl />

    {
      prop.withTimezones &&
      <TimepickerTimezoneList />
    }
  </Timepicker>
);
