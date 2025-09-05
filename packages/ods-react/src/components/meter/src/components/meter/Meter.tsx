import classNames from 'classnames';
import { type CSSProperties, type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { getValueState } from '../../controller/meter';
import style from './meter.module.scss';

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
   * The optimal numeric value. Combined with low and high, it will changes the coloring behaviour.
   */
  optimum?: number
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
  optimum,
  value = 0,
  ...props
}, ref): JSX.Element => {
  const fillWidth = ((Math.max(min, Math.min(value, max)) - min) / (max - min)) * 100;
  const fillState = getValueState(value, { high, low, max, min, optimum });

  return (
    <div
      aria-valuemax={ max }
      aria-valuemin={ min }
      aria-valuenow={ value }
      className={ classNames(
        style['meter'],
        style[`meter--${fillState}`],
        className,
      )}
      data-ods="meter"
      data-state={ fillState }
      ref={ ref }
      role="meter"
      style={{ '--ods-meter-fill-width': `${fillWidth}%` } as CSSProperties }
      { ...props }>
    </div>
  );
});

Meter.displayName = 'Meter';

export {
  Meter,
  type MeterProp,
};
