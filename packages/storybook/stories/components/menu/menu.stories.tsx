import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../../../ods-react/src/components/button/src';
import { Menu, MenuContent, MenuGroup, MenuGroupLabel, MenuItem, type MenuProp, MenuSubmenu, MenuTrigger } from '../../../../ods-react/src/components/menu/src';
import { MENU_POSITIONS } from '../../../../ods-react/src/components/menu/src/constants/menu-position';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<MenuProp>;
type DemoArg = {
  position: MenuProp['position'],
  triggerLabel: string,
  withArrow: boolean,
};

const meta: Meta<MenuProp> = {
  argTypes: excludeFromDemoControls(['onOpenChange', 'onPositionChange', 'open', 'positionerStyle', 'triggerId']),
  component: Menu,
  subcomponents: {
    MenuContent,
    MenuGroup,
    MenuGroupLabel,
    MenuItem,
    MenuSubmenu,
    MenuTrigger,
  },
  tags: ['new'],
  title: 'React Components/Menu',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    position: {
      control: 'select',
      options: MENU_POSITIONS,
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'MENU_POSITION' },
      },
    },
    triggerLabel: {
      control: 'text',
      table: {
        category: CONTROL_CATEGORY.slot,
        type: { summary: 'string' },
      },
    },
    withArrow: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.design,
      },
    },
  }),
  render: (arg: Partial<DemoArg>) => (
    <Menu
      position={ arg.position }>
      <MenuTrigger asChild>
        <Button>
          { arg.triggerLabel ?? 'Open menu' }
        </Button>
      </MenuTrigger>
      <MenuContent withArrow={ arg.withArrow ?? false }>
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="settings">Settings</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Button, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';`,
  },
  render: ({}) => (
    <Menu>
      <MenuTrigger asChild>
        <Button>
          Open menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="settings">Settings</MenuItem>
        <MenuItem value='logout'>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
  tags: ['!dev'],
};

export const Controlled: Story = {
  globals: {
    imports: `import { Button, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
      setIsOpen((isOpen) => !isOpen);
    }

    return (
      <>
        <Button onClick={ toggleMenu }>
          Toggle menu
        </Button>

        <Menu open={ isOpen }>
          <MenuTrigger asChild>
            <Button>
              Open menu
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value='profile'>Profile</MenuItem>
            <MenuItem value='settings'>Settings</MenuItem>
            <MenuItem value='logout'>Logout</MenuItem>
          </MenuContent>
        </Menu>
      </>
    );
  },
};

export const Nested: Story = {
  globals: {
    imports: `import { Button, Menu, MenuContent, MenuItem, MenuSubmenu, MenuTrigger } from '@ovhcloud/ods-react';`,
  },
  render: ({}) => (
    <Menu>
      <MenuTrigger asChild>
        <Button>
          Open menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value='new'>New</MenuItem>
        <MenuItem value='open'>Open</MenuItem>
        <MenuSubmenu>
          <MenuTrigger>Share</MenuTrigger>
          <MenuContent>
            <MenuItem value='email'>Email</MenuItem>
            <MenuItem value='message'>Message</MenuItem>
          </MenuContent>
        </MenuSubmenu>
      </MenuContent>
    </Menu>
  ),
  tags: ['!dev'],
};

export const Group: Story = {
  globals: {
    imports: `import { Button, Menu, MenuContent, MenuGroup, MenuGroupLabel, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';`,
  },
  render: ({}) => (
    <Menu>
      <MenuTrigger asChild>
        <Button>
          Open menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuGroupLabel>Account</MenuGroupLabel>
          <MenuItem value='profile'>Profile</MenuItem>
          <MenuItem value='billing'>Billing</MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuGroupLabel>Support</MenuGroupLabel>
          <MenuItem value='help'>Help center</MenuItem>
          <MenuItem value='contact'>Contact support</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
  tags: ['!dev'],
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Menu>
      <MenuTrigger asChild>
        <Button>
          Account
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuGroupLabel>My account</MenuGroupLabel>
          <MenuItem value='profile'>Profile</MenuItem>
          <MenuItem value='settings'>Settings</MenuItem>
        </MenuGroup>
        <MenuItem value='logout'>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
  tags: ['!dev'],
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: ({}) => (
    <Menu>
      <MenuTrigger asChild>
        <Button>
            Default
        </Button>
      </MenuTrigger>
      <MenuContent createPortal={ false }>
        <MenuItem value='profile'>Profile</MenuItem>
        <MenuItem value='settings'>Settings</MenuItem>
      </MenuContent>
    </Menu>

  ),
  tags: ['!dev'],
};
