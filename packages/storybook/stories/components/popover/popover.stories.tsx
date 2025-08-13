import { BUTTON_COLOR, BUTTON_VARIANT, Divider } from '@ovhcloud/ods-react';
import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { POPOVER_POSITIONS, Popover, type PopoverProp, PopoverContent, PopoverTrigger } from '../../../../ods-react/src/components/popover/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { addLiveEditorToStory } from '../../../src/helpers/liveCoding';
import { staticSourceRenderConfig } from '../../../src/helpers/source';
import demoCode from './Demo?raw';

type Story = StoryObj<PopoverProp>;

const meta: Meta<PopoverProp> = {
  argTypes: excludeFromDemoControls(['onOpenChange', 'open']),
  component: Popover,
  subcomponents: { PopoverContent, PopoverTrigger },
  title: 'React Components/Popover',
};

export default meta;

export const Demo: StoryObj = {
  parameters: {
    layout: 'centered',
  },
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'POPOVER_POSITION' }
      },
      control: { type: 'select' },
      options: POPOVER_POSITIONS,
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      },
      control: { type: 'boolean' },
    },
  }),
  args: {
    content: 'My popover content',
  },
};

addLiveEditorToStory(Demo, demoCode);

export const Controlled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    function togglePopover() {
      setIsOpen((isOpen) => !isOpen);
    }

    return (
      <>
        <Button onClick={ togglePopover }>
          Toggle popover
        </Button>

        <Popover open={ isOpen }>
          <PopoverTrigger asChild>
            <Icon name={ ICON_NAME.cog } />
          </PopoverTrigger>

          <PopoverContent withArrow>
            This is the popover content
          </PopoverContent>
        </Popover>
      </>
    );
  },
};

export const CustomTrigger: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          Custom Trigger
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Popover>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
  ),
};

export const Grid: StoryObj = {
  decorators: [(story) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '50px 150px',
    }}>
      { story() }
    </div>
  )],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Popover position="top-start">
        <PopoverTrigger>
          Top Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Left popover
        </PopoverContent>
      </Popover>

      <Popover position="top">
        <PopoverTrigger>
          Top
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top popover
        </PopoverContent>
      </Popover>

      <Popover position="top-end">
        <PopoverTrigger>
          Top Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Right popover
        </PopoverContent>
      </Popover>

      <Popover position="left">
        <PopoverTrigger>
          Middle Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Left popover
        </PopoverContent>
      </Popover>

      <div />

      <Popover position="right">
        <PopoverTrigger>
          Middle Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Right popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-start">
        <PopoverTrigger>
          Bottom Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Left popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom">
        <PopoverTrigger>
          Bottom
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-end">
        <PopoverTrigger>
          Bottom Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Right popover
        </PopoverContent>
      </Popover>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          Show popover
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
  ),
};

export const AccessibilityWithMenu: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Popover>
      <PopoverTrigger aria-haspopup="menu" asChild>
        <Button>
          <Icon name={ICON_NAME.ellipsisVertical} />
        </Button>
      </PopoverTrigger>

      <PopoverContent withArrow={true} aria-label="Profile menu">
        <div role="menu" style={{ display: 'flex', flexDirection: 'column' }}>
          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>Information</Button>
          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>Notifications</Button>
          <Divider style={{ width: '100%' }} />
          <Button color={BUTTON_COLOR.critical} role="menuitem" variant={BUTTON_VARIANT.ghost}>Sign out</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
