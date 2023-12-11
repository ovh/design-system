jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsBreadcrumbAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsBreadcrumbController } from './core/controller';
import { OsdsBreadcrumb } from './osds-breadcrumb';


describe('spec:osds-breadcrumb', () => {
  const baseAttribute = { items: [] };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsBreadcrumb;
  let controller: OdsBreadcrumbController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsBreadcrumbAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsBreadcrumb],
      html: `<osds-breadcrumb ${odsStringAttributes2Str(stringAttributes)}></osds-breadcrumb>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsBreadcrumbController as unknown as jest.SpyInstance<OdsBreadcrumbController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
    expect(instance.isCollapsed).toBe(true);
  });

  describe('methods', () => {
    describe('onBreadcrumbItemCollapsedClick', () => {
      it('should set the isCollapsed on refresh displayed items', async() => {
        await setup({});

        expect(instance.isCollapsed).toBe(true);
        expect(controller.getBreadcrumbItems).toHaveBeenCalledWith([], true);

        instance.onBreadcrumbItemCollapsedClick();

        expect(instance.isCollapsed).toBe(false);
        expect(controller.getBreadcrumbItems).toHaveBeenCalledWith([], false);
      });
    });
  });
});
