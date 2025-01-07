import React from 'react-dom/client';
import OdsToggle from '@ovhcloud/ods-components-react/ods-toggle';

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
