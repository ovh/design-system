import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { DIVIDER_ORIENTATION } from '../../constants/divider-orientation';
import { DIVIDER_SPACING, type DividerSpacing } from '../../constants/divider-spacing';
import style from './divider.module.scss';

interface DividerProp extends ComponentPropsWithRef<'hr'> {
  /**
   * Removed in v20, override the background-color in CSS. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  color?: never,
  /**
   * The orientation of the divider.
   */
  orientation?: 'horizontal' | 'vertical',
  /**
   * The spacing preset to use.
   */
  spacing?: DividerSpacing,
}

const Divider: FC<DividerProp> = forwardRef(({
  className,
  orientation = DIVIDER_ORIENTATION.horizontal,
  spacing = DIVIDER_SPACING._2,
  ...props
}, ref): JSX.Element => {
  return (
    <hr
      className={ classNames(
        style['divider'],
        style[`divider--${orientation}`],
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
