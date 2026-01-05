import { type FC, type JSX, forwardRef } from 'react';
import { type AsChildProp, AsChildSlot } from '../../../../../helpers/AsChild';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { EDITABLE_I18N, TRANSLATION } from '../../constants/editable-i18n';
import { useEditable } from '../../contexts/useEditable';

type EditableCancelTriggerProp = AsChildProp<ButtonProp>

/**
 * @param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.
 */
const EditableCancelTrigger: FC<EditableCancelTriggerProp> = forwardRef(({
  asChild,
  ...props
}, ref): JSX.Element => {
  const { i18n, locale, onCancel, setIsEditing } = useEditable();
  const { translate } = useI18n(TRANSLATION, locale, i18n);
  const sharedProps = {
    'aria-label': translate(EDITABLE_I18N.cancelButton),
    onClick: onCancelClick,
    ref,
  };

  function onCancelClick(): void {
    setIsEditing(false);
    onCancel?.();
  }

  return (
    asChild
      ? <AsChildSlot
        { ...sharedProps }
        { ...props } />
      : <Button
        color={ BUTTON_COLOR.neutral }
        size={ BUTTON_SIZE.sm }
        variant={ BUTTON_VARIANT.ghost }
        { ...sharedProps }
        { ...props }>
        <Icon name={ ICON_NAME.xmark } />
      </Button>
  );
});

EditableCancelTrigger.displayName = 'EditableCancelTrigger';

export {
  EditableCancelTrigger,
  type EditableCancelTriggerProp,
};
