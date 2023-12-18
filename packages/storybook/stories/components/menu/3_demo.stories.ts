import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-menu';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { applyContentText, positionParams } from '../../../core/commonPositionStoryParams';
import { styleMap } from 'lit-html/directives/style-map';


defineCustomElement();

export default {
  title: 'ODS Components/Actions/Menu [atom]/Demo',
  id: 'menu',
};

/* Default */
const TemplateDemo = () => html`
  <osds-menu>
    <osds-button slot='menu-title' color='primary' variant='stroked'>Menu <osds-icon name='home' size='xs'></osds-icon></osds-button>
    <osds-menu-group>
      <osds-text>Group/Text 1</osds-text>
    </osds-menu-group>
    <osds-menu-item>
      <osds-button color='primary' size='sm' variant='ghost' text-align='start' flex><span>Action 1</span></osds-button>
    </osds-menu-item>
    <osds-menu-item>
      <osds-button color='primary' size='sm' variant='ghost' text-align='start' flex><span>Action 2</span></osds-button>
    </osds-menu-item>
    <osds-divider color='text' separator='true'></osds-divider>
    <osds-menu-group>
      <osds-text>Group/Text 2</osds-text>
    </osds-menu-group>
    <osds-menu-item>
      <osds-button color='primary' size='sm' variant='ghost' text-align='start' flex><span>Action 1 showing an ellipsis if content is longer than max-width</span></osds-button>
    </osds-menu-item>
    <osds-menu-item>
      <osds-button color='primary' size='sm' variant='ghost' text-align='start' flex disabled><span>Action 2</span></osds-button>
    </osds-menu-item>
  </osds-menu>
`;
export const Demo = TemplateDemo.bind({});

/* Position */
const TemplatePosition = ({ ...args }) => {
  return html`
  <style>
    #alignment {
      display: flex;
      height: 100vh;
      flex-wrap: wrap;
    }
  </style>

  <div id='alignment' style=${styleMap({ placeContent: args.changeAlignment })}>
    <p>${args.applyContent ? applyContentText : ''}</p>
    <osds-menu>
      <osds-button slot='menu-title' color='primary' variant='stroked'>Action menu <osds-icon name='home' size='xs'></osds-icon></osds-button>
      <osds-menu-group>
        <osds-text>Group/Text 1</osds-text>
      </osds-menu-group>
      <osds-menu-item>
        <osds-button color='primary' size='sm' variant='ghost' text-align='start' flex><span>Action 1</span></osds-button>
      </osds-menu-item>
      <osds-menu-item>
        <osds-button color='primary' size='sm' variant='ghost' text-align='start' flex><span>Action 2</span></osds-button>
      </osds-menu-item>
    </osds-menu>
    <p>${args.applyContent ? applyContentText : ''}</p>
  </div>
`;
}

export const Position = TemplatePosition.bind({});
// @ts-ignore
Position.args = {
  ...extractStoryParams(positionParams),
};
// @ts-ignore
Position.argTypes = extractArgTypes(positionParams);
