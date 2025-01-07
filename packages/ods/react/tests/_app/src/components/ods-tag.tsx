import React from 'react-dom/client';
import { type OdsTagRemoveEvent } from '@ovhcloud/ods-components';
import OdsTag from '@ovhcloud/ods-components-react/ods-tag';

const Tag = () => {
  function onRemove(event: OdsTagRemoveEvent) {
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
