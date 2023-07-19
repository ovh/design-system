jest.mock('@ovhcloud/ods-core/src/components/clipboard/ods-clipboard-controller'); // keep jest.mock before any

import {
  OdsClipboardAttributes,
  OdsClipboardController,
  OdsComponentAttributes2StringAttributes,
  odsClipboardDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsClipboardBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsClipboard } from './osds-clipboard';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-clipboard', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsClipboard;
  let controller: OdsClipboardController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsClipboardAttributes> } = {}) {
    const minimalAttributes: OdsClipboardAttributes = OdsCreateAttributes(attributes, odsClipboardBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsClipboardAttributes>(minimalAttributes, odsClipboardDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsClipboard],
      html: `<osds-clipboard ${OdsStringAttributes2Str(stringAttributes)}>My Clipboard</osds-clipboard>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsClipboardController as unknown as jest.SpyInstance<OdsClipboardController, unknown[]>).mock.instances[0];
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
