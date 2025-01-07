import React from 'react-dom/client';
import OdsTextarea from '@ovhcloud/ods-components-react/ods-textarea';

const Textarea = () => {
  function onOdsChange(): void {
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
