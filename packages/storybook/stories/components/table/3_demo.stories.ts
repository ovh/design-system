import {
  DEFAULT_ATTRIBUTE
} from '@ovhcloud/ods-component-table/src/components/osds-table/constants/default-attributes';
import { ODS_TABLE_SIZES } from '@ovhcloud/ods-component-table/src/components/osds-table/constants/table-size';
import { ODS_TABLE_VARIANTS } from '@ovhcloud/ods-component-table/src/components/osds-table/constants/table-variant';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-table';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  size: {
    category: 'Size',
    control: { type: 'select' },
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_TABLE_SIZES,
  },
  variant: {
    category: 'Variants',
    control: { type: 'select' },
    defaultValue: DEFAULT_ATTRIBUTE.variant,
    options: ODS_TABLE_VARIANTS,
  },
};

export default {
  title: 'ODS Components/Content/Table [organism]/Demo',
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
