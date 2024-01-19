import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-popover';
import { applyContentText, positionParams } from '../../../core/commonPositionStoryParams';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { styleMap } from 'lit-html/directives/style-map';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  popoverTrigger: {
    category: 'Slot',
    defaultValue: `<osds-button variant='flat' color='primary' size='sm'><osds-icon name='home' size='xs' contrasted='true'></osds-icon></osds-button>`,
  },
};

export default {
  title: 'ODS Components/User feedback/Popover [atom]/Demo',
  id: 'popover',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args:any) => {
  const clickTrigger = () => {
    const observeShadowRoot = (shadowRoot) => {
      const observer = new MutationObserver(() => {
        const surface = shadowRoot.querySelector('ocdk-surface');
        if (surface) {
          observer.disconnect();

          const trigger = document.querySelector('[slot="popover-trigger"]');
          if (trigger) {
            surface.opened = true;
          }
        }
      });

      observer.observe(shadowRoot, { childList: true, subtree: true });
    };

    const observePopover = () => {
      const popover = document.querySelector('osds-popover');
      if (popover) {
        const shadowRoot = popover.shadowRoot;
        if (shadowRoot) {
          observeShadowRoot(shadowRoot);
        }
      }
    };

    window.addEventListener('DOMContentLoaded', observePopover, { once: true });
  };

  return html`
    <osds-popover ...=${getTagAttributes(args)}>
      <span slot="popover-trigger">
        ${unsafeHTML(args.popoverTrigger)}
      </span>
      <osds-popover-content>
        <span slot="popover-header">My popover title</span>
        <osds-text color='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</osds-text>
        <osds-divider separator></osds-divider>
        <span slot="popover-footer">
          <osds-button color='primary' variant='stroked' inline>Dismiss</osds-button>
          <osds-button color='primary' inline>Action</osds-button>
        </span>
      </osds-popover-content>
    </osds-popover>
    ${clickTrigger()}
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

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
    <osds-popover ...=${getTagAttributes(args)}, dir="${args.applyDirection}">
      <span slot="popover-trigger">
        ${unsafeHTML(args.popoverTrigger)}
      </span>
      <osds-popover-content>
        <span slot="popover-header">My popover title</span>
        <osds-text color='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</osds-text>
        <osds-divider separator></osds-divider>
        <span slot="popover-footer">
          <osds-button color='primary' variant='stroked' inline>Dismiss</osds-button>
          <osds-button color='primary' inline>Action</osds-button>
        </span>
      </osds-popover-content>
    </osds-popover>
    <p>${args.applyContent ? applyContentText : ''}</p>
  </div>
`;
}
export const Position = TemplatePosition.bind({});
// @ts-ignore
Position.args = {
  ...extractStoryParams({ ...storyParams, ...positionParams }),
};
// @ts-ignore
Position.argTypes = extractArgTypes(positionParams);
