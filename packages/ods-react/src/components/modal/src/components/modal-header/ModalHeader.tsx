import { Dialog } from '@ark-ui/react/dialog';
import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { type ModalColor } from '../../constants/modal-color';
import { MODAL_I18N, TRANSLATION } from '../../constants/modal-i18n';
import { useModal } from '../../contexts/useModal';
import style from './modalHeader.module.scss';

interface ModalHeaderProp {
  color: ModalColor,
  dismissible: boolean,
}

const ModalHeader: FC<ModalHeaderProp> = ({
  color,
  dismissible,
}): JSX.Element => {
  const { i18n, locale } = useModal();
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  return (
    <div className={ classNames(
      style['modal-header'],
      style[`modal-header--${color}`],
    )}>
      {
        dismissible &&
        <Dialog.CloseTrigger asChild>
          <Button
            aria-label={ translate(MODAL_I18N.closeButton) }
            color={ BUTTON_COLOR.neutral }
            size={ BUTTON_SIZE.xs }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.xmark } />
          </Button>
        </Dialog.CloseTrigger>
      }
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';

export {
  ModalHeader,
  type ModalHeaderProp,
};
