import { defineCustomElement as defineTab } from '@ovhcloud/ods-components/dist/components/ods-tab';
import { defineCustomElement as defineTabs } from '@ovhcloud/ods-components/dist/components/ods-tabs';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineTab();
defineTabs();

const meta: Meta = {
  title: 'ODS Components/Tabs',
  component: 'ods-tabs',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
<ods-tabs>
  ${unsafeHTML(args.content)}
</ods-tabs>
  `,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Add `is-selected` or `is-disabled` on `ods-tab` to see the state change',
    },
  }),
  args: {
    content: '<ods-tab>Tab 1</ods-tab><ods-tab>Tab 2</ods-tab><ods-tab>Tab 3</ods-tab>',
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tabs class="my-tabs" id="css-tabs">
  <ods-tab class="my-tab" id="css-tab-1">Tab 1</ods-tab>
  <ods-tab id="css-tab-2">Tab 2</ods-tab>
  <ods-tab id="css-tab-3">Tab 3</ods-tab>
</ods-tabs>
<style>
  .my-tabs {
    background-color: #e2e2e2;
  }
  .my-tab {
    color: #ffa500;
  }
</style>
<script>
  (() => {
    const cssTabs = document.querySelector('#css-tabs');
    const allCssTabs = cssTabs.querySelectorAll('ods-tab');

    cssTabs.addEventListener('odsTabSelected', (event) => {
      allCssTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
</script>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tabs id="default-tabs">
  <ods-tab id="default-1">Tab 1</ods-tab>
  <ods-tab id="default-2">Tab 2</ods-tab>
  <ods-tab id="default-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const defaultTabs = document.querySelector('#default-tabs');
    const allDefaults = defaultTabs.querySelectorAll('ods-tab');

    defaultTabs.addEventListener('odsTabSelected', (event) => {
      allDefaults.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
</script>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tabs id="disabled-tabs">
  <ods-tab id="disabled-tab-1">Tab 1</ods-tab>
  <ods-tab id="disabled-tab-2" is-disabled>Tab 2</ods-tab>
  <ods-tab id="disabled-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const disabledTabs = document.querySelector('#disabled-tabs');
    const allDisabledTabs = disabledTabs.querySelectorAll('ods-tab');

    disabledTabs.addEventListener('odsTabSelected', (event) => {
      allDisabledTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
</script>
  `,
};

export const Overflow: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<div class="my-container">
  <ods-tabs id="overflow-tabs">
    <ods-tab id="overflow-tab-1">Tab 1</ods-tab>
    <ods-tab id="overflow-tab-2">Tab 2</ods-tab>
    <ods-tab id="overflow-tab-3">Tab 3</ods-tab>
    <ods-tab id="overflow-tab-4">Tab 4</ods-tab>
    <ods-tab id="overflow-tab-5">Tab 5</ods-tab>
    <ods-tab id="overflow-tab-6">Tab 6</ods-tab>
  </ods-tabs>
</div>
<style>
  .my-container {
    width: 300px;
  }
</style>
<script>
  (() => {
    const overflowTabs = document.querySelector('#overflow-tabs');
    const allOverflowTabs = overflowTabs.querySelectorAll('ods-tab');

    overflowTabs.addEventListener('odsTabSelected', (event) => {
      allOverflowTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
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
<ods-tabs id="tabs">
  <ods-tab id="tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="tab-2">Tab 2</ods-tab>
  <ods-tab id="tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const tabs = document.querySelector('#tabs');
    const allTabs = tabs.querySelectorAll('ods-tab');

    tabs.addEventListener('odsTabSelected', (event) => {
      allTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
</script>
  `,
};

export const Selected: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-tabs id="selected-tabs">
  <ods-tab id="selected-tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="selected-tab-2">Tab 2</ods-tab>
  <ods-tab id="selected-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const selectedTabs = document.querySelector('#selected-tabs');
    const allSelectedTabs = selectedTabs.querySelectorAll('ods-tab');

    selectedTabs.addEventListener('odsTabSelected', (event) => {
      allSelectedTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
</script>
  `,
};
