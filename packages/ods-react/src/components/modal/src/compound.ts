import { type ModalProp, Modal as ModalRoot } from './components/modal/Modal';
import { ModalBody, type ModalBodyProp } from './components/modal-body/ModalBody';
import { ModalContent, type ModalContentProp } from './components/modal-content/ModalContent';
import { ModalHeader, type ModalHeaderProp } from './components/modal-header/ModalHeader';
import { ModalTrigger, type ModalTriggerProp } from './components/modal-trigger/ModalTrigger';

const Modal = {
  Body: ModalBody,
  Content: ModalContent,
  Header: ModalHeader,
  Root: ModalRoot,
  Trigger: ModalTrigger,
};

export { Modal };
export type { ModalProp, ModalBodyProp, ModalContentProp, ModalHeaderProp, ModalTriggerProp };
export { MODAL_COLOR, MODAL_COLORS, type ModalColor } from './constants/modal-color';
export { MODAL_I18N } from './constants/modal-i18n';
export { type ModalOpenChangeDetail } from './contexts/useModal';
