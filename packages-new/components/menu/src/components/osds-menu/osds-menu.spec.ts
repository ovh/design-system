jest.mock('./core/controller'); // keep jest.mock before any import
jest.mock('@ovhcloud/ods-cdk/src/components/surface/ocdk-is-surface'); // keep jest.mock before any import

import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsMenu } from './osds-menu';
import { OdsMenuController } from './core/controller'
import { OdsMenuAttributes } from './interfaces/attributes'
import { ocdkIsSurface } from '@ovhcloud/ods-cdk';

const logger = new OdsLogger('osds-menu-spec');

describe('spec:osds-menu', () => {
  logger.log('init');

  let page: SpecPage;
  let instance: OsdsMenu;
  let menuTitle: HTMLSlotElement | null | undefined;
  let menuItemsSlot : HTMLSlotElement | null | undefined;
  let controller: OdsMenuController

  function mockSurfaceElements() {
    ocdkIsSurface.mockImplementation(() => true);
  }

  function findElements(){
    menuTitle = page.root.shadowRoot.querySelector('slot[name="menu-title"]');
    menuItemsSlot = page.root.shadowRoot.querySelector('slot:not([name])');
  }

  afterEach(() => {
    jest.clearAllMocks();
  })

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMenuAttributes>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsMenuAttributes>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsMenu],
      html: `<osds-menu ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-menu>`,
    });

    instance = page.rootInstance;

    controller = (OdsMenuController as unknown as jest.SpyInstance<OdsMenuController, unknown[]>).mock.instances[ 0 ];

    findElements();
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a menu title', async () => {
      await setup({ attributes: {}, html: `` });
      expect(menuTitle).toBeTruthy();
    });

    it('should have an unnamed slot', async () => {
      await setup({ attributes: {}, html: `` });
      expect(menuItemsSlot).toBeTruthy();
    });
  });

  describe('Life cycle', () => {
    it('should call setSelectOptions', async () => {
      await setup({ attributes: { } });
      const spySetMenuItemsButtons = jest.spyOn(instance, 'setMenuItemsButtons');
      await instance.componentDidLoad();
      expect(spySetMenuItemsButtons).toHaveBeenCalled();
    });
  })

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

    it('should call handlerKeyDown of controller', async () => {
      await setup({});
      const key = new KeyboardEvent("keyup", { key : "Enter" });
      instance.handleKeyDown(key);
      expect(controller.handleKeyDown).toHaveBeenCalledTimes(1);
      expect(controller.handleKeyDown).toHaveBeenCalledWith(key);
    });
  })

  describe('controller functions',  () => {
    it('should call afterInit of controller', async () => {
      await setup({});
      expect(controller.afterInit).toHaveBeenCalledTimes(1);
      expect(controller.afterInit).toHaveBeenCalledWith();
    });

    it('should call propagateDisabledToChild of controller', async () => {
      const boolean = true;
      await setup( {} );
      instance.propagateDisabledToChild(boolean);
      expect(controller.propagateDisabledToChild).toHaveBeenCalledWith(boolean);
      expect(controller.propagateDisabledToChild).toHaveBeenCalledTimes(1);
    })

    it('should call checkForClickOutside of controller', async () => {
      const event = new Event('click');
      await setup({});
      instance.checkForClickOutside(event);
      expect(controller.checkForClickOutside).toHaveBeenCalledTimes(1);
      expect(controller.checkForClickOutside).toHaveBeenCalledWith(event);
    })
  })

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('disabled', () => {
      odsUnitTestAttribute<OdsMenuAttributes, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });
  });
});
