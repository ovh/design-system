import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type PropsWithChildren } from 'react';

interface ModalOpenChangeDetail {
  open: boolean,
}

interface ModalProp {
  closeOnEscape?: boolean,
  closeOnInteractOutside?: boolean,
  defaultOpen?: boolean,
  onOpenChange?: (detail: ModalOpenChangeDetail) => void
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
