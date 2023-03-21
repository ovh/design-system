import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-pagination/loader';

import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
import { config } from 'storybook-addon-xd-designs';
import changelog from '@ovhcloud/ods-stencil-pagination/CHANGELOG.md';
import page from './pagination.web-component.stories.page.mdx';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { odsPaginationDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.disabled,
  },
};

export default {
  title: 'UI Components/Pagination [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-pagination/modules/index.html'),
      changelog,
    },
    docs: { page },
    design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/de3e2df7-15a7-4d3b-a452-b3bdfdc28911/Desktop',
    } as XDConfig),
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => html` <osds-pagination ...=${getTagAttributes(args)}> </osds-pagination> `;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/* Multi group */
const TemplateMultiGroup = (args: any) => html` <osds-pagination ...=${getTagAttributes(args)}> </osds-pagination> `;
export const MultiGroup = TemplateMultiGroup.bind({});
MultiGroup.args = {
  ...extractStoryParams(storyParams),
};
