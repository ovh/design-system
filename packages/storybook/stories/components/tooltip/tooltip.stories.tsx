import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { OdsButton } from '../../../../ods-react/src/components/button/src';
import { ODS_ICON_NAME, OdsIcon } from '../../../../ods-react/src/components/icon/src';
import { ODS_TOOLTIP_POSITION, ODS_TOOLTIP_POSITIONS, OdsTooltip, type OdsTooltipProp, OdsTooltipContent, type OdsTooltipContentProp, OdsTooltipTrigger } from '../../../../ods-react/src/components/tooltip/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsTooltipProp>;
type DemoArg = Partial<OdsTooltipProp> & Partial<OdsTooltipContentProp> & {
  content?: string,
};

const meta: Meta<OdsTooltipProp> = {
  argTypes: {
    open: {
      table: {
        disable: true,
      },
    },
  },
  component: OdsTooltip,
  subcomponents: { OdsTooltipContent, OdsTooltipTrigger },
  title: 'ODS Components/Tooltip',
};

export default meta;

export const Demo: StoryObj = {
  parameters: {
    layout: 'centered',
  },
  render: (arg: DemoArg) => (
    <OdsTooltip
      closeDelay={ arg.closeDelay }
      openDelay={ arg.openDelay }
      position={ arg.position }>
      <OdsTooltipTrigger asChild>
        <OdsIcon name={ ODS_ICON_NAME.circleQuestion } />
      </OdsTooltipTrigger>

      <OdsTooltipContent withArrow={ arg.withArrow }>
        { arg.content }
      </OdsTooltipContent>
    </OdsTooltip>
  ),
  argTypes: orderControls({
    closeDelay: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 50 },
        type: { summary: 'number' }
      },
      control: 'number',
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    openDelay: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 0 },
        type: { summary: 'number' }
      },
      control: 'number',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_TOOLTIP_POSITION.top },
        type: { summary: ODS_TOOLTIP_POSITIONS }
      },
      control: { type: 'select' },
      options: ODS_TOOLTIP_POSITIONS,
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
    content: 'My tooltip content',
  },
};

export const Controlled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleTooltip() {
      setIsOpen((isOpen) => !isOpen);
    }

    return (
      <>
        <OdsButton onClick={ toggleTooltip }>
          Toggle tooltip
        </OdsButton>

        <OdsTooltip open={ isOpen }>
          <OdsTooltipTrigger asChild>
            <OdsIcon name={ ODS_ICON_NAME.circleQuestion } />
          </OdsTooltipTrigger>

          <OdsTooltipContent withArrow>
            This is the tooltip content
          </OdsTooltipContent>
        </OdsTooltip>
      </>
    );
  },
};

export const CustomTrigger: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTooltip>
      <OdsTooltipTrigger asChild>
        <OdsIcon name={ ODS_ICON_NAME.circleQuestion } />
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTooltip>
      <OdsTooltipTrigger>
        Show tooltip
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
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
      <OdsTooltip position="top-start">
        <OdsTooltipTrigger>
          Top Left
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Top Left tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="top">
        <OdsTooltipTrigger>
          Top
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Top tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="top-end">
        <OdsTooltipTrigger>
          Top Right
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Top Right tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="left">
        <OdsTooltipTrigger>
          Middle Left
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Middle Left tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <div />

      <OdsTooltip position="right">
        <OdsTooltipTrigger>
          Middle Right
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Middle Right tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="bottom-start">
        <OdsTooltipTrigger>
          Bottom Left
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Bottom Left tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="bottom">
        <OdsTooltipTrigger>
          Bottom
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Bottom tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="bottom-end">
        <OdsTooltipTrigger>
          Bottom Right
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Bottom Right tooltip
        </OdsTooltipContent>
      </OdsTooltip>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsTooltip>
      <OdsTooltipTrigger asChild>
        <OdsIcon name={ ODS_ICON_NAME.circleQuestion } />
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
  ),
};
