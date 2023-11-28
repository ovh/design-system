import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_NAMES, ODS_ICON_SIZE, ODS_ICON_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-icon';
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_ICON_SIZE.md,
    options: ODS_ICON_SIZES,
    control: { type: 'select' },
  },
  name: {
    category: 'General',
    defaultValue: 'home',
    control: { type: 'select' },
    options: ODS_ICON_NAME,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  ariaName: {
    category: 'Development',
    defaultValue: 'Home icon',
  },
  hoverable: {
    category: 'Development',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Content/Icon [quark]/Demo',
  id: 'icon',
  argTypes: extractArgTypes(storyParams)
};

// A icon example
const TemplateDefault = (args: any) => html`
<div class='icon-container'>
  <osds-icon ...=${getTagAttributes(args)}>
  </osds-icon>
</div>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

const iconTemplate = (i:string) => html`
  <span class='table-cell' style='width: 8em; margin: .5em auto'>
    <osds-icon name='${i}' color='primary' size='lg'></osds-icon>
    <div style='font-size: .8rem; margin-top: .5em'>${i}</div>
  </span>`;

const TemplateAll = () => html`
<style>
.table {
  margin: 1em auto;
}
.table-row {
  display: flex;
  margin: .5em auto;
  align-items: center;
}
.table-cell {
  display: inline-flex;
  width: 6em;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
</style>

<span class='table'>
${repeat(ODS_ICON_NAMES, (i) => iconTemplate(i))}
</span>
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
