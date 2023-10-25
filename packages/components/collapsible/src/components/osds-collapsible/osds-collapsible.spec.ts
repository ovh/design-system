jest.mock('./core/controller'); // keep jest.mock before any

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCollapsibleController } from './core/controller';
import type { OdsCollapsibleAttribute } from './interfaces/attributes';
import { OsdsCollapsible } from './osds-collapsible';


describe('spec:osds-collapsible', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsCollapsible;
  let controller: OdsCollapsibleController;
  let mainSlot: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsCollapsibleAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCollapsibleAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsCollapsible],
      html: `<osds-collapsible ${odsStringAttributes2Str(stringAttributes)}>My Collapsible</osds-collapsible>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsCollapsibleController as unknown as jest.SpyInstance<OdsCollapsibleController, unknown[]>).mock.instances[0];
    mainSlot = page.root?.shadowRoot?.querySelector('slot:not([name])');
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a main slot', async() => {
      await setup({ attributes: {} });
      expect(mainSlot).toBeTruthy();
    });
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('opened', () => {
      odsUnitTestAttribute<OdsCollapsibleAttribute, 'opened'>({
        name: 'opened',
        defaultValue: DEFAULT_ATTRIBUTE.opened,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['opened']: value } }),
        ...config,
      });
    });
  });

  describe('controller', () => {
    it('should not call controller.onToggle init component', async() => {
      await setup({ attributes: { opened: false } });
      expect(controller.onToggle).not.toHaveBeenCalled();
    });

    it('should call controller.onToggle on open changes', async() => {
      await setup({ attributes: { opened: false } });
      instance.opened = true;
      expect(controller.onToggle).toHaveBeenCalledWith();
      expect(controller.onToggle).toHaveBeenCalledTimes(1);
    });
  });
});
