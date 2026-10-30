import { type CSSProperties } from 'react';
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

// Distinct values for the three roles the thumb and the ON label read, so that each state shows which one it took.
export const stateRoles = () => (
  <div style={{
    '--ods-semantic-color-content-on-control-solid': 'rgb(4, 5, 6)',
    '--ods-semantic-color-content-on-critical-solid': 'rgb(7, 8, 9)',
    '--ods-semantic-color-surface-thumb': 'rgb(1, 2, 3)',
  } as CSSProperties}>
    <Toggle withLabels>
      <ToggleControl data-testid="unchecked" />
    </Toggle>

    <Toggle defaultChecked withLabels>
      <ToggleControl data-testid="checked-labelled" />
    </Toggle>

    <Toggle defaultChecked invalid withLabels>
      <ToggleControl data-testid="checked-invalid" />
    </Toggle>
  </div>
);
