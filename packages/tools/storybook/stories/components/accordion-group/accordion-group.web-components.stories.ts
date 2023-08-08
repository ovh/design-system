import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { defineCustomElements } from '@ovhcloud/ods-component-accordion/loader';
import { html } from 'lit-html';
import page from './accordion-group.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElements();

/* Default story parameters  */
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
  }
};

export default {
  title: 'UI Components/Accordion Group [molecule]/Web Component',
  id: 'accordion-group',
  parameters: {
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => {
  const slot = args.slot;
  delete args.slot;

  return html`
    <osds-accordion-group ...=${getTagAttributes(args)}>
      ${unsafeHTML(slot)}
    </osds-accordion>
  `;
};
export const WebComponent = TemplateDefault.bind({});
WebComponent.args = {
  ...extractStoryParams(storyParams),
};
