import React from 'react-dom/client';
import OdsQuantity from '@ovhcloud/ods-components-react/ods-quantity';

const Quantity = () => {
  function onOdsChange() {
    console.log('React quantity odsChange');
  }

  return (
    <>
      <OdsQuantity name="ods-quantity"
                   onOdsChange={ onOdsChange }/>

      <OdsQuantity isDisabled
                   name="ods-quantity-disabled"
                   onOdsChange={ onOdsChange }/>
    </>
  );
};

export default Quantity;
