import { MenuItemGroup as VendorMenuGroup } from '@ark-ui/react/menu';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './menuGroup.module.scss';

interface MenuGroupProp extends ComponentPropsWithRef<'div'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   * Be careful to pass an actual Node, not a Fragment.
   */
  asChild?: boolean,
}

const MenuGroup: FC<MenuGroupProp> = forwardRef(({
  asChild,
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorMenuGroup
      asChild={ asChild }
      className={ classNames(style['menu-group'], className) }
      data-ods="menu-group"
      ref={ ref }
      { ...props }>
      { children }
    </VendorMenuGroup>
  );
});

MenuGroup.displayName = 'MenuGroup';

export {
  MenuGroup,
  type MenuGroupProp,
};
