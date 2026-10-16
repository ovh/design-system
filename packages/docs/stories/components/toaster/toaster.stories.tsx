import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BUTTON_EMPHASIS, BUTTON_STATUS, Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME } from '../../../../ods-react/src/components/icon/src';
import { Link } from '../../../../ods-react/src/components/link/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { TOASTER_POSITION, Toaster, type ToasterProp, toast } from '../../../../ods-react/src/components/toaster/src';
import { excludeFromDemoControls } from '../../support/controls';
import { staticSourceRenderConfig } from '../../support/source';

type Story = StoryObj<ToasterProp>;

const meta: Meta<ToasterProp> = {
  argTypes: excludeFromDemoControls(['createPortal']),
  component: Toaster,
  title: 'React Components/Toaster',
};

export default meta;

export const Statuses: Story = {
  globals: {
    imports: `import { BUTTON_EMPHASIS, BUTTON_STATUS, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Toaster id="statuses" />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          status={ BUTTON_STATUS.critical }
          onClick={ () => toast.critical('Critical', { toasterId: 'statuses' }) }>
          Critical toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          onClick={ () => toast.information('Information', { toasterId: 'statuses' }) }>
          Information toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          status={ BUTTON_STATUS.neutral }
          onClick={ () => toast.neutral('Neutral', { toasterId: 'statuses' }) }>
          Neutral toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          status={ BUTTON_STATUS.brand }
          onClick={ () => toast.accent('Accent', { toasterId: 'statuses' }) }>
          Accent toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          onClick={ () => toast.success('Success', { toasterId: 'statuses' }) }>
          Success toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          onClick={ () => toast.warning('Warning', { toasterId: 'statuses' }) }>
          Warning toast
        </Button>
      </div>
    </>
  ),
};

export const CustomContent: Story = {
  globals: {
    imports: `import { BUTTON_EMPHASIS, ICON_NAME, TEXT_PRESET, Button, Link, Text, Toaster, toast } from '@ovhcloud/ods-react';`,
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
        emphasis={ BUTTON_EMPHASIS.high }
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
    imports: `import { BUTTON_EMPHASIS, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
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

      <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Notification message') }>
        Trigger toast
      </Button>
    </>
  ),
};

export const Dismissible: Story = {
  globals: {
    imports: `import { BUTTON_EMPHASIS, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
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
        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Non dismissible toast', { toasterId: 'dismissible' }) }>
          Trigger non dismissible toast
        </Button>

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Dismissible toast', { dismissible: true, toasterId: 'dismissible' }) }>
          Trigger dismissible toast
        </Button>
      </div>
    </>
  ),
};

export const Duration: Story = {
  globals: {
    imports: `import { BUTTON_EMPHASIS, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
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
        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Infinite toast', { toasterId: 'duration' }) }>
          Trigger infinite toast
        </Button>

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('3 seconds toast', { duration: 3000, toasterId: 'duration' }) }>
          Trigger 3 seconds toast
        </Button>
      </div>
    </>
  ),
};

export const Icon: Story = {
  globals: {
    imports: `import { BUTTON_EMPHASIS, ICON_NAME, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
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

      <Button emphasis={ BUTTON_EMPHASIS.high }
 onClick={ () => toast('Notification message with icon', {
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

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ createToast }>
          Trigger toast
        </Button>
      </>
    );
  },
};

export const Position: StoryObj = {
  globals: {
    imports: `import { BUTTON_EMPHASIS, ICON_NAME, TOASTER_POSITION, Button, Toaster, toast } from '@ovhcloud/ods-react';`,
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
        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Top Start', { toasterId: 'top-start' }) }>
          Top Start
        </Button>

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Top', { toasterId: 'top' }) }>
          Top
        </Button>

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Top End', { toasterId: 'top-end' }) }>
          Top End
        </Button>

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Bottom Start', { toasterId: 'bottom-start' }) }>
          Bottom Start
        </Button>

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Bottom', { toasterId: 'bottom' }) }>
          Bottom
        </Button>

        <Button emphasis={ BUTTON_EMPHASIS.high } onClick={ () => toast('Bottom End', { toasterId: 'bottom-end' }) }>
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
          emphasis={ BUTTON_EMPHASIS.high }
          status={ BUTTON_STATUS.critical }
          onClick={ () => toast.critical('Critical', { icon: ICON_NAME.circleXmark }) }>
          Critical toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          onClick={ () => toast.information('Information', { icon: ICON_NAME.circleInfo }) }>
          Information toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          status={ BUTTON_STATUS.neutral }
          onClick={ () => toast.neutral('Neutral', { icon: ICON_NAME.email }) }>
          Neutral toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          status={ BUTTON_STATUS.brand }
          onClick={ () => toast.accent('Accent', { icon: ICON_NAME.lightbulb }) }>
          Accent toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          onClick={ () => toast.success('Success', { icon: ICON_NAME.circleCheck }) }>
          Success toast
        </Button>

        <Button
          emphasis={ BUTTON_EMPHASIS.high }
          onClick={ () => toast.warning('Warning', { icon: ICON_NAME.triangleExclamation }) }>
          Warning toast
        </Button>
      </div>
    </>
  ),
};
