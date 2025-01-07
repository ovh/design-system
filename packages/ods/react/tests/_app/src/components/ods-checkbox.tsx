import React from 'react-dom/client';
import OdsCheckbox from '@ovhcloud/ods-components-react/ods-checkbox';

const Checkbox = () => {
  function onOdsChange() {
    console.log('React checkbox odsChange');
  }

  return (
    <>
      <OdsCheckbox onOdsChange={onOdsChange} />

      <OdsCheckbox isDisabled
        onOdsChange={onOdsChange} />
    </>
  );
};

export default Checkbox;
