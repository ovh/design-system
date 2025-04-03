import React from 'react-dom/client';
import { OdsButton } from 'ods-components-react';

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
