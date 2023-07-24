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
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OsdsClipboard } from './osds-clipboard';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-clipboard', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsClipboard;
  let controller: OdsClipboardController;
  let input: HTMLElement;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsClipboardAttributes> } = {}) {
    const minimalAttributes: OdsClipboardAttributes = OdsCreateAttributes(attributes, odsClipboardDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsClipboardAttributes>(minimalAttributes, odsClipboardDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsClipboard],
      html: `<osds-clipboard ${OdsStringAttributes2Str(stringAttributes)}>My Clipboard</osds-clipboard>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsClipboardController as unknown as jest.SpyInstance<OdsClipboardController, unknown[]>).mock.instances[0];
    input = root.shadowRoot.querySelector('osds-input');
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

    describe('flex', () => {
      odsUnitTestAttribute<OdsClipboardAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsClipboardAttributes, OsdsClipboard, 'flex'>({
          name: 'flex',
          list: [true, false],
          defaultValue: odsClipboardDefaultAttributes.flex,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsClipboardAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsClipboardAttributes, OsdsClipboard, 'disabled'>({
          name: 'disabled',
          list: [true, false],
          defaultValue: odsClipboardDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsClipboardAttributes, 'value'>({
        ...getAttributeContextOptions<OdsClipboardAttributes, OsdsClipboard, 'value'>({
          name: 'value',
          list: ['', 'new value'],
          defaultValue: odsClipboardDefaultAttributes.value,
          ...config
        })
      });
    });
  });

  describe('methods', () => {
    it('should call handlerClick controller', async () => {
      await setup({});
      instance.handlerClick();
      input.click();

      expect(controller.handlerClick).toHaveBeenCalledTimes(2);
    });

    it('should not call handlerClick controller because of disabled', async () => {
      await setup({ attributes: { disabled: true } });
      instance.handlerClick();
      input.click();

      expect(controller.handlerClick).not.toHaveBeenCalled();
    })
  });
});
