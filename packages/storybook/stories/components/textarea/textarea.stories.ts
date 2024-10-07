import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

const meta: Meta = {
  title: 'ODS Components/Form elements/Textarea',
  component: 'ods-textarea',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    const validityStateTemplate = html`<br>
    <div id="validity-state" style="display: grid; row-gap: 5px;"></div>
    <script>
      (() => {
          const divValidityState = document.querySelector('#validity-state');
          const textarea = document.querySelector('.my-textarea');
          setTimeout(async() => { await renderValidityState() }, 0)
          textarea.addEventListener('odsChange', async () => {
            setTimeout(async() => { await renderValidityState() }, 0)
          })
          async function renderValidityState() {
            const validity = await textarea.getValidity()
            divValidityState.innerHTML = '';
            for (let key in validity) {
              divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
            }
          }
      })();
    </script>`;
    return html`
    <ods-textarea class="my-textarea"
                  ariaLabel="${arg.ariaLabel}"
                  ariaLabelledby="${arg.ariaLabelledby}"
                  cols="${arg.cols}"
                  has-error="${arg.hasError}"
                  has-spellcheck="${arg.hasSpellcheck}"
                  is-disabled="${arg.isDisabled}"
                  is-readonly="${arg.isReadonly}"
                  is-resizable="${arg.isResizable}"
                  is-required="${arg.isRequired}"
                  placeholder="${arg.placeholder}"
                  rows="${arg.rows}">
    </ods-textarea>
    ${ arg.validityState ? validityStateTemplate : '' }
    <style>
      .my-textarea::part(textarea) {
        ${arg.customCss}
      }
    </style>
  `},
  argTypes: orderControls({
    ariaLabel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    ariaLabelledby: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    cols: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 50px; width: 500px;"',
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    hasSpellcheck: {
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
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    isResizable: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    rows: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
  args: {
    hasError: false,
    hasSpellcheck: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    isResizable: false,
    validityState: false,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-textarea placeholder="Textarea"></ods-textarea>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea></ods-textarea>
  `,
};

export const Cols: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea cols="50">
</ods-textarea>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea class="my-textarea">
</ods-textarea>
<style>
  .my-textarea::part(textarea) {
    width: 100px;
  }
</style>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea is-disabled>
</ods-textarea>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea has-error>
</ods-textarea>
  `,
};

export const Placeholder: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea placeholder="Placeholder">
</ods-textarea>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea is-readonly value="Readonly">
</ods-textarea>
  `,
};

export const Resizable: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea is-resizable>
</ods-textarea>
  `,
};

export const Rows: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea rows="8">
</ods-textarea>
  `,
};

export const Spellcheck: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea has-spellcheck>
</ods-textarea>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-textarea is-required id="textarea-validity-state-demo">
</ods-textarea>
<div id="validity-state-demo"></div>
<script>
  (() => {
      const divValidityState = document.querySelector('#validity-state-demo');
      const textarea = document.querySelector('#textarea-validity-state-demo');
      setTimeout(async() => { await renderValidityState() }, 0)
      textarea.addEventListener('odsChange', async () => {
        setTimeout(async() => { await renderValidityState() }, 0)
      })
      async function renderValidityState() {
        const validity = await textarea.getValidity()
        divValidityState.innerHTML = '';
        for (let key in validity) {
          divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
        }
      }
  })();
</script>
`,
};

