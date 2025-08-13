import { PhoneNumber, PhoneNumberControl, type PhoneNumberControlProp, PhoneNumberCountryList, type PhoneNumberProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = PhoneNumberProp & PhoneNumberControlProp & {
  withCountries?: boolean,
};

export default (prop: DemoProp) => (
  <PhoneNumber
    country={ prop.country }
    disabled={ prop.disabled }
    invalid={ prop.invalid }
    locale={ prop.locale }
    readOnly={ prop.readOnly }>
    {
      prop.withCountries &&
      <PhoneNumberCountryList />
    }

    <PhoneNumberControl clearable={ prop.clearable } />
  </PhoneNumber>
);
