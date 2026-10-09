import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { warnDeprecated } from '../../../../../utils/deprecation';
import { BADGE_COLOR, type BadgeColor } from '../../constants/badge-color';
import { BADGE_SIZE, type BadgeSize } from '../../constants/badge-size';
import { BADGE_STATUS, type BadgeStatus } from '../../constants/badge-status';
import style from './badge.module.scss';

interface BadgeProp extends ComponentPropsWithRef<'span'> {
  /**
   * @deprecated
   * @type=BADGE_COLOR
   * The color preset to use.
   * DEPRECATED: Use the `status` prop instead, color will be removed in v21.
   */
  color?: BadgeColor,
  /**
   * The size preset to use.
   */
  size?: BadgeSize,
  /**
   * @type=BADGE_STATUS
   * The status preset to use.
   */
  status?: BadgeStatus,
}

const Badge: FC<BadgeProp> = forwardRef(({
  children,
  className,
  color,
  size = BADGE_SIZE.md,
  status,
  ...props
}, ref): JSX.Element => {
  if (color) {
    warnDeprecated('Badge.color', '[DEPRECATED]: The color prop of Badge is deprecated and will be removed in v21, use the status prop instead.');
  }

  const badgeStatus = status ?? (color === BADGE_COLOR.primary ? BADGE_STATUS.accent : color) ?? BADGE_STATUS.information;

  return (
    <span
      className={ classNames(
        style['badge'],
        style[`badge--${badgeStatus}`],
        style[`badge--${size}`],
        className,
      )}
      data-ods="badge"
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
