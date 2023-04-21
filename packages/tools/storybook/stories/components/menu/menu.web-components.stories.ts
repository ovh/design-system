import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';


import { defineCustomElements } from '@ovhcloud/ods-stencil-menu/loader';

import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
import { config } from 'storybook-addon-xd-designs';
import changelog from '@ovhcloud/ods-stencil-menu/CHANGELOG.md';
import page from './menu.web-component.stories.page.mdx';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { odsMenuDefaultAttributes } from '@ovhcloud/ods-core';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: odsMenuDefaultAttributes.disabled,
  },
};

export default {
  title: 'UI Components/Menu [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-menu/modules/index.html'),
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
const TemplateDefault = (args: any) => html`
  <osds-menu ...=${getTagAttributes(args)}>
    <osds-button slot="menu-title" color="primary" variant="stroked">Action menu <osds-icon name='home' size='xs'></osds-icon></osds-button>
    <osds-menu-group>
      <osds-text>Group/Text 1</osds-text>
    </osds-menu-group>
    <osds-menu-item>
      <osds-button color="primary" size='sm' variant='ghost' flex><span slot="start">Action 1</span></osds-button>
    </osds-menu-item>
    <osds-menu-item>
      <osds-button color="primary" size='sm' variant='ghost' flex><span slot="start">Action 2</span></osds-button>
    </osds-menu-item>
    <osds-divider color="text" separator="true"></osds-divider>
    <osds-menu-group>
      <osds-text>Group/Text 2</osds-text>
    </osds-menu-group>
    <osds-menu-item>
      <osds-button color="primary" size='sm' variant='ghost' flex><span slot="start">Action 1 showing an ellipsis if content is longer than max-width</span></osds-button>
    </osds-menu-item>
    <osds-menu-item>
      <osds-button color="primary" size='sm' variant='ghost' flex disabled><span slot="start">Action 2</span></osds-button>
    </osds-menu-item>
  </osds-menu>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
