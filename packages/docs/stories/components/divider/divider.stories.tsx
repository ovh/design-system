import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import {
  DIVIDER_COLOR, DIVIDER_SPACING, DIVIDER_ORIENTATION, Divider, type DividerProp,
} from '../../../../ods-react/src/components/divider/src';

type Story = StoryObj<DividerProp>;

const meta: Meta<DividerProp> = {
  component: Divider,
  title: 'React Components/Divider',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={ DIVIDER_COLOR.primary } />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Divider } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Divider />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={ DIVIDER_COLOR.primary } />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
  ),
};

export const Color: Story = {
  globals: {
    imports: `import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Divider color={ DIVIDER_COLOR.neutral } />
      <Divider color={ DIVIDER_COLOR.primary } />
    </>
  ),
};

export const Orientation: Story = {
  globals: {
    imports: `import { DIVIDER_ORIENTATION, Divider } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Divider orientation={ DIVIDER_ORIENTATION.horizontal } />
      <Divider orientation={ DIVIDER_ORIENTATION.vertical } />
    </>
  ),
};

export const Spacing: Story = {
  globals: {
    imports: `import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Divider spacing={ DIVIDER_SPACING._0 } />
      <Divider spacing={ DIVIDER_SPACING._2 } />
      <Divider spacing={ DIVIDER_SPACING._4 } />
      <Divider spacing={ DIVIDER_SPACING._6 } />
      <Divider spacing={ DIVIDER_SPACING._8 } />
      <Divider spacing={ DIVIDER_SPACING._12 } />
      <Divider spacing={ DIVIDER_SPACING._16 } />
      <Divider spacing={ DIVIDER_SPACING._24 } />
      <Divider spacing={ DIVIDER_SPACING._32 } />
      <Divider spacing={ DIVIDER_SPACING._40 } />
      <Divider spacing={ DIVIDER_SPACING._48 } />
      <Divider spacing={ DIVIDER_SPACING._64 } />
    </>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Divider />
  ),
};
