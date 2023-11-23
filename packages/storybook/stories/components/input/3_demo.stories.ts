import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-input';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/src/input/src/components/osds-input/constants/default-attributes';
import { html } from 'lit-html';
import { InputPlay } from './demo.validation.stories';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { ODS_ICON_NAMES, ODS_INPUT_TYPES } from '@ovhcloud/ods-components';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  type: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.type,
    options: ODS_INPUT_TYPES,
    control: { type: 'select' },
  },
  placeholder: {
    category: 'General',
    defaultValue: 'placeholder',
  },
  defaultValue: {
    category: 'General',
    defaultValue: '',
  },
  prefixValue: {
    category: 'General',
    defaultValue: '',
  },
  clearable: {
    category: 'General',
    defaultValue: false,
  },
  loading: {
    category: 'General',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  name: {
    category: 'Development',
    defaultValue: 'myInputNumber',
  },
  readonly: {
    category: 'Development',
    defaultValue: false,
  },
  required: {
    category: 'Development',
    defaultValue: false,
  },
  masked: {
    category: 'Development',
    defaultValue: true,
  },
  min: {
    category: 'Development',
    control: { type: 'number' },
  },
  max: {
    category: 'Development',
    control: { type: 'number' },
  },
  step: {
    category: 'Development',
    control: { type: 'number' },
  },
  forbiddenValues: {
    category: 'Development',
    defaultValue: [],
    control: { type: 'array' },
  },
  pattern: {
    category: 'General',
    control: { type: 'text' },
  },
};

export default {
  title: 'ODS Components/Form/Input [atom]/Demo',
  id: 'input',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const OsdsInputDefault = (args: Record<string, unknown>) => html`
  <osds-input ...=${getTagAttributes(args)}>
  </osds-input>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsInputDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};

/* Input Validation */
const OsdsInputValidation = (args: Record<string, unknown>) => html`
  <article id="example-1">
    <osds-input id="input"  ...=${getTagAttributes(args)}>
    </osds-input>
    <span class="error-msg forbidden-value">Forbidden value</span>
    <span class="error-msg value-missing">Value required please</span>
    <span class="error-msg step-mismatch">Please insert a value by step 2, starting from 1</span>
    <span class="error-msg valid">Not valid</span>
  </article>
`;
const TemplateValidation = (args: Record<string, unknown>) => OsdsInputValidation(args);
export const Validation = TemplateValidation.bind({});
type ValidationProps = {
  args: Record<string, unknown>;
  play: () => Promise<void>;
};
(Validation as unknown as ValidationProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};
(Validation as unknown as ValidationProps).play = InputPlay;

/* All Inputs */

type Attributes = 'default' | 'clearable' | 'icon="ovh"' | 'clearable icon="ovh"' | 'value="ODS ahead"' | 'value="ODS ahead" masked' | 'loading' | 'loading icon="ovh"' | 'loading disabled' | 'loading disabled icon="ovh"';

const attributeList: Attributes[] = [
  'default', 'clearable', 'icon="ovh"', 'clearable icon="ovh"', 'value="ODS ahead"',
  'value="ODS ahead" masked', 'loading', 'loading icon="ovh"', 'loading disabled',
  'loading disabled icon="ovh"',
];

const createTable = (contrasted: boolean, headerList: readonly string[], itemMapper: (attribute: string) => string) => `
  <table>
    <thead>
      <tr>
        <td></td>
        ${headerList.map((header) => `<td style="padding:0.1em; ${contrasted && 'color: #ffffff;'}">${header}</td>`).join('')}
      </tr>
    </thead>
    <tbody>
      ${attributeList.map((attribute) =>
    `<tr>
          <td style="padding:0.1em;  ${contrasted && 'color: #ffffff;'}">${attribute}</td>
          ${itemMapper(attribute)}
        </tr>`,
  ).join('')}
    </tbody>
  </table>`;

const TemplateAll = () => html`
  <section style="margin-bottom: 3em; padding: 1em;">
    <h2>[types]</h2>
    ${unsafeHTML(createTable(false, ODS_INPUT_TYPES, (attribute) => ODS_INPUT_TYPES.map((type) =>
    `<td style="padding:0.1em">
        <osds-input type="${type}" placeholder="Enter ${type}..." ${attribute}></osds-input>
      </td>`).join(''),
  ))}
  </section>
  <section style="margin-bottom: 3em; padding: 1em;">
    <h2>[colors]</h2>
    ${unsafeHTML(createTable(false, ODS_THEME_COLOR_INTENTS, (attribute) => ODS_THEME_COLOR_INTENTS.map((color) =>
    `<td style="padding:0.1em;">
        <osds-input type="text" color="${color}" placeholder="Enter text..." ${attribute}></osds-input>
      </td>`).join(''),
  ))}
  </section>
  <section style="margin-bottom: 3em; background: #000e9c; padding: 1em;">
    <h2 style="color: #ffffff;">[contrasted]</h2>
    ${unsafeHTML(createTable(true, ODS_THEME_COLOR_INTENTS, (attribute) => ODS_THEME_COLOR_INTENTS.map((color) =>
    `<td style="padding:0.1em">
        <osds-input type="text" color="${color}" placeholder="Enter text..." ${attribute}></osds-input>
      </td>`).join(''),
  ))}
  </section>
`;

export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
