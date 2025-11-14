import { useState } from 'react';
import { Datepicker, DatepickerContent, DatepickerControl } from '../../src';

export default {
  component: Datepicker,
  title: 'Tests behavior',
};

export const Clearable = () => (
  <Datepicker
    defaultValue={ new Date() }
    locale="en">
    <DatepickerControl clearable />

    <DatepickerContent />
  </Datepicker>
);

export const ClearableControlled = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Datepicker
      onValueChange={ ({ value }) => setValue(value) }
      locale="en"
      value={ value }>
      <DatepickerControl clearable />

      <DatepickerContent />
    </Datepicker>
  );
};
