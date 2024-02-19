import { OdsLogger } from '@ovhcloud/ods-common-core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OsdsMenuGroup } from './osds-menu-group';

const logger = new OdsLogger('osds-menu-spec');

describe('spec:osds-menu', () => {
  logger.log('init');

  let page: SpecPage;
  let instance: OsdsMenuGroup;
  let menuGroupContent: HTMLSlotElement | null | undefined;

  function findElements(){
    menuGroupContent = page.root.shadowRoot.querySelector('slot:not([name])');
  }

  async function setup({ html = '' }: { html?: string }) {
    page = await newSpecPage({
      components: [OsdsMenuGroup],
      html: `<osds-menu-group>${html}</osds-menu-group>`,
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
      await setup({ html: '' });
      expect(menuGroupContent).toBeTruthy();
    });
  });
});
