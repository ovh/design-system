import { Ods, odsSetup } from '@ovhcloud/ods-common-core';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-flag';
import { html } from 'lit-html';
import { getTagAttributes } from '../../../core/componentHTMLUtils';

odsSetup();
Ods.instance().assetPath('flags/');

defineCustomElement();

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
// @ts-ignore
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
// @ts-ignore
Default.args = {
  ...storyParams,
};

const Play = async() => {
  Ods.instance().assetPath('flags/');
};

// @ts-ignore
Default.play = Play;

export { CustomPath } from './demo.stories.custom-path';
export { All } from './demo.stories.all';
