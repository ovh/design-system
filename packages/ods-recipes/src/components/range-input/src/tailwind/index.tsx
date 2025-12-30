import { INPUT_TYPE, Input, Range, type RangeValueChangeDetail } from '@ovhcloud/ods-react';
import { type ChangeEvent, type JSX, useState } from 'react';
import './index.module.css';

const MAX = 100;
const MIN = 0;

const RangeInput = (): JSX.Element => {
  const [draggingValues, setDraggingValues] = useState([MIN]);

  function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setDraggingValues([Math.min(MAX, Math.abs(event.target.valueAsNumber))]);
  }

  function onRangeDragging({ value }: RangeValueChangeDetail): void {
    setDraggingValues(value);
  }

  return (
    <div className="grid grid-cols-[1fr_min-content] gap-x-[calc(var(--ods-theme-column-gap)_*_2)] items-baseline">
      <Range
        max={ MAX }
        min={ MIN }
        onDragging={ onRangeDragging }
        value={ draggingValues } />

      <Input
        className="w-[60px]"
        max={ MAX }
        min={ MIN }
        onChange={ onInputChange }
        type={ INPUT_TYPE.number }
        value={ draggingValues[0] } />
    </div>
  );
};

export {
  RangeInput,
};
