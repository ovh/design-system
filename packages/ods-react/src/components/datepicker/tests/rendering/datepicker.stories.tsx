import { Datepicker, DatepickerContent, DatepickerControl } from '../../src';

export default {
  component: Datepicker,
  title: 'Tests rendering',
};

export const render = () => (
  <Datepicker data-testid="render">
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);
