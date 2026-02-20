import { Menu as ArkMenu } from '@ark-ui/react/menu';
import { Portal } from '@ark-ui/react/portal';
import { type JSX, useState } from 'react';
import { BADGE_COLOR, Badge } from '../../badge/src';
import { Button } from '../../button/src';
import { Checkbox, CheckboxControl, CheckboxLabel } from '../../checkbox/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { Kbd } from '../../kbd/src';
import { Menu, MenuContent, MenuGroup, MenuGroupLabel, MenuItem, MenuSubmenu, MenuTrigger } from '.';
import style from './dev.module.css';

export default {
  component: Menu,
  title: 'Menu dev',
};

export const CustomStyle = () => (
  <Menu>
    <MenuTrigger className={ style['custom-menu-trigger'] }>
      Menu
    </MenuTrigger>
    <MenuContent
      className={ style['custom-menu-content'] }
      withArrow>
      <MenuItem value={ '1' }>Item 1</MenuItem>
      <MenuItem value={ '2' }>Item 2</MenuItem>
    </MenuContent>
  </Menu>
);

export const Default = (): JSX.Element => (
  <Menu>
    <MenuTrigger>
      Menu
    </MenuTrigger>
    <MenuContent>
      <MenuItem value={ '1' }>Item 1</MenuItem>
      <MenuItem value={ '2' }>Item 2</MenuItem>
    </MenuContent>
  </Menu>
);

export const Controlled = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);

  function handleClick(value: string): void {
    alert(`You selected ${ value }`);
  }

  return (
    <>
      <Menu
        onOpenChange={ ({ open: nextOpen }) => setOpen(nextOpen) }
        open={ open }>
        <MenuTrigger>Menu</MenuTrigger>
        <MenuContent>
          <MenuItem
            onClick={ (e) => {
              setValue('Item 1');
              handleClick(e.detail.toString());
              setOpen(false);
            } }
            value={ '1' }>
            Item 1
          </MenuItem>
          <MenuItem
            onClick={ (e) => {
              setValue('Item 2');
              handleClick(e.detail.toString());
              setOpen(false);
            } }
            value={ '2' }>
            Item 2
          </MenuItem>
        </MenuContent>
      </Menu>
      <p>
        Selected value: { value ?? 'None' }
      </p>
    </>
  );
};

export const Nested = (): JSX.Element => (
  <Menu>
    <MenuTrigger>Menu</MenuTrigger>
    <MenuContent createPortal={ false }>
      <MenuItem value="1">Item 1</MenuItem>
      <MenuItem value="2">Item 2</MenuItem>
      <MenuSubmenu>
        <MenuTrigger>Parent Item 3</MenuTrigger>
        <MenuContent>
          <MenuItem value="3-1">Nested item 1</MenuItem>
          <MenuItem value="3-2">Nested item 2</MenuItem>
        </MenuContent>
      </MenuSubmenu>
    </MenuContent>
  </Menu>
);

export const DeepNested = (): JSX.Element => (
  <Menu>
    <MenuTrigger>Menu</MenuTrigger>
    <MenuContent createPortal={ false }>
      <MenuItem value="1">Item 1</MenuItem>
      <MenuSubmenu>
        <MenuTrigger>Level 1</MenuTrigger>
        <MenuContent>
          <MenuItem value="1-1">Level 1 Item</MenuItem>
          <MenuItem value="1-2">Another level 1 item</MenuItem>
          <MenuSubmenu>
            <MenuTrigger>Level 2</MenuTrigger>
            <MenuContent>
              <MenuItem value="2-1">Level 2 Item</MenuItem>
              <MenuItem value="2-2">Second level 2 item</MenuItem>
              <MenuItem value="2-3">Third level 2 item</MenuItem>
              <MenuSubmenu>
                <MenuTrigger>Level 3</MenuTrigger>
                <MenuContent>
                  <MenuItem value="3-1">Level 3 Item</MenuItem>
                  <MenuItem value="3-2">Extra level 3 item</MenuItem>
                  <MenuSubmenu>
                    <MenuTrigger>Level 4</MenuTrigger>
                    <MenuContent>
                      <MenuItem value="4-1">Level 4 Item</MenuItem>
                      <MenuItem value="4-2">Level 4 Item B</MenuItem>
                      <MenuItem value="4-3">Level 4 Item C</MenuItem>
                      <MenuSubmenu>
                        <MenuTrigger>Level 5</MenuTrigger>
                        <MenuContent>
                          <MenuItem value="5-1">Level 5 Item</MenuItem>
                          <MenuItem value="5-2">Another deep item</MenuItem>
                          <MenuItem value="5-3">Last deep item</MenuItem>
                        </MenuContent>
                      </MenuSubmenu>
                    </MenuContent>
                  </MenuSubmenu>
                </MenuContent>
              </MenuSubmenu>
            </MenuContent>
          </MenuSubmenu>
        </MenuContent>
      </MenuSubmenu>
    </MenuContent>
  </Menu>
);

