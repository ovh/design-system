import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BUTTON_STATUS, Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME } from '../../../../ods-react/src/components/icon/src';
import { MESSAGE_STATUS, MESSAGE_VARIANT, Message, MessageBody, MessageIcon, type MessageProp } from '../../../../ods-react/src/components/message/src';
import { excludeFromDemoControls } from '../../support/controls';
import { staticSourceRenderConfig } from '../../support/source';

type Story = StoryObj<MessageProp>;

const meta: Meta<MessageProp> = {
  argTypes: excludeFromDemoControls(['i18n', 'locale', 'onRemove']),
  component: Message,
  subcomponents: { MessageBody, MessageIcon },
  title: 'React Components/Message',
};

export default meta;

export const Default: Story = {
  globals: {
    imports: `import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';`,
  },
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

export const Status: Story = {
  decorators: [(story) => <div style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { ICON_NAME, MESSAGE_STATUS, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Message status={ MESSAGE_STATUS.accent }>
        <MessageIcon name={ ICON_NAME.lightbulb } />

        <MessageBody>Accent message</MessageBody>
      </Message>

      <Message status={ MESSAGE_STATUS.critical }>
        <MessageIcon name={ ICON_NAME.hexagonExclamation } />

        <MessageBody>Critical message</MessageBody>
      </Message>

      <Message status={ MESSAGE_STATUS.information }>
        <MessageIcon name={ ICON_NAME.circleInfo } />

        <MessageBody>Information message</MessageBody>
      </Message>

      <Message status={ MESSAGE_STATUS.neutral }>
        <MessageIcon name={ ICON_NAME.email } />

        <MessageBody>Neutral message</MessageBody>
      </Message>

      <Message status={ MESSAGE_STATUS.success }>
        <MessageIcon name={ ICON_NAME.circleCheck } />

        <MessageBody>Success message</MessageBody>
      </Message>

      <Message status={ MESSAGE_STATUS.warning }>
        <MessageIcon name={ ICON_NAME.triangleExclamation } />

        <MessageBody>Warning message</MessageBody>
      </Message>
    </>
  ),
};

export const Variant: Story = {
  decorators: [(story) => <div style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { ICON_NAME, MESSAGE_VARIANT, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';`,
  },
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

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Message>
      <MessageIcon name={ ICON_NAME.circleInfo } />

      <MessageBody>
        Message
      </MessageBody>
    </Message>
  ),
};

export const Multiline: Story = {
  globals: {
    imports: `import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
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

export const AccessibilityGrouping: Story = {
  globals: {
    imports: `import { ICON_NAME, MESSAGE_STATUS, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';`,
  },
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
        <Message status={ MESSAGE_STATUS.warning }>
          <MessageIcon name={ ICON_NAME.triangleExclamation } />

          <MessageBody>
            Some fields need your attention.
          </MessageBody>
        </Message>
      </li>
    </ul>
  ),
};

export const AccessibilityAlternativeGrouping: Story = {
  globals: {
    imports: `import { ICON_NAME, MESSAGE_STATUS, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <div
      role="list"
      style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>
      <Message role="listitem">
        <MessageIcon name={ ICON_NAME.circleCheck } />

        <MessageBody>
          Your changes have been saved.
        </MessageBody>
      </Message>

      <Message
        status={ MESSAGE_STATUS.warning }
        role="listitem">
        <MessageIcon name={ ICON_NAME.triangleExclamation } />

        <MessageBody>
          Some fields need your attention.
        </MessageBody>
      </Message>
    </div>
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

export const AccessibilityRoles: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { BUTTON_STATUS, ICON_NAME, MESSAGE_STATUS, Button, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
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
            status={ BUTTON_STATUS.critical }
            onClick={ () => setAlerts((a) => a.concat([new Date().toString()])) }>
            Add alert
          </Button>
        </div>

        <div role="alert">
          {
            alerts.map((alert) => (
              <Message
                status={ MESSAGE_STATUS.critical }
                key={ alert }>
                <MessageIcon name={ ICON_NAME.hexagonExclamation } />

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
                <MessageIcon name={ ICON_NAME.circleInfo } />

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

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>
      <Message>
        <MessageIcon name={ ICON_NAME.circleInfo } />
        <MessageBody>Default message</MessageBody>
      </Message>
      <Message status={ MESSAGE_STATUS.information }>
        <MessageIcon name={ ICON_NAME.circleInfo } />
        <MessageBody>Information</MessageBody>
      </Message>
      <Message status={ MESSAGE_STATUS.success }>
        <MessageIcon name={ ICON_NAME.circleCheck } />
        <MessageBody>Success</MessageBody>
      </Message>
      <Message status={ MESSAGE_STATUS.warning }>
        <MessageIcon name={ ICON_NAME.triangleExclamation } />
        <MessageBody>Warning</MessageBody>
      </Message>
      <Message status={ MESSAGE_STATUS.critical }>
        <MessageIcon name={ ICON_NAME.hexagonExclamation } />
        <MessageBody>Critical</MessageBody>
      </Message>
      <Message variant={ MESSAGE_VARIANT.light }>
        <MessageIcon name={ ICON_NAME.circleInfo } />
        <MessageBody>Light variant</MessageBody>
      </Message>
    </div>
  ),
};
