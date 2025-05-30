import { type FC, type JSX } from 'react';
import style from './rangeBounds.module.scss';

interface RangeBoundsProp {
  max: number,
  min: number
}

const RangeBounds: FC<RangeBoundsProp> = ({ max, min }): JSX.Element => {
  return (
    <div className={ style['range-bounds'] }>
      <span className={ style['range-bounds__min'] }>
        { min }
      </span>

      <span className={ style['range-bounds__max'] }>
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
