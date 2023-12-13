import { html } from 'lit-html';

import { getTagAttributes } from '../../../core/componentHTMLUtils';

const storyParams = {
  iso: 'fr',
  lazy: true,
  assetPath: 'custom-flags/',
};

// A flag example
const Template = (args: any) => html`
  <osds-flag ...=${getTagAttributes(args)}></osds-flag>
`;
export const CustomPath = Template.bind({});
// @ts-ignore
CustomPath.parameters = {
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
CustomPath.args = {
  ...storyParams,
};
