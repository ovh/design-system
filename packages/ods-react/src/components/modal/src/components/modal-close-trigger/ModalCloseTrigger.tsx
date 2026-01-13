import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button, type ButtonProp } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { MODAL_I18N, TRANSLATION } from '../../constants/modal-i18n';
import { useModal } from '../../contexts/useModal';

interface ModalCloseTriggerProp extends ButtonProp {}

const ModalCloseTrigger: FC<ModalCloseTriggerProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { i18n, locale } = useModal();
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  return (
    <Dialog.CloseTrigger asChild>
      <Button
        aria-label={ translate(MODAL_I18N.closeButton) }
        className={ className }
        color={ BUTTON_COLOR.neutral }
        ref={ ref }
        size={ BUTTON_SIZE.xs }
        variant={ BUTTON_VARIANT.ghost }
        { ...props }>
        <Icon name={ ICON_NAME.xmark } />
      </Button>
    </Dialog.CloseTrigger>
  );
});

ModalCloseTrigger.displayName = 'ModalCloseTrigger';

export {
  ModalCloseTrigger,
  type ModalCloseTriggerProp,
};
