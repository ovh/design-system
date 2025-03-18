import React from 'react-dom/client';
import { OdsPhoneNumber } from 'ods-components-react';

const PhoneNumber = () => {
  function onOdsChange() {
    console.log('React phone number odsChange');
  }

  return (
    <>
      <OdsPhoneNumber name="ods-phone-number"
                      onOdsChange={ onOdsChange } />

      <OdsPhoneNumber isDisabled
                      name="ods-phone-number-disabled"
                      onOdsChange={ onOdsChange } />
    </>
  );
};

export default PhoneNumber;
