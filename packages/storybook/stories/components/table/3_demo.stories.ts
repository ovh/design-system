import { ODS_TABLE_SIZE, ODS_TABLE_SIZES, ODS_TABLE_VARIANT, ODS_TABLE_VARIANTS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-table';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

const variants = {
  default: '',
  striped: ODS_TABLE_VARIANT.striped,
} as const;

/* Demo story parameters  */
const storyParams = {
  size: {
    category: 'General',
    control: { type: 'select' },
    defaultValue: ODS_TABLE_SIZE.md,
    options: ODS_TABLE_SIZES,
  },
  tableContent: {
    category: 'Slot',
    defaultValue: '\n' +
      '    <table>\n' +
      '      <caption>\n' +
      '        Front-end web developer course 2021\n' +
      '      </caption>\n' +
      '      <thead>\n' +
      '      <tr>\n' +
      '        <th scope="col">Person</th>\n' +
      '        <th scope="col">Most interest in</th>\n' +
      '        <th scope="col">Age</th>\n' +
      '      </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '      <tr>\n' +
      '        <th scope="row">Chris</th>\n' +
      '        <td>HTML tables</td>\n' +
      '        <td>22</td>\n' +
      '      </tr>\n' +
      '      <tr>\n' +
      '        <th scope="row">Dennis</th>\n' +
      '        <td>Web accessibility</td>\n' +
      '        <td>45</td>\n' +
      '      </tr>\n' +
      '      <tr>\n' +
      '        <th scope="row">Sarah</th>\n' +
      '        <td>JavaScript frameworks</td>\n' +
      '        <td>29</td>\n' +
      '      </tr>\n' +
      '      <tr>\n' +
      '        <th scope="row">Karen</th>\n' +
      '        <td>Web performance</td>\n' +
      '        <td>36</td>\n' +
      '      </tr>\n' +
      '      </tbody>\n' +
      '    </table>',
  },
  variant: {
    category: 'Misc',
    control: { type: 'select' },
    defaultValue: variants.default,
    options: variants,
  },
};

export default {
  title: 'ODS Components/Layout/Table [organism]/Demo',
  id: 'table',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDemo = (args: any) => {
  return html`
    <osds-table ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.tableContent)}
    </osds-table>
  `;
};

export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
