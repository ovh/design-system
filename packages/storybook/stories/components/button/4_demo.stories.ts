import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-button';
import { html } from 'lit-html';

defineCustomElement();

export default {
  title: 'ODS Components/TODO/Button/Demo',
  render: (args) => html`
    <ods-button dummy="${args.dummy}">
    </ods-button>
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
