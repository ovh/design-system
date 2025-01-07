import React from 'react-dom/client';
import OdsRadio from '@ovhcloud/ods-components-react/ods-radio';

const Radio = () => {
  function onOdsChange() {
    console.log('React radio odsChange');
  }

  return (
    <>
      <OdsRadio onOdsChange={ onOdsChange } />

      <OdsRadio isDisabled
                onOdsChange={ onOdsChange } />
    </>
  );
};

export default Radio;
