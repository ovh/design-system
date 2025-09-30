import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Code, type CodeProp } from '../../../../ods-react/src/components/code/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<CodeProp>;

const meta: Meta<CodeProp> = {
  argTypes: excludeFromDemoControls(['onCopy']),
  component: Code,
  title: 'React Components/Code',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    canCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copy to clipboard' },
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
  }),
  args: {
    children: `import { Text } from '@ovhcloud/ods-react';`,
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Code } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Code>
      console.log('Hello world');
    </Code>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Code canCopy>
      { `import { Text } from '@ovhcloud/ods-react';` }
    </Code>
  ),
};

export const CanCopy: Story = {
  globals: {
    imports: `import { Code } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Code canCopy>
      { `import { Text } from '@ovhcloud/ods-react';` }
    </Code>
  ),
};

export const CustomLabels: Story = {
  globals: {
    imports: `import { Code } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Code
      canCopy
      labelCopy="Click to copy"
      labelCopySuccess="Successfully copied">
      console.log('Hello world');
    </Code>
  ),
};

export const Multiline: Story = {
  globals: {
    imports: `import { Code } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Code>
      { `function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }` }
    </Code>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 600 }}>
      <Code>
        console.log('Hello world');
      </Code>

      <Code canCopy>
        { `import { Text } from '@ovhcloud/ods-react';` }
      </Code>

      <Code canCopy labelCopy="Copy" labelCopySuccess="Copied!">
        { `const sum = (a, b) => a + b;` }
      </Code>
    </div>
  ),
};
