import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type ReactNode } from 'react';

interface ModalOpenChangeDetail {
  open: boolean,
}

interface ModalProp {
  children: ReactNode,
  closeOnEscape?: boolean,
  closeOnInteractOutside?: boolean,
  defaultOpen?: boolean,
  onOpenChange?: (detail: ModalOpenChangeDetail) => void
  open?: boolean,
}

const Modal: FC<ModalProp> = ({
  children,
  closeOnEscape = true,
  closeOnInteractOutside = true,
  defaultOpen,
  onOpenChange,
  open,
}): JSX.Element => {
  return (
    <Dialog.Root
      closeOnEscape={ closeOnEscape }
      closeOnInteractOutside={ closeOnInteractOutside }
      defaultOpen={ defaultOpen }
      onOpenChange={ onOpenChange }
      open={ open }>
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
