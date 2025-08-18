import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { Link, LinkProp } from '../../../../ods-react/src/components/link/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<LinkProp>;

const meta: Meta<LinkProp> = {
  argTypes: excludeFromDemoControls(['as']),
  component: Link,
  title: 'React Components/Link',
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
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
  }),
  args: {
    // @ts-ignore check when time to do so
    children: 'My link',
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Link } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Link } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Link
      disabled
      href="https://www.ovhcloud.com">
      Disabled
    </Link>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Link
      href="https://www.ovhcloud.com"
      target="_blank">
      Link
    </Link>
  ),
};

export const WithIcon: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>{ story() }</div>],
  globals: {
    imports: `import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Link href="https://www.ovhcloud.com">
        <Icon name={ ICON_NAME.arrowLeft } />Icon Link
      </Link>

      <Link
        href="https://www.ovhcloud.com"
        style={{ justifySelf: 'right' }}>
        Icon Link<Icon name={ ICON_NAME.arrowRight } />
      </Link>
    </>
  ),
};

export const AccessibilityIconOnlyLink: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Link
      aria-label="Go to homepage"
      href="https://www.ovhcloud.com">
      <Icon name={ ICON_NAME.home } />
    </Link>
  ),
};

export const AccessibilityInANewTab: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Link
      aria-label="Visit Example (opens in a new tab)"
      href="https://www.ovhcloud.com"
      target="_blank">
      <Icon name={ ICON_NAME.externalLink } />
    </Link>
  ),
};

export const AccessibilityFileDownload: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>{ story() }</div>],
  globals: {
    imports: `import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Link
        aria-label="Download WCAG20 Guidelines (PDF, 481 KB)"
        href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name={ ICON_NAME.download } />
      </Link>

      <Link href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name={ ICON_NAME.download } />

        <span>Download WCAG20 Guidelines (PDF, 481 KB)</span>
      </Link>
    </>
  ),
};
