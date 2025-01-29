import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-select';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/Select',
  component: 'ods-select',
  decorators: [(story) => html`<div style="min-height: 200px;">${story()}</div>`],
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    return html`
    <ods-select class="my-select-demo"
                has-error="${arg.hasError}"
                is-disabled="${arg.isDisabled}"
                is-readonly="${arg.isReadonly}"
                is-required="${arg.isRequired}"
                placeholder="${arg.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-select>
    ${arg.validityState ? ValidityStateTemplate('select', '.my-select-demo') : ''}
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
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    validityState: false,
  },
};

export const DemoMultiple: StoryObj = {
  render: (arg) => {
    return html`
    <ods-select allow-multiple
                class="my-select-demo-multiple"
                has-error="${arg.hasError}"
                is-disabled="${arg.isDisabled}"
                is-readonly="${arg.isReadonly}"
                is-required="${arg.isRequired}"
                multiple-selection-label="${arg.multipleSelectionLabel}"
                placeholder="${arg.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-select>
    ${arg.validityState ? ValidityStateTemplate('select', '.my-select-demo-multiple') : ''}
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
    multipleSelectionLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Selected item' },
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
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState',
    },
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    multipleSelectionLabel: 'Selected item',
    validityState: false,
  },
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select class="my-select"
            placeholder="Select one pet">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
<style>
  .my-select {
    display: inline-block;
    width: 200px;
  }
</style>
  `,
};

export const CustomRenderer: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select id="select-custom-renderer"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRenderer = document.querySelector('#select-custom-renderer');

    selectCustomRenderer.customRenderer = {
      item: (data) => {
        return \`<div><ods-icon name="check"></ods-icon>&nbsp;\${data.text}</div>\`;
      },
      option: (data) => {
        return \`
  <div style="display: grid; grid-template-columns: max-content 1fr; column-gap: 8px; padding: 8px;">
  <img alt="logo"
     height="50"
     src="\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\${data.text}</span>
    <span>\${data.description}</span>
  </div>
  </div>\`;
      },
    }
  })();
</script>
  `,
};

export const CustomRendererMultiple: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select allow-multiple
            id="select-custom-renderer-multiple"
            multiple-selection-label="Selected provider"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRendererMultiple = document.querySelector('#select-custom-renderer-multiple');

    selectCustomRendererMultiple.customRenderer = {
      option: (data) => {
        return \`
  <div style="display: grid; grid-template-columns: max-content max-content 1fr; column-gap: 8px; padding: 8px;">
  <!-- checkbox will get injected here as first child -->
  <img alt="logo"
     height="50"
     src="\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\${data.text}</span>
    <span>\${data.description}</span>
  </div>
  </div>\`;
      },
    }
  })();
</script>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select placeholder="Select">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `,
};

export const Multiple: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select allow-multiple
            placeholder="Select one or more pets">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `,
};

export const Optgroup: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
  <optgroup label="Asia">
    <option value="cn">China</option>
    <option value="jp">Japan</option>
    <option value="ru">Russia</option>
  </optgroup>
  <optgroup label="North America">
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
    <option value="us">United States of America</option>
  </optgroup>
</ods-select>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select is-disabled placeholder="Disabled select">
  <option value="cat">Cat</option>
</ods-select>
  `,
};

export const DisabledOption: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select placeholder="Disabled select">
  <option value="dog">Dog</option>
  <option value="cat" disabled>Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `,
};

export const DisabledGroupOfOptions: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
  <optgroup label="Asia" disabled>
    <option value="cn">China</option>
    <option value="jp">Japan</option>
    <option value="ru">Russia</option>
  </optgroup>
  <optgroup label="North America">
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
    <option value="us">United States of America</option>
  </optgroup>
</ods-select>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select is-readonly placeholder="Readonly select">
  <option value="cat">Cat</option>
</ods-select>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-select is-required id="select-validity-state-demo">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
${ValidityStateTemplate('select', '#select-validity-state-demo')}
  `,
};
