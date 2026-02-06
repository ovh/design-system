import { MenuItemGroupLabel as VendorMenuGroupLabel } from '@ark-ui/react/menu';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './menuGroupLabel.module.scss';

interface MenuGroupLabelProp extends ComponentPropsWithRef<'div'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   * Be careful to pass an actual Node, not a Fragment.
   */
  asChild?: boolean,
}

const MenuGroupLabel: FC<MenuGroupLabelProp> = forwardRef(({
  asChild,
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorMenuGroupLabel
      asChild={ asChild }
      className={ classNames(style['menu-group-label'], className) }
      data-ods="menu-group-label"
      ref={ ref }
      { ...props }>
      { children }
    </VendorMenuGroupLabel>
  );
});

MenuGroupLabel.displayName = 'MenuGroupLabel';

export {
  MenuGroupLabel,
  type MenuGroupLabelProp,
};
