import { defineCustomElements } from '@ovhcloud/ods-components/medium/loader';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import {
  DEFAULT_ATTRIBUTE
} from '@ovhcloud/ods-component-medium/src/components/osds-medium/constants/default-attributes';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  alt: {
    category: 'General',
    defaultValue: 'OVHcloud logo',
  },
  src: {
    category: 'General',
    defaultValue: 'https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png',
  },
  height: {
    category: 'Size',
    defaultValue: DEFAULT_ATTRIBUTE.height,
    control: { type: 'number' },
  },
  width: {
    category: 'Size',
    defaultValue: 700,
    control: { type: 'number' },
  },
};

export default {
  title: 'ODS Components/Content/Medium [molecule]/Demo',
  id: 'medium',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => {
  return html`
    <osds-medium ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.mediumContent)}
    </osds-medium>
  `;
};

export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
