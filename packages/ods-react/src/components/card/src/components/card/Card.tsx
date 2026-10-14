import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { CARD_STATUS, type CardStatus } from '../../constants/card-status';
import style from './card.module.scss';

interface CardProp extends ComponentPropsWithRef<'div'> {
  /**
   * Removed in v20, use status. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  color?: never,
  /**
   * @type=CARD_STATUS
   * \@default-value=CARD_STATUS.neutral
   * The status preset to use.
   */
  status?: CardStatus,
}

const Card: FC<CardProp> = forwardRef(({
  className,
  children,
  status = CARD_STATUS.neutral,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(
        style['card'],
        style[`card--${status}`],
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
