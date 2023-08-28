import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-component-modal/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-component-modal/src/components/osds-modal/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-modal/CHANGELOG.md';
// @ts-ignore
import page from './modal.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  dismissible: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.dismissible,
  },
  headline: {
    category: 'General',
    defaultValue: 'On Vous Héberge ?',
  },
  masked: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.masked,
  },
  content: {
    category: 'Slot',
    defaultValue: `<osds-text color="text">OVHcloud, anciennement OVH, est une entreprise française. Elle pratique initialement de l'hébergement de serveur, et est un fournisseur d'accès à Internet (FAI), puis opérateur de télécommunications pour les entreprises. Elle se développe, à la fin des années 2010, dans le cloud computing (informatique en nuage).</osds-text>`,
  },
  actions: {
    category: 'Slot',
    defaultValue: `<osds-button slot="actions" color="default" href="https://www.ovh.com/fr/" target="_blank">En savoir plus</osds-button>
<osds-button slot="actions" color="primary" href="https://www.ovh.com/fr/" target="_blank">On m'héberge</osds-button>`,
  },
};

export default {
  title: 'UI Components/Modal [molecule]/Web Component',
  id: 'modal',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

const TemplateDefault = (args:any) => {
  const handleOpenModal = () => {
    const modal = document.querySelector('osds-modal');
    if (modal) {
      modal.open();
    }
  }

  const handleCloseModal = () => {
    const modal = document.querySelector('osds-modal');
    if (modal) {
      modal.close();
    }
  }

  return html`
    <button @click=${handleOpenModal}>Trigger "open()"</button>
    <button @click=${handleCloseModal}>Trigger "close()"</button>

    <osds-modal id="my-modal" ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.content)}
      ${unsafeHTML(args.actions)}
    </osds-modal>
  `;
}

export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
