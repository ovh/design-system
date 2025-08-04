import { Select, SelectContent, SelectControl } from '../../src';

export default {
  component: Select,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Select
    data-testid="custom-style"
    items={[]}
    style={{ height: '42px' }}>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const render = () => (
  <Select
    data-testid="render"
    items={[]}>
    <SelectControl />
    <SelectContent />
  </Select>
);
