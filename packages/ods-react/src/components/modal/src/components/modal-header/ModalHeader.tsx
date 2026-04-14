import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect } from 'react';
import { useModal } from '../../contexts/useModal';
import { ModalCloseTrigger } from '../modal-close-trigger/ModalCloseTrigger';
import style from './modalHeader.module.scss';

interface ModalHeaderProp extends ComponentPropsWithRef<'div'> {}

const ModalHeader: FC<ModalHeaderProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { dismissible, setHasHeader } = useModal();

  useEffect(() => {
    setHasHeader?.(true);
    return () => {
      setHasHeader?.(false);
    };
  }, [setHasHeader]);

  return (
    <div
      className={ classNames(style['modal-header'], className) }
      data-ods="modal-header"
      ref={ ref }
      { ...props }>
      <div className={ style['modal-header__content'] }>
        { children }
      </div>
      {
        dismissible &&
        <ModalCloseTrigger className={ style['modal-header__close'] } />
      }
    </div>
  );
});

ModalHeader.displayName = 'ModalHeader';

export {
  ModalHeader,
  type ModalHeaderProp,
};
