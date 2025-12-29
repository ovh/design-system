import { Slider, useSliderContext } from '@ark-ui/react/slider';
import classNames from 'classnames';
import { type FC, type JSX, type KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useFormField } from '../../../../form-field/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';
import { useRange } from '../../contexts/useRange';
import style from './rangeThumb.module.scss';

interface RangeThumbProp {
  displayTooltip?: boolean,
  index: number,
  invalid?: boolean,
}

const RangeThumb: FC<RangeThumbProp> = ({
  displayTooltip,
  index,
  invalid,
}): JSX.Element => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const fieldContext = useFormField();
  const { focused, value } = useSliderContext();
  const { disabled } = useRange();
  const [isFocused, setIsFocused] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    if (focused) {
      thumbRef.current?.focus();
    }
  }, [focused]);

  function onBlur(): void {
    setIsFocused(false);
    setIsTooltipOpen(false);
  }

  function onFocus(): void {
    setIsFocused(true);
    setIsTooltipOpen(true);
  }

  function onKeyDown(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
      event.preventDefault();
    }
  }

  return (
    <Tooltip open={ displayTooltip && !disabled && (isFocused || isTooltipOpen) }>
      <TooltipTrigger asChild>
        <Slider.Thumb
          aria-describedby={ fieldContext?.ariaDescribedBy }
          aria-invalid={ invalid }
          aria-labelledby={ index === 0 ? fieldContext?.labelId : undefined }
          className={ classNames(
            style['range-thumb'],
            { [style['range-thumb--invalid']]: invalid },
          )}
          index={ index }
          onBlur={ onBlur }
          onFocus={ onFocus }
          onKeyDown={ onKeyDown }
          onMouseLeave={ () => setIsTooltipOpen(false) }
          onMouseOver={ () => setIsTooltipOpen(true) }
          ref={ thumbRef }
          role="slider">
          <Slider.HiddenInput />
        </Slider.Thumb>
      </TooltipTrigger>

      <TooltipContent withArrow>
        { value[index] }
      </TooltipContent>
    </Tooltip>
  );
};

RangeThumb.displayName = 'RangeThumb';

export {
  RangeThumb,
  type RangeThumbProp,
};
