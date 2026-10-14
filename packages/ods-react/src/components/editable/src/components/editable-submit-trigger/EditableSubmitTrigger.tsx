import { type FC, type JSX, forwardRef } from 'react';
import { type AsChildProp, AsChildSlot } from '../../../../../helpers/AsChild';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_EMPHASIS, BUTTON_SIZE, BUTTON_STATUS, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { EDITABLE_I18N, TRANSLATION } from '../../constants/editable-i18n';
import { useEditable } from '../../contexts/useEditable';

type EditableSubmitTriggerProp = AsChildProp<ButtonProp>

/**
 * @param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.
 */
const EditableSubmitTrigger: FC<EditableSubmitTriggerProp> = forwardRef(({
  asChild,
  ...props
}, ref): JSX.Element => {
  const { i18n, locale, onSubmit, setIsEditing } = useEditable();
  const { translate } = useI18n(TRANSLATION, locale, i18n);
  const sharedProps = {
    'aria-label': translate(EDITABLE_I18N.submitButton),
    'data-ods': 'editable-submit-trigger',
    onClick: onSubmitClick,
    ref,
  };

  function onSubmitClick(): void {
    setIsEditing(false);
    onSubmit?.();
  }

  return (
    asChild
      ? <AsChildSlot
        { ...sharedProps }
        { ...props } />
      : <Button
        emphasis={ BUTTON_EMPHASIS.low }
        size={ BUTTON_SIZE.sm }
        status={ BUTTON_STATUS.brand }
        { ...sharedProps }
        { ...props }>
        <Icon name={ ICON_NAME.check } />
      </Button>
  );
});

EditableSubmitTrigger.displayName = 'EditableSubmitTrigger';

export {
  EditableSubmitTrigger,
  type EditableSubmitTriggerProp,
};
