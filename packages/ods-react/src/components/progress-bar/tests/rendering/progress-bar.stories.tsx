import { ProgressBar } from '../../src';

export default {
  component: ProgressBar,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <ProgressBar
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <ProgressBar data-testid="render" />
);
