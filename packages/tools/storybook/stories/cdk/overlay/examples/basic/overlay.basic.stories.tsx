import { extractArgTypes, extractStoryParams, } from '../../../../../core/componentHTMLUtils';
import { html } from 'lit-html';
import { ocdkDefineCustomElements, OcdkSurfaceAnimation, OcdkSurfaceAnimationList } from '@ovhcloud/ods-cdk';
import page from './overlay.basic.stories.page.mdx';
import { play } from './overlay.basic.stories.play';
import {
  OcdkEnumObject,
  ocdkGetEnumNames,
  OcdkSurfaceCorner,
  OcdkSurfaceCornerPointList,
  OcdkSurfaceCornerPointNameList,
} from '@ovhcloud/ods-cdk/src';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core/src';

ocdkDefineCustomElements();

/* Default story parameters  */
const storyParams = {
  opened: {
    category: 'General',
    description: 'open the overlay or not',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: false } }
  },
  corners: {
    category: 'General',
    description: 'choose the anchor and surface position reference',
    defaultValue: 'BOTTOM_START TOP_START',
    options: OcdkSurfaceCornerPointNameList,
    control: { type: 'select' },
    table: { defaultValue: { summary: 'BOTTOM_START TOP_START' } }
  },
  animated: {
    category: 'General',
    description: 'enable animation',
    defaultValue: true,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: true } }
  },
  animation: {
    category: 'General',
    description: 'choose the animation',
    defaultValue: OcdkSurfaceAnimation.SLIPPING,
    options: OcdkSurfaceAnimationList,
    control: { type: 'select' },
    table: { defaultValue: { summary: OcdkSurfaceAnimation.SLIPPING } }
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

const typescriptFile = require(`!!raw-loader!@ovhcloud/ods-cdk/doc/overlay/examples/basic/overlay.basic.ts`).default;
const htmlFile = require(`!!raw-loader!@ovhcloud/ods-cdk/doc/overlay/examples/basic/overlay.basic.html`).default;
export default {
  title: 'CDK/Overlay/examples/Basic',
  parameters: {
    docs: { page },
    controls: { expanded: true },
    preview: [
      {
        tab: "Vanilla",
        template: typescriptFile,
        language: "ts",
        copy: true,
      },
      {
        tab: "HTML",
        template: htmlFile,
        language: "html",
        copy: true,
      },
    ],
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const Template = (args: any) => {
  let corners = [OcdkSurfaceCorner.BOTTOM_START, OcdkSurfaceCorner.TOP_START];
  if(args.corners) {
    const cornersFromArgs = args.corners.split(' ');
    if(cornersFromArgs && cornersFromArgs[0] && cornersFromArgs[1]) {
      corners = [(OcdkSurfaceCorner as any)[cornersFromArgs[0]], OcdkSurfaceCorner[cornersFromArgs[1]]];
    }
  }

  return html`
    <style>
      #basic-container-1 {
        /* overlay important properties */
        position: relative; /* must be here to make the positioning working well */
        text-align: initial; /* must be here to make the positioning working well for RTL alignment */
        padding: 0; /* must be here to make the computing works. If you need one padding, apply it on trigger or surface */
        /* end overlay important properties */

        display: inline-block; /* recommended */
        color: white;
      }

      #basic-trigger-1 {
        background: #0d4aa9;
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
      }

      #basic-surface-1 {
        background: #0e2231;
        border-radius: 4px;
        padding: 5px;
      }

    </style>
    <p>${args.applyContent ? olesIpsum(OlesIpsumGeneration.paragraphs, 2) : ''}</p>
    <div id="basic-container-1" dir="${args.direction}">
      <div id="basic-trigger-1" onclick="basic1Toggle()">my trigger</div>
      <ocdk-surface id="basic-surface-1" ?opened=${args.opened} .animated=${args.animated} .corners=${corners} animation="${args.animation}" >My surface</ocdk-surface>
    </div>
    <p>${args.applyContent ? olesIpsum(OlesIpsumGeneration.paragraphs, 2) : ''}</p>
  `;
};


export const Basic = Template.bind({});
Basic.args = {
  ...extractStoryParams(storyParams),
};
Basic.play = play;
