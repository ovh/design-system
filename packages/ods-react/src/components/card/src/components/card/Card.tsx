import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { warnDeprecated } from '../../../../../utils/deprecation';
import { CARD_COLOR, type CardColor } from '../../constants/card-color';
import { CARD_STATUS, type CardStatus } from '../../constants/card-status';
import style from './card.module.scss';

interface CardProp extends ComponentPropsWithRef<'div'> {
  /**
   * @deprecated
   * @type=CARD_COLOR
   * The color preset to use.
   * DEPRECATED: Use the `status` prop instead, color will be removed in v21.
   */
  color?: CardColor,
  /**
   * @type=CARD_STATUS
   * The status preset to use.
   */
  status?: CardStatus,
}

const Card: FC<CardProp> = forwardRef(({
  className,
  children,
  color,
  status,
  ...props
}, ref): JSX.Element => {
  if (color) {
    warnDeprecated('Card.color', '[DEPRECATED]: The color prop of Card is deprecated and will be removed in v21, use the status prop instead.');
  }

  const cardStatus = status ?? (color === CARD_COLOR.primary ? CARD_STATUS.accent : color) ?? CARD_STATUS.accent;

  return (
    <div
      className={ classNames(
        style['card'],
        style[`card--${cardStatus}`],
        className,
      )}
      data-ods="card"
      ref={ ref }
      { ...props }>
      { children }
    </div>
  );
});

Card.displayName = 'Card';

export {
  Card,
  type CardProp,
};
