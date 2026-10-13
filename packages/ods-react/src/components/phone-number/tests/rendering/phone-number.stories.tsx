import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '../../src';

export default {
  component: PhoneNumber,
  title: 'Tests rendering',
};

export const render = () => (
  <PhoneNumber data-testid="render">
    <PhoneNumberCountryList />

    <PhoneNumberControl />
  </PhoneNumber>
);

export const DefaultWidth = () => (
  <>
    <style>{ '.probe-wide { width: 400px; }' }</style>
    <div data-testid="default"><PhoneNumber className="probe"><PhoneNumberCountryList /><PhoneNumberControl /></PhoneNumber></div>
    <div data-testid="narrow" style={ { width: '200px' } }><PhoneNumber className="probe"><PhoneNumberCountryList /><PhoneNumberControl /></PhoneNumber></div>
    <div data-testid="override"><PhoneNumber className="probe probe-wide"><PhoneNumberCountryList /><PhoneNumberControl /></PhoneNumber></div>
  </>
);
