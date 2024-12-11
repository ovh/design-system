import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

const meta: Meta = {
  title: 'ODS Components/Form elements/Combobox',
  component: 'ods-combobox',
  decorators: [(story) => html`<div style="min-height: 200px;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-combobox class="my-combobox-demo"
                  has-error="${arg.hasError}"
                  is-disabled="${arg.isDisabled}"
                  is-readonly="${arg.isReadonly}"
                  is-required="${arg.isRequired}"
                  no-result-label="${arg.noResultLabel}"
                  placeholder="${arg.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-combobox>
  `;
  },
  argTypes: orderControls({
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isReadonly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'No results found' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    noResultLabel: 'No results found',
  },
};

export const DemoMultiple: StoryObj = {
  render: (arg) => {
    return html`
    <ods-combobox allow-multiple
                  class="my-combobox-demo-multiple"
                  has-error="${arg.hasError}"
                  is-disabled="${arg.isDisabled}"
                  is-readonly="${arg.isReadonly}"
                  is-required="${arg.isRequired}"
                  no-result-label="${arg.noResultLabel}"
                  placeholder="${arg.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-combobox>
  `;
  },
  argTypes: orderControls({
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isReadonly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'No results found' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    noResultLabel: 'No results found',
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox class="my-combobox"
              placeholder="Select one pet">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-combobox>
<style>
  .my-combobox {
    display: inline-block;
    width: 200px;
  }
</style>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-combobox>
  `,
};

export const Multiple: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox allow-multiple>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-combobox>
  `,
};

export const NoCreate: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox can-create="false">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-combobox>
  `,
};

export const OptionGroup: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox>
  <optgroup label="Climbing">
    <option value="pitons">Pitons</option>
    <option value="cams">Cams</option>
    <option value="nuts">Nuts</option>
    <option value="bolts">Bolts</option>
    <option value="stoppers">Stoppers</option>
    <option value="sling">Sling</option>
  </optgroup>
  <optgroup label="Skiing">
    <option value="skis">Skis</option>
    <option value="skins">Skins</option>
    <option value="poles">Poles</option>
  </optgroup>
</ods-combobox>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox placeholder="Start typing">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-combobox>
  `,
};
