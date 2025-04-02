import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsFormField, type OdsFormFieldProp } from '../../../../ods-react/src/components/formfield/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsFormFieldProp>;

const meta: Meta<OdsFormFieldProp> = {
  component: OdsFormField,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/27535
  // subcomponents: { OdsFormXxx }, // Uncomment if sub components, otherwise remove
  title: 'ODS Components/Form Field',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    legend: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Form Legend' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    helperText: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Helper text' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
  }),
  args: {
    legend: 'Form Legend',
    helperText: 'Helper text',
    children: <div>Form content goes here</div>,
  },
};

export const Default: Story = {
  tags: ['isHidden'],
  render: () => (
    <OdsFormField>
      <div>Form content goes here</div>
    </OdsFormField>
  ),
};
