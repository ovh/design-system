import { Menu as VendorMenu } from '@ark-ui/react/menu';
import { type ComponentPropsWithRef, type FC, type JSX, type PropsWithChildren } from 'react';
import { SubmenuProvider } from '../../contexts/useSubmenu';

interface MenuSubmenuProp extends ComponentPropsWithRef<typeof VendorMenu.Root> {}

const MenuSubmenu: FC<PropsWithChildren<MenuSubmenuProp>> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <VendorMenu.Root { ...props }>
      <SubmenuProvider>
        { children }
      </SubmenuProvider>
    </VendorMenu.Root>
  );
};

MenuSubmenu.displayName = 'MenuSubmenu';

export {
  MenuSubmenu,
  type MenuSubmenuProp,
};
