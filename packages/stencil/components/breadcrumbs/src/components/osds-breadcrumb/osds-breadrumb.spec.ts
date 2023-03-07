jest.mock('@ovhcloud/ods-core/src/components/breadcrumbs/ods-breadcrumbs-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsBreadcrumbsAttributes,
  OdsBreadcrumbsController,
  OdsBreadcrumbsReferrerpolicyList,
  OdsHTMLAnchorElementRelList,
  OdsHTMLAnchorElementTargetList,
  odsBreadcrumbsDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbsBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsBreadcrumbs } from './osds-breadcrumb';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-breadcrumb', () => {
  let page: SpecPage;
  let mainSlot: HTMLElement;
  let startSlot: HTMLElement;
  let endSlot: HTMLElement;
  let instance: OsdsBreadcrumbs;
  let controller: OdsBreadcrumbsController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsBreadcrumbsAttributes>; html?: string } = {}) {
    const minimalAttributes: OdsBreadcrumbsAttributes = OdsCreateAttributes(attributes, odsBreadcrumbsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbsAttributes>(minimalAttributes, odsBreadcrumbsDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsBreadcrumbs],
      html: `<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-breadcrumb>`,
    });

    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root.shadowRoot.querySelector('slot:not([name])');
    startSlot = page.root.shadowRoot.querySelector('slot[name="start"]');
    endSlot = page.root.shadowRoot.querySelector('slot[name="end"]');
    controller = (OdsBreadcrumbsController as unknown as jest.SpyInstance<OdsBreadcrumbsController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a start slot', async () => {
      await setup({ attributes: {}, html: `<slot name='start'></slot>` });
      expect(startSlot).toBeTruthy();
    });

    it('should have a main slot', async () => {
      await setup({ attributes: {}, html: `<slot></slot>` });
      expect(mainSlot).toBeTruthy();
    });

    it('should have a end slot', async () => {
      await setup({ attributes: {}, html: `<slot name='end'></slot>` });
      expect(endSlot).toBeTruthy();
    });
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup,
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsBreadcrumbsAttributes, 'color'>({
        ...getAttributeContextOptions<OdsBreadcrumbsAttributes, OsdsBreadcrumbs, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsBreadcrumbsDefaultAttributes.color,
          ...config,
        }),
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsBreadcrumbsAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsBreadcrumbsAttributes, OsdsBreadcrumbs, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsBreadcrumbsDefaultAttributes.contrasted,
          ...config,
        }),
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsBreadcrumbsAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsBreadcrumbsAttributes, OsdsBreadcrumbs, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsBreadcrumbsDefaultAttributes.disabled,
          ...config,
        }),
      });
    });
    describe('active', () => {
      odsUnitTestAttribute<OdsBreadcrumbsAttributes, 'active'>({
        ...getAttributeContextOptions<OdsBreadcrumbsAttributes, OsdsBreadcrumbs, 'active'>({
          name: 'active',
          list: [false, true],
          defaultValue: odsBreadcrumbsDefaultAttributes.active,
          ...config,
        }),
      });
    });

    describe('href', () => {
      odsUnitTestAttribute<OdsBreadcrumbsAttributes, 'href'>({
        ...getAttributeContextOptions<OdsBreadcrumbsAttributes, OsdsBreadcrumbs, 'href'>({
          name: 'href',
          list: ['oles', 'ipsum'],
          defaultValue: odsBreadcrumbsDefaultAttributes.href,
          ...config,
        }),
      });
    });


  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
}
