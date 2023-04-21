import {
  OdsComponentAttributes2StringAttributes,
  OdsMenuItemAttributes,
  odsMenuItemDefaultAttributes,
  OdsLogger,
} from '@ovhcloud/ods-core';
import {
  OdsMenuItemCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsMenuItem } from './osds-menu-item';

const logger = new OdsLogger('osds-menu-spec');

describe('spec:osds-menu', () => {
  logger.log('init');

  let page: SpecPage;
  let instance: OsdsMenuItem;
  let menuItemContent: HTMLSlotElement | null | undefined;

  function findElements(){
    menuItemContent = page.root.shadowRoot.querySelector('slot:not([name])');
  };

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMenuItemAttributes>, html?: string }) {
    const minimalAttributes: OdsMenuItemAttributes = OdsMenuItemCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMenuItemAttributes>(minimalAttributes, odsMenuItemDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsMenuItem],
      html: `<osds-menu-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-menu-item>`,
    });

    instance = page.rootInstance;
    findElements();
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have an unnamed slot', async () => {
      await setup({ attributes: {}, html: `` });
      expect(menuItemContent).toBeTruthy();
    });
  });
});
