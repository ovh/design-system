import { Dialog, useDialogContext } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect } from 'react';
import { useModal } from '../../contexts/useModal';
import { ModalCloseTrigger } from '../modal-close-trigger/ModalCloseTrigger';
import style from './modalContent.module.scss';

interface ModalContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Removed in v20, use role="alertdialog". Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  color?: never,
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
  createPortal = true,
  dismissible = true,
  ...props
}, ref): JSX.Element => {
  const { open } = useDialogContext();
  const { backdropStyle, hasHeader, positionerStyle, setDismissible } = useModal();

  useEffect(() => {
    setDismissible?.(dismissible);
    return (): void => {
      setDismissible?.(undefined);
    };
  }, [dismissible, setDismissible]);

  return (
    <Portal disabled={ !createPortal }>
      <Dialog.Backdrop
        className={ style['modal-backdrop'] }
        style={{
          zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)',
          ...(backdropStyle || {}),
        }} />

      <Dialog.Positioner
        className={ style['modal-positioner'] }
        style={{
          zIndex: 'calc(var(--ods-theme-overlay-z-index) + 2)',
          ...(positionerStyle || {}),
        }}>
        <Dialog.Content
          aria-describedby={ props['aria-describedby'] || '' }
          aria-labelledby={ props['aria-labelledby'] || '' }
          className={ classNames(style['modal-content'], className) }
          data-ods="modal-content"
          ref={ ref }
          role="dialog"
          { ...props }
          style={{
            ...props.style,
            ...(!open ? { display: 'none' } : {}),
          }}>
          { !hasHeader && dismissible && (
            <div className={ style['modal-content__close-trigger'] }>
              <ModalCloseTrigger />
            </div>
          ) }
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
