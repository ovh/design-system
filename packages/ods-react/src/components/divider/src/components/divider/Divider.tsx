import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { DIVIDER_COLOR, type DividerColor } from '../../constants/divider-color';
import { DIVIDER_SPACING, type DividerSpacing } from '../../constants/divider-spacing';
import style from './divider.module.scss';

interface DividerProp extends ComponentPropsWithRef<'hr'> {
  /**
   * The color preset to use.
   */
  color?: DividerColor,
  /**
   * The spacing preset to use.
   */
  spacing?: DividerSpacing,
}

const Divider: FC<DividerProp> = forwardRef(({
  className,
  color = DIVIDER_COLOR.light,
  spacing = DIVIDER_SPACING._2,
  ...props
}, ref): JSX.Element => {
  return (
    <hr
      className={ classNames(
        style['divider'],
        style[`divider--${color}`],
        style[`divider--${spacing}`],
        className) }
      ref={ ref }
      { ...props } />
  );
});

Divider.displayName = 'Divider';

export {
  Divider,
  type DividerProp,
};
