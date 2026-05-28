import { INPUT_TYPE, Input, Range, type RangeValueChangeDetail } from '@ovhcloud/ods-react';
import { type ChangeEvent, type JSX, useState } from 'react';
import styles from './RangeInput.module.css';

type RangeInputProp = {
  defaultValue?: number,
  disabled?: boolean,
  max?: number,
  min?: number,
  step?: number,
}

const RangeInput = ({
  defaultValue,
  disabled = false,
  max = 100,
  min = 0,
  step,
}: RangeInputProp): JSX.Element => {
  const [draggingValues, setDraggingValues] = useState([defaultValue ?? min]);

  function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setDraggingValues([Math.min(max, Math.max(min, Math.abs(event.target.valueAsNumber)))]);
  }

  function onRangeDragging({ value }: RangeValueChangeDetail): void {
    setDraggingValues(value);
  }

  return (
    <div className={ styles['range-input'] }>
      <Range
        disabled={ disabled }
        max={ max }
        min={ min }
        onDragging={ onRangeDragging }
        step={ step }
        value={ draggingValues } />

      <Input
        className={ styles['range-input__input'] }
        disabled={ disabled }
        max={ max }
        min={ min }
        onChange={ onInputChange }
        step={ step }
        type={ INPUT_TYPE.number }
        value={ draggingValues[0] } />
    </div>
  );
};

export {
  RangeInput,
  type RangeInputProp,
};

