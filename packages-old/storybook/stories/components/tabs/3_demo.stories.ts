import { defineCustomElement as defineTabs } from '@ovhcloud/ods-components/dist/components/osds-tabs';
import { defineCustomElement as defineTabBar } from '@ovhcloud/ods-components/dist/components/osds-tab-bar';
import { defineCustomElement as defineTabBarItem } from '@ovhcloud/ods-components/dist/components/osds-tab-bar-item';
import { defineCustomElement as defineTabPanel } from '@ovhcloud/ods-components/dist/components/osds-tab-panel';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineTabs();
defineTabBar();
defineTabBarItem();
defineTabPanel();

/* Default story parameters  */
const storyParams = {
  panel: {
    category: 'General',
    options: {
      tab1: 'tab1',
      tab2: 'tab2',
    },
    control: { type: 'select' },
    defaultValue: 'tab2',
  },
  numberOfPanels: {
    category: 'General',
    description: 'Warning: numberOfPanels is not an attribute of Tabs. It is purely for Storybook rendering',
    defaultValue: 4,
    control: {
      type: 'range',
      min: 2,
      max: 6,
      step: 1,
    },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Navigation/Tabs [atom]/Demo',
  id: 'tabs',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = ({ numberOfPanels, ...args }) => {
  const tabItems = Array.from({ length: numberOfPanels }, (_, i) => i + 1).map((value) => html`
    <osds-tab-bar-item panel='tab${value}'>Tab ${value}</osds-tab-bar-item>
  `);

  const tabPanels = Array.from({ length: numberOfPanels }, (_, i) => i + 1).map((value) => html`
    <osds-tab-panel name='tab${value}'>Content for Tab ${value}</osds-tab-panel>
  `);

  return html`
  <div>
    <osds-tabs ...='${getTagAttributes(args)}' panel='${args.panel}'>
      <osds-tab-bar slot='top'>
        ${tabItems}
      </osds-tab-bar>
      ${tabPanels}
    </osds-tabs>
  </div>
`;
}
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
