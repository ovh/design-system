import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { ODS_INPUT_SIZES, ODS_INPUT_TYPES } from '@ovhcloud/ods-component-input';
import { defineCustomElements } from '@ovhcloud/ods-component-input/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-component-input/src/components/osds-input/constants/default-attributes';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { InputPlay } from './input.web-components.validation.stories';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-input/CHANGELOG.md';
// @ts-ignore
import page from './input.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  type: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.type,
    options: ODS_INPUT_TYPES,
    control: { type: 'select' },
  },
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_INPUT_SIZES,
    control: { type: 'select' },
  },
  inline: {
    category: 'Misc',
    defaultValue: false,
  },
  clearable: {
    category: 'Misc',
    defaultValue: false,
  },
  loading: {
    category: 'Misc',
    defaultValue: false,
  },
  masked: {
    category: 'Misc',
    defaultValue: true,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  defaultValue: {
    category: 'Misc',
    control: { type: 'number' },
  },
  value: {
    category: 'Misc',
    control: { type: 'number' },
  },
  min: {
    category: 'Misc',
    control: { type: 'number' },
  },
  max: {
    category: 'Misc',
    control: { type: 'number' },
  },
  step: {
    category: 'Misc',
    control: { type: 'number' },
  },
  name: {
    category: 'Misc',
    defaultValue: 'myInputNumber'
  },
  placeholder: {
    category: 'Misc',
    defaultValue: 'placeholder'
  },
  icon: {
    category: 'Misc',
    defaultValue: ''
  },
  required: {
    category: 'Misc',
    defaultValue: false,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  forbiddenValues: {
    category: 'Misc',
    defaultValue: [],
    control: { type: 'array' },
  },
};

export default {
  title: 'UI Components/Input [atom]/Web Component',
  id: 'input',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
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
  'loading disabled icon="ovh"'
];

const createTable = (contrasted: boolean, headerList: readonly string[], itemMapper: (attribute: string) => string) => `
  <table>
    <thead>
      <tr>
        <td></td>
        ${headerList.map(header => `<td style="padding:0.1em; ${contrasted && "color: #ffffff;"}">${header}</td>`).join('')}
      </tr>
    </thead>
    <tbody>
      ${attributeList.map(attribute =>
        `<tr>
          <td style="padding:0.1em;  ${contrasted && 'color: #ffffff;'}">${attribute}</td>
          ${itemMapper(attribute)}
        </tr>`
      ).join('')}
    </tbody>
  </table>`;

const TemplateAll = () => html`
  <section style="margin-bottom: 3em; padding: 1em;">
    <h2>[types]</h2>
    ${unsafeHTML(createTable(false, ODS_INPUT_TYPES, (attribute) => ODS_INPUT_TYPES.map(type =>
      `<td style="padding:0.1em">
        <osds-input type="${type}" placeholder="Enter ${type}..." ${attribute}></osds-input>
      </td>`).join('')
    ))}
  </section>
  <section style="margin-bottom: 3em; padding: 1em;">
    <h2>[colors]</h2>
    ${unsafeHTML(createTable(false, OdsThemeColorIntentList, (attribute) => OdsThemeColorIntentList.map(color =>
      `<td style="padding:0.1em;">
        <osds-input type="text" color="${color}" placeholder="Enter text..." ${attribute}></osds-input>
      </td>`).join('')
    ))}
  </section>
  <section style="margin-bottom: 3em; background: #000e9c; padding: 1em;">
    <h2 style="color: #ffffff;">[contrasted]</h2>
    ${unsafeHTML(createTable(true, OdsThemeColorIntentList, (attribute) => OdsThemeColorIntentList.map(color =>
      `<td style="padding:0.1em">
        <osds-input type="text" color="${color}" placeholder="Enter text..." ${attribute}></osds-input>
      </td>`).join('')
    ))}
  </section>
`;

export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
