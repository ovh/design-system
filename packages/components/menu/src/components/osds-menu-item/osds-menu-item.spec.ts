import {SpecPage, newSpecPage} from '@stencil/core/testing';
import {OdsLogger} from '@ovhcloud/ods-common-core';
import {OsdsMenuItem} from './osds-menu-item';

const logger = new OdsLogger('osds-menu-spec');

describe('spec:osds-menu', () => {
  logger.log('init');

  let page: SpecPage;
  let instance: OsdsMenuItem;
  let menuItemContent: HTMLSlotElement | null | undefined;

  function findElements(){
    menuItemContent = page.root.shadowRoot.querySelector('slot:not([name])');
  }

  async function setup({html = ''}: { html?: string }) {
    page = await newSpecPage({
      components: [OsdsMenuItem],
      html: `<osds-menu-item>${html}</osds-menu-item>`,
    });

    instance = page.rootInstance;
    findElements();
  }

  it('should render', async() => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have an unnamed slot', async() => {
      await setup({html: ''});
      expect(menuItemContent).toBeTruthy();
    });
  });
});
