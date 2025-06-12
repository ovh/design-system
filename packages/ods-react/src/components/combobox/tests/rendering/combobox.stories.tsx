import { Combobox, ComboboxControl } from '../../src';

export default {
  component: Combobox,
  title: 'Tests rendering',
};

export const render = () => (
  <Combobox items={[]} data-testid="render">
    <ComboboxControl />
  </Combobox>
);
