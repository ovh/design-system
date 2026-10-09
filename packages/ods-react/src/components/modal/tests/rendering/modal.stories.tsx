import { MODAL_COLOR, Modal, ModalBody, ModalContent, ModalTrigger } from '../../src';

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

export const deprecatedColor = () => (
  <>
    <Modal>
      <ModalContent
        color={ MODAL_COLOR.critical }
        data-testid="color-critical">
        <ModalBody>Critical</ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalContent
        color={ MODAL_COLOR.information }
        data-testid="color-information">
        <ModalBody>Information</ModalBody>
      </ModalContent>
    </Modal>
  </>
);
