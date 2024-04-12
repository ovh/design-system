import type { Meta, StoryObj } from '@storybook/web-components';
import { ODS_TOOLTIP_POSITION, ODS_TOOLTIP_POSITIONS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-tooltip';
import { defineCustomElement as defineIcon } from '@ovhcloud/ods-components/dist/components/ods-icon';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();
defineIcon();

const meta: Meta = {
  title: 'ODS Components/User feedback/Tooltip',
  component: 'ods-tooltip',
  parameters: {
    layout: 'centered',
  },
  decorators: [(story) => html`<div style="padding-top: 50px; display: inline-flex; align-content: center;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-1"
          name="help-circle">
</ods-icon>
<ods-tooltip position="${args.position}"
             trigger-id="trigger-1"
             with-arrow="${args.withArrow}">
  ${unsafeHTML(args.content)}
</ods-tooltip>
  `,
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
    position: ODS_TOOLTIP_POSITION.bottom,
    withArrow: true,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-2"
          name="help-circle">
</ods-icon>
<ods-tooltip trigger-id="trigger-2">
  Tooltip content
</ods-tooltip>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-3"
          name="help-circle">
</ods-icon>
<ods-tooltip trigger-id="trigger-3">
  Tooltip content
</ods-tooltip>
  `,
};

export const ArrowTip: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-4"
          name="help-circle">
</ods-icon>
<ods-tooltip trigger-id="trigger-4"
             with-arrow>
  Tooltip content
</ods-tooltip>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-5"
          name="help-circle">
</ods-icon>
<ods-tooltip position="top-start"
             trigger-id="trigger-5"
             with-arrow>
  <p class="custom-tooltip">
    Top-start tooltip
  </p>
</ods-tooltip>
<style>
  .custom-tooltip {
    font-style: italic;
  }
</style>
  `,
};
