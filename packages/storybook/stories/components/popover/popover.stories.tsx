import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { OdsButton } from '../../../../ods-react/src/components/button/src';
import { ODS_ICON_NAME, OdsIcon } from '../../../../ods-react/src/components/icon/src';
import { ODS_POPOVER_POSITION, ODS_POPOVER_POSITIONS, OdsPopover, type OdsPopoverProp, OdsPopoverContent, type OdsPopoverContentProp, OdsPopoverTrigger } from '../../../../ods-react/src/components/popover/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsPopoverProp>;
type DemoArg = Partial<OdsPopoverProp> & Partial<OdsPopoverContentProp> & {
  content?: string,
};

const meta: Meta<OdsPopoverProp> = {
  argTypes: {
    isOpen: {
      table: {
        disable: true,
      },
    },
  },
  component: OdsPopover,
  subcomponents: { OdsPopoverContent, OdsPopoverTrigger },
  title: 'ODS Components/Popover',
};

export default meta;

export const Demo: StoryObj = {
  parameters: {
    layout: 'centered',
  },
  render: (arg: DemoArg) => (
    <OdsPopover position={ arg.position }>
      <OdsPopoverTrigger>
        Show popover
      </OdsPopoverTrigger>

      <OdsPopoverContent withArrow={ arg.withArrow }>
        { arg.content }
      </OdsPopoverContent>
    </OdsPopover>
  ),
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_POPOVER_POSITION.top },
        type: { summary: ODS_POPOVER_POSITIONS }
      },
      control: { type: 'select' },
      options: ODS_POPOVER_POSITIONS,
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  }),
  args: {
    content: 'My popover content',
  },
};

export const Controlled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    function togglePopover() {
      setIsOpen((isOpen) => !isOpen);
    }

    return (
      <>
        <OdsButton onClick={ togglePopover }>
          Toggle popover
        </OdsButton>

        <OdsPopover isOpen={ isOpen }>
          <OdsPopoverTrigger asChild>
            <OdsIcon name={ ODS_ICON_NAME.cog } />
          </OdsPopoverTrigger>

          <OdsPopoverContent withArrow>
            This is the popover content
          </OdsPopoverContent>
        </OdsPopover>
      </>
    );
  },
};

export const CustomTrigger: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsPopover>
      <OdsPopoverTrigger asChild>
        <OdsButton>
          Custom Trigger
        </OdsButton>
      </OdsPopoverTrigger>

      <OdsPopoverContent>
        This is the popover content
      </OdsPopoverContent>
    </OdsPopover>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsPopover>
      <OdsPopoverTrigger>
        Show popover
      </OdsPopoverTrigger>

      <OdsPopoverContent>
        This is the popover content
      </OdsPopoverContent>
    </OdsPopover>
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
      <OdsPopover position="top-start">
        <OdsPopoverTrigger>
          Top Left
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Top Left popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="top">
        <OdsPopoverTrigger>
          Top
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Top popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="top-end">
        <OdsPopoverTrigger>
          Top Right
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Top Right popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="left">
        <OdsPopoverTrigger>
          Middle Left
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Middle Left popover
        </OdsPopoverContent>
      </OdsPopover>

      <div />

      <OdsPopover position="right">
        <OdsPopoverTrigger>
          Middle Right
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Middle Right popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="bottom-start">
        <OdsPopoverTrigger>
          Bottom Left
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Bottom Left popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="bottom">
        <OdsPopoverTrigger>
          Bottom
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Bottom popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="bottom-end">
        <OdsPopoverTrigger>
          Bottom Right
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Bottom Right popover
        </OdsPopoverContent>
      </OdsPopover>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsPopover>
      <OdsPopoverTrigger>
        Show popover
      </OdsPopoverTrigger>

      <OdsPopoverContent>
        This is the popover content
      </OdsPopoverContent>
    </OdsPopover>
  ),
};
