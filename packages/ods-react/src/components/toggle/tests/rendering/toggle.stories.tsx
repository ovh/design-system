import { Toggle, ToggleControl } from '../../src';

export default {
  component: Toggle,
  title: 'Tests rendering',
};

export const checked = () => (
  <Toggle defaultChecked>
    <ToggleControl data-testid="checked" />
  </Toggle>
);

export const customStyle = () => (
  <Toggle
    data-testid="custom-style"
    style={{ height: '42px' }}>
    <ToggleControl />
  </Toggle>
);

export const render = () => (
  <Toggle data-testid="render">
    <ToggleControl />
  </Toggle>
);
