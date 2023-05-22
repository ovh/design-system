import { OdsBreadcrumbAttributes, OdsBreadcrumbController, OdsComponentAttributes2StringAttributes, odsBreadcrumbDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsBreadcrumb } from './osds-breadcrumb';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-breadcrumb', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsBreadcrumb;
  let controller: OdsBreadcrumbController;
  let startSlot: HTMLElement;
  let ulElement: HTMLElement;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbAttributes> } = {}) {
    const minimalAttributes: OdsBreadcrumbAttributes = OdsCreateAttributes(attributes, odsBreadcrumbBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbAttributes>(minimalAttributes, odsBreadcrumbDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsBreadcrumb],
      html: `<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}>My Breadcrumb</osds-breadcrumb>`,
    });

    root = page.root;
    instance = page.rootInstance;
    startSlot = page.root?.shadowRoot?.querySelector('slot');
    ulElement = page.root?.shadowRoot?.querySelector('ul');
    await page.waitForChanges();
  }

  it('should render', async () => {
    await setup({});
    await page.waitForChanges();

    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('content parent', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup,
    };
    it('should have a slot', async () => {
      await setup({ attributes: {}, html: `<slot></slot>` });
      expect(startSlot).toBeTruthy();
    });
    it('should have a breadcrumb-item', async () => {
      await setup();
      expect(ulElement).toBeTruthy();
      expect(await page.root?.shadowRoot.querySelectorAll('osds-breadcrumb-item')).toBeTruthy();
    });

    // Attributes Unit testing
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup,
    };

    describe('collapsed', () => {
      odsUnitTestAttribute<OdsBreadcrumbAttributes, 'collapsed'>({
        ...getAttributeContextOptions<OdsBreadcrumbAttributes, OsdsBreadcrumb, 'collapsed'>({
          name: 'collapsed',
          list: [false, true],
          defaultValue: odsBreadcrumbDefaultAttributes.collapsed,
          ...config,
        }),
      });
    });
  });
});
