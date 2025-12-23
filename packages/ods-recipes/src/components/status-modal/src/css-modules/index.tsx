import { BUTTON_VARIANT, Button, MODAL_COLOR, Modal, ModalBody, ModalContent, type ModalOpenChangeDetail, ModalTrigger, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
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
        <Button onClick={ openModal }>
          Trigger Status Modal
        </Button>
      </ModalTrigger>

      <ModalContent color={ MODAL_COLOR.information }>
        <ModalBody className={ style['status-modal__body'] }>
          <div className={ style['status-modal__body__content'] }>
            <span className={ style['status-modal__body__content__title'] }>
              Change your password
            </span>

            <Text preset={ TEXT_PRESET.paragraph }>
              An email will be sent to the address example@ovhcloud.com with the procedure to follow in order to make this change.
            </Text>
          </div>

          <div className={ style['status-modal__body__actions'] }>
            <Button
              onClick={ closeModal }
              variant={ BUTTON_VARIANT.ghost }>
              Cancel
            </Button>

            <Button>
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
