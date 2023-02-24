import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-flag/loader';

import { odsSetup, Ods } from '@ovhcloud/ods-core';
import changelog from '@ovhcloud/ods-stencil-flag/CHANGELOG.md';
import page from './flag.web-component.stories.page.mdx';
import { getTagAttributes } from '../../../core/componentHTMLUtils';

odsSetup();
Ods.instance().assetPath('flags/');

defineCustomElements();

export default {
  title: 'UI Components/Flag [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-components-flag/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
};

const storyParams = {
  iso: 'fr',
  lazy: true
};

// A flag example
const TemplateDefault = (args: any) => html`
  <osds-flag ...=${getTagAttributes(args)}></osds-flag>
`;
 export const Default = TemplateDefault.bind({});
Default.parameters = {
  viewport: {
    viewports: {
      smallContainer: {
        name: 'Small Container',
        styles: {
          width: '460px',
          height: '100%',
        },
        type: 'desktop',
      },
    },
    defaultViewport: 'smallContainer',
  },
};
Default.args = {
  ...storyParams,
};

const Play = async () => {
  Ods.instance().assetPath('flags/');
};

Default.play = Play;

export {CustomPath} from './flag.web-components.stories.custom-path';
export {All} from './flag.web-components.stories.all';
