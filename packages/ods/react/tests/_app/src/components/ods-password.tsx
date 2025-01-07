import React from 'react-dom/client';
import OdsPassword from '@ovhcloud/ods-components-react/ods-password';

const Password = () => {
  function onOdsChange() {
    console.log('React password odsChange');
  }

  return (
    <>
      <OdsPassword name="ods-password"
                   onOdsChange={ onOdsChange }/>

      <OdsPassword isDisabled
                   name="ods-password-disabled"
                   onOdsChange={ onOdsChange }/>
    </>
  );
};

export default Password;
