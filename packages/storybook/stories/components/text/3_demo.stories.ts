import { ODS_TEXT_SIZE, ODS_TEXT_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-text';
import { html } from 'lit-html'

defineCustomElement();

const textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default {
  title: 'ODS Components/Text/Demo',
  render: (args) => html`
    <ods-text>${args.slot}</ods-text>
  `,
  argTypes: {
    size: {
      // category: 'General', // TODO not native storybook, need a table
      control: { type: 'select' },
      options: ODS_TEXT_SIZES,
    },
    slot: {
      // category: 'Slot', // TODO not native storybook, need a table
    },
  },
  args: {
    size: ODS_TEXT_SIZE.md,
    slot: textContent,
  }
};

export const Default = {
  args: {},
};
