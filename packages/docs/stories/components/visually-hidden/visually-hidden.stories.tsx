import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { Link } from '../../../../ods-react/src/components/link/src';
import { VisuallyHidden, type VisuallyHiddenProp } from '../../../../ods-react/src/components/visually-hidden/src';
import { staticSourceRenderConfig } from '../../support/source';

type Story = StoryObj<VisuallyHiddenProp>;

const meta: Meta<VisuallyHiddenProp> = {
  component: VisuallyHidden,
  tags: ['new'],
  title: 'React Components/Visually Hidden',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Button>
      <Icon name={ ICON_NAME.trash } />
      <VisuallyHidden>Delete the file</VisuallyHidden>
    </Button>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Button, ICON_NAME, Icon, VisuallyHidden } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Button>
      <Icon name={ ICON_NAME.trash } />
      <VisuallyHidden>Delete the file</VisuallyHidden>
    </Button>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Button>
      <Icon name={ ICON_NAME.trash } />
      <VisuallyHidden>Delete the file</VisuallyHidden>
    </Button>
  ),
};

export const LinkContext: Story = {
  globals: {
    imports: `import { Link, VisuallyHidden } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Link href="#">
      Read more<VisuallyHidden> about the billing of your VPS</VisuallyHidden>
    </Link>
  ),
};

export const AccessibilityStatus: Story = {
  globals: {
    imports: `import { Button, VisuallyHidden } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: () => {
    const [message, setMessage] = useState('');

    return (
      <>
        <Button onClick={ () => setMessage('Settings saved.') }>
          Save
        </Button>

        <VisuallyHidden role="status">
          { message }
        </VisuallyHidden>
      </>
    );
  },
};

export const ThemeGenerator: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Button>
      <Icon name={ ICON_NAME.trash } />
      <VisuallyHidden>Delete the file</VisuallyHidden>
    </Button>
  ),
};
