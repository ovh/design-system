import { Input } from '../../src';

export default {
  component: Input,
  title: 'Tests rendering',
};

export const ClearableDefaultValue = () => (
  <Input
    clearable
    defaultValue="Some value"
    locale="en" />
);

export const ClearableEmpty = () => (
  <Input
    clearable
    locale="en" />
);

export const ClearableValue = () => (
  <Input
    clearable
    locale="en"
    value="Some value" />
);

export const CustomStyle = () => (
  <Input
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const Render = () => (
  <Input data-testid="render" />
);
