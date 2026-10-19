import { Modal, ModalBody, ModalContent, ModalTrigger } from '../../src';

export default {
  component: Modal,
  title: 'Tests rendering',
};

export const render = () => (
  <Modal>
    <ModalTrigger data-testid="render">
      Trigger
    </ModalTrigger>
    <ModalContent>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const role = () => (
  <>
    <Modal>
      <ModalContent data-testid="default-role">
        <ModalBody>Dialog</ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalContent
        data-testid="alertdialog-role"
        role="alertdialog">
        <ModalBody>Alert dialog</ModalBody>
      </ModalContent>
    </Modal>
  </>
);
