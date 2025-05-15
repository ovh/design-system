import { PhoneNumber, PhoneNumberControl } from '../../src';

export default {
  component: PhoneNumber,
  title: 'Tests rendering',
};

export const render = () => (
  <PhoneNumber data-testid="render">
    <PhoneNumberControl />
  </PhoneNumber>
);
