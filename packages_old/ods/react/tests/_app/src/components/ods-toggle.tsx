import { OdsToggle } from 'ods-components-react';
import React from 'react-dom/client';

const Toggle = () => {
  function onClick() {
    console.log('React toggle click');
  }

  return (
    <>
      <OdsToggle onOdsChange={ onClick } />

      <OdsToggle onOdsChange={ onClick } isDisabled />
    </>
  );
};

export default Toggle;
