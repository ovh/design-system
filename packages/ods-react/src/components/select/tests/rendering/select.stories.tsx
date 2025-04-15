import { Select } from '../../src';

export default {
  component: Select,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Select
    data-testid="custom-style"
    items={[]}
    style={{ height: '42px' }} />
);

export const render = () => (
  <Select
    data-testid="render"
    items={[]} />
);
