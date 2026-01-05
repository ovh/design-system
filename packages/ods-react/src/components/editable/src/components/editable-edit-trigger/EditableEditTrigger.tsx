import { type FC, type JSX, forwardRef } from 'react';
import { type AsChildProp, AsChildSlot } from '../../../../../helpers/AsChild';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { EDITABLE_I18N, TRANSLATION } from '../../constants/editable-i18n';
import { useEditable } from '../../contexts/useEditable';

type EditableEditTriggerProp = AsChildProp<ButtonProp>

/**
 * @param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.
 */
const EditableEditTrigger: FC<EditableEditTriggerProp> = forwardRef(({
  asChild,
  ...props
}, ref): JSX.Element => {
  const { i18n, locale, setIsEditing } = useEditable();
  const { translate } = useI18n(TRANSLATION, locale, i18n);
  const sharedProps = {
    'aria-label': translate(EDITABLE_I18N.editButton),
    onClick: onEditClick,
    ref,
  };

  function onEditClick(): void {
    setIsEditing(true);
  }

  return (
    asChild
      ? <AsChildSlot
        { ...sharedProps }
        { ...props } />
      : <Button
        color={ BUTTON_COLOR.primary }
        size={ BUTTON_SIZE.sm }
        variant={ BUTTON_VARIANT.ghost }
        { ...sharedProps }
        { ...props }>
        <Icon name={ ICON_NAME.pen } />
      </Button>
  );
});

EditableEditTrigger.displayName = 'EditableEditTrigger';

export {
  EditableEditTrigger,
  type EditableEditTriggerProp,
};
