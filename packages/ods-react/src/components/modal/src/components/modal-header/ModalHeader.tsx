import classNames from 'classnames';
import { type FC, type JSX, type PropsWithChildren, useEffect } from 'react';
import { useModal } from '../../contexts/useModal';
import { ModalCloseTrigger } from '../modal-close-trigger/ModalCloseTrigger';
import style from './modalHeader.module.scss';

interface ModalHeaderProp extends PropsWithChildren {
  className?: string,
}

const ModalHeader: FC<ModalHeaderProp> = ({
  children,
  className,
}): JSX.Element => {
  const { dismissible, setHasHeader } = useModal();

  useEffect(() => {
    setHasHeader?.(true);
    return () => {
      setHasHeader?.(false);
    };
  }, [setHasHeader]);

  return (
    <div className={ classNames(style['modal-header'], className) }>
      { children && (
        <div className={ style['modal-header__content'] }>
          { children }
        </div>
      ) }
      { dismissible && <ModalCloseTrigger className={ style['modal-header__close'] } /> }
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';

export {
  ModalHeader,
  type ModalHeaderProp,
};
