import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-breadcrumb/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-breadcrumb/CHANGELOG.md';
import page from './breadcrumb.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {};

export default {
  title: 'UI Components/Breadcrumb [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-breadcrumb/modules/index.html'),
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => {
  return html`
    <h2>With less than 4 items</h2>
    <osds-breadcrumb>
      <osds-breadcrumb-item>
        <osds-link color="primary" href="home"> Home </osds-link>
      </osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary">Item 1</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-text>Item active</osds-text></osds-breadcrumb-item>
    </osds-breadcrumb>
    <osds-breadcrumb>
      <osds-breadcrumb-item>
        <osds-link color="primary" href="home"> Home </osds-link>
      </osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary">Item 1</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary">Item 2</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-text>Item active</osds-text></osds-breadcrumb-item>
    </osds-breadcrumb>
    <h2>With more than 4 items</h2>
    <osds-breadcrumb>
      <osds-breadcrumb-item>
        <osds-link color="primary" href="home"> Home </osds-link>
      </osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item1">Item 1</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item2">Item 2</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item3">Item 3</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-text>Item active</osds-text></osds-breadcrumb-item>
    </osds-breadcrumb>
  `;
};
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
