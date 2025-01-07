import React from 'react-dom/client';
import OdsButton from '@ovhcloud/ods-components-react/ods-button';

const Button = () => {
  function onClick() {
    console.log('React button click');
  }

  return (
    <>
      <OdsButton label="My button"
                 onClick={ onClick } />

      <OdsButton isDisabled={ true }
                 label="My button"
                 onClick={ onClick } />
    </>
  );
};

export default Button;
