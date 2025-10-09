import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { SPINNER_COLOR, SPINNER_COLORS, SPINNER_SIZE, SPINNER_SIZES, Spinner, type SpinnerProp } from '../../../../ods-react/src/components/spinner/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<SpinnerProp>;

const meta: Meta<SpinnerProp> = {
  component: Spinner,
  title: 'React Components/Spinner',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'SPINNER_COLOR' }
      },
      control: { type: 'select' },
      options: SPINNER_COLORS,
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'SPINNER_SIZE' }
      },
      control: { type: 'select' },
      options: SPINNER_SIZES,
    },
  }),
};

export const Color: Story = {
  globals: {
    imports: `import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Spinner color={ SPINNER_COLOR.neutral } />
      <Spinner color={ SPINNER_COLOR.primary } />
    </>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Spinner } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Spinner />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Spinner />
  ),
};

export const Size: Story = {
  globals: {
    imports: `import { SPINNER_SIZE, Spinner } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Spinner size={ SPINNER_SIZE.xs } />
      <Spinner size={ SPINNER_SIZE.sm } />
      <Spinner size={ SPINNER_SIZE.md } />
      <Spinner size={ SPINNER_SIZE.lg } />
    </>
  ),
};

export const AccessibilityAriaBusyAriaLive: Story = {
  globals: {
    imports: `import { Spinner } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <div
      aria-busy="true"
      aria-live="polite">
      <Spinner />
    </div>
  ),
};

export const AccessibilityAriaLabel: Story = {
  globals: {
    imports: `import { Spinner } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Spinner aria-label="Loading user profile" />
  ),
};

export const AccessibilityAriaLabelledBy: Story = {
  globals: {
    imports: `import { Spinner } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <div>
      <span id="loading-text">
        Loading user profile
      </span>

      <Spinner aria-labelledby="loading-text" />
    </div>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'inline-flex', flexFlow: 'row', gap: '12px', alignItems: 'center' }}>
      <Spinner />
      <Spinner size={ SPINNER_SIZE.sm } />
      <Spinner size={ SPINNER_SIZE.lg } />
      <Spinner color={ SPINNER_COLOR.neutral } />
      <Spinner color={ SPINNER_COLOR.primary } />
    </div>
  ),
};
