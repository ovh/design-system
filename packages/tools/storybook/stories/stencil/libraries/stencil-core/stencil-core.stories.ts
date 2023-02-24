import { html } from 'lit-html';
import page from './stencil-core.mdx';
import changelog from '@ovhcloud/ods-stencil/libraries/stencil-core/CHANGELOG.md';
import { iframe } from '../../../../.storybook/iframe';

export default {
  title: "Code/Stencil/Libraries/Core/default",
  parameters: {
    notes: {
      API: iframe('stencil-libraries-stencil-core/modules/index.html'),
      changelog
    },
    docs: { page },
  },
};

const LoadStory = () => {

  return html`

    <p>Nothing here :)</p>

  `;
};

const Template = () => LoadStory();

export const Demo = Template.bind({});
Demo.args = {};

