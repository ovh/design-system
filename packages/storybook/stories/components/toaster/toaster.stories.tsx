import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BUTTON_COLOR, Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME } from '../../../../ods-react/src/components/icon/src';
import { Link } from '../../../../ods-react/src/components/link/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { TOASTER_POSITION, TOASTER_POSITIONS, Toaster, type ToasterProp, toast } from '../../../../ods-react/src/components/toaster/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<ToasterProp>;

const meta: Meta<ToasterProp> = {
  argTypes: excludeFromDemoControls(['createPortal']),
  component: Toaster,
  title: 'React Components/Toaster',
};

export default meta;

export const Demo: Story = {
  render: (arg) => (
    <>
      <Toaster { ...arg } />

      <Button onClick={ () => toast('Notification message') }>
        Trigger toast
      </Button>
    </>
  ),
  argTypes: orderControls({
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    duration: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'number',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'TOASTER_POSITION' }
      },
      control: { type: 'select' },
      options: TOASTER_POSITIONS,
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'number',
    },
  }),
};

export const Colors: Story = {
  globals: {
    imports: `import { BUTTON_COLOR, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster id="colors" />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button
          color={ BUTTON_COLOR.critical }
          onClick={ () => toast.critical('Critical', { toasterId: 'colors' }) }>
          Critical toast
        </Button>

        <Button
          color={ BUTTON_COLOR.information }
          onClick={ () => toast.information('Information', { toasterId: 'colors' }) }>
          Information toast
        </Button>

        <Button
          color={ BUTTON_COLOR.neutral }
          onClick={ () => toast.neutral('Neutral', { toasterId: 'colors' }) }>
          Neutral toast
        </Button>

        <Button
          color={ BUTTON_COLOR.primary }
          onClick={ () => toast.primary('Primary', { toasterId: 'colors' }) }>
          Primary toast
        </Button>

        <Button
          color={ BUTTON_COLOR.success }
          onClick={ () => toast.success('Success', { toasterId: 'colors' }) }>
          Success toast
        </Button>

        <Button
          color={ BUTTON_COLOR.warning }
          onClick={ () => toast.warning('Warning', { toasterId: 'colors' }) }>
          Warning toast
        </Button>
      </div>
    </>
  ),
};

export const CustomContent: Story = {
  globals: {
    imports: `import { ICON_NAME, TEXT_PRESET, Button, Link, Text, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster id="custom-content" />

      <Button
        onClick={ () => toast(
          <div>
            <Text preset={ TEXT_PRESET.label }>
              Toast title
            </Text>

            <Text>
              Toast text helps users providing feedback or information.
            </Text>

            <Link>
              Some Link
            </Link>
          </div>, { icon: ICON_NAME.circleInfo, toasterId: 'custom-content' }
        )}>
        Trigger toast
      </Button>
    </>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Button, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster />

      <Button onClick={ () => toast('Notification message') }>
        Trigger toast
      </Button>
    </>
  ),
};

export const Dismissible: Story = {
  globals: {
    imports: `import { Button, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster
        dismissible={ false }
        id="dismissible" />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button onClick={ () => toast('Non dismissible toast', { toasterId: 'dismissible' }) }>
          Trigger non dismissible toast
        </Button>

        <Button onClick={ () => toast('Dismissible toast', { dismissible: true, toasterId: 'dismissible' }) }>
          Trigger dismissible toast
        </Button>
      </div>
    </>
  ),
};

export const Duration: Story = {
  globals: {
    imports: `import { Button, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster
        duration={ Infinity }
        id="duration" />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button onClick={ () => toast('Infinite toast', { toasterId: 'duration' }) }>
          Trigger infinite toast
        </Button>

        <Button onClick={ () => toast('3 seconds toast', { duration: 3000, toasterId: 'duration' }) }>
          Trigger 3 seconds toast
        </Button>
      </div>
    </>
  ),
};

export const Icon: Story = {
  globals: {
    imports: `import { ICON_NAME, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster id="icon" />

      <Button onClick={ () => toast('Notification message with icon', {
        icon: ICON_NAME.circleInfo,
        toasterId: 'icon',
      })}>
        Trigger toast
      </Button>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => {
    const [count, setCount] = useState(1);

    function createToast(): void {
      toast(`Toast message ${count}`, { toasterId: 'overview' });
      setCount((c) => c + 1);
    }

    return (
      <>
        <Toaster id="overview" />

        <Button onClick={ createToast }>
          Trigger toast
        </Button>
      </>
    );
  },
};

export const Position: StoryObj = {
  globals: {
    imports: `import { ICON_NAME, TOASTER_POSITION, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster id="top-start" position={ TOASTER_POSITION.topStart } />
      <Toaster id="top" position={ TOASTER_POSITION.top } />
      <Toaster id="top-end" position={ TOASTER_POSITION.topEnd } />
      <Toaster id="bottom-start" position={ TOASTER_POSITION.bottomStart } />
      <Toaster id="bottom" position={ TOASTER_POSITION.bottom } />
      <Toaster id="bottom-end" position={ TOASTER_POSITION.bottomEnd } />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '20px',
      }}>
        <Button onClick={ () => toast('Top Start', { toasterId: 'top-start' }) }>
          Top Start
        </Button>

        <Button onClick={ () => toast('Top', { toasterId: 'top' }) }>
          Top
        </Button>

        <Button onClick={ () => toast('Top End', { toasterId: 'top-end' }) }>
          Top End
        </Button>

        <Button onClick={ () => toast('Bottom Start', { toasterId: 'bottom-start' }) }>
          Bottom Start
        </Button>

        <Button onClick={ () => toast('Bottom', { toasterId: 'bottom' }) }>
          Bottom
        </Button>

        <Button onClick={ () => toast('Bottom End', { toasterId: 'bottom-end' }) }>
          Bottom End
        </Button>
      </div>
    </>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster
        duration={ Infinity }
        max={ Infinity } />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button
          color={ BUTTON_COLOR.critical }
          onClick={ () => toast.critical('Critical', { icon: ICON_NAME.circleXmark }) }>
          Critical toast
        </Button>

        <Button
          color={ BUTTON_COLOR.information }
          onClick={ () => toast.information('Information', { icon: ICON_NAME.circleInfo }) }>
          Information toast
        </Button>

        <Button
          color={ BUTTON_COLOR.neutral }
          onClick={ () => toast.neutral('Neutral', { icon: ICON_NAME.email }) }>
          Neutral toast
        </Button>

        <Button
          color={ BUTTON_COLOR.primary }
          onClick={ () => toast.primary('Primary', { icon: ICON_NAME.lightbulb }) }>
          Primary toast
        </Button>

        <Button
          color={ BUTTON_COLOR.success }
          onClick={ () => toast.success('Success', { icon: ICON_NAME.circleCheck }) }>
          Success toast
        </Button>

        <Button
          color={ BUTTON_COLOR.warning }
          onClick={ () => toast.warning('Warning', { icon: ICON_NAME.triangleExclamation }) }>
          Warning toast
        </Button>
      </div>
    </>
  ),
};
