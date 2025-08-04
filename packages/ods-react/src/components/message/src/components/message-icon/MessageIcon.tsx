import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { Icon, type IconProp } from '../../../../icon/src';
import style from './messageIcon.module.scss';

interface MessageIconProp extends IconProp {}

const MessageIcon: FC<MessageIconProp> = forwardRef(({
  children,
  className,
  name,
  ...props
}, ref): JSX.Element => {
  return (
    <Icon
      className={ classNames(style['message-icon'], className) }
      data-ods="message-icon"
      name={ name }
      ref={ ref }
      { ...props } />
  );
});

MessageIcon.displayName = 'MessageIcon';

export {
  MessageIcon,
  type MessageIconProp,
};
