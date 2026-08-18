import { Dialog, useDialogContext } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { DRAWER_POSITION } from '../../constants/drawer-position';
import { useDrawer } from '../../contexts/useDrawer';
import style from './drawerContent.module.scss';

interface DrawerContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean;
  /**
   * The drawer position in the screen.
   */
  position?: DRAWER_POSITION;
}

const DrawerContent: FC<DrawerContentProp> = forwardRef(({
  children,
  className,
  createPortal = true,
  position = DRAWER_POSITION.left,
  ...props
}, ref): JSX.Element => {
  const { open } = useDialogContext();
  const { backdrop, backdropStyle, positionerStyle } = useDrawer();

  return (
    <Portal disabled={ !createPortal }>
      {
        backdrop &&
        <Dialog.Backdrop
          className={ style['drawer-backdrop'] }
          style={{
            zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)',
            ...(backdropStyle || {}),
          }} />
      }

      { /* The inline z-index only applies with a backdrop (modal-like stacking): applying it
           unconditionally would turn the positioner into a stacking context and silently break
           the documented --ods-drawer-z-index override for existing backdrop-less drawers. */ }
      <Dialog.Positioner style={{
        ...(backdrop ? { zIndex: 'calc(var(--ods-theme-overlay-z-index) + 2)' } : {}),
        ...(positionerStyle || {}),
      }}>
        { /* zag inlines pointer-events:auto on non-modal dialog content even when
             closed: without the override below, closed drawers swallow clicks. */ }
        <Dialog.Content
          aria-describedby={ props['aria-describedby'] || '' }
          aria-labelledby={ props['aria-labelledby'] || '' }
          className={ classNames(
            style['drawer-content'],
            style[`drawer-content--${ position }`],
            className,
          )}
          data-ods="drawer-content"
          ref={ ref }
          { ...props }
          style={{
            ...props.style,
            ...(!open ? { opacity: 0, pointerEvents: 'none' } : {}),
          }}>
          { children }
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
});

DrawerContent.displayName = 'DrawerContent';

export {
  DrawerContent,
  type DrawerContentProp,
};
