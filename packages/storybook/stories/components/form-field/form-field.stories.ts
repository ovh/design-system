import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CONTROL_CATEGORY, orderControls } from '../../control';

const meta: Meta = {
  title: 'ODS Components/Form elements/Form Field',
  component: 'ods-form-field',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
  <ods-form-field error="${arg.error}">
    ${unsafeHTML(arg.label)}
    ${unsafeHTML(arg.visualHint)}
    ${unsafeHTML(arg.content)}
    ${unsafeHTML(arg.helper)}
  </ods-form-field>
  `,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    helper: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a helper text on the bottom-left corner of the field.',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a label on the top-left corner of the field.',
    },
    visualHint: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
      description: 'Set a visual hint on the bottom-right corner of the field.',
    },
  }),
  args: {
    error: '',
    label: '<ods-text slot="label" preset="label">Description</ods-text>',
    visualHint: '<ods-text slot="visual-hint" preset="span">0/100</ods-text>',
    content: '<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',
    helper: '<ods-text slot="helper" preset="span">A little helper text</ods-text>',
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-form-field error="Error message">
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-textarea placeholder="Placeholder" is-resizable="true"></ods-textarea>

  <ods-text slot="helper" preset="span">
    Helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/200
  </ods-text>
</ods-form-field>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>`,
};

export const Error: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field error="Wrong format">
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" class="my-label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>

<style>
  .my-label {
    color: #b63f81;
  }
</style>
  `,
};

export const Label: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>
  `,
};

export const LabelVisualHint: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `,
};

export const LabelVisualHintHelper: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `,
};

export const Tooltip: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <div slot="label">
    <ods-text preset="label">
      Description
    </ods-text>

    <ods-icon id="tooltip-trigger" name="circle-question"></ods-icon>
  </div>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-tooltip trigger-id="tooltip-trigger">
    0/100
  </ods-tooltip>
</ods-form-field>
  `,
};

export const Checkbox: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <div class="form-field__checkbox__field">
    <ods-checkbox input-id="checkbox-terms" name="name"></ods-checkbox>

    <label class="form-field__checkbox__field__label" for="checkbox-terms">
      I agree to the terms and conditions
    </label>
  </div>
</ods-form-field>

<style>
  .form-field__checkbox__field {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .form-field__checkbox__field__label {
    color: var(--ods-color-text);
  }
</style>
  `,
};

export const Datepicker: StoryObj = {
  tags: ['isHidden'],
  decorators: [(story) => html`<div style="height: 350px;">${story()}</div>`],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Start date
  </ods-text>

  <ods-datepicker id="form-field-datepicker-field"></ods-datepicker>

  <script>
    (() => {
      const datepicker = document.querySelector('#form-field-datepicker-field');
      datepicker.value = new Date();
    })();
  </script>
</ods-form-field>
  `,
};

export const Input: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Name
  </ods-text>

  <ods-input placeholder="John"></ods-input>
</ods-form-field>
  `,
};

export const Password: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Password
  </ods-text>

  <ods-password placeholder="Password" is-clearable></ods-password>
</ods-form-field>
  `,
};

export const PhoneNumber: StoryObj = {
  tags: ['isHidden'],
  decorators: [(story) => html`<div style="height: 250px;">${story()}</div>`],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Phone number
  </ods-text>

  <ods-phone-number countries="all" is-clearable></ods-phone-number>
</ods-form-field>
  `,
};

export const Quantity: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Number of CPUs
  </ods-text>

  <ods-quantity min="0" max="10" value="0"></ods-quantity>
</ods-form-field>
  `,
};

export const Radio: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Output file format
  </ods-text>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-text-format" name="file-format" value="text-format" is-checked></ods-radio>

    <label class="form-field__radio__field__label" for="radio-text-format">
      Text
    </label>
  </div>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-csv-format" name="file-format" value="csv-format"></ods-radio>

    <label class="form-field__radio__field__label" for="radio-csv-format">
      CSV
    </label>
  </div>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-html-format" name="file-format" value="html-format"></ods-radio>

    <label class="form-field__radio__field__label" for="radio-html-format">
      HTML
    </label>
  </div>

</ods-form-field>
<style>
  .form-field__radio__field {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .form-field__radio__field__label {
    color: var(--ods-color-text);
  }
</style>
  `,
};

