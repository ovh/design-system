import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_BADGE_COLOR, type OdsBadgeColor } from '../../constants/badge-color';
import { ODS_BADGE_SIZE, type OdsBadgeSize } from '../../constants/badge-size';
import style from './odsBadge.module.scss';

interface OdsBadgeProp extends ComponentPropsWithRef<'span'> {
  color?: OdsBadgeColor,
  size?: OdsBadgeSize,
}

const OdsBadge: FC<OdsBadgeProp> = forwardRef(({
  children,
  className,
  color = ODS_BADGE_COLOR.information,
  size = ODS_BADGE_SIZE.md,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['ods-badge'],
        style[`ods-badge--${color}`],
        style[`ods-badge--${size}`],
        className,
      )}
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

export {
  OdsBadge,
  type OdsBadgeProp,
};
