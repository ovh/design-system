import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type DividerColor } from '../../constants/divider-color';
import { DIVIDER_SPACING, type DividerSpacing } from '../../constants/divider-spacing';
import style from './divider.module.scss';

interface DividerProp extends ComponentPropsWithRef<'hr'> {
  /**
   * @deprecated
   * The color preset to use.
   * DEPRECATED: Color will now always be primary, if you need another color, prefer overriding it using css.
   */
  color?: DividerColor,
  /**
   * The spacing preset to use.
   */
  spacing?: DividerSpacing,
}

const Divider: FC<DividerProp> = forwardRef(({
  className,
  color,
  spacing = DIVIDER_SPACING._2,
  ...props
}, ref): JSX.Element => {
  if (color) {
    console.warn('[DEPRECATED]: Color will now always be primary, if you need another color, prefer overriding it using css.');
  }

  return (
    <hr
      className={ classNames(
        style['divider'],
        style[`divider--${color}`],
        style[`divider--${spacing}`],
        className,
      )}
      data-ods="divider"
      ref={ ref }
      { ...props } />
  );
});

Divider.displayName = 'Divider';

export {
  Divider,
  type DividerProp,
};
