import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { TOOLTIP_POSITIONS, Tooltip, type TooltipProp, TooltipContent, type TooltipContentProp, TooltipTrigger } from '../../../../ods-react/src/components/tooltip/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<TooltipProp>;
type DemoArg = Partial<TooltipProp> & Partial<TooltipContentProp> & {
  content?: string,
};

const meta: Meta<TooltipProp> = {
  argTypes: excludeFromDemoControls(['onOpenChange', 'open']),
  component: Tooltip,
  subcomponents: { TooltipContent, TooltipTrigger },
  title: 'React Components/Tooltip',
};

export default meta;

export const Demo: StoryObj = {
  parameters: {
    layout: 'centered',
  },
  render: (arg: DemoArg) => (
    <Tooltip
      closeDelay={ arg.closeDelay }
      openDelay={ arg.openDelay }
      position={ arg.position }>
      <TooltipTrigger asChild>
        <Icon
          name={ ICON_NAME.circleQuestion }
          style={{ fontSize: '24px' }} />
      </TooltipTrigger>

      <TooltipContent withArrow={ arg.withArrow }>
        { arg.content }
      </TooltipContent>
    </Tooltip>
  ),
  argTypes: orderControls({
    closeDelay: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'number',
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    openDelay: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'number',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'TOOLTIP_POSITION' }
      },
      control: { type: 'select' },
      options: TOOLTIP_POSITIONS,
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
    content: 'My tooltip content',
  },
};

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

    function toggleTooltip() {
      setIsOpen((isOpen) => !isOpen);
    }

    return (
      <>
        <Button onClick={ toggleTooltip }>
          Toggle tooltip
        </Button>

        <Tooltip open={ isOpen }>
          <TooltipTrigger asChild>
            <Icon
              name={ ICON_NAME.circleQuestion }
              style={{ fontSize: '24px' }} />
          </TooltipTrigger>

          <TooltipContent withArrow>
            This is the tooltip content
          </TooltipContent>
        </Tooltip>
      </>
    );
  },
};

export const CustomTrigger: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Icon
          name={ ICON_NAME.circleQuestion }
          style={{ fontSize: '24px' }} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Tooltip>
      <TooltipTrigger>
        Show tooltip
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
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
      <Tooltip position="top-start">
        <TooltipTrigger>
          Top Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="top">
        <TooltipTrigger>
          Top
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="top-end">
        <TooltipTrigger>
          Top Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="left">
        <TooltipTrigger>
          Middle Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Left tooltip
        </TooltipContent>
      </Tooltip>

      <div />

      <Tooltip position="right">
        <TooltipTrigger>
          Middle Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom-start">
        <TooltipTrigger>
          Bottom Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom">
        <TooltipTrigger>
          Bottom
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom-end">
        <TooltipTrigger>
          Bottom Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Right tooltip
        </TooltipContent>
      </Tooltip>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Icon
          name={ ICON_NAME.circleQuestion }
          style={{ fontSize: '24px' }} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
  ),
};

export const AccessibilityTooltip: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Icon
          aria-hidden
          name={ ICON_NAME.circleInfo }
          style={{ fontSize: '24px' }} />
      </TooltipTrigger>

      <TooltipContent>
        Some additional context.
      </TooltipContent>
    </Tooltip>
  ),
};
