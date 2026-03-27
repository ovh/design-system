import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { MESSAGE_BUBBLE_VARIANT, type MessageBubbleVariant } from '../../constants/message-bubble-variant';
import style from './messageBubble.module.scss';

interface MessageBubbleProp extends ComponentPropsWithRef<'div'> {
  /**
   * Indicates an error state
   */
  error?: boolean;
  /**
   * When typing a message
   */
  typing?: boolean;
  /**
   * Visual variant of the message bubble
   */
  variant?: MessageBubbleVariant;
}

const MessageBubble: FC<MessageBubbleProp> = forwardRef(({
  className,
  children,
  error = false,
  typing = false,
  variant = MESSAGE_BUBBLE_VARIANT.human,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(
        style['message-bubble'],
        style[`message-bubble--${variant}`],
        { [style['message-bubble--error']]: error },
        className,
      ) }
      data-ods="message-bubble"
      ref={ ref }
      { ...props }>
      {
        typing
          ? <div className={ style['message-bubble__typing-dots'] }>
            <span className={ style['message-bubble__typing-dot'] } />
            <span className={ style['message-bubble__typing-dot'] } />
            <span className={ style['message-bubble__typing-dot'] } />
          </div>
          : children
      }
    </div>
  );
});

MessageBubble.displayName = 'MessageBubble';

export {
  MessageBubble,
  type MessageBubbleProp,
};
