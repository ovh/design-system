jest.mock('@ovhcloud/ods-core/src/components/breadcrumb/ods-breadcrumb-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsBreadcrumItemAttributes,
  OdsBreadcrumItemController,
  OdsBreadcrumItemReferrerpolicyList,
  OdsHTMLAnchorElementRelList,
  OdsHTMLAnchorElementTargetList,
  odsBreadcrumbsDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbsBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsBreadcrumbs } from './osds-breadcrumb-item';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-breadcrumb-item', () => {
  let page: SpecPage;
  let mainSlot: HTMLElement;
  let startSlot: HTMLElement;
  let endSlot: HTMLElement;
  let instance: OsdsBreadcrumbs;
  let controller: OdsBreadcrumItemController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsBreadcrumItemAttributes>; html?: string } = {}) {
    const minimalAttributes: OdsBreadcrumItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumItemAttributes>(minimalAttributes, odsBreadcrumbsDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsBreadcrumbs],
      html: `<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-breadcrumb-item>`,
    });

    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root.shadowRoot.querySelector('slot:not([name])');
    startSlot = page.root.shadowRoot.querySelector('slot[name="start"]');
    endSlot = page.root.shadowRoot.querySelector('slot[name="end"]');
    controller = (OdsBreadcrumItemController as unknown as jest.SpyInstance<OdsBreadcrumItemController, unknown[]>).mock.instances[0];
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
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'color'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsBreadcrumbs, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsBreadcrumbsDefaultAttributes.color,
          ...config,
        }),
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsBreadcrumbs, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsBreadcrumbsDefaultAttributes.contrasted,
          ...config,
        }),
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsBreadcrumbs, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsBreadcrumbsDefaultAttributes.disabled,
          ...config,
        }),
      });
    });

    describe('href', () => {
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'href'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsBreadcrumbs, 'href'>({
          name: 'href',
          list: ['oles', 'ipsum'],
          defaultValue: odsBreadcrumbsDefaultAttributes.href,
          ...config,
        }),
      });
    });

    describe('referrerpolicy', () => {
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'referrerpolicy'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsBreadcrumbs, 'referrerpolicy'>({
          name: 'referrerpolicy',
          list: OdsBreadcrumItemReferrerpolicyList,
          defaultValue: odsBreadcrumbsDefaultAttributes.referrerpolicy,
          ...config,
        }),
      });
    });

    describe('rel', () => {
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'rel'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsBreadcrumbs, 'rel'>({
          name: 'rel',
          list: OdsHTMLAnchorElementRelList,
          defaultValue: odsBreadcrumbsDefaultAttributes.rel,
          ...config,
        }),
      });
    });
    /* describe('collapsed', () => {
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'collapsed'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsCart, 'collapsed'>({
          name: 'collapsed',
          list: [true, false],
          defaultValue: odsBreadcrumbsDefaultAttributes.collapsed,
          ...config,
        }),
      });
    });*/
    describe('target', () => {
      odsUnitTestAttribute<OdsBreadcrumItemAttributes, 'target'>({
        ...getAttributeContextOptions<OdsBreadcrumItemAttributes, OsdsBreadcrumbs, 'target'>({
          name: 'target',
          list: OdsHTMLAnchorElementTargetList,
          defaultValue: odsBreadcrumbsDefaultAttributes.target,
          ...config,
        }),
      });
    });
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
