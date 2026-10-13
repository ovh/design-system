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
  <Datepicker locale='en'>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const DefaultWidth = () => (
  <>
    <style>{ '.probe-wide { width: 400px; }' }</style>
    <div data-testid="default"><Datepicker><DatepickerControl className="probe" /><DatepickerContent /></Datepicker></div>
    <div data-testid="narrow" style={ { width: '200px' } }><Datepicker><DatepickerControl className="probe" /><DatepickerContent /></Datepicker></div>
    <div data-testid="override"><Datepicker><DatepickerControl className="probe probe-wide" /><DatepickerContent /></Datepicker></div>
  </>
);
