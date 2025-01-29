import { ODS_TOOLTIP_POSITION, ODS_TOOLTIP_POSITIONS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-tooltip';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Tooltip',
  component: 'ods-tooltip',
  parameters: {
    layout: 'centered',
  },
  decorators: [(story) => html`<div style="padding-top: 50px; display: inline-flex; align-items: center;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-1"
          aria-labelledby="tooltip-demo"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip position="${args.position}"
             trigger-id="trigger-1"
             id="tooltip-demo"
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
    position: ODS_TOOLTIP_POSITION.top,
    withArrow: true,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-2"
          aria-labelledby="tooltip-overview"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-2" id="tooltip-overview">
  Tooltip content
</ods-tooltip>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-4"
          aria-labelledby="tooltip-default"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-4" id="tooltip-default">
  Tooltip content
</ods-tooltip>
  `,
};

export const ArrowTip: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-5"
          aria-labelledby="tooltip-arrow-tip"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-5"
             id="tooltip-arrow-tip"
             with-arrow>
  Tooltip content
</ods-tooltip>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-3"
          aria-labelledby="tooltip-custom-css"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-3"
             id="tooltip-custom-css"
             with-arrow>
  <p class="custom-tooltip">
    Custom tooltip
  </p>
</ods-tooltip>
<style>
  .custom-tooltip {
    font-style: italic;
  }
</style>
  `,
};

export const FixedContext: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-icon id="modal-tooltip-trigger"
            aria-labelledby="tooltip-modal"
            name="circle-question"
            tabindex="0">
  </ods-icon>
  <ods-tooltip strategy="fixed"
               id="tooltip-modal"
               trigger-id="modal-tooltip-trigger">
    Some tooltip content
  </ods-tooltip>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-tooltip');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
</script>
  `,
};
