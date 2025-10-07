import { Password } from '../../src';

export default {
  component: Password,
  title: 'Tests rendering',
};

export const ClearableDefaultValue = () => (
  <Password
    clearable
    defaultValue="Some value"
    locale="en" />
);

export const ClearableEmpty = () => (
  <Password
    clearable
    locale="en" />
);

export const ClearableValue = () => (
  <Password
    clearable
    locale="en"
    value="Some value" />
);

export const CustomStyle = () => (
  <Password
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const Render = () => (
  <Password data-testid="render" />
);
