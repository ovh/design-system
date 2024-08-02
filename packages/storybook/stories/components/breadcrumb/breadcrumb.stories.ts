import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

const meta: Meta = {
  title: 'ODS Components/Breadcrumb',
  component: 'ods-breadcrumb',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
<ods-breadcrumb class="breadcrumb--disabled">
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
  <ods-breadcrumb-item id="home" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link1" label="Link 1">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link2" label="Link 2">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Last">
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
<ods-breadcrumb class="breadcrumb--disabled">
  <ods-breadcrumb-item icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="First">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Second">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Third">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Fourth">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-breadcrumb class="breadcrumb--disabled">
  <ods-breadcrumb-item icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-link" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Last">
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
<ods-breadcrumb class="breadcrumb--disabled">
  <ods-breadcrumb-item icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Blank" target="_blank">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item is-disabled label="Disabled">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<script>
  (() => {
    document.querySelectorAll('.breadcrumb--disabled').forEach((breadcrumbElement) => {
      breadcrumbElement.addEventListener('odsBreadcrumbItemClick', (event) => {
        event.detail.preventDefault();
      });
    })
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
<ods-breadcrumb class="breadcrumb--disabled">
  <ods-breadcrumb-item icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-breadcrumb class="breadcrumb--disabled">
  <ods-breadcrumb-item icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `,
};
