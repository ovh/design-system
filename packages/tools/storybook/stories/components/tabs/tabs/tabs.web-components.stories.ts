import { html } from 'lit-html';
import { iframe } from '../../../../.storybook/iframe';
import { defineCustomElements } from '@ovhcloud/ods-stencil-tabs/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../../core/componentHTMLUtils';
import changelog from '@ovhcloud/ods-stencil-tabs/CHANGELOG.md';
import page from './tabs.web-component.stories.page.mdx';
import { OdsTabsSize, odsTabsSizeList } from '@ovhcloud/ods-core';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  panel: {
    category: 'osds-tabs',
    options: {
      rise: 'rise',
      advance: 'advance',
      scale: 'scale',
      high: 'high',
      storage: 'storage',
      game: 'game',
    },
    control: { type: 'select' },
    defaultValue: 'rise',
  },
  size: {
    category: 'osds-tabs',
    options: odsTabsSizeList,
    control: { type: 'select' },
    defaultValue: OdsTabsSize.md,
  },
  contrasted: {
    category: 'osds-tabs',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Tabs [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-components-tabs/modules/index.html'),
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

/* Story options */

/* Default */
const TemplateDefault = (args: any) => html`
  <div>
    <osds-tabs ...='${getTagAttributes(args)}' panel='rise'>
      <osds-tab-bar slot='top'>
        <osds-tab-bar-item panel='rise'>Rise</osds-tab-bar-item>
        <osds-tab-bar-item panel='advance'>Advance</osds-tab-bar-item>
        <osds-tab-bar-item panel='scale'> Scale</osds-tab-bar-item>
        <osds-tab-bar-item panel='high'>High Grade</osds-tab-bar-item>
        <osds-tab-bar-item panel='storage'>Storage</osds-tab-bar-item>
        <osds-tab-bar-item panel='game'>Game</osds-tab-bar-item>
      </osds-tab-bar>
      <osds-tab-panel name='rise'>Les serveurs les plus abordables, adaptés à la plupart des usages.</osds-tab-panel>
      <osds-tab-panel name='advance'>Des serveurs polyvalents pour les petites et moyennes entreprises.</osds-tab-panel>
      <osds-tab-panel name='scale'>Des serveurs conçus pour les infrastructures complexes à haute résilience.
      </osds-tab-panel>
      <osds-tab-panel name='high'>Les serveurs les plus puissants, optimisés pour les charges critiques.
      </osds-tab-panel>
      <osds-tab-panel name='storage'>Des serveurs pour l'archivage, la sauvegarde ou le stockage distribué.
      </osds-tab-panel>
      <osds-tab-panel name='game'>Des serveurs optimisés pour les jeux vidéo et les plateformes de streaming.
      </osds-tab-panel>
    </osds-tabs>
  </div>
`;
export const WebComponent = TemplateDefault.bind({});
WebComponent.args = {
  ...extractStoryParams(storyParams),
};
