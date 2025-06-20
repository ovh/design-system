import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type PropsWithChildren } from 'react';

interface ModalOpenChangeDetail {
  open: boolean,
}

interface ModalProp {
  /**
   * Whether to close the modal when the escape key is pressed.
   */
  closeOnEscape?: boolean,
  /**
   * Whether to close the modal when the outside is clicked.
   */
  closeOnInteractOutside?: boolean,
  /**
   * The initial open state of the modal. Use when you don't need to control the open state of the modal.
   */
  defaultOpen?: boolean,
  /**
   * Callback fired when the modal open state changes.
   */
  onOpenChange?: (detail: ModalOpenChangeDetail) => void
  /**
   * The controlled open state of the modal.
   */
  open?: boolean,
}

const Modal: FC<PropsWithChildren<ModalProp>> = ({
  children,
  closeOnEscape = true,
  closeOnInteractOutside = true,
  defaultOpen,
  onOpenChange,
  open,
  ...props
}): JSX.Element => {
  return (
    <Dialog.Root
      closeOnEscape={ closeOnEscape }
      closeOnInteractOutside={ closeOnInteractOutside }
      defaultOpen={ defaultOpen }
      onOpenChange={ onOpenChange }
      open={ open }
      { ...props }>
      { children }
    </Dialog.Root>
  );
};

Modal.displayName = 'Modal';

export {
  Modal,
  type ModalOpenChangeDetail,
  type ModalProp,
};
