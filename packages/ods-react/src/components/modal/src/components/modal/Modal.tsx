import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { ModalProvider, type ModalRootProp } from '../../contexts/useModal';

/**
 * @inheritDoc ModalRootProp
 */
interface ModalProp extends ModalRootProp {}

const Modal: FC<PropsWithChildren<ModalProp>> = ({
  children,
  closeOnEscape = true,
  closeOnInteractOutside = true,
  defaultOpen,
  i18n,
  initialFocusedElement,
  locale,
  onOpenChange,
  open,
  ...props
}): JSX.Element => {
  return (
    <ModalProvider
      i18n={ i18n }
      locale={ locale }>
      <Dialog.Root
        closeOnEscape={ closeOnEscape }
        closeOnInteractOutside={ closeOnInteractOutside }
        defaultOpen={ defaultOpen }
        initialFocusEl={ initialFocusedElement }
        onOpenChange={ onOpenChange }
        open={ open }
        { ...props }>
        { children }
      </Dialog.Root>
    </ModalProvider>
  );
};

Modal.displayName = 'Modal';

export {
  Modal,
  type ModalProp,
};
