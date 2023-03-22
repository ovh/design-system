jest.mock('@ovhcloud/ods-core/src/components/popover/ods-popover-controller'); // keep jest.mock before any

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
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsPopover } from './osds-popover';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-popover', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPopover;
  let controller: OdsPopoverController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPopoverAttributes> } = {}) {
    const minimalAttributes: OdsPopoverAttributes = OdsCreateAttributes(attributes, odsPopoverBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverAttributes>(minimalAttributes, odsPopoverDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsPopover],
      html: `<osds-popover ${OdsStringAttributes2Str(stringAttributes)}>My Popover</osds-popover>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsPopoverController as unknown as jest.SpyInstance<OdsPopoverController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    // Attributes Unit testing
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
