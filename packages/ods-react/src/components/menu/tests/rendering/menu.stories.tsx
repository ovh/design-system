import { Menu, MenuContent, MenuItem, MenuTrigger } from '../../src';

export default {
  component: Menu,
  title: 'Tests rendering',
};

export const render = () => (
  <Menu>
    <MenuTrigger data-testid="render-trigger">
      Open menu
    </MenuTrigger>
    <MenuContent>
      <MenuItem value='test'>test</MenuItem>
    </MenuContent>
  </Menu>
);
