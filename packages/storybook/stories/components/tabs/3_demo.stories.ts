import { ODS_TABS_SIZES } from '@ovhcloud/ods-components/tabs';
import { defineCustomElements } from '@ovhcloud/ods-components/tabs/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/tabs/src/components/osds-tabs/constants/default-attributes';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
    options: ODS_TABS_SIZES,
    control: { type: 'select' },
    defaultValue: DEFAULT_ATTRIBUTE.size,
  },
  contrasted: {
    category: 'osds-tabs',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Navigation/Tabs [atom]/Demo',
  id: 'tabs',
  argTypes: extractArgTypes(storyParams)
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
