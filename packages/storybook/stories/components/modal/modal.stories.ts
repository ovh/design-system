import { ODS_MODAL_COLOR, ODS_MODAL_COLORS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-modal';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';
import { withResetRoot } from '../../../src/hooks/withResetRoot';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Modal',
  component: 'ods-modal',
  decorators: [withResetRoot],
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-button class="button-demo" label="Trigger Modal"></ods-button>
<ods-modal class="modal-demo" is-open="${args.isOpen}" is-dismissible="${args.isDismissible}" color="${args.color}">
  ${unsafeHTML(args.content)}
  ${unsafeHTML(args.actions)}
</ods-modal>

<style>
  ${unsafeHTML(args.customCss)}
</style>

<script>
  (() => {
    const buttonDemo = document.querySelector('.button-demo');
    const modalDemo = document.querySelector('.modal-demo');

    buttonDemo.addEventListener('click', () => {
      modalDemo.open();
    });
  })();
</script>
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
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_MODAL_COLOR.information },
        type: { summary: ODS_MODAL_COLORS },
      },
      control: { type: 'select' },
      options: ODS_MODAL_COLORS,
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
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "ods-modal::part(dialog) { border: 1px red solid; }"',
    }
  }),
  args: {
    isOpen: false,
    isDismissible: true,
    color: ODS_MODAL_COLOR.information,
    content:
`<ods-text preset="heading-4" class="my-text">Hello, world!</ods-text>
<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>`,
    actions:
`<ods-button label="Cancel" slot="actions" variant="ghost"></ods-button>
<ods-button label="Confirm" slot="actions"></ods-button>`,
    customCss:
`.modal-demo .my-text::part(text) {
  margin: 0 0 1rem 0;
}
.modal-demo ods-button {
  max-width: 100%;
}
.modal-demo ods-button::part(button) {
  margin-top: 1rem;
}`
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-button class="button-overview" variant="outline" label="Trigger Modal"></ods-button>
<ods-modal class="modal-overview">
  <ods-text class="headline" preset="heading-4">Overview</ods-text>
  <ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>
</ods-modal>

<script>
  (() => {
    const buttonOverview = document.querySelector('.button-overview');
    const modalOverview = document.querySelector('.modal-overview');

    buttonOverview.addEventListener('click', () => {
      modalOverview.open();
    });
  })();
</script>

<style>
  .modal-overview .headline::part(text) {
    margin: 0 0 1rem 0;
  }
</style>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-default" label="Trigger Modal"></ods-button>
<ods-modal class="modal-default"></ods-modal>

<script>
  (() => {
    const buttonDefault = document.querySelector('.button-default');
    const modalDefault = document.querySelector('.modal-default');

    buttonDefault.addEventListener('click', () => {
      modalDefault.open();
    });
  })();
</script>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-custom-css" label="Trigger Modal"></ods-button>
<ods-modal class="modal-custom-css">
  <ods-text preset="span" class="my-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  (() => {
    const buttonCustomCSS = document.querySelector('.button-custom-css');
    const modalCustomCSS = document.querySelector('.modal-custom-css');

    buttonCustomCSS.addEventListener('click', () => {
      modalCustomCSS.open();
    });
  })();
</script>

<style>
  .modal-custom-css .my-text {
    color: red;
  }

  .modal-custom-css::part(dialog) {
    border: .5rem red solid;
    max-height: 90%;
    max-width: 70%;
  }
</style>
  `,
};

export const NotDismissible: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-not-dismissible" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-not-dismissible" is-dismissible="false">
  <ods-text preset="span">
    This Modal is not dismissible. You can use the custom "Close" button to close it.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="xmark" class="modal-not-dismissible-close"></ods-button>
</ods-modal>

<script>
  (() => {
    const buttonNotDismissible = document.querySelector('.button-not-dismissible');
    const modalNotDismissible = document.querySelector('.modal-not-dismissible');
    const modalNotDismissibleClose = document.querySelector('.modal-not-dismissible-close');

    buttonNotDismissible.addEventListener('click', () => {
      modalNotDismissible.open();
    });

    modalNotDismissibleClose.addEventListener('click', () => {
      modalNotDismissible.close();
    });
  })();
</script>

<style>
  .modal-not-dismissible ods-button {
    max-width: 100%;
  }
</style>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-color" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-color" color=${ODS_MODAL_COLOR.critical}>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  (() => {
    const buttonColor = document.querySelector('.button-color');
    const modalColor = document.querySelector('.modal-color');

    buttonColor.addEventListener('click', () => {
      modalColor.open();
    });
  })();
</script>
  `,
};

export const Actions: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button class="button-actions" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-actions">
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="xmark" class="modal-actions-close"></ods-button>
</ods-modal>

<script>
  (() => {
    const buttonActions = document.querySelector('.button-actions');
    const modalActions = document.querySelector('.modal-actions');
    const modalActionsClose = document.querySelector('.modal-actions-close');

    buttonActions.addEventListener('click', () => {
      modalActions.open();
    });

    modalActionsClose.addEventListener('click', () => {
      modalActions.close();
    });
  })();
</script>

<style>
  .modal-actions .modal-actions-close::part(button) {
    margin-top: 1rem;
  }
  .modal-actions ods-button {
    max-width: 100%;
  }
</style>
  `,
};
