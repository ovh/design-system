import { ODS_POPOVER_POSITION, ODS_POPOVER_POSITIONS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-popover';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Popover',
  component: 'ods-popover',
  parameters: {
    layout: 'centered',
  },
  decorators: [(story) => html`<div style="padding-top: 50px; display: inline-flex; align-content: center;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-button id="trigger-demo"
            label="Trigger">
</ods-button>
<ods-popover position="${args.position}"
             trigger-id="trigger-demo"
             with-arrow="${args.withArrow}">
  ${unsafeHTML(args.content)}
</ods-popover>
  `,
  argTypes: orderControls({
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
        defaultValue: { summary: ODS_POPOVER_POSITION.top },
        type: { summary: ODS_POPOVER_POSITIONS },
      },
      control: { type: 'select' },
      options: ODS_POPOVER_POSITIONS,
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
    content: '<div><p>Some text content</p><input type="text" /><button>Action</button>',
    position: ODS_POPOVER_POSITION.bottom,
    withArrow: true,
  },
};

export const ArrowTip: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button icon="home"
            id="trigger-arrow"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-arrow"
             with-arrow>
  Popover content
</ods-popover>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button icon="home"
            id="trigger-css"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-css"
             with-arrow>
  <p class="custom-content">
    Popover content
  </p>
</ods-popover>
<style>
  .custom-content {
    margin: 0;
    font-style: italic;
  }
</style>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button icon="home"
            id="trigger-default"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-default">
  Popover content
</ods-popover>
  `,
};

export const FixedContext: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-popover">
  <ods-button id="modal-popover-trigger"
              label="Open Popover">
  </ods-button>
  <ods-popover strategy="fixed"
               trigger-id="modal-popover-trigger">
    Some popover content
  </ods-popover>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-popover');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
</script>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-button icon="home"
            id="trigger-overview"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-overview">
  Popover content
</ods-popover>
  `,
};

export const Menu: StoryObj = {
  tags:['isHidden'],
  decorators: [(story) => html`<div style="height: 200px;">${story()}</div>`],
  render: () => html`
<div style="display: flex;">
  <ods-button class="my-trigger"
              icon="ellipsis-vertical"
              id="trigger-menu"
              variant="outline"></ods-button>

  <ods-popover class="custom-popover"
               trigger-id="trigger-menu"
               with-arrow>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"></ods-button>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"></ods-button>
    <ods-divider></ods-divider>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"
                color="critical"></ods-button>
  </ods-popover>

  <style>
    .custom-popover {
      padding: 8px 0;
    }
    .my-trigger::part(button) {
      width: 40px;
      height: 40px;
      justify-content: center;
    }
    .my-button::part(button) {
      height: 32px;
      border-radius: 0;
    }
  </style>
</div>
  `,
}
