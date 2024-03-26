import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-link';
import { html } from 'lit-html';
import { ODS_ICON_NAMES, ODS_LINK_COLOR, ODS_LINK_COLORS } from '@ovhcloud/ods-components';

defineCustomElement();

export default {
  title: 'ODS Components/Actions/Link/Demo',
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
  argTypes: {
    color: {
      control: 'select',
      options: ODS_LINK_COLORS,
    },
    disabled: {
      control: 'boolean',
    },
    download: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: ODS_ICON_NAMES,
      defaultValue: '',
    },
    label: {
      control: 'text',
    },
    referrerpolicy: {
      control: 'select',
      options: [],
    },
    rel: {
      control: 'select',
      options: [],
    },
    target: {
      control: 'select',
      options: [],
    },
  },
  args: {
    color: ODS_LINK_COLOR.primary,
    disabled: false,
    label: 'my label',
  },
};

export const Default = {
  args: {},
};
