jest.mock('@ovhcloud/ods-cdk'); // keep jest.mock before any import
jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsClipboardAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
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
  const debounce = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  function mockSurfaceElements(): void {
    (ocdkIsSurface as unknown as jest.Mock).mockImplementation(() => true);
  }

  async function setup({ attributes = {} }: { attributes?: Partial<OdsClipboardAttribute> } = {}): Promise<void> {
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
      await setup({ attributes: { value: string } });
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
      instance: (): OsdsClipboard => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('inline', () => {
      odsUnitTestAttribute<OdsClipboardAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: true,
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsClipboardAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsClipboardAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: 'value',
        setup: (value) => setup({ attributes: { ['value']: value } }),
        value: 'new value',
        ...config,
      });
    });
  });

  describe('methods', () => {
    it('should call handlerClick controller', async() => {
      await setup({});
      instance.debouncedHandlerClick = debounce;
      instance.handlerClick();
      expect(controller.handlerClick).toHaveBeenCalledTimes(1);

      input?.click();
      expect(debounce).toHaveBeenCalledTimes(1);
    });

    it('should not call handlerClick controller because of disabled', async() => {
      await setup({ attributes: { disabled: true } });
      instance.handlerClick();
      input?.click();

      expect(controller.handlerClick).not.toHaveBeenCalled();
    });
  });
});
