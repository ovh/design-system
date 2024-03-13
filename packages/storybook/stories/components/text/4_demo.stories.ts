import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-text';
import { ODS_TEXT_PRESETS } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import type { Meta } from '@storybook/web-components';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Text/Demo',
  render: (args) => html`
    <ods-text preset="${args.preset}">
      ${unsafeHTML(args.content)}
    </ods-text>
  `,
  argTypes: {
    preset: {
      control: { type: 'select' },
      options: ODS_TEXT_PRESETS,
    },
    content: {
      control: 'text',
    },
  },
  args: {
    content: 'lorem ipsum'
  },
};

export default meta;

export const Default = {
  args: {},
};
