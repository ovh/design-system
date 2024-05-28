import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-modal';
import { ODS_MODAL_COLOR, ODS_MODAL_COLORS } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/User Feedback/Modal',
  component: 'ods-modal',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-modal is-open="${args.isOpen}" is-dismissible="${args.isDismissible}" color="${args.color}">
  ${unsafeHTML(args.content)}
  ${unsafeHTML(args.actions)}
</ods-modal>
<style>
  .my-text::part(text) {
    margin: 0 0 1rem 0;
  }
  ods-button::part(button) {
    margin-top: 1rem;
  }
</style>
  `,
  argTypes: orderControls({
    isOpen: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isDismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: true },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_MODAL_COLOR.information },
        type: { summary: ODS_MODAL_COLORS },
      },
      control: {
        type: 'select',
        options: ODS_MODAL_COLORS,
      },
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    actions: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
  }),
  args: {
    isOpen: true,
    isDismissible: true,
    color: ODS_MODAL_COLOR.information,
    content:
`<ods-text preset="heading-4" class="my-text">Hello, world!</ods-text>
<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>`,
    actions:
`<ods-button label="Migration guide" slot="actions" variant="outline" icon="upload"></ods-button>
<ods-button label="Documentation" slot="actions" icon="book"></ods-button>`,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-overview" label="Trigger Modal" icon="shutdown"></ods-button>
<ods-modal class="modal-overview">
  <ods-text class="headline" preset="heading-4">Overview</ods-text>
  <ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>
</ods-modal>

<script>
  const buttonOverview = document.querySelector('.button-overview');
  const modalOverview = document.querySelector('.modal-overview');

  buttonOverview.addEventListener('click', () => {
    modalOverview.open();
  });
</script>

<style>
  .headline::part(text) {
    margin: 0 0 1rem 0;
  }
</style>
`,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-default" label="Trigger Modal" icon="shutdown"></ods-button>
<ods-modal class="modal-default"></ods-modal>

<script>
  const buttonDefault = document.querySelector('.button-default');
  const modalDefault = document.querySelector('.modal-default');

  buttonDefault.addEventListener('click', () => {
    modalDefault.open();
  });
</script>
`,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-custom-css" label="Trigger Modal" icon="shutdown"></ods-button>
<ods-modal class="modal-custom-css">
  <ods-text preset="span" class="my-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  const buttonCustomCSS = document.querySelector('.button-custom-css');
  const modalCustomCSS = document.querySelector('.modal-custom-css');

  buttonCustomCSS.addEventListener('click', () => {
    modalCustomCSS.open();
  });
</script>

<style>
  .my-text {
    color: red;
  }
</style>
  `,
};

export const Dismissible: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-dismissible" label="Trigger Modal" icon="cross" variant="outline">
</ods-button>
<ods-modal class="modal-dismissible" is-dismissible="false">
  <ods-text preset="span">
    This Modal is not dismissible. You can use the custom "Close" button to close it.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="cross" class="modal-dismissible-close"></ods-button>
</ods-modal>

<script>
  const buttonDismissible = document.querySelector('.button-dismissible');
  const modalDismissible = document.querySelector('.modal-dismissible');

  buttonDismissible.addEventListener('click', () => {
    modalDismissible.open();
  });

  const modalDismissibleClose = document.querySelector('.modal-dismissible-close');

  modalDismissibleClose.addEventListener('click', () => {
    modalDismissible.close();
  });
</script>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-color" label="Trigger Modal" icon="warning-triangle" color=${ODS_MODAL_COLOR.critical}>
</ods-button>
<ods-modal class="modal-color" color=${ODS_MODAL_COLOR.critical}>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  const buttonColor = document.querySelector('.button-color');
  const modalColor = document.querySelector('.modal-color');

  buttonColor.addEventListener('click', () => {
    modalColor.open();
  });
</script>
`,
};

export const Actions: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-actions" label="Trigger Modal" icon="game-controler-b" variant="outline">
</ods-button>
<ods-modal class="modal-actions">
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="cross" class="modal-actions-close"></ods-button>
</ods-modal>

<script>
  const buttonActions = document.querySelector('.button-actions');
  const modalActions = document.querySelector('.modal-actions');

  buttonActions.addEventListener('click', () => {
    modalActions.open();
  });

  const modalActionsClose = document.querySelector('.modal-actions-close');

  modalActionsClose.addEventListener('click', () => {
    modalActions.close();
  });
</script>

<style>
  .modal-actions-close::part(button) {
    margin-top: 1rem;
  }
</style>
  `,
};