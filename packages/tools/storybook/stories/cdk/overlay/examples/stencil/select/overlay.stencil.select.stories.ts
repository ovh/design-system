import { extractArgTypes, extractStoryParams, } from '../../../../../../core/componentHTMLUtils';
import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-cdk/dev/loader';
import page from './overlay.stencil.select.stories.page.mdx';
import { play } from './overlay.stencil.select.stories.play';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core/src';
import { OcdkSurfaceSelectPosition } from '@ovhcloud/ods-cdk-dev';
import { OcdkSurfaceSelectPositionList } from '@ovhcloud/ods-cdk-dev/src';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  opened: {
    category: 'General',
    description: 'make the selection open or not',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  applyDirection: {
    category: 'General',
    description: 'apply an HTML directionality',
    defaultValue: 'ltr',
    options: ['ltr', 'rtl'],
    control: { type: 'select' },
    table: { defaultValue: { summary: 'ltr' } }
  },
  applyContent: {
    category: 'General',
    description: 'apply some fake HTML in order to enable scrolling',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  }
};

const selectTsxFile = require(`!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-example.tsx`).default;
const selectItemTsxFile = require(`!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-item-example.tsx`).default;
const selectScss = require(`!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-example.scss`).default;
const selectItemScss = require(`!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-select-example/ocdk-surface-select-item-example.scss`).default;

export default {
  title: 'Libraries/CDK/Overlay/examples/Stencil/Select',
  parameters: {
    layout: 'centered',
    docs: { page },
    controls: { expanded: true },
    preview: [
      {
        tab: "Select Component TSX",
        template: selectTsxFile,
        language: "ts",
        format: "tsx",
        copy: true,
      },
      {
        tab: "Select Component SCSS",
        template: selectScss,
        language: "css",
        copy: true,
      },
      {
        tab: "Select Item Component TSX",
        template: selectItemTsxFile,
        language: "ts",
        format: "tsx",
        copy: true,
      },
      {
        tab: "Select Item Component SCSS",
        template: selectItemScss,
        language: "css",
        copy: true,
      },
    ],
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const Template = (args: any) => {

  return html`
    <p>${args.applyContent ? olesIpsum(OlesIpsumGeneration.paragraphs, 2) : ''}</p>
<!--    <div style='height: 500px;'></div>-->
    <div style='width: 500px; height: 40px; /*padding-left: 150px;*/'>
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
    </div>
    <p>${args.applyContent ? olesIpsum(OlesIpsumGeneration.paragraphs, 2) : ''}</p>
  `;
};


export const Select = Template.bind({});
Select.args = {
  ...extractStoryParams(storyParams)
};
Select.play = play;
