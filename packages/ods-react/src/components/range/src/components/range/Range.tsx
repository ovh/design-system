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
  'aria-label'?: string[],
  'aria-labelledby'?: string[],
  defaultValue?: number[],
  disabled?: boolean,
  invalid?: boolean,
  max?: number,
  min?: number,
  name?: string,
  onDragging?: (detail: RangeValueChangeDetail) => void,
  onValueChange?: (detail: RangeValueChangeDetail) => void,
  step?: number,
  ticks?: number[],
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
