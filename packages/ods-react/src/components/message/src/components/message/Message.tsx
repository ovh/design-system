import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { MESSAGE_COLOR, type MessageColor } from '../../constants/message-color';
import { MESSAGE_VARIANT, type MessageVariant } from '../../constants/message-variant';
import style from './message.module.scss';

interface MessageProp extends ComponentPropsWithRef<'div'> {
  /**
   * @type=MESSAGE_COLOR
   * The color preset to use.
   */
  color?: MessageColor,
  /**
   * Whether the remove button is displayed.
   */
  dismissible?: boolean,
  /**
   * Callback fired when the close button is pressed.
   */
  onRemove?: () => void,
  /**
   * The variant preset to use.
   */
  variant?: MessageVariant,
}

const Message: FC<MessageProp> = forwardRef(({
  children,
  className,
  color = MESSAGE_COLOR.information,
  dismissible = true,
  onRemove,
  variant = MESSAGE_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(
        style['message'],
        style[`message--${color}`],
        style[`message--${variant}`],
        className,
      )}
      ref={ ref }
      { ...props }>
      { children }

      {
        dismissible &&
        <Button
          className={ style['message__close'] }
          color={ color }
          onClick={ onRemove }
          size={ BUTTON_SIZE.xs }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.xmark } />
        </Button>
      }
    </div>
  );
});

Message.displayName = 'Message';

export {
  Message,
  type MessageProp,
};
