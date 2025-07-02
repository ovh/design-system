import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { type Locale } from '../../../../../utils/locales';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { MESSAGE_COLOR, type MessageColor } from '../../constants/message-color';
import { MESSAGE_I18N, TRANSLATION } from '../../constants/message-i18n';
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
   * Internal translations override.
   */
  i18n?: Record<MESSAGE_I18N, string>,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
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
  i18n,
  locale,
  onRemove,
  variant = MESSAGE_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  const { translate } = useI18n(TRANSLATION, locale, i18n);

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
          aria-label={ translate(MESSAGE_I18N.closeButton) }
          className={ style['message__close'] }
          color={ BUTTON_COLOR.neutral }
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
