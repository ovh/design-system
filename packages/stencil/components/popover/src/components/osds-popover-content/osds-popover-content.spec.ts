jest.mock('@ovhcloud/ods-core/src/components/popover/popover-content/ods-popover-content-controller'); // keep jest.mock before any

import {
  OdsPopoverContentAttributes,
  OdsPopoverContentController,
  OdsComponentAttributes2StringAttributes,
  odsPopoverContentDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsPopoverContentBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OsdsPopoverContent } from './osds-popover-content';

describe('spec:osds-popover-content', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPopoverContent;
  let controller: OdsPopoverContentController;
  let popoverContentHeaderSlot: HTMLSlotElement | null | undefined;
  let popoverContentSlot : HTMLSlotElement | null | undefined;
  let popoverContentFooterSlot: HTMLSlotElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  function findElements(){
    popoverContentHeaderSlot = page.root.shadowRoot.querySelector('slot[name="popover-header"]');
    popoverContentSlot = page.root.shadowRoot.querySelector('slot:not([name])');
    popoverContentFooterSlot = page.root.shadowRoot.querySelector('slot[name="popover-footer"]');
  }

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPopoverContentAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsPopoverContentAttributes = OdsCreateAttributes(attributes, odsPopoverContentBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverContentAttributes>(minimalAttributes, odsPopoverContentDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsPopoverContent],
      html: `<osds-popover-content ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-popover-content>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsPopoverContentController as unknown as jest.SpyInstance<OdsPopoverContentController, unknown[]>).mock.instances[0];

    findElements();
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a header', async () => {
      await setup({ attributes: {}, html: `` });
      expect(popoverContentHeaderSlot).toBeTruthy();
    });

    it('should have an unnamed slot', async () => {
      await setup({ attributes: {}, html: `` });
      expect(popoverContentSlot).toBeTruthy();
    });

    it('should have a footer', async () => {
      await setup({ attributes: {}, html: `` });
      expect(popoverContentFooterSlot).toBeTruthy();
    });
  });
});
