import React from 'react-dom/client';
import { OdsTimepicker } from 'ods-components-react';

const Timepicker = () => {
  function onOdsChange() {
    console.log('React timepicker odsChange');
  }

  return (
    <>
      <OdsTimepicker name="ods-timepicker"
                     onOdsChange={ onOdsChange } />

      <OdsTimepicker isDisabled
                     name="ods-timepicker-disabled"
                     onOdsChange={ onOdsChange } />
    </>
  );
};

export default Timepicker;
