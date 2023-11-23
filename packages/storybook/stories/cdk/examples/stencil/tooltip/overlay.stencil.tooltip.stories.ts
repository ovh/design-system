import { defineCustomElements } from '@ovhcloud/ods-cdk/dev/loader';
import { OcdkSurfaceTooltipPosition, OcdkSurfaceTooltipPositionList } from '@ovhcloud/ods-cdk-dev';
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

import { play } from './overlay.stencil.tooltip.stories.play';
import { extractArgTypes, extractStoryParams } from '../../../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  position: {
    category: 'General',
    description: 'tooltip position',
    defaultValue: OcdkSurfaceTooltipPosition.BOTTOM,
    options: OcdkSurfaceTooltipPositionList,
    control: { type: 'select' },
    table: { defaultValue: { summary: OcdkSurfaceTooltipPosition.BOTTOM } },
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

const tooltipTsxFile = require('!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-tooltip-example/ocdk-surface-tooltip-example.tsx').default;
const tooltipScss = require('!!raw-loader!@ovhcloud/ods-cdk-dev/src/components/surface/ocdk-surface-tooltip-example/ocdk-surface-tooltip-example.scss').default;
const applyContentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

export default {
  title: 'OVHcloud Component Development Kit/examples/Stencil/Tooltip/Demo',
  parameters: {
    controls: { expanded: true },
    preview: [
      {
        tab: 'Tooltip Component TSX',
        template: tooltipTsxFile,
        language: 'ts',
        format: 'tsx',
        copy: true,
      },
      {
        tab: 'Tooltip Component SCSS',
        template: tooltipScss,
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
        flex-wrap: wrap;
      }
    </style>

    <div id='alignment' style=${ styleMap({ placeContent: args.changeAlignment }) }>
      <p>${args.applyContent ? applyContentText : ''}</p>
      <ocdk-surface-tooltip-example value="default positioning" dir="${args.applyDirection}" position="${args.position}">
        <button>tooltip over me</button>
      </ocdk-surface-tooltip-example>
      <p>${args.applyContent ? applyContentText : ''}</p>
    </div>
  `;
};


export const Tooltip = Template.bind({});
Tooltip.args = {
  ...extractStoryParams(storyParams),
};
Tooltip.play = play;
