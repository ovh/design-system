import { Slider } from '@ark-ui/react/slider';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { THUMB_SIZE } from '../../constants/thumb';
import { RangeProvider, type RangeRootProp, type RangeValueChangeDetail, useRange } from '../../contexts/useRange';
import { RangeBounds } from '../range-bounds/RangeBounds';
import { RangeThumb } from '../range-thumb/RangeThumb';
import { RangeTicks } from '../range-ticks/RangeTicks';
import { RangeTrack } from '../range-track/RangeTrack';
import style from './range.module.scss';

interface RangeProp extends Omit<ComponentPropsWithRef<'div'>, 'aria-label' | 'aria-labelledby' | 'defaultValue'>, RangeRootProp {}

const RangeRoot: FC<RangeProp> = forwardRef(({
  className,
  defaultValue,
  displayBounds = true,
  displayTooltip = true,
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
  const { disabled, rootPadding } = useRange();
  const fieldContext = useFormField();
  const rangeRef = useRef<HTMLDivElement>(null);
  const isInvalid = useMemo(() => invalid || fieldContext?.invalid, [fieldContext, invalid]);

  const nbThumb = useMemo(() => {
    if (value && value.length) {
      return value.length;
    } else if (defaultValue && defaultValue.length) {
      return defaultValue.length;
    }
    return 1;
  }, [defaultValue, value]);

  useImperativeHandle(ref, () => rangeRef.current!, [rangeRef]);

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.style.setProperty('--ods-range-padding-bottom', `${rootPadding.bottom}px`);
      rangeRef.current.style.setProperty('--ods-range-padding-left', `${rootPadding.left}px`);
      rangeRef.current.style.setProperty('--ods-range-padding-right', `${rootPadding.right}px`);
    }
  }, [rangeRef, rootPadding]);

  return (
    <Slider.Root
      aria-label={ props['aria-label'] }
      aria-labelledby={ props['aria-labelledby'] }
      className={ classNames(style['range'], className) }
      data-ods="range"
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
      ref={ rangeRef }
      role="group"
      step={ step }
      thumbSize={{
        height: THUMB_SIZE,
        width: THUMB_SIZE,
      }}
      value={ value }
      { ...props }>
      <Slider.Control className={ style['range__control'] }>
        <RangeTrack />

        {
          Array.from({ length: nbThumb }).map((_, idx) => (
            <RangeThumb
              displayTooltip={ displayTooltip }
              index={ idx }
              invalid={ isInvalid }
              key={ idx } />
          ))
        }
      </Slider.Control>

      {
        ticks && ticks.length > 0 &&
        <RangeTicks
          singleMode={ nbThumb <= 1 }
          ticks={ ticks } />
      }

      {
        displayBounds &&
        <RangeBounds
          max={ max }
          min={ min } />
      }
    </Slider.Root>
  );
});

const Range: FC<RangeProp> = forwardRef(({
  disabled,
  ...props
}, ref): JSX.Element => {
  return (
    <RangeProvider disabled={ disabled }>
      <RangeRoot
        ref={ ref }
        { ...props } />
    </RangeProvider>
  );
});

Range.displayName = 'Range';

export {
  Range,
  type RangeProp,
  type RangeValueChangeDetail,
};
