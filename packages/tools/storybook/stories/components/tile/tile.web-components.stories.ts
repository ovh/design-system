import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-stencil-tile/loader';
import { OdsTileSize, OdsTileSizeList, OdsTileVariant, OdsTileVariantList, olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-tile/CHANGELOG.md';
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
    defaultValue: OdsTileSize.md,
    options: OdsTileSizeList,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: OdsTileVariant.stroked,
    options: OdsTileVariantList,
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
  flex: {
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
  parameters: {
    notes: {
      API: iframe('/stencil-tile/modules/index.html'),
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
    { size: OdsTileSizeList },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>hoverable Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: OdsTileSizeList },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { hoverable: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>checked Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: OdsTileSizeList },
    { color: OdsThemeColorIntentList },
    defaultContent,
    { hoverable: true, checked: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>Disabled Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { size: OdsTileSizeList },
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
