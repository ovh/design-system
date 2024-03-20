import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-text';
import { ODS_TEXT_PRESETS } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Content/Text',
  component: 'ods-text',
};

export default meta;

export const Demo: StoryObj = {
  /*
  * todo check why render is necessary here? https://storybook.js.org/docs/api/csf#default-render-functions
  *  and it affects canvas rendering in documentation (presets are overrided for example)
  *  */
  render: (args) => html`
    <ods-text preset="${args.preset}">
      ${unsafeHTML(args.content)}
    </ods-text>
  `,
  argTypes: orderControls({
    preset: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: { type: 'select' },
      options: ODS_TEXT_PRESETS,
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
  }),
  args: {
    content: 'lorem ipsum'
  },
};
