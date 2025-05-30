import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { Range, type RangeValueChangeDetail } from '.';
import style from './dev.module.css';

export default {
  component: Range,
  title: 'Range dev',
};

export const ControlledRange = () => {
  const [draggingValue, setDraggingValue] = useState<number>();
  const [value, setValue] = useState<number>();

  function onDragging(detail: RangeValueChangeDetail) {
    setDraggingValue(detail.value[0]);
  }

  function onValueChange(detail: RangeValueChangeDetail) {
    setValue(detail.value[0]);
  }

  return (
    <>
      <p>
        <span>Final value: { value }</span>
        <br />
        <span>Dragged value: { draggingValue }</span>
      </p>

      <Range
        onDragging={ onDragging }
        onValueChange={ onValueChange }
        value={ draggingValue ? [draggingValue] : undefined } />
    </>
  );
};

export const ControlledRangeDual = () => {
  const [draggingValue, setDraggingValue] = useState([0, 10]);
  const [value, setValue] = useState([0, 10]);

  function onDragging(detail: RangeValueChangeDetail) {
    setDraggingValue(detail.value);
  }

  function onValueChange(detail: RangeValueChangeDetail) {
    setValue(detail.value);
  }

  return (
    <>
      <p>
        <span>Final value: { value?.join(', ') }</span>
        <br />
        <span>Dragged value: { draggingValue?.join(', ') }</span>
      </p>

      <Range
        onDragging={ onDragging }
        onValueChange={ onValueChange }
        value={ draggingValue } />
    </>
  );
};

export const CustomCSS = () => (
  <Range className={ style['custom-range'] } />
);

export const Default = () => (
  <>
    <Range />
  </>
);

export const DefaultValue = () => (
  <>
    <Range defaultValue={ [50] } />

    <Range defaultValue={ [50, 75] } />
  </>
);

export const Disabled = () => (
  <>
    <Range
      defaultValue={ [50] }
      disabled />

    <Range
      defaultValue={ [50, 75] }
      disabled />
  </>
);

export const InFormField = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          My range:
        </FormFieldLabel>

        <Range />

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          My range:
        </FormFieldLabel>

        <Range defaultValue={ [50, 75] } />

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => (
  <>
    <Range
      defaultValue={ [50] }
      invalid />

    <Range
      defaultValue={ [50, 75] }
      invalid />
  </>
);

export const MaxMin = () => (
  <>
    <p>Max 500</p>
    <Range
      defaultValue={ [50] }
      max={ 500 } />
    <Range
      defaultValue={ [50, 75] }
      max={ 500 } />

    <p>Min 25</p>
    <Range
      defaultValue={ [50] }
      min={ 25 } />
    <Range
      defaultValue={ [50, 75] }
      min={ 25 } />

    <p>Max 75 & Min 25</p>
    <Range
      defaultValue={ [50] }
      max={ 75 }
      min={ 25 } />
    <Range
      defaultValue={ [50, 75] }
      max={ 75 }
      min={ 25 } />
  </>
);

export const Step = () => (
  <>
    <Range step={ 20 } />

    <Range
      defaultValue={ [20, 60] }
      step={ 20 } />
  </>
);

export const Ticks = () => (
  <>
    <Range ticks={ [10, 20, 30, 40, 50, 60, 70, 80, 90] } />

    <Range
      defaultValue={ [50, 75] }
      ticks={ [10, 20, 30, 40, 50, 60, 70, 80, 90] } />
  </>
);
