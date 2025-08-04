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
