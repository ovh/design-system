import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { DRAWER_POSITION } from '../../constants/drawer-position';
import style from './drawerContent.module.scss';

interface DrawerContentProp extends ComponentPropsWithRef<'div'> {
  createPortal?: boolean;
  position?: DRAWER_POSITION;
}

const DrawerContent: FC<DrawerContentProp> = forwardRef((
  {
    children,
    className,
    createPortal = true,
    position = DRAWER_POSITION.left,
    ...props
  },
  ref,
): JSX.Element => {
  return (
    <Portal disabled={ !createPortal }>
      <Dialog.Positioner className={ style[ 'drawer-positioner' ] }>
        <Dialog.Content
          className={ classNames(
            style[ 'drawer-positioner__content' ],
            style[ `drawer-positioner__content--${ position }` ],
            className,
          ) }
          ref={ ref }
          { ...props }
        >
          { children }
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
},
);

DrawerContent.displayName = 'DrawerContent';

export { DrawerContent, type DrawerContentProp };
