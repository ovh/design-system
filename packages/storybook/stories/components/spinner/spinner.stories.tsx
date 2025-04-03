import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ODS_SPINNER_COLOR, ODS_SPINNER_COLORS, ODS_SPINNER_SIZE, ODS_SPINNER_SIZES, OdsSpinner, type OdsSpinnerProp } from '../../../../ods-react/src/components/spinner/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsSpinnerProp>;

const meta: Meta<OdsSpinnerProp> = {
  component: OdsSpinner,
  title: 'ODS Components/Spinner',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_SPINNER_COLOR.primary },
        type: { summary: ODS_SPINNER_COLORS }
      },
      control: { type: 'select' },
      options: ODS_SPINNER_COLORS,
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_SPINNER_SIZE.md },
        type: { summary: ODS_SPINNER_SIZES }
      },
      control: { type: 'select' },
      options: ODS_SPINNER_SIZES,
    },
  }),
};

export const Color: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsSpinner color={ ODS_SPINNER_COLOR.neutral } />
      <OdsSpinner color={ ODS_SPINNER_COLOR.primary } />
      <OdsSpinner style={{ backgroundColor: '#262626' }} color={ ODS_SPINNER_COLOR.white } />
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsSpinner />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsSpinner />
  ),
};

export const Size: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsSpinner size={ ODS_SPINNER_SIZE.xs } />
      <OdsSpinner size={ ODS_SPINNER_SIZE.sm } />
      <OdsSpinner size={ ODS_SPINNER_SIZE.md } />
      <OdsSpinner size={ ODS_SPINNER_SIZE.lg } />
    </>
  ),
};
