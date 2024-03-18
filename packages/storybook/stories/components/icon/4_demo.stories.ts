import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-icon';
import { html } from 'lit-html';
import { ODS_ICON_NAME, ODS_ICON_NAMES } from '@ovhcloud/ods-components';

defineCustomElement();

export default {
  title: 'ODS Components/Content/Icon/Demo',
  render: (args) => html`
    <ods-icon alt="${args.alt}"
              name="${args.name}">
    </ods-icon>
  `,
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    name: {
      // category: 'General', // TODO not native storybook, need a table
      control: { type: 'select' },
      options: ODS_ICON_NAMES,
    },
  },
  args: {
    name: ODS_ICON_NAME.warning,
  },
};

export const Default = {
  args: {},
};
