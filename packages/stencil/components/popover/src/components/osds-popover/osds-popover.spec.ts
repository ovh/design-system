jest.mock('@ovhcloud/ods-core/src/components/popover/popover/ods-popover-controller'); // keep jest.mock before any
jest.mock('@ovhcloud/ods-cdk/src/components/surface/ocdk-is-surface'); // keep jest.mock before any import

import {
  OdsPopoverAttributes,
  OdsPopoverController,
  OdsComponentAttributes2StringAttributes,
  odsPopoverDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsPopoverBaseAttributes,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { OsdsPopover } from './osds-popover';

describe('spec:osds-popover', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPopover;
  let controller: OdsPopoverController
  let popoverTrigger: HTMLSlotElement | null | undefined;
  let popoverContentSlot : HTMLSlotElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  function mockSurfaceElements() {
    ocdkIsSurface.mockImplementation(() => true);
  }

  function findElements() {
    popoverTrigger = root?.shadowRoot?.querySelector('slot[name="popover-trigger"]');
    popoverContentSlot = root?.shadowRoot?.querySelector('slot:not([name])');
  }

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPopoverAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsPopoverAttributes = OdsCreateAttributes(attributes, odsPopoverBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverAttributes>(minimalAttributes, odsPopoverDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsPopover],
      html: `<osds-popover ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-popover>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsPopoverController as unknown as jest.SpyInstance<OdsPopoverController, unknown[]>).mock.instances[0];

    findElements();
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a trigger', async () => {
      await setup({ attributes: {}, html: `` });
      expect(popoverTrigger).toBeTruthy();
    });

    it('should have an unnamed slot', async () => {
      await setup({ attributes: {}, html: `` });
      expect(popoverContentSlot).toBeTruthy();
    });
  });

  describe('cdk not initialized', () => {
    it('should not have yet the ref to surface', async () => {
      ocdkIsSurface.mockImplementation(() => false);
      await setup({ attributes: {}, html: `` });
      expect(instance.surface).toBeFalsy();
    })
  });

  describe('cdk initialized', () => {
    it('should have ref to anchor', async () => {
      await setup({ attributes: {}, html: `` });
      expect(instance.anchor).toBeTruthy();
    })

    it('should have ref to surface', async () => {
      mockSurfaceElements();
      await setup({ attributes: {}, html: `` });
      expect(instance.surface).toBeTruthy();
    })

    it('should call syncReferences of controller for anchor and surface', async () => {
      mockSurfaceElements();
      await setup({});
      expect(controller.syncReferences).toHaveBeenCalledTimes(2);
      expect(controller.syncReferences).toHaveBeenCalledWith();
    });

    it('should call handleTriggerClick of controller', async () => {
      await setup({});
      instance.handleTriggerClick();
      expect(controller.handleTriggerClick).toHaveBeenCalledTimes(1);
      expect(controller.handleTriggerClick).toHaveBeenCalledWith();
    });

    it('should call handleTriggerKey of controller', async () => {
      await setup({});
      const key = new KeyboardEvent("keyup", { key : "Enter" });
      instance.handleTriggerKey(key);
      expect(controller.handleTriggerKey).toHaveBeenCalledTimes(1);
      expect(controller.handleTriggerKey).toHaveBeenCalledWith(key);
    });

    it('should call handleSurfaceKey of controller', async () => {
      await setup({});
      const key = new KeyboardEvent("keyup", { key : "Escape" });
      instance.handleSurfaceKey(key);
      expect(controller.handleSurfaceKey).toHaveBeenCalledTimes(1);
      expect(controller.handleSurfaceKey).toHaveBeenCalledWith(key);
    });
  })

  describe('controller', () => {
    it('should call checkForClickOutside of controller', async () => {
      const event = new Event('click');
      await setup({});
      instance.checkForClickOutside(event);
      expect(controller.checkForClickOutside).toHaveBeenCalledTimes(1);
      expect(controller.checkForClickOutside).toHaveBeenCalledWith(event);
    })
  });
});
