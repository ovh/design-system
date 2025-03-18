import { ODS_DRAWER_POSITION, ODS_DRAWER_POSITIONS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-drawer';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Drawer',
  component: 'ods-drawer',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-button variant="outline" class="button-drawer-demo" label="Trigger Drawer"></ods-button>
<ods-drawer class="my-drawer-demo" is-open="${arg.isOpen}" position="${arg.position}">
  ${unsafeHTML(arg.content)}
</ods-drawer>
<style>
  .my-drawer-demo::part(dialog) {
    ${arg.customCss}
  }
</style>

<script>
(() => {
  const buttonDemo = document.querySelector('.button-drawer-demo');
  const drawerDemo = document.querySelector('.my-drawer-demo');

  buttonDemo.addEventListener('click', () => {
    if (drawerDemo.isOpen) {
      drawerDemo.close();
    } else {
      drawerDemo.open();
    }
  });
})();
</script>`,
  argTypes: orderControls({
    isOpen: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_DRAWER_POSITION.left },
        type: { summary: ODS_DRAWER_POSITIONS },
      },
      control: { type: 'select' },
      options: ODS_DRAWER_POSITIONS,
    },
    content: {
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
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 100px; background-color: #008000;"',
    }
  }),
  args: {
    content: `
    <div>
      <ods-text preset="heading-4">Hello, world!</ods-text>
      <ods-text preset="heading-3">Press 'Escape' to close the drawer</ods-text>
      <ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>
    </div>`,
    isOpen: false,
    position: ODS_DRAWER_POSITION.left,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-button variant="outline" id="button-drawer-overview" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-overview">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonOverview = document.querySelector('#button-drawer-overview');
  const drawerOverview = document.querySelector('#drawer-overview');

  buttonOverview.addEventListener('click', () => {
    if (drawerOverview.isOpen) {
      drawerOverview.close();
    } else {
      drawerOverview.open();
    }
  });
})();
</script>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-button variant="outline" id="button-drawer-default" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-default">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonDefault = document.querySelector('#button-drawer-default');
  const drawerDefault = document.querySelector('#drawer-default');

  buttonDefault.addEventListener('click', () => {
    if (drawerDefault.isOpen) {
      drawerDefault.close();
    } else {
      drawerDefault.open();
    }
  });
})();
</script>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-drawer class="my-drawer"></ods-drawer>
<ods-button variant="outline" id="button-drawer-custom-css" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-custom-css" class="my-drawer-custom-css">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonCustomCSS = document.querySelector('#button-drawer-custom-css');
  const drawerCustomCSS = document.querySelector('#drawer-custom-css');

  buttonCustomCSS.addEventListener('click', () => {
    if (drawerCustomCSS.isOpen) {
      drawerCustomCSS.close();
    } else {
      drawerCustomCSS.open();
    }
  });
})();
</script>
<style>
  .my-drawer-custom-css::part(drawer) {
    background-color: red;
  }
</style>
  `,
};

export const Position: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-button variant="outline" id="button-drawer-left" label="Trigger Drawer Left"></ods-button>
<ods-button variant="outline" id="button-drawer-right" label="Trigger Drawer Right"></ods-button>
<ods-button variant="outline" id="button-drawer-bottom" label="Trigger Drawer bottom"></ods-button>
<ods-button variant="outline" id="button-drawer-top" label="Trigger Drawer top"></ods-button>

<ods-drawer id="drawer-position">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonLeft = document.querySelector('#button-drawer-left');
  const buttonRight = document.querySelector('#button-drawer-right');
  const buttonBottom = document.querySelector('#button-drawer-bottom');
  const buttonTop = document.querySelector('#button-drawer-top');

  const drawerPosition = document.querySelector('#drawer-position');

  [buttonLeft, buttonRight, buttonBottom, buttonTop].forEach((button) =>
    button.addEventListener('click', async() => {
      const lastPosition = drawerPosition.position;
      drawerPosition.position = button.id.replace('button-drawer-', '');
      if (lastPosition !== drawerPosition.position && drawerPosition.isOpen) {
        return;
      }
      if (drawerPosition.isOpen) {
        await drawerPosition.close();
      } else {
        await drawerPosition.open();
      }
    }));
})();
</script>
  `,
};
