import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-collapsible/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-collapsible/CHANGELOG.md';
import page from './collapsible.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  opened: {
    category: 'Général',
    defaultValue: false,
  },
  collapsibleContent: {
    category: 'Slot',
    defaultValue: 'Collapsible content'
  },
};

export default {
  title: 'Meta Components/Collapsible [meta]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-collapsible/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args: any) => {
  return html`
    <osds-collapsible ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.collapsibleContent)}
    </osds-collapsible>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};


const TemplateTrigger = (args: any) => html`
  <script>
    var elem = document.getElementById('collapsible');
    elem.addEventListener('odsCollapsibleToggle', event => {
      console.log('(html) addEventListener odsCollapsibleToggle: ', event.detail);
    });

    var button = document.getElementById('buttonTriggerCollapsible')
    button.addEventListener('click', event => {
      elem.opened = !elem.opened;
    });
  </script>

  <osds-button id="buttonTriggerCollapsible">Trigger collapsible</osds-button>

  <osds-collapsible id="collapsible" ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.collapsibleContent)}
  </osds-collapsible>
`;
export const Trigger = TemplateTrigger.bind({});
Trigger.args = {
...extractStoryParams(storyParams),
};
