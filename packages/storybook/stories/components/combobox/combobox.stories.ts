import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-combobox';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Combobox',
  component: 'ods-combobox',
  decorators: [(story) => html`<div style="min-height: 200px;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    dummy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
  }),
  args: {
    dummy: 'dummy default',
  },
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
