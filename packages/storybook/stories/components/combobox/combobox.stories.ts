import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-combobox';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { ValidityStateTemplate } from '../../../src/components/validityState/validityState';
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
  render: (arg) => {
    return html`
      <ods-combobox
        add-new-element-label="${arg.addNewElementLabel || nothing}"
        has-error="${arg.hasError}"
        highlight-results="${arg.highlightResults}"
        is-clearable="${arg.isClearable}"
        is-disabled="${arg.isDisabled}"
        is-loading="${arg.isLoading}"
        is-readonly="${arg.isReadonly}"
        no-result-label="${arg.noResultLabel || nothing}"
        placeholder="${arg.placeholder || nothing }">
        <ods-combobox-item value="chocolate">
          Chocolate
        </ods-combobox-item>
        <ods-combobox-item value="chocolate-with-nuts">
          Chocolate with nuts
        </ods-combobox-item>
        <ods-combobox-item value="coconut">
          Coconut
        </ods-combobox-item>
        <ods-combobox-item value="light-mint">
          Light mint
        </ods-combobox-item>
        <ods-combobox-item value="mint">
          Mint
        </ods-combobox-item>
        <ods-combobox-item value="strawberry">
          Strawberry
        </ods-combobox-item>
        <ods-combobox-item value="vanilla">
          Vanilla
        </ods-combobox-item>
        <ods-combobox-item value="white-chocolate">
          White chocolate
        </ods-combobox-item>
      </ods-combobox>
    `;
  },
  argTypes: orderControls({
    addNewElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Add' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    highlightResults: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isClearable: {
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
    isLoading: {
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
    highlightResults: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
  },
};

export const DemoMultiple: StoryObj = {
  render: (arg) => {
    return html`
      <ods-combobox
        add-new-element-label="${arg.addNewElementLabel}"
        allow-multiple
        has-error="${arg.hasError}"
        highlight-results="${arg.highlightResults}"
        is-clearable="${arg.isClearable}"
        is-disabled="${arg.isDisabled}"
        is-loading="${arg.isLoading}"
        is-readonly="${arg.isReadonly}"
        no-result-label="${arg.noResultLabel}"
        placeholder="${arg.placeholder || nothing }">
        <ods-combobox-item value="chocolate">
          Chocolate
        </ods-combobox-item>
        <ods-combobox-item value="chocolate-with-nuts">
          Chocolate with nuts
        </ods-combobox-item>
        <ods-combobox-item value="coconut">
          Coconut
        </ods-combobox-item>
        <ods-combobox-item value="light-mint">
          Light mint
        </ods-combobox-item>
        <ods-combobox-item value="mint">
          Mint
        </ods-combobox-item>
        <ods-combobox-item value="strawberry">
          Strawberry
        </ods-combobox-item>
        <ods-combobox-item value="vanilla">
          Vanilla
        </ods-combobox-item>
        <ods-combobox-item value="white-chocolate">
          White chocolate
        </ods-combobox-item>
      </ods-combobox>
    `;
  },
  argTypes: orderControls({
    addNewElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Add' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    highlightResults: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isClearable: {
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
    isLoading: {
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
    highlightResults: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
  },
};

export const Clearable: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox is-clearable>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `,
};

export const CustomItems: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox allow-multiple style="width: 100%;">
  <ods-combobox-item selection-label="OVH" value="ovh">
    <div class="custom-item">
      <img alt="logo"
           src="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">OVH Cloud</span>
        <span>OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="AWS" value="aws">
    <div class="custom-item">
      <img alt="logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/langfr-2560px-Amazon_Web_Services_Logo.svg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Amazon Web Services</span>
        <span>Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="Azure" value="azure">
    <div class="custom-item">
      <img alt="logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Microsoft Azure</span>
        <span>Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="GCP" value="gcp">
    <div class="custom-item">
      <img alt="logo"
           src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Google Cloud Platform</span>
        <span>Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.</span>
      </div>
    </div>
  </ods-combobox-item>
</ods-combobox>
<style>
  .custom-item {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 8px;
    padding: 8px;
  }

  .custom-item__content {
    display: flex;
    flex-flow: column;
    row-gap: 8px;
  }

  .custom-item__content__title {
    font-weight: bold;
  }
</style>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox is-disabled>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `,
};

export const FixedContext: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-combobox">
  <div class="combobox-container">
    <ods-combobox class="combobox" strategy="fixed">
      <ods-combobox-item value="chocolate">
        Chocolate
      </ods-combobox-item>
      <ods-combobox-item value="chocolate-with-nuts">
        Chocolate with nuts
      </ods-combobox-item>
      <ods-combobox-item value="coconut">
        Coconut
      </ods-combobox-item>
      <ods-combobox-item value="light-mint">
        Light mint
      </ods-combobox-item>
      <ods-combobox-item value="mint">
        Mint
      </ods-combobox-item>
      <ods-combobox-item value="strawberry">
        Strawberry
      </ods-combobox-item>
      <ods-combobox-item value="vanilla">
        Vanilla
      </ods-combobox-item>
      <ods-combobox-item value="white-chocolate">
        White chocolate
      </ods-combobox-item>
    </ods-combobox>
  </div>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-combobox');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
</script>

<style>
  .combobox,
  .combobox-container {
    width: 200px;
    height: var(--ods-form-element-input-height);
  }
</style>
  `,
};

export const Group: StoryObj = {
    tags: ['isHidden'],
    render: () => html`
<ods-combobox id="group">
  <ods-combobox-group>
    <span slot="title">Flavours</span>

    <ods-combobox-item value="chocolate">
      Chocolate
    </ods-combobox-item>
    <ods-combobox-item value="chocolate-with-nuts">
      Chocolate with nuts
    </ods-combobox-item>
    <ods-combobox-item value="coconut">
      Coconut
    </ods-combobox-item>
    <ods-combobox-item value="light-mint">
      Light mint
    </ods-combobox-item>
    <ods-combobox-item value="mint">
      Mint
    </ods-combobox-item>
    <ods-combobox-item value="strawberry">
      Strawberry
    </ods-combobox-item>
    <ods-combobox-item value="vanilla">
      Vanilla
    </ods-combobox-item>
    <ods-combobox-item value="white-chocolate">
      White chocolate
    </ods-combobox-item>
  </ods-combobox-group>

  <ods-combobox-group>
    <span slot="title">Animals</span>

    <ods-combobox-item value="dog">
      Dog
    </ods-combobox-item>
    <ods-combobox-item value="cat">
      Cat
    </ods-combobox-item>
    <ods-combobox-item value="hamster">
      Hamster
    </ods-combobox-item>
    <ods-combobox-item value="parrot">
      Parrot
    </ods-combobox-item>
    <ods-combobox-item value="spider">
      Spider
    </ods-combobox-item>
    <ods-combobox-item value="goldfish">
      Goldfish
    </ods-combobox-item>
  </ods-combobox-group>

  <ods-combobox-item value="some-item">
    Some non grouped item
  </ods-combobox-item>
  <ods-combobox-item value="other-item">
    Other non grouped item
  </ods-combobox-item>
</ods-combobox>
  `,
};

export const Multiple: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox allow-multiple>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-combobox placeholder="Combobox">
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox is-readonly>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-combobox is-required id="combobox-validity-state-demo">
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
${ValidityStateTemplate('combobox', '#combobox-validity-state-demo')}
  `,
};
