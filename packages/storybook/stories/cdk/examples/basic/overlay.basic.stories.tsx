import { OcdkSurfaceAnimation, OcdkSurfaceAnimationList, OcdkSurfaceCorner, ocdkDefineCustomElements } from '@ovhcloud/ods-cdk';
import { OcdkSurfaceBasicPositionList } from '@ovhcloud/ods-cdk-dev'
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

import { play } from './overlay.basic.stories.play';
import { extractArgTypes, extractStoryParams } from '../../../../core/componentHTMLUtils';

ocdkDefineCustomElements();

/* Default story parameters  */
const storyParams = {
  opened: {
    category: 'General',
    description: 'open the overlay or not',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: false } },
  },
  corners: {
    category: 'General',
    description: 'choose the anchor and surface position reference',
    defaultValue: 'BOTTOM_LEFT TOP_LEFT',
    options: OcdkSurfaceBasicPositionList,
    control: { type: 'select' },
    table: { defaultValue: { summary: 'BOTTOM_LEFT TOP_LEFT' } },
  },
  animated: {
    category: 'General',
    description: 'enable animation',
    defaultValue: true,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: true } },
  },
  animation: {
    category: 'General',
    description: 'choose the animation',
    defaultValue: OcdkSurfaceAnimation.SLIPPING,
    options: OcdkSurfaceAnimationList,
    control: { type: 'select' },
    table: { defaultValue: { summary: OcdkSurfaceAnimation.SLIPPING } },
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

const typescriptFile = require('!!raw-loader!@ovhcloud/ods-cdk/doc/overlay/examples/basic/overlay.basic.ts').default;
const htmlFile = require('!!raw-loader!@ovhcloud/ods-cdk/doc/overlay/examples/basic/overlay.basic.html').default;
const applyContentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

export default {
  title: 'OVHcloud Component Development Kit/examples/Basic/Demo',
  parameters: {
    controls: { expanded: true },
    preview: [
      {
        tab: 'Vanilla',
        template: typescriptFile,
        language: 'ts',
        copy: true,
      },
      {
        tab: 'HTML',
        template: htmlFile,
        language: 'html',
        copy: true,
      },
    ],
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const Template = (args: any) => {
  let corners = [OcdkSurfaceCorner.BOTTOM_LEFT, OcdkSurfaceCorner.TOP_LEFT];
  if(args.corners) {
    const cornersFromArgs = args.corners.split(' ');
    if(cornersFromArgs && cornersFromArgs[0] && cornersFromArgs[1]) {
      corners = [(OcdkSurfaceCorner as any)[cornersFromArgs[0]], OcdkSurfaceCorner[cornersFromArgs[1]]];
    }
  }

  return html`
    <style>

      #alignment {
        display: flex;
        height: 100vh;
        flex-wrap: wrap;
      }

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
    <div id='alignment' style=${ styleMap({ placeContent: args.changeAlignment }) }>
      <p>${args.applyContent ? applyContentText : ''}</p>
      <div id="basic-container-1" dir="${args.applyDirection}">
        <div id="basic-trigger-1" onclick="basic1Toggle()">my trigger</div>
        <ocdk-surface id="basic-surface-1" ?opened=${args.opened} .animated=${args.animated} .corners=${corners} animation="${args.animation}">My surface Content</ocdk-surface>
      </div>
      <p>${args.applyContent ? applyContentText : ''}</p>
    </div>
  `;
};


export const Basic = Template.bind({});
Basic.args = {
  ...extractStoryParams(storyParams),
};
Basic.play = play;