export const Range: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <div slot="label">
    <ods-text preset="label">
      Price range
    </ods-text>

    <ods-text class="form-field__range__sub-label" preset="span">
      Selected values : <span id="range-min-bound">0</span> - <span id="range-max-bound">0</span>€
    </ods-text>
  </div>

  <ods-range step="10" id="form-field-range-field"></ods-range>

  <script>
    (() => {
      const rangeDualStep = document.querySelector('#form-field-range-field');
      const minBound = document.querySelector('#range-min-bound');
      const maxBound = document.querySelector('#range-max-bound');

      const updateBounds = () => {
        minBound.textContent = rangeDualStep.value[0];
        maxBound.textContent = rangeDualStep.value[1];
      };

      rangeDualStep.value = [30, 70];
      updateBounds();

      rangeDualStep.addEventListener('odsChange', updateBounds);
    })()
  </script>
</ods-form-field>

<style>
  .form-field__range__sub-label {
    display: block;
  }

  .form-field__range__sub-label::part(text) {
    color: var(--ods-color-text);
    font-size: 12px;
  }
</style>
  `,
};

export const Select: StoryObj = {
  tags: ['isHidden'],
  decorators: [(story) => html`<div style="height: 150px;">${story()}</div>`],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Select a Web hosting
  </ods-text>

  <ods-select class="form-field__select__field" placeholder="Select">
    <option value="hosting-1">1 vCore 2,4 GHz, 2 Go RAM</option>
    <option value="hosting-2">1 vCore 2,4 GHz, 4 Go RAM</option>
    <option value="hosting-3">2 vCores 2,4 GHz, 8 Go RAM</option>
  </ods-select>
</ods-form-field>

<style>
  .form-field__select__field {
    width: 250px;
  }
</style>
  `,
};

export const Switch: StoryObj = {
  tags: ['isHidden'],
  decorators: [(story) => html`<div style="height: 150px;">${story()}</div>`],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Preferred Operating System
  </ods-text>

  <ods-switch>
    <ods-switch-item value="windows" is-checked>Windows</ods-switch-item>
    <ods-switch-item value="macos">macOS</ods-switch-item>
    <ods-switch-item value="linux">Linux</ods-switch-item>
  </ods-switch>
</ods-form-field>
  `,
};

export const Textarea: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field id="form-field-textarea">
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    <span id="textarea-character-count">0</span>/<span id="textarea-max-characters">0</span>
  </ods-text>

  <ods-textarea id="form-field-textarea-field" placeholder="Placeholder" is-resizable="true"></ods-textarea>
</ods-form-field>

<script>
  (() => {
    const MAX_CHARACTERS = 200;
    const formFieldElement = document.querySelector('#form-field-textarea');
    const textareaElement = document.querySelector('#form-field-textarea-field');
    const characterCountElement = document.querySelector('#textarea-character-count');
    const maxCharactersElement = document.querySelector('#textarea-max-characters');
    let characterCount = 0;

    characterCountElement.textContent = characterCount.toString();
    maxCharactersElement.textContent = MAX_CHARACTERS.toString();

    const updateCharacterCount = (event) => {
      characterCount = event.target.value.length;
      characterCountElement.textContent = characterCount.toString();

      if (characterCount > MAX_CHARACTERS) {
        textareaElement.hasError = true;
        formFieldElement.error = "Max number of characters exceeded";
      } else {
        textareaElement.removeAttribute("has-error");
        formFieldElement.removeAttribute("error");
      }
    };

    textareaElement.addEventListener('odsChange', updateCharacterCount);
  })();
</script>
  `,
};

export const Timepicker: StoryObj = {
  tags: ['isHidden'],
  decorators: [(story) => html`<div style="height: 250px;">${story()}</div>`],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Starting time
  </ods-text>

  <ods-timepicker id="form-field-timepicker-field" timezones="all" with-seconds></ods-timepicker>

  <script>
    (() => {
      const timepicker = document.querySelector('#form-field-timepicker-field');
      timepicker.value = new Date().toLocaleTimeString('fr-FR');
    })();
  </script>
</ods-form-field>
  `,
};

export const Toggle: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Multi-AZ mode
  </ods-text>

  <ods-toggle with-label></ods-toggle>
</ods-form-field>
  `,
};
