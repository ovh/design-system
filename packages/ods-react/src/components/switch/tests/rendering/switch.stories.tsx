import { Switch, SwitchItem } from '../../src';

export default {
  component: Switch,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Switch
    data-testid="custom-style"
    style={{ height: '42px' }}>
    <SwitchItem value="item-1">Item 1</SwitchItem>
    <SwitchItem value="item-2">Item 2</SwitchItem>
    <SwitchItem value="item-3">Item 3</SwitchItem>
  </Switch>
);

export const render = () => (
  <Switch data-testid="render">
    <SwitchItem value="item-1">Item 1</SwitchItem>
    <SwitchItem value="item-2">Item 2</SwitchItem>
    <SwitchItem value="item-3">Item 3</SwitchItem>
  </Switch>
);
