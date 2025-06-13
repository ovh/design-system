import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import style from './rangeBounds.module.scss';

interface RangeBoundsProp {
  disabled?: boolean,
  max: number,
  min: number
}

const RangeBounds: FC<RangeBoundsProp> = ({
  disabled,
  max,
  min,
}): JSX.Element => {
  return (
    <div className={ classNames(
      style['range-bounds'],
      { [style['range-bounds--disabled']]: disabled },
    )}>
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
