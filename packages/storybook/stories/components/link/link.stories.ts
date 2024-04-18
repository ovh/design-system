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
      class="my-link-demo"
      color="${args.color}"
      download="${args.download}"
      href="${args.href}"
      icon="${args.icon}"
      is-disabled="${args.isDisabled}"
      label="${args.label}"
      rel="${args.rel}"
      referrerpolicy="${args.referrerpolicy}"
      target="${args.target}">
    </ods-link>
    <style>
      .my-link-demo::part(link) {
        ${args.customCssLink}
      }
      .my-link-demo::part(icon) {
        ${args.customCssIcon}
      }
    </style>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'select',
      options: ODS_LINK_COLORS,
    },
    customCssLink: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties on the link. Example: "color: green; font-size: 32px;"',
    },
    customCssIcon: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties on the icon. Example: "width: 2rem; height: 2rem;"',
    },
    download: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    href: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
      },
      control: 'select',
      options: ODS_ICON_NAMES,
      description: 'See the whole list [here](/?path=/docs/ods-components-content-icon--documentation#name)'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    referrerpolicy: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    rel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    target: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    color: ODS_LINK_COLOR.primary,
    isDisabled: false,
    label: 'my label',
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  `,
};

export const Icon: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  `,
};

export const Target: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <div style="display: flex; flex-direction: column;">
<ods-link href="https://www.ovhcloud.com/" target="_blank" label="Blank target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_self" label="Self target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_parent" label="Parent target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_top" label="Top target"></ods-link>
</div>
  `,
};

export const CustomCSSLink: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link class="my-link" href="/page" label="Content"></ods-link>
<style>
  .my-link::part(link) {
    color: green;
    font-size: 32px;
  }
</style>
  `,
}
