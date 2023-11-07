import { Ods, odsSetup } from '@ovhcloud/ods-common-core';
import { defineCustomElements } from '@ovhcloud/ods-components/flag/loader';
import { html } from 'lit-html';
import { getTagAttributes } from '../../../core/componentHTMLUtils';

odsSetup();
Ods.instance().assetPath('flags/');

defineCustomElements();

export default {
  title: 'ODS Components/Content/Flag [atom]/Demo',
  id: 'flag',
};

const storyParams = {
  iso: 'fr',
  lazy: true,
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

const Play = async() => {
  Ods.instance().assetPath('flags/');
};

Default.play = Play;

export { CustomPath } from './demo.stories.custom-path';
export { All } from './demo.stories.all';
