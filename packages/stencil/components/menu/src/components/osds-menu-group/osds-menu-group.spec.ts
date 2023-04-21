import {
  OdsComponentAttributes2StringAttributes,
  OdsMenuGroupAttributes,
  odsMenuGroupDefaultAttributes,
  OdsLogger,
} from '@ovhcloud/ods-core';
import {
  OdsMenuGroupCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsMenuGroup } from './osds-menu-group';

const logger = new OdsLogger('osds-menu-spec');

describe('spec:osds-menu', () => {
  logger.log('init');

  let page: SpecPage;
  let instance: OsdsMenuGroup;
  let menuGroupContent: HTMLSlotElement | null | undefined;

  function findElements(){
    menuGroupContent = page.root.shadowRoot.querySelector('slot:not([name])');
  };

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMenuGroupAttributes>, html?: string }) {
    const minimalAttributes: OdsMenuGroupAttributes = OdsMenuGroupCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMenuGroupAttributes>(minimalAttributes, odsMenuGroupDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsMenuGroup],
      html: `<osds-menu-group ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-menu-group>`,
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
      expect(menuGroupContent).toBeTruthy();
    });
  });
});
