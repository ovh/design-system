import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BADGE_EMPHASIS, type BadgeEmphasis } from '../../constants/badge-emphasis';
import { BADGE_SIZE, type BadgeSize } from '../../constants/badge-size';
import { BADGE_STATUS, type BadgeStatus } from '../../constants/badge-status';
import style from './badge.module.scss';

interface BadgeProp extends ComponentPropsWithRef<'span'> {
  /**
   * Removed in v20, use status. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  color?: never,
  /**
   * @type=BADGE_EMPHASIS
   * The emphasis preset to use, from the strongest (high) to the lightest (low) visual weight.
   */
  emphasis?: BadgeEmphasis,
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
  emphasis = BADGE_EMPHASIS.medium,
  size = BADGE_SIZE.md,
  status = BADGE_STATUS.information,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['badge'],
        style[`badge--${status}`],
        // No medium class: medium is the plain status rendering. Only known emphases map to a class, so an invalid
        // value from untyped code cannot pick another modifier of the module (e.g. a status).
        { [style['badge--high']]: emphasis === BADGE_EMPHASIS.high, [style['badge--low']]: emphasis === BADGE_EMPHASIS.low },
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
