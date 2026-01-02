import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { LOGO_SIZE, LOGO_SIZES, LOGO_VARIANT, LOGO_VARIANTS, Logo, type LogoProp } from '../../../../ods-react/src/components/logo/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<LogoProp>;

const meta: Meta<LogoProp> = {
  component: Logo,
  tags: ['new'],
  title: 'React Components/Logo',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'LOGO_SIZE' }
      },
      control: { type: 'select' },
      options: LOGO_SIZES,
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'LOGO_VARIANT' }
      },
      control: { type: 'select' },
      options: LOGO_VARIANTS,
    },
  }),
};

export const AccessibilityLink: Story = {
  globals: {
    imports: `import { Logo } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <a
      aria-label="Return to the OVHcloud home page"
      href="https://www.ovhcloud.com">
      <Logo />
    </a>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Logo } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Logo />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Logo />
  ),
};

export const Size: StoryObj = {
  decorators: [(story) => <div style={{ display: 'grid', rowGap: '16px' }}>{ story() }</div>],
  globals: {
    imports: `import { LOGO_SIZE, Logo } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Logo size={ LOGO_SIZE.sm } />
      <Logo size={ LOGO_SIZE.md } />
      <Logo size={ LOGO_SIZE.lg } />
    </>
  ),
};

export const ThemeGenerator: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Logo />
  ),
};

export const Variant: StoryObj = {
  decorators: [(story) => <div style={{ display: 'grid', rowGap: '16px' }}>{ story() }</div>],
  globals: {
    imports: `import { LOGO_VARIANT, Logo } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Logo variant={ LOGO_VARIANT.default } />
      <Logo variant={ LOGO_VARIANT.emblem } />
    </>
  ),
};
