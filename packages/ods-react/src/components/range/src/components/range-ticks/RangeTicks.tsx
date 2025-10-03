import { Slider } from '@ark-ui/react/slider';
import { type FC, type JSX } from 'react';
import { type RangeTickItem } from '../../contexts/useRange';
import { RangeTick } from '../range-tick/RangeTick';
import style from './rangeTicks.module.scss';

interface RangeTicksProp {
  singleMode: boolean,
  ticks: RangeTickItem[],
}

const RangeTicks: FC<RangeTicksProp> = ({
  singleMode,
  ticks,
}): JSX.Element => {
  return (
    <Slider.MarkerGroup className={ style['range-ticks'] }>
      {
        ticks.map((tick, i) => (
          <RangeTick
            index={ i }
            isLast={ i === ticks.length - 1 }
            key={ typeof tick === 'number' ? tick : tick.value }
            singleMode={ singleMode }
            tick={ tick } />
        ))
      }
    </Slider.MarkerGroup>
  );
};

RangeTicks.displayName = 'RangeTicks';

export {
  RangeTicks,
  type RangeTicksProp,
};
