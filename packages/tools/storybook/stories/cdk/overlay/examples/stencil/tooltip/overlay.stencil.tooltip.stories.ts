import { extractArgTypes, extractStoryParams, } from '../../../../../../core/componentHTMLUtils';
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';
import { defineCustomElements } from '@ovhcloud/ods-cdk/dev/loader';
import page from './overlay.stencil.tooltip.stories.page.mdx';
import { play } from './overlay.stencil.tooltip.stories.play';
import { OcdkSurfaceTooltipPosition } from '@ovhcloud/ods-cdk-dev';
import { OcdkSurfaceTooltipPositionList } from '@ovhcloud/ods-cdk-dev/src';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core/src';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  position: {
    category: 'General',
    description: 'tooltip position',
    defaultValue: OcdkSurfaceTooltipPosition.BOTTOM,
    options: OcdkSurfaceTooltipPositionList,
    control: { type: 'select' },
    table: { defaultValue: { summary: OcdkSurfaceTooltipPosition.BOTTOM } }
  },
  applyDirection: {
    category: 'General',
    description: 'apply an HTML directionality',
    defaultValue: 'ltr',
    options: ['ltr', 'rtl'],
    control: { type: 'select' },
    table: { defaultValue: { summary: 'ltr' } }
  },
  changeAlignment: {
    category: 'General',
    description: 'position component on the page',
    defaultValue: 'start center',
    options: ['start start', 'start center', 'start end', 'center start', 'center', 'center end', 'end start', 'end center', 'end end'],
    control: { type: 'select' },
    table: { defaultValue: { summary: 'start center' } }
  },
  applyContent: {
    category: 'General',
    description: 'apply some fake HTML in order to enable scrolling',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  }
};

const tooltipTsxFile = require(`!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-tooltip-example/ocdk-surface-tooltip-example.tsx`).default;
const tooltipScss = require(`!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-tooltip-example/ocdk-surface-tooltip-example.scss`).default;

export default {
  title: 'Libraries/CDK/Overlay/examples/Stencil/Tooltip',
  parameters: {
    docs: { page },
    controls: { expanded: true },
    preview: [
      {
        tab: "Tooltip Component TSX",
        template: tooltipTsxFile,
        language: "ts",
        format: "tsx",
        copy: true,
      },
      {
        tab: "Tooltip Component SCSS",
        template: tooltipScss,
        language: "css",
        copy: true,
      }
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
      <ocdk-surface-tooltip-example value="default positioning" dir="${args.applyDirection}" position="${args.position}">
        <button>tooltip over me</button>
      </ocdk-surface-tooltip-example>
      <p>${args.applyContent ? olesIpsum(OlesIpsumGeneration.paragraphs, 2) : ''}</p>
    </div>
  `;
};


export const Tooltip = Template.bind({});
Tooltip.args = {
  ...extractStoryParams(storyParams)
};
Tooltip.play = play;
