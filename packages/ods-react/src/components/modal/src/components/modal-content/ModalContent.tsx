import { Dialog, useDialogContext } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { MODAL_COLOR, type ModalColor } from '../../constants/modal-color';
import { ModalHeader } from '../modal-header/ModalHeader';
import style from './modalContent.module.scss';

interface ModalContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * @type=MODAL_COLOR
   * The color preset to use.
   */
  color?: ModalColor,
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean,
  /**
   * Whether the remove button is displayed.
   */
  dismissible?: boolean,
}

const ModalContent: FC<ModalContentProp> = forwardRef(({
  children,
  className,
  color = MODAL_COLOR.information,
  createPortal = true,
  dismissible = true,
  ...props
}, ref): JSX.Element => {
  const { open } = useDialogContext();

  return (
    <Portal disabled={ !createPortal }>
      <Dialog.Backdrop
        className={ style['modal-backdrop'] }
        style={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) - 2)' }} />

      <Dialog.Positioner
        className={ style['modal-positioner'] }
        style={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) - 1)' }}>
        <Dialog.Content
          aria-describedby={ props['aria-describedby'] || '' }
          aria-labelledby={ props['aria-labelledby'] || '' }
          className={ classNames(style['modal-content'], className) }
          data-ods="modal-content"
          ref={ ref }
          role={ color === MODAL_COLOR.critical ? 'alertdialog' : 'dialog' }
          { ...props }
          style={{
            ...props.style,
            ...(!open ? { display: 'none' } : {}),
          }}>
          <ModalHeader
            color={ color }
            dismissible={ dismissible } />

          { children }
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
});

ModalContent.displayName = 'ModalContent';

export {
  ModalContent,
  type ModalContentProp,
};
