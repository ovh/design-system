import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { useRange } from '../../contexts/useRange';
import style from './rangeBounds.module.scss';

interface RangeBoundsProp {
  max: number,
  min: number
}

const RangeBounds: FC<RangeBoundsProp> = ({
  max,
  min,
}): JSX.Element => {
  const { disabled } = useRange();

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
