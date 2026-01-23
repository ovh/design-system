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
  const { positionerStyle } = useDrawer();

  return (
    <Portal disabled={ !createPortal }>
      <Dialog.Positioner style={ positionerStyle }>
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
            ...(!open ? { opacity: 0 } : {}),
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
