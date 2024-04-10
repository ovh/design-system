import React from 'react-dom/client';
import { type OdsTagEventRemove } from '@ovhcloud/ods-components';
import { OdsTag } from 'ods-components-react';

const Tag = () => {
  function onRemove(event: OdsTagEventRemove) {
    console.log(`React tag remove event: ${event.detail.id}`);
  }

  return (
    <>
      <OdsTag id="my-tag"
              label="My tag"
              onOdsRemove={ onRemove } />

      <OdsTag id="my-disabled-tag"
              isDisabled={ true }
              label="My tag"
              onOdsRemove={ onRemove } />
    </>
  );
};

export default Tag;
