import { Kbd } from '../../src';

export default {
  component: Kbd,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Kbd
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Cmd + L
  </Kbd>
);

export const render = () => (
  <Kbd data-testid="render">
    Cmd + L
  </Kbd>
);
