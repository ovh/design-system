import { Modal, ModalContent, ModalTrigger } from '../../src';

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
      Content
    </ModalContent>
  </Modal>
);
