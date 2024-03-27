import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-link';
import { html } from 'lit-html';
import { ODS_ICON_NAMES, ODS_LINK_COLOR, ODS_LINK_COLORS } from '@ovhcloud/ods-components';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Actions/Link',
  component: 'ods-link',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-link
      color="${args.color}"
      disabled="${args.disabled}"
      download="${args.download}"
      href="${args.href}"
      icon="${args.icon}"
      label="${args.label}"
      rel="${args.rel}"
      referrerpolicy="${args.referrerpolicy}"
      target="${args.target}">
    </ods-link>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'select',
      options: ODS_LINK_COLORS,
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    download: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    href: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'select',
      options: ODS_ICON_NAMES,
      defaultValue: '',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    referrerpolicy: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'select',
      options: [],
    },
    rel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'select',
      options: [],
    },
    target: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'select',
      options: [],
    },
  }),
  args: {
    color: ODS_LINK_COLOR.primary,
    disabled: false,
    label: 'my label',
  },
};
