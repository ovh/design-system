import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-collapsible';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

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
  title: 'ODS Components/Layout/Collapsible [meta]/Demo',
  id: 'collapsible',
  argTypes: extractArgTypes(storyParams)
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
};const TemplateTrigger = (args: any) => html`
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
