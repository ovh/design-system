import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-tooltip';
import { html } from 'lit-html';

defineCustomElement();

export default {
  title: 'ODS Components/TODO/Tooltip/Demo',
  render: (args) => html`
    <ods-tooltip dummy="${args.dummy}">
    </ods-tooltip>
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
