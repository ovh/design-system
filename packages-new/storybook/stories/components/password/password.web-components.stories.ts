import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { defineCustomElements } from '@ovhcloud/ods-components/password/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { ODS_INPUT_SIZES } from '@ovhcloud/ods-components/input';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/password/src/components/osds-password/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/password/CHANGELOG.md';
// @ts-ignore
import page from './password.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_INPUT_SIZES,
    control: { type: 'select' },
  },
  value: {
    category: 'Misc',
    control: { type: 'text' },
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
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  name: {
    category: 'Misc',
    defaultValue: 'my-password'
  },
  placeholder: {
    category: 'Misc',
    defaultValue: 'Just ODS being ahead!'
  },
  required: {
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
  title: 'UI Components/Password [molecule]/Web Component',
  id: 'password',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsPasswordDefault = (args: Record<string, unknown>) => html`
  <osds-password ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
  </osds-password>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsPasswordDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};

/* All table */

type Attributes = 'default' | 'clearable' | 'value="ODS ahead"' | 'value="ODS ahead" masked="false"' | 'loading'| 'loading disabled';

const attributeList: Attributes[] = [
  'default', 'clearable', 'value="ODS ahead"',
  'value="ODS ahead" masked="false"', 'loading', 'loading disabled'
];

const createTable = (contrasted: boolean, headerList: string[], itemMapper: (attribute: string) => string) => `
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
  <section style="margin-bottom: 3em; padding: 1em;" @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
    <h2>[colors]</h2>
    ${unsafeHTML(createTable(false, ODS_THEME_COLOR_INTENTS, (attribute) => ODS_THEME_COLOR_INTENTS.map(color =>
      `<td style="padding:0.1em;">
        <osds-password color="${color}" placeholder="Enter text..." ${attribute}></osds-password>
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
