import { Datepicker, DatepickerContent, DatepickerControl } from '../../src';

export default {
  component: Datepicker,
  title: 'Tests rendering',
};

export const ClearableDefaultValue = () => (
  <Datepicker
    defaultValue={ new Date() }
    locale="en">
    <DatepickerControl clearable />

    <DatepickerContent />
  </Datepicker>
);

export const ClearableEmpty = () => (
  <Datepicker locale="en">
    <DatepickerControl clearable />

    <DatepickerContent />
  </Datepicker>
);

export const ClearableValue = () => (
  <Datepicker
    locale="en"
    value={ new Date() }>
    <DatepickerControl clearable />

    <DatepickerContent />
  </Datepicker>
);

export const Render = () => (
  <Datepicker>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);
