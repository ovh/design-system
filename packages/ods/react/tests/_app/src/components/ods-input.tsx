import React from 'react-dom/client';
import { OdsInput } from 'ods-components-react';

const Input = () => {
  function onOdsValueChange() {
    console.log('React input odsValueChange');
  }

  return (
    <>
      <OdsInput name="ods-input"
      onOdsValueChange={ onOdsValueChange }/>

      <OdsInput name="ods-input-disabled" isDisabled
      onOdsValueChange={ onOdsValueChange }/>
    </>
  );
};

export default Input;
