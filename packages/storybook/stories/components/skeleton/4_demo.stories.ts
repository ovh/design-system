import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-skeleton';
import { html } from 'lit-html';

defineCustomElement();

export default {
  title: 'ODS Components/Content/Skeleton/Demo',
  render: (arg) => html`
    <ods-skeleton class="my-skeleton">
    </ods-skeleton>
    <style>
      .my-skeleton::part(skeleton) {
        ${arg.customCss}
      }
    </style>
  `,
  argTypes: {
    customCss: {
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 50px; width: 500px;"',
    }
  },
  args: {},
};

export const Default = {
  args: {},
};
