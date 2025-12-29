import { INPUT_TYPE, Input, Range, type RangeValueChangeDetail } from '@ovhcloud/ods-react';
import { type ChangeEvent, type JSX, useState } from 'react';
import style from './index.module.scss';

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
    <div className={ style['range-input'] }>
      <Range
        max={ MAX }
        min={ MIN }
        onDragging={ onRangeDragging }
        value={ draggingValues } />

      <Input
        className={ style['range-input__input'] }
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
