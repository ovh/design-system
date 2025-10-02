import { Slider } from '@ark-ui/react/slider';
import classNames from 'classnames';
import { type FC, type JSX, useEffect, useRef } from 'react';
import { THUMB_SIZE } from '../../constants/thumb';
import { type RangeTickItem, useRange } from '../../contexts/useRange';
import style from './rangeTick.module.scss';

interface RangeTickProp {
  index: number,
  isLast: boolean,
  singleMode: boolean,
  tick: RangeTickItem,
}

const RangeTick: FC<RangeTickProp> = ({
  index,
  isLast,
  singleMode,
  tick,
}): JSX.Element => {
  const { disabled, setRootPadding } = useRange();
  const tickRef = useRef<HTMLSpanElement>(null);
  const isNumber = typeof tick === 'number';

  useEffect(() => {
    if (!tickRef.current || typeof tick === 'number') {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries && entries.length) {
        const { height, top, width } = entries[0].contentRect;

        if (index === 0) {
          setRootPadding((padding) => ({
            ...padding,
            left: (width / 2) - (THUMB_SIZE / 2),
          }));
        } else if (isLast) {
          setRootPadding((padding) => ({
            ...padding,
            right: (width / 2) - (THUMB_SIZE / 2),
          }));
        }

        setRootPadding((padding) => ({
          ...padding,
          bottom: height + top,
        }));
      }
    });

    resizeObserver.observe(tickRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [index, isLast, setRootPadding, tick, tickRef]);

  return (
    <Slider.Marker
      className={ classNames(
        style['range-tick'],
        { [style['range-tick--custom-marker']]: !isNumber },
        { [style['range-tick--single-mode']]: singleMode },
      )}
      ref={ tickRef }
      value={ isNumber ? tick : tick.value }>
      {
        !isNumber &&
        <span className={ classNames(
          style['range-tick__label'],
          { [style['range-tick__label--disabled']]: disabled },
        )}>
          { tick.label }
        </span>
      }
    </Slider.Marker>
  );
};

RangeTick.displayName = 'RangeTick';

export {
  RangeTick,
  type RangeTickProp,
};
