import React from 'react-dom/client';
import { OdsPassword } from 'ods-components-react';

const Password = () => {
  function onOdsChange() {
    console.log('React password odsChange');
  }

  return (
    <>
      <OdsPassword name="ods-password"
      onOdsChange={ onOdsChange }/>

      <OdsPassword name="ods-password-disabled" isDisabled
      onOdsChange={ onOdsChange }/>
    </>
  );
};

export default Password;
