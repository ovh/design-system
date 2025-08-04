import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { CARD_COLOR, type CardColor } from '../../constants/card-color';
import style from './card.module.scss';

interface CardProp extends ComponentPropsWithRef<'div'> {
  /**
   * @type=CARD_COLOR
   * The color preset to use.
   */
  color?: CardColor,
}

const Card: FC<CardProp> = forwardRef(({
  className,
  color = CARD_COLOR.primary,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(
        style['card'],
        style[`card--${color}`],
        className,
      )}
      data-ods="card"
      ref={ ref }
      { ...props }>
    </div>
  );
});

Card.displayName = 'Card';

export {
  Card,
  type CardProp,
};
