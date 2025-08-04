import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '../../src';

export default {
  component: Timepicker,
  title: 'Tests rendering',
};

export const render = () => (
  <Timepicker data-testid="render">
    <TimepickerControl />

    <TimepickerTimezoneList />
  </Timepicker>
);
