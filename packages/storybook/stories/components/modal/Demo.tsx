import { Button, Modal, ModalBody, ModalContent, type ModalContentProp, type ModalProp, ModalTrigger } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = ModalProp & ModalContentProp & {
  content?: string,
};

export default (prop: DemoProp) => (
  <Modal
    closeOnEscape={ prop.closeOnEscape }
    closeOnInteractOutside={ prop.closeOnInteractOutside }>
    <ModalTrigger asChild>
      <Button>
        Trigger Modal
      </Button>
    </ModalTrigger>

    <ModalContent
      color={ prop.color }
      dismissible={ prop.dismissible }>
      <ModalBody>
        { prop.content }
      </ModalBody>
    </ModalContent>
  </Modal>
);
