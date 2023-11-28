import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_TILE_SIZE, ODS_TILE_SIZES, ODS_TILE_VARIANT, ODS_TILE_VARIANTS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-tile';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.default, ODS_THEME_COLOR_INTENT.primary],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_TILE_SIZE.md,
    options: ODS_TILE_SIZES,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: ODS_TILE_VARIANT.stroked,
    options: ODS_TILE_VARIANTS,
    control: { type: 'select' },
  },
  start: {
    category: 'Slot',
    defaultValue: '',
  },
  tileContent: {
    category: 'Slot',
    defaultValue: 'Tile',
  },
  end: {
    category: 'Slot',
    defaultValue: '',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: false,
  },
  rounded: {
    category: 'Misc',
    defaultValue: true,
  },
  checked: {
    category: 'Misc',
    defaultValue: false,
  },
  checking: {
    category: 'Development',
    defaultValue: false,
  },
  loading: {
    category: 'Development',
    defaultValue: false,
  },
  hoverable: {
    category: 'Development',
    defaultValue: false,
  },
  hasFocus: {
    category: 'Development',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Layout/Tile [atom]/Demo',
  id: 'tile',
};

// A tile example
const TemplateDemo = (args: any) => {
  if (args.inline === 0) {
    delete args.inline;
  }
  return html`
    <div class='tile-container'>
      <osds-tile ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span>${unsafeHTML(args.tileContent || 'Lorem ipsum dolor sit amet')}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-tile>
    </div>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
// @ts-ignore
Demo.argTypes = extractArgTypes(storyParams);
