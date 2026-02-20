import { Menu, useMenuContext } from '@ark-ui/react/menu';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useImperativeHandle, useMemo, useRef } from 'react';
import { type MenuPosition } from '../../constants/menu-position';
import { useMenu } from '../../contexts/useMenu';
import { useSubmenu } from '../../contexts/useSubmenu';
import style from './menuContent.module.scss';

interface MenuContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   * This only works on the root menu and not in submenus.
   */
  createPortal?: boolean,
  /**
   * Whether the component displays an arrow pointing to the trigger.
   */
  withArrow?: boolean,
}

const MenuContent: FC<MenuContentProp> = forwardRef(({
  children,
  className,
  createPortal = true,
  id,
  withArrow = false,
  ...props
}, ref): JSX.Element => {
  const defaultId = useId();
  const { onPositionChange, positionerStyle, setContentId } = useMenu();
  const { isSubmenu } = useSubmenu();
  const { open } = useMenuContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const computedId = useMemo(() => id ?? defaultId, [defaultId, id]);
  const shouldCreatePortal = isSubmenu ? true : createPortal;

  useImperativeHandle(ref, () => contentRef.current!, [contentRef]);

  useEffect(() => {
    if (!isSubmenu) {
      setContentId(computedId);
    }
  }, [computedId, isSubmenu, setContentId]);

  useEffect(() => {
    if (!isSubmenu && contentRef.current) {
      const observer = new MutationObserver((mutations) => {
        if (mutations.length) {
          const dataset = (mutations[0].target as HTMLDivElement).dataset;
          onPositionChange?.({ position: dataset.placement as MenuPosition });
        }
      });

      observer.observe(contentRef.current, {
        attributeFilter: ['data-placement'],
        attributes: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [contentRef, isSubmenu, onPositionChange]);

  // create portal -> does not work on submenu elements only root

  return (
    <Portal disabled={ !shouldCreatePortal }>
      <Menu.Positioner style={{
        zIndex: isSubmenu
          ? 'calc(var(--ods-theme-overlay-z-index) + 1)'
          : 'var(--ods-theme-overlay-z-index)',
        ...(!isSubmenu ? (positionerStyle || {}) : {}),
      }}>
        <Menu.Content
          className={ classNames(style['menu-content'], className) }
          data-ods="menu-content"
          ref={ contentRef }
          { ...props }
          style={{
            ...props.style,
            ...(!open ? { display: 'none' } : {}),
          }}>
          {
            withArrow &&
            <Menu.Arrow className={ style['menu-content__arrow']} />
          }

          { children }
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  );
});

MenuContent.displayName = 'MenuContent';

export {
  MenuContent,
  type MenuContentProp,
};
