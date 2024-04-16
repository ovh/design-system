import React from 'react-dom/client';
import { OdsQuantity } from 'ods-components-react';

const Quantity = () => {
  function onOdsChange() {
    console.log('React quantity odsChange');
  }

  return (
    <>
      <OdsQuantity name="ods-quantity"
      onOdsChange={ onOdsChange }/>

      <OdsQuantity name="ods-quantity-disabled" isDisabled
      onOdsChange={ onOdsChange }/>
    </>
  );
};

export default Quantity;
