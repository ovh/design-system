import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-icon';
import { ODS_ICON_NAME, ODS_ICON_NAMES } from '@ovhcloud/ods-components';
import { CONTROL_CATEGORY, orderControls } from '../../control';
import { html } from 'lit-html';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Content/Icon',
  component: 'ods-icon',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    alt: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: { type: 'text' },
      description: 'Optional alternate text for the icon'
    },
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
      },
      control: { type: 'select' },
      options: ODS_ICON_NAMES,
    },
  }),
  args: {
    name: ODS_ICON_NAME.home,
    alt: 'home icon'
  },
};

export const All: StoryObj = {
  render: (args) => {
    const regexp = new RegExp(args.search)
    const names = args.search ? ODS_ICON_NAMES.filter((name) => {
      return regexp.test(name);
    }) : ODS_ICON_NAMES;

    return html`
      <div style="display: flex; flex-flow: row; flex-wrap: wrap; grid-gap: 1rem;">
        ${names.map((name) =>
          html`<ods-icon name="${name}" title="${name}"></ods-icon>`
        )}
      </div>
    `;
  },
  argTypes: {
    search: {
      control: { type: 'text' },
      description: 'Search for a specific icon name'
    },
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-icon name="home"></ods-icon>
  `,
};

export const Name: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-icon name="home"></ods-icon>
<ods-icon name="plus"></ods-icon>
  `,
};
