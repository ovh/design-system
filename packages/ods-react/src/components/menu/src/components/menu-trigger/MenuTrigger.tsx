import { Menu } from '@ark-ui/react/menu';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactElement, forwardRef, useEffect } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useMenu } from '../../contexts/useMenu';
import { useSubmenu } from '../../contexts/useSubmenu';
import style from './menuTrigger.module.scss';

interface MenuTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   * Be careful to pass an actual Node, not a Fragment.
   */
  asChild?: boolean,
}

const MenuTrigger: FC<MenuTriggerProp> = forwardRef(({
  asChild,
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { setTriggerId } = useMenu();
  const { isSubmenu } = useSubmenu();

  useEffect(() => {
    if (isSubmenu) {
      return;
    }

    if (!asChild && props.id) {
      setTriggerId?.(props.id);
      return;
    }

    if (children && (children as ReactElement).props?.id) {
      setTriggerId?.((children as ReactElement).props.id);
    }
  }, [asChild, children, isSubmenu, props, setTriggerId]);

  if (isSubmenu) {
    return (
      <Menu.TriggerItem asChild>
        <button
          className={ classNames(style['menu-submenu-trigger'], className) }
          data-ods="menu-submenu-trigger"
          { ...props }>
          <span className={ style['menu-submenu-trigger__label'] }>
            { children }
          </span>
          <Icon
            name={ ICON_NAME.chevronRight } />
        </button>
      </Menu.TriggerItem>
    );
  }

  return (
    <Menu.Trigger
      asChild={ asChild }
      className={ classNames(style['menu-trigger'], className) }
      data-ods="menu-trigger"
      ref={ ref }
      role="button"
      tabIndex={ 0 }
      { ...props }>
      { children }
    </Menu.Trigger>
  );
});

MenuTrigger.displayName = 'MenuTrigger';

export {
  MenuTrigger,
  type MenuTriggerProp,
};
