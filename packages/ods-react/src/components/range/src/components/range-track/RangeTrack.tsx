import { Slider } from '@ark-ui/react/slider';
import { type FC, type JSX } from 'react';
import style from './rangeTrack.module.scss';

interface RangeTrackProp {}

const RangeTrack: FC<RangeTrackProp> = (): JSX.Element => {
  return (
    <Slider.Track className={ style['range-track'] }>
      <Slider.Range className={ style['range-track__filled'] } />
    </Slider.Track>
  );
};

RangeTrack.displayName = 'RangeTrack';

export {
  RangeTrack,
  type RangeTrackProp,
};
