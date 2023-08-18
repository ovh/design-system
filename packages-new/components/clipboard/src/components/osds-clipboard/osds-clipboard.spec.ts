jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsClipboardAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsClipboardController } from './core/controller';
import { OsdsClipboard } from './osds-clipboard';

describe('spec:osds-clipboard', () => {
  const baseAttribute = { value: '' };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsClipboard;
  let controller: OdsClipboardController;
  let input: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsClipboardAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsClipboardAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsClipboard],
      html: `<osds-clipboard ${odsStringAttributes2Str(stringAttributes)}>My Clipboard</osds-clipboard>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsClipboardController as unknown as jest.SpyInstance<OdsClipboardController, unknown[]>).mock.instances[0];
    input = root?.shadowRoot?.querySelector('osds-input');
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('inline', () => {
      odsUnitTestAttribute<OdsClipboardAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsClipboardAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsClipboardAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 'value',
        value: 'new value',
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });
  });

  describe('methods', () => {
    it('should call handlerClick controller', async () => {
      await setup({});
      instance.handlerClick();
      input?.click();

      expect(controller.handlerClick).toHaveBeenCalledTimes(2);
    });

    it('should not call handlerClick controller because of disabled', async () => {
      await setup({ attributes: { disabled: true } });
      instance.handlerClick();
      input?.click();

      expect(controller.handlerClick).not.toHaveBeenCalled();
    })
  });
});
