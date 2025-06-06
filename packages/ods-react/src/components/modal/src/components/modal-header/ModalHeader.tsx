import { Dialog } from '@ark-ui/react/dialog';
import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { type ModalColor } from '../../constants/modal-color';
import style from './modalHeader.module.scss';

interface ModalHeaderProp {
  color: ModalColor,
  dismissible: boolean,
}

const ModalHeader: FC<ModalHeaderProp> = ({
  color,
  dismissible,
}): JSX.Element => {
  return (
    <div className={ classNames(
      style['modal-header'],
      style[`modal-header--${color}`],
    )}>
      {
        dismissible &&
        <Dialog.CloseTrigger asChild>
          <Button
            color={ color }
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
