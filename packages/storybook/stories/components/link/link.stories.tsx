import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from '../../../../ods-react/src/components/icon/src';
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
  tags: ['!dev'],
  render: ({}) => (
    <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
  ),
};

export const Disabled: Story = {
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
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Link href="https://www.ovhcloud.com">
        <Icon name="arrow-left" />Icon Link
      </Link>

      <Link style={{ justifySelf: 'right' }}
               href="https://www.ovhcloud.com">
        Icon Link<Icon name="arrow-right" />
      </Link>
    </>
  ),
};

export const AccessibilityIconOnlyLink: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Link aria-label="Go to homepage" href="https://www.ovhcloud.com">
        <Icon name="home" />
      </Link>
    </>
  ),
};

export const AccessibilityInANewTab: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Link
        aria-label="Visit Example (opens in a new tab)"
        href="https://www.ovhcloud.com"
        target="_blank">
        <Icon name="external-link" />
      </Link>
    </>
  ),
};

export const AccessibilityFileDownload: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Link
        aria-label="Download WCAG20 Guidelines (PDF, 481 KB)"
        href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name="external-link" />
      </Link>
      {/*  Or */}
      <Link
        aria-label="Download WCAG20 Guidelines (PDF, 481 KB)"
        href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name="external-link" />
        <span>Download WCAG20 Guidelines</span>
        <p>(PDF, 481 KB)</p>
      </Link>

    </>
  ),
};
