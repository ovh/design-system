import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_DIVIDER_COLOR, type OdsDividerColor } from '../../constants/divider-color';
import { ODS_DIVIDER_SPACING, type OdsDividerSpacing } from '../../constants/divider-spacing';
import style from './odsDivider.module.scss';

interface OdsDividerProp extends ComponentPropsWithRef<'hr'> {
  color?: OdsDividerColor,
  spacing?: OdsDividerSpacing,
}

const OdsDivider: FC<OdsDividerProp> = forwardRef(({
  className,
  color = ODS_DIVIDER_COLOR.light,
  spacing = ODS_DIVIDER_SPACING._2,
  ...props
}, ref): JSX.Element => {
  return (
    <hr
      className={ classNames(
        style['ods-divider'],
        style[`ods-divider--${color}`],
        style[`ods-divider--${spacing}`],
        className) }
      ref={ ref }
      { ...props } />
  );
});

OdsDivider.displayName = 'OdsDivider';

export {
  OdsDivider,
  type OdsDividerProp,
};
