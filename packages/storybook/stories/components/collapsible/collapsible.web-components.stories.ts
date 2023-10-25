import changelog from '@ovhcloud/ods-components/collapsible/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-components/collapsible/loader';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import page from './collapsible.web-component.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  opened: {
    category: 'Général',
    defaultValue: false,
  },
  collapsibleContent: {
    category: 'Slot',
    defaultValue: 'Collapsible content',
  },
};

export default {
  title: 'Meta Components/Collapsible [meta]/Web Component',
  id: 'collapsible',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => {
  return html`
    <osds-collapsible ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.collapsibleContent)}
    </osds-collapsible>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
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
// @ts-ignore
Trigger.args = {
  ...extractStoryParams(storyParams),
};
