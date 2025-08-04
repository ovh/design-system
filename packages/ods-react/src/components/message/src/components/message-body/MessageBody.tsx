import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './messageBody.module.scss';

interface MessageBodyProp extends ComponentPropsWithRef<'div'> {}

const MessageBody: FC<MessageBodyProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(style['message-body'], className) }
      data-ods="message-body"
      ref={ ref }
      { ...props }>
      { children }
    </div>
  );
});

MessageBody.displayName = 'MessageBody';

export {
  MessageBody,
  type MessageBodyProp,
};
