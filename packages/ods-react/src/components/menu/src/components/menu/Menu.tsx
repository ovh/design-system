import { Menu as VendorMenu } from '@ark-ui/react/menu';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { MenuProvider, type MenuRootProp } from '../../contexts/useMenu';

interface MenuProp extends MenuRootProp {}

const Menu: FC<PropsWithChildren<MenuProp>> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <MenuProvider { ...props }>
      <VendorMenu.Root
        data-ods="menu"
        { ...props }>
        { children }
      </VendorMenu.Root>
    </MenuProvider>
  );
};

Menu.displayName = 'Menu';

export {
  Menu,
  type MenuProp,
};
