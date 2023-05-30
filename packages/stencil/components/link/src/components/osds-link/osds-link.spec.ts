jest.mock('@ovhcloud/ods-core/src/components/link/ods-link-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsLinkAttributes,
  OdsLinkController,
  OdsLinkReferrerpolicyList,
  OdsHTMLAnchorElementRelList,
  OdsHTMLAnchorElementTargetList,
  odsLinkDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsLinkBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsLink } from './osds-link';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-link', () => {
  let page: SpecPage;
  let mainSlot: HTMLElement;
  let startSlot: HTMLElement;
  let endSlot: HTMLElement;
  let instance: OsdsLink;
  let controller: OdsLinkController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsLinkAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsLinkAttributes = OdsCreateAttributes(attributes, odsLinkBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsLinkAttributes>(minimalAttributes, odsLinkDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsLink],
      html: `<osds-link ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-link>`,
    });

    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root.shadowRoot.querySelector('slot:not([name])');
    startSlot = page.root.shadowRoot.querySelector('slot[name="start"]');
    endSlot = page.root.shadowRoot.querySelector('slot[name="end"]');
    controller = (OdsLinkController as unknown as jest.SpyInstance<OdsLinkController, unknown[]>).mock.instances[0];
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
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsLinkAttributes, 'color'>({
        ...getAttributeContextOptions<OdsLinkAttributes, OsdsLink, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsLinkDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsLinkAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsLinkAttributes, OsdsLink, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsLinkDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsLinkAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsLinkAttributes, OsdsLink, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsLinkDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('href', () => {
      odsUnitTestAttribute<OdsLinkAttributes, 'href'>({
        ...getAttributeContextOptions<OdsLinkAttributes, OsdsLink, 'href'>({
          name: 'href',
          list: ['oles', 'ipsum'],
          defaultValue: odsLinkDefaultAttributes.href,
          ...config
        })
      });
    });

    describe('referrerpolicy', () => {
      odsUnitTestAttribute<OdsLinkAttributes, 'referrerpolicy'>({
        ...getAttributeContextOptions<OdsLinkAttributes, OsdsLink, 'referrerpolicy'>({
          name: 'referrerpolicy',
          list: OdsLinkReferrerpolicyList,
          defaultValue: odsLinkDefaultAttributes.referrerpolicy,
          ...config
        })
      });
    });

    describe('rel', () => {
      odsUnitTestAttribute<OdsLinkAttributes, 'rel'>({
        ...getAttributeContextOptions<OdsLinkAttributes, OsdsLink, 'rel'>({
          name: 'rel',
          list: OdsHTMLAnchorElementRelList,
          defaultValue: odsLinkDefaultAttributes.rel,
          ...config
        })
      });
    });

    describe('target', () => {
      odsUnitTestAttribute<OdsLinkAttributes, 'target'>({
        ...getAttributeContextOptions<OdsLinkAttributes, OsdsLink, 'target'>({
          name: 'target',
          list: OdsHTMLAnchorElementTargetList,
          defaultValue: odsLinkDefaultAttributes.target,
          ...config
        })
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
