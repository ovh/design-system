import React from 'react-dom/client';
import { OdsTextarea } from 'ods-components-react';

const Textarea = () => {
  function onOdsChange() {
    console.log('React textarea odsChange');
  }

  return (
    <>
      <OdsTextarea name="ods-textarea"
                   onOdsChange={ onOdsChange } />

      <OdsTextarea isDisabled
                   name="ods-textarea-disabled"
                   onOdsChange={ onOdsChange } />
    </>
  );
};

export default Textarea;
