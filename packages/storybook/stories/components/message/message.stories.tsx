import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { MESSAGE_COLOR, MESSAGE_COLORS, MESSAGE_VARIANT, MESSAGE_VARIANTS, Message, type MessageProp } from '../../../../ods-react/src/components/message/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<MessageProp>;

const meta: Meta<MessageProp> = {
  argTypes: excludeFromDemoControls(['onRemove']),
  component: Message,
  title: 'ODS Components/Message',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'MESSAGE_COLOR' },
      },
      control: { type: 'select' },
      options: MESSAGE_COLORS,
    },
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'MESSAGE_VARIANT' },
      },
      control: { type: 'select' },
      options: MESSAGE_VARIANTS,
    },
  }),
  args: {
    children: 'My message',
  },
};

export const Color: Story = {
  decorators: [(story) => <div style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Message color={ MESSAGE_COLOR.critical }>Critical message</Message>
      <Message color={ MESSAGE_COLOR.danger }>Danger message</Message>
      <Message color={ MESSAGE_COLOR.information }>Information message</Message>
      <Message color={ MESSAGE_COLOR.success }>Success message</Message>
      <Message color={ MESSAGE_COLOR.warning }>Warning message</Message>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Message>
      Default message
    </Message>
  ),
};

export const Multiline: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Message>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
    </Message>
  ),
};

export const NonDismissible: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Message dismissible={ false }>
      Default message
    </Message>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Message>
      Message
    </Message>
  ),
};

export const Variant: Story = {
  decorators: [(story) => <div style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Message variant={ MESSAGE_VARIANT.default }>Default variant Message</Message>
      <Message variant={ MESSAGE_VARIANT.light }>Light variant Message</Message>
    </>
  ),
};
