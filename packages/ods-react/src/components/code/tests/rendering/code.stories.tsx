import { Code } from '../../src';

export default {
  component: Code,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Code
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Code data-testid="render" />
);
