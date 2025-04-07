import { ODS_DIVIDER_COLOR, ODS_DIVIDER_COLORS, ODS_DIVIDER_SPACING, ODS_DIVIDER_SPACINGS } from '../../../../ods-react/src/components/divider/src';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsDivider, type OdsDividerProp } from '../../../../ods-react/src/components/divider/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsDividerProp>;

const meta: Meta<OdsDividerProp> = {
  component: OdsDivider,
  title: 'ODS Components/Divider',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_DIVIDER_COLOR.light },
        type: { summary: `Type string: ${ODS_DIVIDER_COLORS}` }
      },
      // todo when options are defined, type select should be automatically inferred but not working?
      control: { type: 'select' },
      options: ODS_DIVIDER_COLORS,
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_DIVIDER_SPACING._2 },
        type: { summary: `Type string from: ${ODS_DIVIDER_SPACINGS}` }
      },
      control: { type: 'select' },
      options: ODS_DIVIDER_SPACINGS,
    },
  }),
  args: {
    color: ODS_DIVIDER_COLOR.light,
    spacing: ODS_DIVIDER_SPACING._2,
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsDivider />
  ),
};

export const Overview: Story = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <OdsDivider color="light" />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
  ),
};

export const Color: Story = {
  decorators: [(story) => <div>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => ( 
    <>
      <OdsDivider color="light" />
      <OdsDivider color="dark" />
    </>
  ),
};

export const Spacing: Story = {
  decorators: [(story) => <div>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsDivider spacing="0" />
      <OdsDivider spacing="2" />
      <OdsDivider spacing="4" />
      <OdsDivider spacing="6" />
    </>
  ),
};
