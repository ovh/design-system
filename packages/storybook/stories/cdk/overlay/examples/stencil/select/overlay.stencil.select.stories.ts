import { defineCustomElements } from '@ovhcloud/ods-cdk/dev/loader';
import { OcdkSurfaceSelectPosition, OcdkSurfaceSelectPositionList } from '@ovhcloud/ods-cdk-dev';
import { OlesIpsumGeneration, olesIpsum } from '@ovhcloud/ods-common-core';
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

import page from './overlay.stencil.select.stories.page.mdx';
import { play } from './overlay.stencil.select.stories.play';
import { extractArgTypes, extractStoryParams } from '../../../../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  opened: {
    category: 'General',
    description: 'make the selection open or not',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } },
  },
  position: {
    category: 'General',
    description: 'select position',
    defaultValue: OcdkSurfaceSelectPosition.BOTTOM,
    options: OcdkSurfaceSelectPositionList,
    control: { type: 'select' },
    table: { defaultValue: { summary: OcdkSurfaceSelectPosition.BOTTOM } },
  },
  applyDirection: {
    category: 'General',
    description: 'apply an HTML directionality',
    defaultValue: 'ltr',
    options: ['ltr', 'rtl'],
    control: { type: 'select' },
    table: { defaultValue: { summary: 'ltr' } },
  },
  changeAlignment: {
    category: 'General',
    description: 'position component on the page',
    defaultValue: 'start center',
    options: ['start start', 'start center', 'start end', 'center start', 'center', 'center end', 'end start', 'end center', 'end end'],
    control: { type: 'select' },
    table: { defaultValue: { summary: 'start center' } },
  },
  applyContent: {
    category: 'General',
    description: 'apply some fake HTML in order to enable scrolling',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } },
  },
};

const selectTsxFile = require('!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-example.tsx').default;
const selectItemTsxFile = require('!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-item-example.tsx').default;
const selectScss = require('!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-example.scss').default;
const selectItemScss = require('!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-item-example.scss').default;

export default {
  title: 'Libraries/CDK/Overlay/examples/Stencil/Select',
  parameters: {
    docs: { page },
    controls: { expanded: true },
    preview: [
      {
        tab: 'Select Component TSX',
        template: selectTsxFile,
        language: 'ts',
        format: 'tsx',
        copy: true,
      },
      {
        tab: 'Select Component SCSS',
        template: selectScss,
        language: 'css',
        copy: true,
      },
      {
        tab: 'Select Item Component TSX',
        template: selectItemTsxFile,
        language: 'ts',
        format: 'tsx',
        copy: true,
      },
      {
        tab: 'Select Item Component SCSS',
        template: selectItemScss,
        language: 'css',
        copy: true,
      },
    ],
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const Template = (args: any) => {
  return html`
    <style>
      #alignment {
        display: flex;
        height: 100vh;
        flex-wrap: wrap;
      }
    </style>

    <div id='alignment' style=${ styleMap({ placeContent: args.changeAlignment }) }>
      <p>${args.applyContent ? olesIpsum(OlesIpsumGeneration.paragraphs, 2) : ''}</p>
      <ocdk-surface-select-example dir="${args.applyDirection}" opened="${args.opened}" position="${args.position}">
        <div slot="trigger">My Select</div>
        <ocdk-surface-select-item-example value="item 1">item #1</ocdk-surface-select-item-example>
        <ocdk-surface-select-item-example value="item 2">item #2</ocdk-surface-select-item-example>
        <ocdk-surface-select-item-example value="item 3">item #3</ocdk-surface-select-item-example>
        <ocdk-surface-select-item-example value="item 4">item #4</ocdk-surface-select-item-example>
        <ocdk-surface-select-item-example value="item 5">item #5</ocdk-surface-select-item-example>
        <ocdk-surface-select-item-example value="item 6">item #6</ocdk-surface-select-item-example>
        <ocdk-surface-select-item-example value="item 7">item #7</ocdk-surface-select-item-example>
        <ocdk-surface-select-item-example value="item 8">item #8</ocdk-surface-select-item-example>
      </ocdk-surface-select-example>
      <p>${args.applyContent ? olesIpsum(OlesIpsumGeneration.paragraphs, 2) : ''}</p>
    </div>
  `;
};

export const Select = Template.bind({});
Select.args = {
  ...extractStoryParams(storyParams),
};
Select.play = play;
