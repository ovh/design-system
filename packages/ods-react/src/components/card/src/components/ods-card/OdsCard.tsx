import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_CARD_COLOR, type OdsCardColor } from '../../constants/card-color';
import style from './odsCard.module.scss';

interface OdsCardProp extends ComponentPropsWithRef<'div'> {
  color?: OdsCardColor,
}

const OdsCard: FC<OdsCardProp> = forwardRef(({
  className,
  color = ODS_CARD_COLOR.primary,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(
        style['ods-card'],
        style[`ods-card--${color}`],
        className,
      ) }
      ref={ ref }
      { ...props }>
    </div>
  );
});

OdsCard.displayName = 'OdsCard';

export {
  OdsCard,
  type OdsCardProp,
};
