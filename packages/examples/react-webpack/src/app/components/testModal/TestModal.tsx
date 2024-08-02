import { OdsButton, OdsModal } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useState } from 'react';

function TestModal(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onCloseModal() {
    setIsModalOpen(false)
  }

  function onOpenModalClick() {
    setIsModalOpen(true)
  }

  return (
    <div>
      <OdsButton label="Open modal"
                 onClick={ onOpenModalClick } />

      <OdsModal isOpen={ isModalOpen }
                onOdsClose={ onCloseModal }>
        Modal body
      </OdsModal>
    </div>
  );
}

export { TestModal };
