import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-link';
import { html } from 'lit-html';

defineCustomElement();

export default {
  title: 'ODS Components/TODO/Link/Demo',
  render: (args) => html`
    <ods-link dummy="${args.dummy}">
    </ods-link>
  `,
  argTypes: {
    dummy: {
      control: { type: 'text' },
    },
  },
  args: {},
};

export const Default = {
  args: {},
};
