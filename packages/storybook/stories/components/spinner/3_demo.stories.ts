import { ODS_SPINNER_COLOR, ODS_SPINNER_COLORS, ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-spinner';
import { html } from 'lit-html';

defineCustomElement();

export default {
  title: 'ODS Components/User feedback/Spinner [atom]/Demo',
  render: (args) => html`
    <ods-spinner color="${args.color}"
                 size="${args.size}">
    </ods-spinner>
  `,
  argTypes: {
    color: {
      // category: 'General', // TODO not native storybook, need a table
      control: { type: 'select' },
      options: ODS_SPINNER_COLORS,
    },
    size: {
      // category: 'General', // TODO not native storybook, need a table
      control: { type: 'select' },
      options: ODS_SPINNER_SIZES,
    },
  },
  args: {
    color: ODS_SPINNER_COLOR.primary,
    size: ODS_SPINNER_SIZE.md,
  },
};

export const Default = {
  args: {},
};
