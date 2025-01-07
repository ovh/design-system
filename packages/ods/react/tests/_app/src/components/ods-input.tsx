import React from 'react-dom/client';
import OdsInput from '@ovhcloud/ods-components-react/ods-input';

const Input = () => {
  function onOdsChange() {
    console.log('React input odsChange');
  }

  return (
    <>
      <OdsInput name="ods-input"
      onOdsChange={ onOdsChange }/>

      <OdsInput name="ods-input-disabled" isDisabled
      onOdsChange={ onOdsChange }/>
    </>
  );
};

export default Input;
