import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-breadcrumb';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Navigation/Breadcrumb',
  component: 'ods-breadcrumb',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-breadcrumb>
  ${unsafeHTML(arg.items)}
</ods-breadcrumb>
  `,
  argTypes: orderControls({
    items: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set the <ods-breadcrumb-item> list',
    },
  }),
  args: {
    items: `<ods-breadcrumb-item href="" icon="home">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="" label="Parent">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="" label="Current">
</ods-breadcrumb-item>`,
  },
};

export const ClickedItem: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-breadcrumb id="my-breadcrumb-clicked">
  <ods-breadcrumb-item id="home" href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link1" href="" label="Link 1">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link2" href="" label="Link 2">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<script>
(() => {
  const breadcrumbEl = document.querySelector('#my-breadcrumb-clicked');
    breadcrumbEl.addEventListener('odsBreadcrumbItemClick', (event) => {
      // event.target.id will refer to the clicked element
    });
})();
</script>
  `,
};

export const Collapsed: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="First">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Second">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Third">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Fourth">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-link" href="" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<style>
  .my-link::part(link) {
    color: #008000;
  }
</style>
  `,
};

export const CustomItem: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Blank" target="_blank">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" is-disabled label="Disabled">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `,
};
