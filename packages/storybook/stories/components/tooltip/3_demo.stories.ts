import { ODS_TOOLTIP_VARIANT, ODS_TOOLTIP_VARIANTS } from '@ovhcloud/ods-components';
import { applyContentText, positionParams } from '../../../core/commonPositionStoryParams';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-tooltip';
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  variant: {
    category: 'General',
    control: { type: 'select' },
    defaultValue: ODS_TOOLTIP_VARIANT.standard,
    options: ODS_TOOLTIP_VARIANTS,
  },
  content: {
    category: 'General',
    defaultValue: 'Tooltip content',
  },
};

export default {
  title: 'ODS Components/User feedback/Tooltip [atom]/Demo',
  id: 'tooltip',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-tooltip ...=${getTagAttributes(args)}>
      <osds-tooltip-content slot="tooltip-content">
        ${args.content}
      </osds-tooltip-content>
      <p style='font-family: "Source Sans Pro", sans-serif;'>Hover me</p>
    </osds-tooltip>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

/* Position */
const TemplatePosition = ({ ...args }) => {
  return html`
  <style>
    #alignment {
      display: flex;
      height: 100vh;
      flex-wrap: wrap;
    }
  </style>

  <div id='alignment' style=${styleMap({ placeContent: args.changeAlignment })}>
    <p>${args.applyContent ? applyContentText : ''}</p>
    <osds-tooltip ...=${getTagAttributes(args)}, dir="${args.applyDirection}">
      <osds-tooltip-content slot="tooltip-content">
        ${args.content}
      </osds-tooltip-content>
      Hover me
    </osds-tooltip>
    <p>${args.applyContent ? applyContentText : ''}</p>
  </div>
`;
}
export const Position = TemplatePosition.bind({});
// @ts-ignore
Position.args = {
  ...extractStoryParams({ ...storyParams, ...positionParams }),
};
// @ts-ignore
Position.argTypes = extractArgTypes(positionParams);
