import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './meter.module.scss';

// TODO optimum
// TODO hard to customize fill bar, either
//  - use composition <MeterFill />
//  - use pseudo element on meter div instead => prefer if possible

interface MeterProp extends ComponentPropsWithRef<'div'> {
  /**
   * The lower numeric bound of the high end of the measured range.
   */
  high?: number
  /**
   * The upper numeric bound of the low end of the measured range.
   */
  low?: number
  /**
   * The upper numeric bound of the measured range.
   */
  max?: number,
  /**
   * The lower numeric bound of the measured range.
   */
  min?: number,
  /**
   * The current value of the meter
   */
  value?: number,
}

const Meter: FC<MeterProp> = forwardRef(({
  className,
  high,
  low,
  max = 100,
  min = 0,
  value = 0,
  ...props
}, ref): JSX.Element => {
  const fillWidth = ((Math.max(min, Math.min(value, max)) - min) / (max - min)) * 100;

  return (
    <div
      aria-valuemax={ max }
      aria-valuemin={ min }
      aria-valuenow={ value }
      // aria-valuetext={ `${value}%` } // TODO add example instead in accessibility doc
      className={ classNames(style['meter'], className) }
      data-ods="meter"
      ref={ ref }
      role="meter"
      { ...props }>
      <span
        className={ classNames(
          style['meter__fill'],
          { [style['meter__fill--high']]: !!high && value > high },
          { [style['meter__fill--low']]: !!low && value < low },
        )}
        style={{ width: `${fillWidth}%` }} />
    </div>
  );
});

Meter.displayName = 'Meter';

export {
  Meter,
  type MeterProp,
};
