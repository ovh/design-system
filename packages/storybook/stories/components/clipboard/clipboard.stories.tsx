import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Clipboard, ClipboardControl, type ClipboardControlProp, type ClipboardProp, ClipboardTrigger, type ClipboardTriggerProp } from '../../../../ods-react/src/components/clipboard/src';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ClipboardProp>;
type DemoArg = Partial<ClipboardProp> & Partial<ClipboardControlProp> & Partial<ClipboardTriggerProp> & {
  masked?: boolean,
};

const meta: Meta<ClipboardProp> = {
  argTypes: excludeFromDemoControls(['i18n', 'locale', 'onCopy']),
  component: Clipboard,
  subcomponents: { ClipboardControl, ClipboardTrigger},
  title: 'React Components/Clipboard',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Clipboard
      disabled={ arg.disabled }
      value={ arg.value }>
      <ClipboardControl
        loading={ arg.loading }
        maskOption={{ enable: !!arg.masked }} />

      <ClipboardTrigger
        labelCopy={ arg.labelCopy }
        labelCopySuccess={ arg.labelCopySuccess } />
    </Clipboard>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copy' },
      },
      control: 'text',
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copied' },
      },
      control: 'text',
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    masked: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
  }),
  args: {
    value: 'Clipboard',
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const Masked: Story = {
  globals: {
    imports: `import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Masked" >
      <ClipboardControl maskOption={{ enable: true }} />

      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const CustomLabels: Story = {
  globals: {
    imports: `import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Custom labels">
      <ClipboardControl />

      <ClipboardTrigger
        labelCopy="Click to copy"
        labelCopySuccess="Successfully copied" />
    </Clipboard>
  ),
};

export const Loading: Story = {
  globals: {
    imports: `import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Loading" >
      <ClipboardControl loading />

      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Disabled" disabled>
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const AccessibilityFormField: Story = {
  globals: {
    imports: `import { Clipboard, ClipboardControl, ClipboardTrigger, FormField, FormFieldLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        API key:
      </FormFieldLabel>

      <Clipboard value="loremipsum">
        <ClipboardControl />

        <ClipboardTrigger />
      </Clipboard>
    </FormField>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Clipboard value="Clipboard">
        <ClipboardControl />
        <ClipboardTrigger />
      </Clipboard>

      <Clipboard value="Masked">
        <ClipboardControl maskOption={{ enable: true }} />
        <ClipboardTrigger />
      </Clipboard>

      <Clipboard value="Loading">
        <ClipboardControl loading />
        <ClipboardTrigger />
      </Clipboard>

      <Clipboard value="Disabled" disabled>
        <ClipboardControl />
        <ClipboardTrigger />
      </Clipboard>
    </div>
  ),
};
