import { MenuItem as VendorMenuItem } from '@ark-ui/react/menu';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './menuItem.module.scss';

interface MenuItemProp extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  onSelect?: () => void,
  value: string,
}

const MenuItem: FC<MenuItemProp> = forwardRef<HTMLDivElement, MenuItemProp>(({
  children,
  className,
  onSelect,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorMenuItem
      className={ classNames(style['menu-item'], className) }
      data-ods="menu-item"
      onSelect={ onSelect }
      ref={ ref }
      { ...props }>
      { children }
    </VendorMenuItem>
  );
});

MenuItem.displayName = 'MenuItem';

export {
  MenuItem,
  type MenuItemProp,
};
