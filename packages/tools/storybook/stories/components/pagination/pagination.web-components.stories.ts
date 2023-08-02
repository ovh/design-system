import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import { defineCustomElements } from '@ovhcloud/ods-stencil-pagination/loader';
import changelog from '@ovhcloud/ods-stencil-pagination/CHANGELOG.md';
import page from './pagination.web-component.stories.page.mdx';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { odsPaginationDefaultAttributes } from '@ovhcloud/ods-core';

defineCustomElements();

const sharedStoryParam = {
  current: {
    category: 'General',
    defaultValue: 5,
  },
  disabled: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.disabled,
  },
  labelTooltipPrevious: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.labelTooltipPrevious,
  },
  labelTooltipNext: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.labelTooltipNext,
  }
}

const totalItemsParam = {
  totalItems: {
    category: 'General',
    defaultValue: 60,
  },
};

const totalPagesParam = {
  totalPages: {
    category: 'General',
    defaultValue: 21,
  },
};

export default {
  title: 'UI Components/Pagination [molecule]/Web Component',
  id: 'pagination',
  parameters: {
    notes: {
      API: iframe('stencil-pagination/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes({ ...sharedStoryParam, ...totalPagesParam, ...totalItemsParam }),
};

/* Default */
const TemplateDefault = (args: any) => html` <osds-pagination ...=${getTagAttributes(args)}> </osds-pagination> `;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams({ ...sharedStoryParam, ...totalPagesParam }),
};

/* Total Items */
const TemplateTotalItems = (args: any) => html` <osds-pagination ...=${getTagAttributes(args)}> </osds-pagination> `;
export const TotalItems = TemplateTotalItems.bind({});
TotalItems.args = {
  ...extractStoryParams({ ...sharedStoryParam, ...totalItemsParam }),
};

/* All */
const TemplateAll = () => html`
  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current="2" total-pages="4"></osds-pagination>
    <p id="select3-info" style="font-style: italic;">4 pages to display, current page 2</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current="5" total-pages="6"></osds-pagination>
    <p id="select3-info" style="font-style: italic;">6 pages to display, current page 5</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current="5" total-pages="7"></osds-pagination>
    <p id="select3-info" style="font-style: italic;">7 pages to display, current page 5</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current="5" total-pages="9"></osds-pagination>
    <p id="select4-info" style="font-style: italic;">9 pages to display, current page 5</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current="5" total-pages="9" disabled="true"></osds-pagination>
    <p id="select4-info" style="font-style: italic;">Disabled</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current=1 total-items=5>
      <span slot="after-total-items">&nbsp;results</span>
    </osds-pagination>
    <p style="font-style: italic;">Total items < 10, select should not appear</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current=2 total-items=60>
      <span slot="before-total-items">of&nbsp;</span>
      <span slot="after-total-items">&nbsp;results</span>
    </osds-pagination>
    <p style="font-style: italic;">Total items between 10 and 300, select will have custom options</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current=2 total-items=500>
      <span slot="before-total-items">of&nbsp;</span>
      <span slot="after-total-items">&nbsp;results</span>
    </osds-pagination>
    <p style="font-style: italic;">Total items above 300, select will have default options</p>
  </div>

  <div style="display: grid; justify-content: center; text-align:center">
    <osds-pagination current=3 total-items=60 disabled></osds-pagination>
    <p style="font-style: italic;">All disabled</p>
  </div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
