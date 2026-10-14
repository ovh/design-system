import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { warnDeprecated } from '../../../../../utils/deprecation';
import { type Locale } from '../../../../../utils/locales';
import { BUTTON_EMPHASIS, BUTTON_SIZE, BUTTON_STATUS, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { MESSAGE_COLOR, type MessageColor } from '../../constants/message-color';
import { MESSAGE_EMPHASIS, type MessageEmphasis } from '../../constants/message-emphasis';
import { MESSAGE_I18N, TRANSLATION } from '../../constants/message-i18n';
import { MESSAGE_STATUS, type MessageStatus } from '../../constants/message-status';
import style from './message.module.scss';

interface MessageProp extends ComponentPropsWithRef<'div'> {
  /**
   * @deprecated
   * @type=MESSAGE_COLOR
   * The color preset to use.
   * DEPRECATED: Use the `status` prop instead, color will be removed in v21.
   */
  color?: MessageColor,
  /**
   * Whether the remove button is displayed.
   */
  dismissible?: boolean,
  /**
   * @type=MESSAGE_EMPHASIS
   * The emphasis preset to use, from the strongest (high) to the lightest (low) visual weight.
   */
  emphasis?: MessageEmphasis,
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<MESSAGE_I18N, string>>,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Callback fired when the close button is pressed.
   */
  onRemove?: () => void,
  /**
   * @type=MESSAGE_STATUS
   * The status preset to use.
   */
  status?: MessageStatus,
}

const Message: FC<MessageProp> = forwardRef(({
  children,
  className,
  color,
  dismissible = true,
  emphasis = MESSAGE_EMPHASIS.medium,
  i18n,
  locale,
  onRemove,
  status,
  ...props
}, ref): JSX.Element => {
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  if (color) {
    warnDeprecated('Message.color', '[DEPRECATED]: The color prop of Message is deprecated and will be removed in v21, use the status prop instead.');
  }

  const messageStatus = status ?? (color === MESSAGE_COLOR.primary ? MESSAGE_STATUS.accent : color) ?? MESSAGE_STATUS.information;

  return (
    <div
      className={ classNames(
        style['message'],
        style[`message--${messageStatus}`],
        // No medium class: medium is the plain status rendering. Only known emphases map to a class, so an invalid
        // value from untyped code cannot pick another modifier of the module (e.g. a status).
        { [style['message--high']]: emphasis === MESSAGE_EMPHASIS.high, [style['message--low']]: emphasis === MESSAGE_EMPHASIS.low },
        className,
      )}
      data-ods="message"
      ref={ ref }
      { ...props }>
      { children }

      {
        dismissible &&
        <Button
          aria-label={ translate(MESSAGE_I18N.closeButton) }
          className={ style['message__close'] }
          emphasis={ BUTTON_EMPHASIS.low }
          onClick={ onRemove }
          size={ BUTTON_SIZE.xs }
          status={ BUTTON_STATUS.neutral }>
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
