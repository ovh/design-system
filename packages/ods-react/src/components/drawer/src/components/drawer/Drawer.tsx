import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type PropsWithChildren } from 'react';

interface DrawerOpenChangeDetail {
  open: boolean,
}

interface DrawerProp {
  /**
   * Whether to close the drawer when the escape key is pressed.
   */
  closeOnEscape?: boolean,
  /**
   * Whether to close the drawer when the outside is clicked.
   */
  closeOnInteractOutside?: boolean,
  /**
   * The initial open state of the drawer. Use when you don't need to control the open state of the drawer.
   */
  defaultOpen?: boolean,
  /**
   * Callback fired when the drawer open state changes.
   */
  onOpenChange?: (detail: DrawerOpenChangeDetail) => void
  /**
   * The controlled open state of the drawer.
   */
  open?: boolean,
}

const Drawer: FC<PropsWithChildren<DrawerProp>> = ({
  children,
  closeOnEscape = true,
  closeOnInteractOutside = false,
  defaultOpen,
  onOpenChange,
  open,
}): JSX.Element => {
  return (
    <Dialog.Root
      closeOnEscape={ closeOnEscape }
      closeOnInteractOutside={ closeOnInteractOutside }
      defaultOpen={ defaultOpen }
      modal={ false }
      onOpenChange={ onOpenChange }
      open={ open }
      preventScroll={ false }
      trapFocus={ false }>
      { children }
    </Dialog.Root>
  );
};

Drawer.displayName = 'Drawer';

export {
  Drawer,
  type DrawerOpenChangeDetail,
  type DrawerProp,
};