export const ArkNestedNoPortal = (): JSX.Element => (
  <ArkMenu.Root>
    <ArkMenu.Trigger>
      Ark menu
    </ArkMenu.Trigger>
    <ArkMenu.Positioner>
      <ArkMenu.Content>
        <ArkMenu.Item value="1">Item 1</ArkMenu.Item>
        <ArkMenu.Item value="2">Item 2</ArkMenu.Item>
        <ArkMenu.Root>
          <ArkMenu.TriggerItem>Level 1</ArkMenu.TriggerItem>
          <ArkMenu.Positioner>
            <ArkMenu.Content>
              <ArkMenu.Item value="1-1">Level 1 item</ArkMenu.Item>
              <ArkMenu.Root>
                <ArkMenu.TriggerItem>Level 2</ArkMenu.TriggerItem>
                <ArkMenu.Positioner>
                  <ArkMenu.Content>
                    <ArkMenu.Item value="2-1">Level 2 item</ArkMenu.Item>
                    <ArkMenu.Item value="2-2">Level 2 item B</ArkMenu.Item>
                  </ArkMenu.Content>
                </ArkMenu.Positioner>
              </ArkMenu.Root>
            </ArkMenu.Content>
          </ArkMenu.Positioner>
        </ArkMenu.Root>
      </ArkMenu.Content>
    </ArkMenu.Positioner>
  </ArkMenu.Root>
);

export const ArkNestedWithPortal = (): JSX.Element => (
  <ArkMenu.Root>
    <ArkMenu.Trigger>
      Ark menu
    </ArkMenu.Trigger>
    <Portal>
      <ArkMenu.Positioner>
        <ArkMenu.Content>
          <ArkMenu.Item value="1">Item 1</ArkMenu.Item>
          <ArkMenu.Item value="2">Item 2</ArkMenu.Item>
          <ArkMenu.Root>
            <ArkMenu.TriggerItem>Level 1</ArkMenu.TriggerItem>
            <Portal>
              <ArkMenu.Positioner>
                <ArkMenu.Content>
                  <ArkMenu.Item value="1-1">Level 1 item</ArkMenu.Item>
                  <ArkMenu.Root>
                    <ArkMenu.TriggerItem>Level 2</ArkMenu.TriggerItem>
                    <Portal>
                      <ArkMenu.Positioner>
                        <ArkMenu.Content>
                          <ArkMenu.Item value="2-1">Level 2 item</ArkMenu.Item>
                          <ArkMenu.Item value="2-2">Level 2 item B</ArkMenu.Item>
                        </ArkMenu.Content>
                      </ArkMenu.Positioner>
                    </Portal>
                  </ArkMenu.Root>
                </ArkMenu.Content>
              </ArkMenu.Positioner>
            </Portal>
          </ArkMenu.Root>
        </ArkMenu.Content>
      </ArkMenu.Positioner>
    </Portal>
  </ArkMenu.Root>
);

export const ViewsExample = (): JSX.Element => (
  <Menu>
    <MenuTrigger asChild>
      <Button>
        Open menu
      </Button>
    </MenuTrigger>
    <MenuContent>
      <MenuGroup>
        <MenuGroupLabel>
          Current view
        </MenuGroupLabel>
        <MenuItem
          className={ style[ 'menu__content__group__item__edit' ] }
          value="edit-current-view">
          <Icon name={ ICON_NAME.pen } /> Edit current view
        </MenuItem>
        <MenuItem
          className={ style[ 'menu__content__group__item__delete' ] }
          value="delete-current-view">
          <Icon name={ ICON_NAME.trash } /> Delete current view
        </MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuGroupLabel>
          Views
        </MenuGroupLabel>
        <MenuItem value="renewal-view">
          <Checkbox>
            <CheckboxControl />
            <CheckboxLabel>
              <span>Renewal view</span>
              <Badge color={ BADGE_COLOR.neutral }>Default</Badge>
            </CheckboxLabel>
          </Checkbox>
        </MenuItem>
        <MenuItem value="admin-view">
          <Checkbox>
            <CheckboxControl />
            <CheckboxLabel>
              Admin view
            </CheckboxLabel>
          </Checkbox>
        </MenuItem>
        <MenuItem value="add-view">
          <Icon name={ ICON_NAME.plus } />
          Add <Kbd>CMD</Kbd>+<Kbd>K</Kbd>
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);
