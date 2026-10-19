import { type FC, type JSX } from 'react';
import style from './rangeBounds.module.scss';

interface RangeBoundsProp {
  max: number,
  min: number
}

const RangeBounds: FC<RangeBoundsProp> = ({
  max,
  min,
}): JSX.Element => {
  return (
    <div className={ style['range-bounds'] }>
      <span>
        { min }
      </span>

      <span>
        { max }
      </span>
    </div>
  );
};

RangeBounds.displayName = 'RangeBounds';

export {
  RangeBounds,
  type RangeBoundsProp,
};
