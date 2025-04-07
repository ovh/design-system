import { OdsInput } from '../../src';

export default {
  component: OdsInput,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsInput
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsInput data-testid="render" />
);
