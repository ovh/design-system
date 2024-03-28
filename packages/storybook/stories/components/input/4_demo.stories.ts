import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-input';
import { html } from 'lit-html';

defineCustomElement();

export default {
  title: 'ODS Components/TODO/Input/Demo',
  render: (args) => html`
    <ods-input dummy="${args.dummy}">
    </ods-input>
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
