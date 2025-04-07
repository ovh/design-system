import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ODS_DIVIDER_COLOR, ODS_DIVIDER_COLORS, ODS_DIVIDER_SPACING, ODS_DIVIDER_SPACINGS, OdsDivider, type OdsDividerProp } from '../../../../ods-react/src/components/divider/src';
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
        type: { summary: ODS_DIVIDER_COLORS }
      },
      control: { type: 'select' },
      options: ODS_DIVIDER_COLORS,
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_DIVIDER_SPACING._2 },
        type: { summary: ODS_DIVIDER_SPACINGS }
      },
      control: { type: 'select' },
      options: ODS_DIVIDER_SPACINGS,
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsDivider />
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
      <OdsDivider color="light" />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
  ),
};

export const Color: Story = {
  tags: ['!dev'],
  render: ({}) => ( 
    <>
      <OdsDivider color="light" />
      <OdsDivider color="dark" />
    </>
  ),
};

export const Spacing: Story = {
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
