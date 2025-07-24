import { Slider } from '@ark-ui/react/slider';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { RangeBounds } from '../range-bounds/RangeBounds';
import { RangeThumb } from '../range-thumb/RangeThumb';
import { RangeTrack } from '../range-track/RangeTrack';
import style from './range.module.scss';

interface RangeValueChangeDetail {
  value: number[],
}

interface RangeProp extends Omit<ComponentPropsWithRef<'div'>, 'aria-label' | 'aria-labelledby' | 'defaultValue'> {
  /**
   * The aria-label of each slider thumb. Useful for providing an accessible name to the slider.
   */
  'aria-label'?: string[],
  /**
   * The id of the elements that labels each slider thumb. Useful for providing an accessible name to the slider.
   */
  'aria-labelledby'?: string[],
  /**
   * The initial selected value(s). Use when you don't need to control the value(s) of the range.
   */
  defaultValue?: number[],
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The maximum value that can be selected.
   */
  max?: number,
  /**
   * The minimum value that can be selected.
   */
  min?: number,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the thumb moves.
   */
  onDragging?: (detail: RangeValueChangeDetail) => void,
  /**
   * Callback fired when the thumb is released.
   */
  onValueChange?: (detail: RangeValueChangeDetail) => void,
  /**
   * The amount to increment or decrement the value by.
   */
  step?: number,
  /**
   * List of tick indicators to display alongside the range.
   */
  ticks?: number[],
  /**
   * The controlled selected value(s).
   */
  value?: number[],
}

const Range: FC<RangeProp> = forwardRef(({
  className,
  defaultValue,
  disabled,
  id,
  invalid,
  max = 100,
  min = 0,
  name,
  onDragging,
  onValueChange,
  step = 1,
  ticks,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const isInvalid = useMemo(() => invalid || fieldContext?.invalid, [fieldContext, invalid]);

  const nbThumb = useMemo(() => {
    if (value && value.length) {
      return value.length;
    } else if (defaultValue && defaultValue.length) {
      return defaultValue.length;
    }
    return 1;
  }, [defaultValue, value]);

  return (
    <Slider.Root
      aria-label={ props['aria-label'] }
      aria-labelledby={ props['aria-labelledby'] }
      className={ classNames(style['range'], className) }
      defaultValue={ defaultValue }
      disabled={ disabled }
      id={ id || fieldContext?.id }
      invalid={ isInvalid }
      max={ max }
      min={ min }
      minStepsBetweenThumbs={ 1 }
      name={ name }
      orientation="horizontal"
      onValueChange={ onDragging }
      onValueChangeEnd={ onValueChange }
      ref={ ref }
      role="group"
      step={ step }
      thumbSize={{
        height: 16,
        width: 16,
      }}
      value={ value }
      { ...props }>
      <Slider.Control className={ style['range__control'] }>
        <RangeTrack />

        {
          Array.from({ length: nbThumb }).map((_, idx) => (
            <RangeThumb
              disabled={ disabled }
              index={ idx }
              invalid={ isInvalid }
              key={ idx } />
          ))
        }
      </Slider.Control>

      {
        ticks && ticks.length > 0 &&
        <Slider.MarkerGroup className={ style['range__ticks'] }>
          {
            ticks.map((tick) => (
              <Slider.Marker
                className={ classNames(
                  style['range__ticks__tick'],
                  { [style['range__ticks__tick--single-mode']]: nbThumb <= 1 },
                )}
                key={ tick }
                value={ tick } />
            ))
          }
        </Slider.MarkerGroup>
      }

      <RangeBounds
        disabled={ disabled }
        max={ max }
        min={ min } />
    </Slider.Root>
  );
});

Range.displayName = 'Range';

export {
  Range,
  type RangeProp,
  type RangeValueChangeDetail,
};
