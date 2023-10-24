jest.mock('@ovhcloud/ods-cdk'); // keep jest.mock before any import
jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsClipboardAttribute } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsClipboardController } from './core/controller';
import { OsdsClipboard } from './osds-clipboard';
import { ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';

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

  function mockSurfaceElements() {
    (ocdkIsSurface as unknown as jest.Mock).mockImplementation(() => true);
  }

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

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('cdk not initialized', () => {
    it('should not have yet the ref to surface', async() => {
      (ocdkIsSurface as unknown as jest.Mock).mockImplementation(() => false);
      await setup();
      expect(instance.surface).toBe(undefined);
    });
  });

  describe('cdk initialized', () => {
    it('should have ref to anchor', async() => {
      await setup();
      expect(instance.anchor).toBeTruthy();
    });

    it('should have ref to surface', async() => {
      mockSurfaceElements();
      await setup();
      expect(instance.surface).toBeTruthy();
    });

    it('should call syncReferences of controller for anchor and surface', async() => {
      mockSurfaceElements();
      await setup();
      expect(controller.syncReferences).toHaveBeenCalledTimes(2);
      expect(controller.syncReferences).toHaveBeenCalledWith();
    });
  });

  describe('controller', () => {
    it('should call handlerClick of controller', async() => {
      const string = 'test';
      await setup( { attributes: { value: string } });
      instance.handlerClick();
      expect(controller.handlerClick).toHaveBeenCalledTimes(1);
      expect(controller.handlerClick).toHaveBeenCalledWith(string);
    });

    it('should call checkForClickOutside of controller', async() => {
      const event = new Event('click');
      await setup();
      instance.checkForClickOutside(event);
      expect(controller.checkForClickOutside).toHaveBeenCalledTimes(1);
      expect(controller.checkForClickOutside).toHaveBeenCalledWith(event);
    });

    it('should call closeSurface of controller', async() => {
      await setup();
      await instance.closeSurface();
      expect(controller.closeSurface).toHaveBeenCalledTimes(1);
      expect(controller.closeSurface).toHaveBeenCalledWith();
    });
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
    it('should call handlerClick controller', async() => {
      await setup({});
      instance.handlerClick();
      input?.click();

      expect(controller.handlerClick).toHaveBeenCalledTimes(2);
    });

    it('should not call handlerClick controller because of disabled', async() => {
      await setup({ attributes: { disabled: true } });
      instance.handlerClick();
      input?.click();

      expect(controller.handlerClick).not.toHaveBeenCalled();
    });
  });
});
