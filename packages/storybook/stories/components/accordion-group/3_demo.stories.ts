import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-accordion-group';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  slot: {
    category: 'Slot',
    defaultValue: `
      <osds-accordion>
        <span slot="summary">Lorem ipsum</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar ornare augue,
        nec elementum lectus maximus vel.
      </osds-accordion>

      <osds-accordion>
        <span slot="summary">Suspendisse id justo neque</span>
        Suspendisse id justo neque. Sed lacinia condimentum justo, vel efficitur orci scelerisque
        at. In volutpat bibendum luctus.
      </osds-accordion>

      <osds-accordion>
        <span slot="summary">Vestibulum placerat</span>
        Vestibulum placerat neque vitae elit vulputate aliquam. Fusce et nisi quis tellus porttitor
        pharetra facilisis id arcu. Nulla mollis tortor sed pretium mollis.
      </osds-accordion>`,
  },
};

export default {
  title: 'ODS Components/Layout/Accordion Group [molecule]/Demo',
  id: 'accordion-group',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDemo = (args: any) => {
  const slot = args.slot;
  delete args.slot;

  return html`
    <osds-accordion-group ...=${getTagAttributes(args)}>
      ${unsafeHTML(slot)}
    </osds-accordion>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
