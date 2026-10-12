import { BUTTON_EMPHASIS, Button, Modal, ModalBody, ModalContent, ModalHeader, type ModalOpenChangeDetail, ModalTrigger, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type JSX, useState } from 'react';
import style from './index.module.scss';

const StatusModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal(): void {
    setIsOpen(false);
  }

  function onOpenChange({ open }: ModalOpenChangeDetail): void {
    setIsOpen(open);
  }

  function openModal(): void {
    setIsOpen(true);
  }

  return (
    <Modal
      onOpenChange={ onOpenChange }
      open={ isOpen }>
      <ModalTrigger asChild>
        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ openModal }>
          Trigger Status Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader>
          <Text
            as="span"
            preset={ TEXT_PRESET.heading3 }>
            Change your password
          </Text>
        </ModalHeader>

        <ModalBody className={ style['status-modal__body'] }>
          <div className={ style['status-modal__body__content'] }>
            <Text preset={ TEXT_PRESET.paragraph }>
              An email will be sent to the address example@ovhcloud.com with the procedure to follow in order to make this change.
            </Text>
          </div>

          <div className={ style['status-modal__body__actions'] }>
            <Button
              emphasis={ BUTTON_EMPHASIS.low }
              onClick={ closeModal }>
              Cancel
            </Button>

            <Button emphasis={ BUTTON_EMPHASIS.high }>
              Confirm
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export {
  StatusModal,
};
