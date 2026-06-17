import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { TOOLTIP_POSITION, Tooltip, type TooltipProp, TooltipContent, TooltipTrigger } from '../../../../ods-react/src/components/tooltip/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<TooltipProp>;

const meta: Meta<TooltipProp> = {
  argTypes: excludeFromDemoControls(['onOpenChange', 'open', 'overlayConfig', 'positionerStyle']),
  component: Tooltip,
  subcomponents: { TooltipContent, TooltipTrigger },
  title: 'React Components/Tooltip',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Tooltip
      open
      overlayConfig={{
        flip: false,
        position: TOOLTIP_POSITION.top,
      }}>
      <TooltipTrigger asChild>
        <Icon
          name={ ICON_NAME.circleQuestion }
          style={{ fontSize: '24px' }} />
      </TooltipTrigger>

      <TooltipContent createPortal={ false }>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
  ),
};

export const Controlled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  globals: {
    imports: `import { ICON_NAME, Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
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
  globals: {
    imports: `import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Tooltip overlayConfig={{ position: 'top-start' }}>
        <TooltipTrigger>
          Top Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{ position: 'top' }}>
        <TooltipTrigger>
          Top
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{ position: 'top-end' }}>
        <TooltipTrigger>
          Top Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{ position: 'left' }}>
        <TooltipTrigger>
          Middle Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Left tooltip
        </TooltipContent>
      </Tooltip>

      <div />

      <Tooltip overlayConfig={{ position: 'right' }}>
        <TooltipTrigger>
          Middle Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{ position: 'bottom-start' }}>
        <TooltipTrigger>
          Bottom Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{ position: 'bottom' }}>
        <TooltipTrigger>
          Bottom
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{ position: 'bottom-end' }}>
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
  globals: {
    imports: `import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Icon
          aria-label="Open tooltip"
          name={ ICON_NAME.circleInfo }
          role="img"
          style={{ fontSize: '24px' }} />
      </TooltipTrigger>

      <TooltipContent>
        Some additional context.
      </TooltipContent>
    </Tooltip>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Icon name={ ICON_NAME.circleQuestion } style={{ fontSize: '24px' }} />
        </TooltipTrigger>
        <TooltipContent createPortal={ false }>This is the tooltip content</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Icon name={ ICON_NAME.circleInfo } style={{ fontSize: '24px' }} />
        </TooltipTrigger>
        <TooltipContent createPortal={ false } withArrow>This is the tooltip content</TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const ZIndex: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon, TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <span>Default Z-axis order:</span>

      <Tooltip open>
        <TooltipTrigger asChild>
          <Icon name={ ICON_NAME.circleInfo } style={{ fontSize: '24px' }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Back
        </TooltipContent>
      </Tooltip>

      <Tooltip open>
        <TooltipTrigger asChild>
          <Icon name={ ICON_NAME.circleInfo } style={{ fontSize: '24px' }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Front
        </TooltipContent>
      </Tooltip>

      <br />

      <span>Custom Z-axis order:</span>

      <Tooltip
        open
        overlayConfig={{ position: TOOLTIP_POSITION.bottom }}
        positionerStyle={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)'}}>
        <TooltipTrigger asChild>
          <Icon name={ ICON_NAME.circleInfo } style={{ fontSize: '24px' }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Front
        </TooltipContent>
      </Tooltip>

      <Tooltip
        open
        overlayConfig={{ position: TOOLTIP_POSITION.bottom }}>
        <TooltipTrigger asChild>
          <Icon name={ ICON_NAME.circleInfo } style={{ fontSize: '24px' }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Back
        </TooltipContent>
      </Tooltip>
    </>
  ),
};
