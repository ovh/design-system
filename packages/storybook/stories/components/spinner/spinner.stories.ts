import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_SPINNER_COLOR, ODS_SPINNER_COLORS, ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-spinner';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/User feedback/Spinner',
  component: 'ods-spinner',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls ({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_SPINNER_COLOR.primary },
        type: { summary: `Type string: ${ODS_SPINNER_COLORS}` }
      },
      // todo when options are defined, type select should be automatically inferred but not working?
      control: { type: 'select' },
      options: ODS_SPINNER_COLORS,
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_SPINNER_SIZE.md },
        type: { summary: `Type string from: ${ODS_SPINNER_SIZES}` }
      },
      control: { type: 'select' },
      options: ODS_SPINNER_SIZES,
    },
  }),
  args: {
    color: ODS_SPINNER_COLOR.primary,
    size: ODS_SPINNER_SIZE.md,
  },
};
