import React from 'react-dom/client';
import { OdsCheckbox } from 'ods-components-react';

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
