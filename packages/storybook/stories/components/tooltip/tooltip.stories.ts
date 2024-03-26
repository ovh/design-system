import { ODS_TOOLTIP_POSITION, ODS_TOOLTIP_POSITIONS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-tooltip';
import { type Meta, StoryObj } from '@storybook/web-components';
// import { html } from 'lit-html';
// import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control.ts';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/User feedback/Tooltip',
  component: 'ods-tooltip',
  // decorators: [(story) => html`<div style="height: 300px; display: inline-flex">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  // render: (args) => html`
  //   <button id="trigger">
  //     Hover me
  //   </button>
  //   <ods-tooltip position="${args.position}"
  //                trigger-id="trigger"
  //                with-arrow="${args.withArrow}">
  //     ${unsafeHTML(args.content)}
  //   </ods-tooltip>
  // `,
  argTypes: orderControls ({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_TOOLTIP_POSITION.top },
        type: { summary: ODS_TOOLTIP_POSITIONS },
      },
      control: { type: 'select' },
      options: ODS_TOOLTIP_POSITIONS,
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    }
  }),
  args: {
    content: 'Tooltip content',
    position: ODS_TOOLTIP_POSITION.top,
    withArrow: true,
  },
};
