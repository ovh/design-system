import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-icon';
import { ODS_ICON_NAME, ODS_ICON_NAMES } from '@ovhcloud/ods-components';
import { CONTROL_CATEGORY, orderControls } from '../../control';
import { html } from 'lit-html';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Content/Icon',
  component: 'ods-icon',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    alt: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: { type: 'text' },
      description: 'Optional alternate text for the icon'
    },
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
      },
      control: { type: 'select' },
      options: ODS_ICON_NAMES,
    },
  }),
  args: {
    name: ODS_ICON_NAME.warning,
  },
};

export const All: StoryObj = {
  args: {},
};

export const Name: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-icon name="arrow-left"></ods-icon>
<ods-icon name="warning"></ods-icon>
  `,
};
