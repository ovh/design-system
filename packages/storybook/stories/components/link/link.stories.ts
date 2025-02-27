import { ODS_ICON_NAMES, ODS_LINK_COLOR, ODS_LINK_COLORS, ODS_LINK_ICON_ALIGNMENT, ODS_LINK_ICON_ALIGNMENTS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-link';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Link',
  component: 'ods-link',
};

export default meta;

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-link
      class="my-link-demo"
      color="${args.color}"
      download="${args.download}"
      href="${args.href}"
      icon="${args.icon}"
      icon-alignment="${args.iconAlignment}"
      is-disabled="${args.isDisabled}"
      label="${args.label}"
      rel="${args.rel}"
      referrerpolicy="${args.referrerpolicy}"
      target="${args.target}">
    </ods-link>
    <style>
      .my-link-demo::part(link) {
        ${args.customCssLink}
      }
      .my-link-demo::part(icon) {
        ${args.customCssIcon}
      }
        .my-link-demo::part(label) {
        ${args.customCssLabel}
      }
    </style>
  `,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'select',
      options: ODS_LINK_COLORS,
    },
    customCssLink: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties on the link. Example: "color: green; font-size: 32px;"',
    },
    customCssIcon: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties on the icon. Example: "width: 2rem; height: 2rem;"',
    },
    customCssLabel: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties on the label. Example: "overflow: auto; text-overflow: inherit; white-space: break-spaces;"',
    },
    download: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    href: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
      },
      control: 'select',
      options: ODS_ICON_NAMES,
      description: 'See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)'
    },
    iconAlignment: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_LINK_ICON_ALIGNMENT.right },
        type: { summary: ODS_LINK_ICON_ALIGNMENTS }
      },
      control: { type: 'select' },
      options: ODS_LINK_ICON_ALIGNMENTS
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    referrerpolicy: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    rel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    target: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    color: ODS_LINK_COLOR.primary,
    iconAlignment: ODS_LINK_ICON_ALIGNMENT.right,
    isDisabled: false,
    label: 'my label',
  },
};

export const AvailabilityDownloadLink1: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-link href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"
          label="Download WCAG20 Guidelines (PDF, 481 KB)">
</ods-link>
  `,
};

export const AvailabilityDownloadLink2: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-link aria-label="Download WCAG20 Guidelines (PDF, 481 KB)"
          href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"
          label="WCAG20 Guidelines">
</ods-link>
<span>(PDF, 481 KB)</span>
  `,
};

export const AvailabilityExternalLink: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-link aria-label="Visit Example (opens in a new tab)"
          href="https://www.ovhcloud.com/"
          icon="external"
          label="Blank target"
          target="_blank">
</ods-link>
  `,
};

export const AvailabilityIconOnly: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-link aria-label="Go to homepage"
          href="https://www.ovhcloud.com/"
          icon="home">
</ods-link>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" label="Link"></ods-link>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  `,
};

export const Color: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  `,
};

export const Ellipsis: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link id="link-ellipsis" class="my-link-ellipsis" href="test" label="link ellipsis" target="_blank">
</ods-link>
<ods-tooltip trigger-id="link-ellipsis" with-arrow="">
  link ellipsis
</ods-tooltip>

<ods-link class="my-link-not-ellipsis" href="test" label="link not ellipsis" target="_blank">
</ods-link>

<style>
  .my-link-ellipsis::part(link), .my-link-not-ellipsis::part(link) {
    width: 50px;
    margin-right: 1rem;
  }

  .my-link-not-ellipsis::part(label) {
    white-space: break-spaces;
  }
</style>
`,
};

export const WithLeftIcon: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-left" icon-alignment="${ODS_LINK_ICON_ALIGNMENT.left}"></ods-link>
  `,
};

export const WithRightIcon: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  `,
};

export const IconOnly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link href="https://www.ovhcloud.com/" icon="arrow-right"></ods-link>
  `,
};

export const Target: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
  <div style="display: flex; flex-direction: column;">
<ods-link href="https://www.ovhcloud.com/" target="_blank" label="Blank target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_self" label="Self target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_parent" label="Parent target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_top" label="Top target"></ods-link>
</div>
  `,
};

export const CustomCSSLink: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-link class="my-link" href="https://www.ovhcloud.com/" label="Content"></ods-link>

<style>
  .my-link::part(link) {
    color: green;
    font-size: 32px;
  }

  .my-link::part(label) {
    white-space: break-spaces;
  }
</style>
  `,
}
