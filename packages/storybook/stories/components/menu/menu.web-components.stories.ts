import {html} from 'lit-html';
import {defineCustomElements} from '@ovhcloud/ods-components/menu/loader';
import changelog from '@ovhcloud/ods-components/menu/CHANGELOG.md';
import page from './menu.web-component.stories.page.mdx';
import {extractArgTypes, extractStoryParams, getTagAttributes} from '../../../core/componentHTMLUtils';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Menu [atom]/Web Component',
  id: 'menu',
  parameters: {
    notes: {
      changelog,
    },
    docs: {page},
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
