import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { MESSAGE_BUBBLE_VARIANT, MESSAGE_BUBBLE_VARIANTS, MessageBubble, type MessageBubbleProp } from '../../../../ods-react/src/components/message-bubble/src';

type Story = StoryObj<MessageBubbleProp>;

const meta: Meta<MessageBubbleProp> = {
  component: MessageBubble,
  tags: ['new'],
  title: 'React Components/Message Bubble',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <MessageBubble>
      Hello, how can I help you?
    </MessageBubble>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { MessageBubble } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <MessageBubble>
      Hello, how can I help you?
    </MessageBubble>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <MessageBubble>
      Hello, how can I help you?
    </MessageBubble>
  ),
};

export const Variant: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { MESSAGE_BUBBLE_VARIANT, MessageBubble } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <MessageBubble variant={ MESSAGE_BUBBLE_VARIANT.human }>
        This is a human message
      </MessageBubble>
      <MessageBubble variant={ MESSAGE_BUBBLE_VARIANT.ai }>
        This is an AI message
      </MessageBubble>
    </>
  ),
};

export const Error: Story = {
  globals: {
    imports: `import { MessageBubble } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <MessageBubble error>
      An error occurred while generating the response.
    </MessageBubble>
  ),
};

export const Typing: Story = {
  globals: {
    imports: `import { MessageBubble } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <MessageBubble typing />
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      { MESSAGE_BUBBLE_VARIANTS.map((variant) => (
        <div key={ variant } style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <MessageBubble variant={ variant }>
            { String(variant) } message
          </MessageBubble>
          <MessageBubble variant={ variant } error>
            { String(variant) } error message
          </MessageBubble>
          <MessageBubble variant={ variant } typing />
        </div>
      )) }
    </div>
  ),
};
