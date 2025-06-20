import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BADGE_COLOR, type BadgeColor } from '../../constants/badge-color';
import { BADGE_SIZE, type BadgeSize } from '../../constants/badge-size';
import style from './badge.module.scss';

interface BadgeProp extends ComponentPropsWithRef<'span'> {
  /**
   * The color preset to use.
   */
  color?: BadgeColor,
  /**
   * The size preset to use.
   */
  size?: BadgeSize,
}

const Badge: FC<BadgeProp> = forwardRef(({
  children,
  className,
  color = BADGE_COLOR.information,
  size = BADGE_SIZE.md,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['badge'],
        style[`badge--${color}`],
        style[`badge--${size}`],
        className,
      )}
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

Badge.displayName = 'Badge';

export {
  Badge,
  type BadgeProp,
};
