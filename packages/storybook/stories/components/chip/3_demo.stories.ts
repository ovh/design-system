import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_CHIP_SIZE, ODS_CHIP_SIZES, ODS_CHIP_VARIANT, ODS_CHIP_VARIANTS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-chip';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* common default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.info,
    options: [ODS_THEME_COLOR_INTENT.default, ODS_THEME_COLOR_INTENT.info, ODS_THEME_COLOR_INTENT.warning, ODS_THEME_COLOR_INTENT.success, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_CHIP_SIZE.md,
    options: ODS_CHIP_SIZES,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: ODS_CHIP_VARIANT.flat,
    options: ODS_CHIP_VARIANTS,
    control: { type: 'select' },
  },
  content: {
    category: 'Slot',
    defaultValue: 'Chip',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
};

const tagStoryParams = {
  selectable: {
    category: 'General',
    defaultValue: true,
  },
  removable: {
    category: 'General',
    defaultValue: true,
  },
};

export default {
  title: 'ODS Components/Content/Chip [atom]/Demo',
  id: 'chip',
  argTypes: extractArgTypes(storyParams)
};

/* Badge */
const TemplateAsBadge = (args:any) => {
  if(args.inline === 0) {
    delete args.inline;
  }
  return html`
    <osds-chip ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.content)}
    </osds-chip>
  `;
};
export const AsBadge = TemplateAsBadge.bind({});
// @ts-ignore
AsBadge.args = {
  ...extractStoryParams(storyParams),
};

/* Chip */
const TemplateAsTag = (args: any) => html`
  <osds-chip ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.content)}
  </osds-chip>
`;
export const AsTag = TemplateAsTag.bind({});
// @ts-ignore
AsTag.args = {
  ...extractStoryParams({ ...storyParams, ...tagStoryParams }),
};
// @ts-ignore
AsTag.argTypes = extractArgTypes(tagStoryParams);
