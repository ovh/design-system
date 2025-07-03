import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BUTTON_COLOR, Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME, ICON_NAMES } from '../../../../ods-react/src/components/icon/src';
import { MESSAGE_COLOR, MESSAGE_COLORS, MESSAGE_VARIANT, MESSAGE_VARIANTS, Message, MessageBody, MessageIcon, type MessageIconProp, type MessageProp } from '../../../../ods-react/src/components/message/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<MessageProp>;
type DemoArg = Partial<MessageProp> & Partial<MessageIconProp>;

const meta: Meta<MessageProp> = {
  argTypes: excludeFromDemoControls(['onRemove']),
  component: Message,
  subcomponents: { MessageBody, MessageIcon },
  title: 'React Components/Message',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Message
      color={ arg.color }
      dismissible={ arg.dismissible }
      variant={ arg.variant }>
      <MessageIcon name={ arg.name || ICON_NAME.circleInfo } />

      <MessageBody>
        { arg.children }
      </MessageBody>
    </Message>
  ),
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
    name: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'ICON_NAME' },
      },
      control: { type: 'select' },
      options: ICON_NAMES,
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

export const AccessibilityGrouping: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <ul style={{ display: 'flex', flexFlow: 'column', rowGap: '8px', margin: 0, padding: 0, listStyle: 'none' }}>
      <li>
        <Message>
          <MessageIcon name={ ICON_NAME.circleCheck } />
          <MessageBody>
            Your changes have been saved.
          </MessageBody>
        </Message>
      </li>
      <li>
        <Message color={ MESSAGE_COLOR.warning }>
          <MessageIcon name={ ICON_NAME.triangleExclamation } />
          <MessageBody>
            Some fields need your attention.
          </MessageBody>
        </Message>
      </li>
    </ul>

  ),
};

export const AccessibilityRoles: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [alerts, setAlerts] = useState<string[]>([]);
    const [statuses, setStatuses] = useState<string[]>([]);

    return (
      <>
        <div>
          <Button onClick={ () => setStatuses((s) => s.concat([new Date().toString()])) }>
            Add status
          </Button>

          <Button
            color={ BUTTON_COLOR.critical }
            onClick={ () => setAlerts((a) => a.concat([new Date().toString()])) }>
            Add alert
          </Button>
        </div>

        <div role="alert">
          {
            alerts.map((alert) => (
              <Message color="critical" key={ alert }>
                <MessageIcon name="hexagon-exclamation" />

                <MessageBody >
                  Alert: { alert }
                </MessageBody>
              </Message>
            ))
          }
        </div>

        <div role="status">
          {
            statuses.map((status) => (
              <Message key={ status }>
                <MessageIcon name="circle-info" />

                <MessageBody >
                  Status: { status }
                </MessageBody>
              </Message>
            ))
          }
        </div>
      </>
    );
  },
};

export const Color: Story = {
  decorators: [(story) => <div style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Message color={ MESSAGE_COLOR.critical }>
        <MessageIcon name={ ICON_NAME.hexagonExclamation } />
        <MessageBody>Critical message</MessageBody>
      </Message>

      <Message color={ MESSAGE_COLOR.information }>
        <MessageIcon name={ ICON_NAME.circleInfo } />
        <MessageBody>Information message</MessageBody>
      </Message>

      <Message color={ MESSAGE_COLOR.neutral }>
        <MessageIcon name={ ICON_NAME.email } />
        <MessageBody>Neutral message</MessageBody>
      </Message>

      <Message color={ MESSAGE_COLOR.primary }>
        <MessageIcon name={ ICON_NAME.lightbulb } />
        <MessageBody>Primary message</MessageBody>
      </Message>

      <Message color={ MESSAGE_COLOR.success }>
        <MessageIcon name={ ICON_NAME.circleCheck } />
        <MessageBody>Success message</MessageBody>
      </Message>

      <Message color={ MESSAGE_COLOR.warning }>
        <MessageIcon name={ ICON_NAME.triangleExclamation } />
        <MessageBody>Warning message</MessageBody>
      </Message>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Message>
      <MessageIcon name={ ICON_NAME.circleInfo } />

      <MessageBody>
        Default message
      </MessageBody>
    </Message>
  ),
};

export const Multiline: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Message>
      <MessageIcon name={ ICON_NAME.circleInfo } />

      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
      </MessageBody>
    </Message>
  ),
};

export const NonDismissible: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Message dismissible={ false }>
      <MessageIcon name={ ICON_NAME.circleInfo } />

      <MessageBody>
        Default message
      </MessageBody>
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
      <MessageIcon name={ ICON_NAME.circleInfo } />

      <MessageBody>
        Message
      </MessageBody>
    </Message>
  ),
};

export const Variant: Story = {
  decorators: [(story) => <div style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Message variant={ MESSAGE_VARIANT.default }>
        <MessageIcon name={ ICON_NAME.circleInfo } />
        <MessageBody>
          Default variant Message
        </MessageBody>
      </Message>

      <Message variant={ MESSAGE_VARIANT.light }>
        <MessageIcon name={ ICON_NAME.circleInfo } />
        <MessageBody>
          Light variant Message
        </MessageBody>
      </Message>
    </>
  ),
};
