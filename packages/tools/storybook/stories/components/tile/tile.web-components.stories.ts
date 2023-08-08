import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-component-tile/loader';
import { ODS_TILE_SIZE, ODS_TILE_SIZES, ODS_TILE_VARIANT, ODS_TILE_VARIANTS } from '@ovhcloud/ods-component-tile';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-tile/CHANGELOG.md';
// @ts-ignore
import page from './tile.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
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
    defaultValue: ''
  },
  tileContent: {
    category: 'Slot',
    defaultValue: ''
  },
  end: {
    category: 'Slot',
    defaultValue: ''
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  disabled: {
    category: 'Misc',
    defaultValue: false
  },
  inline: {
    category: 'Misc',
    defaultValue: false
  },
  rounded: {
    category: 'Misc',
    defaultValue: true
  },
  hoverable: {
    category: 'Misc',
    defaultValue: false
  },
  checked: {
    category: 'Misc',
    defaultValue: false
  },
  checking: {
    category: 'Misc',
    defaultValue: false
  },
};

export default {
  title: 'UI Components/Tile [atom]/Web Component',
  id: 'tile',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  }
};

// A tile example
const TemplateDefault = (args: any) => {
  if (args.flex === 0) {
    delete args.flex;
  }
  return html`
    <div class='tile-container'>
      <osds-tile ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span>${unsafeHTML(args.tileContent || olesIpsum(OlesIpsumGeneration.words, 5))}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-tile>
    </div>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
Default.argTypes = extractArgTypes(storyParams);

const defaultTag = 'osds-tile';
const defaultContent = olesIpsum(OlesIpsumGeneration.words, 5);

const TemplateAll = (args: any) => html`
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
      width: 8rem;
      align-items: center;
      justify-content: center;
    }
  </style>

  <h1>Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_TILE_VARIANTS },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>hoverable Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_TILE_SIZES },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { hoverable: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>checked Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_TILE_SIZES },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { hoverable: true, checked: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>Disabled Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_TILE_SIZES },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { disabled: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
`;


const storyParamsAll = {
  checking: {
    category: 'Misc',
    defaultValue: true
  },
};

export const All = TemplateAll.bind({});
All.args = {
  ...extractStoryParams(storyParamsAll),
};
All.argTypes = extractArgTypes(storyParamsAll);

export { UpdateStrategy } from './tile.web-components.stories.update-strategy';
