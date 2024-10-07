import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

const meta: Meta = {
  title: 'ODS Components/Form elements/Password',
  component: 'ods-password',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => {
    const validityStateTemplate = html`<br>
    <div id="validity-state-password" style="display: grid; row-gap: 5px;"></div>
    <script>
      (() => {
          const divValidityState = document.querySelector('#validity-state-password');
          const password = document.querySelector('.my-password');
          renderValidityState();
          password.addEventListener('odsChange', () => {
            renderValidityState();
          })
          function renderValidityState() {
            password.getValidity().then((validity) => {
              divValidityState.innerHTML = '';
              for (let key in validity) {
                divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
              }
            });
          }
      })();
    </script>`;
    return html`
    <ods-password class="my-password"
      ariaLabel="${arg.ariaLabel}"
      ariaLabelledby="${arg.ariaLabelledby}"
      has-error="${arg.hasError}"
      is-clearable="${arg.isClearable}"
      is-disabled="${arg.isDisabled}"
      is-loading="${arg.isLoading}"
      is-readonly="${arg.isReadonly}"
      pattern="${arg.pattern}"
      placeholder="${arg.placeholder}">
      </ods-password>
    <style>
    ${ arg.validityState ? validityStateTemplate : '' }
    .my-password::part(input) {
      ${arg.customCss}
    }
    </style>
    `;
  },
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
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "border-color: red;"',
    },
    hasError: {
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
    isRequired: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    pattern: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
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
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
  args: {
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
    isRequired: false,
    validityState: false,
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-password placeholder="Password"></ods-password>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password></ods-password>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password is-disabled>
</ods-password>
  `,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password has-error>
</ods-password>
  `,
};

export const Clearable: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password is-clearable value="value">
</ods-password>
  `,
};

export const Loading: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password is-loading>
</ods-password>
  `,
};

export const Readonly: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password is-readonly value="Readonly">
</ods-password>
  `,
};

export const Placeholder: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password placeholder="Placeholder">
</ods-password>
  `,
};

export const Pattern: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password id="my-password-pattern" pattern="\\d*">
</ods-password>
<script>
(() => {
  const passwordPattern = document.getElementById('my-password-pattern');
  passwordPattern.addEventListener('odsChange', (event) => {
    passwordPattern.hasError = !event.detail.validity.valid;
  });
})();
</script>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password class="my-password">
</ods-password>
<style>
  .my-password::part(input) {
    width: 100px;
  }
</style>
  `,
};

export const ValidityState: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-password is-required id="password-validity-state-demo">
</ods-password>
<div id="validity-state-demo"></div>
<script>
  (async() => {
      const divValidityState = document.querySelector('#validity-state-demo');
      const password = document.querySelector('#password-validity-state-demo');
      setTimeout(async() => { await renderValidityState() }, 0)
      password.addEventListener('odsChange', () => {
        setTimeout(async() => { await renderValidityState() }, 0)
      })
      async function renderValidityState() {
        const validity = await password.getValidity();
        divValidityState.innerHTML = '';
        for (let key in validity) {
          divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
        }
      }
  })();
</script>
`,
};
