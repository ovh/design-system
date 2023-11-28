import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-modal';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.info,
    options: [ODS_THEME_COLOR_INTENT.info, ODS_THEME_COLOR_INTENT.success, ODS_THEME_COLOR_INTENT.warning, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  dismissible: {
    category: 'General',
    defaultValue: true,
  },
  headline: {
    category: 'General',
    defaultValue: 'Modal Title',
  },
  content: {
    category: 'Slot',
    defaultValue: '<osds-text color="text">Modal Content</osds-text>',
  },
  actions: {
    category: 'Slot',
    defaultValue: `<osds-button slot="actions" color="primary" variant='stroked'>Cancel</osds-button>
<osds-button slot="actions" color="primary">OK</osds-button>`,
  },
  masked: {
    category: 'Development',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/User feedback/Modal [molecule]/Demo',
  id: 'modal',
  argTypes: extractArgTypes(storyParams),
};

const TemplateDemo = (args: any) => {
  const handleOpenModal = () => {
    const modal = document.querySelector('osds-modal');
    if (modal) {
      modal.open();
    }
  };

  const locationChangeTrigger = () => {
    let prevUrl = document.location.href;
    const body = document.querySelector('body');

    const observer = new MutationObserver(() => {
      if (prevUrl !== document.location.href) {
        prevUrl = document.location.href;

        const modals = document.getElementsByTagName('osds-modal');
        for (let i = 0; i < modals.length; i++) {
          modals[i].close();
        }
      }
    });
    observer.observe(body, { childList: true, subtree: true });
  };

  window.onload = locationChangeTrigger;

  return html`
    <osds-button style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'
                 color='primary'
                 @click=${handleOpenModal}>
      Trigger "open()"
    </osds-button>
    ${locationChangeTrigger()}

    <osds-modal id="my-modal" ...=${getTagAttributes(args)}> ${unsafeHTML(args.content)} ${unsafeHTML(args.actions)} </osds-modal>
  `;
};

export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
