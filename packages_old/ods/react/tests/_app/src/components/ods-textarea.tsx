import { OdsTextarea } from 'ods-components-react';
import { type ReactElement } from 'react';
import React from 'react-dom/client';

// eslint-disable-next-line func-style
const Textarea = (): ReactElement => {
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
