import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './modalBody.module.scss';

interface ModalBodyProp extends ComponentPropsWithRef<'div'> {}

const ModalBody: FC<ModalBodyProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(style['modal-body'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </div>
  );
});

ModalBody.displayName = 'ModalBody';

export {
  ModalBody,
  type ModalBodyProp,
};
