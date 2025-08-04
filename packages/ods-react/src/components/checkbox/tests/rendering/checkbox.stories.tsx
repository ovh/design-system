import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '../../src';

export default {
  component: Checkbox,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Checkbox
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <CheckboxGroup data-testid="render">
    <Checkbox value="checkbox1">
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox 1
      </CheckboxLabel>
    </Checkbox>

    <Checkbox value="checkbox2">
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox 2
      </CheckboxLabel>
    </Checkbox>
  </CheckboxGroup>
);
