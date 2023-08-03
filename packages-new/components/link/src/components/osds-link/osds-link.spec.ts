jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsLinkAttribute } from './interfaces/attributes';
import { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_LINK_REFERRER_POLICY } from './constants/referrer-policies';
import { OdsLinkController } from './core/controller';
import { OsdsLink } from './osds-link';

describe('spec:osds-link', () => {
  let page: SpecPage;
  let mainSlot: HTMLElement | null | undefined;
  let startSlot: HTMLElement | null | undefined;
  let endSlot: HTMLElement | null | undefined;
  let instance: OsdsLink;
  let controller: OdsLinkController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsLinkAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsLinkAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsLink],
      html: `<osds-link ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-link>`,
    });

    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = page.root?.shadowRoot?.querySelector('slot:not([name])');
    startSlot = page.root?.shadowRoot?.querySelector('slot[name="start"]');
    endSlot = page.root?.shadowRoot?.querySelector('slot[name="end"]');
    controller = (OdsLinkController as unknown as jest.SpyInstance<OdsLinkController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
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
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsLinkAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: OdsThemeColorIntent.primary,
        value: OdsThemeColorIntent.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsLinkAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsLinkAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('href', () => {
      odsUnitTestAttribute<OdsLinkAttribute, 'href'>({
        name: 'href',
        defaultValue: DEFAULT_ATTRIBUTE.href,
        newValue: 'oles',
        value: 'ipsum',
        setup: (value) => setup({ attributes: { ['href']: value } }),
        ...config,
      });
    });

    describe('referrerpolicy', () => {
      odsUnitTestAttribute<OdsLinkAttribute, 'referrerpolicy'>({
        name: 'referrerpolicy',
        defaultValue: DEFAULT_ATTRIBUTE.referrerpolicy,
        newValue: ODS_LINK_REFERRER_POLICY.noReferrer,
        value: ODS_LINK_REFERRER_POLICY.origin,
        setup: (value) => setup({ attributes: { ['referrerpolicy']: value } }),
        ...config,
      });
    });

    describe('rel', () => {
      odsUnitTestAttribute<OdsLinkAttribute, 'rel'>({
        name: 'rel',
        defaultValue: DEFAULT_ATTRIBUTE.rel,
        newValue: OdsHTMLAnchorElementRel.author,
        value: OdsHTMLAnchorElementRel.alternate,
        setup: (value) => setup({ attributes: { ['rel']: value } }),
        ...config,
      });
    });

    describe('target', () => {
      odsUnitTestAttribute<OdsLinkAttribute, 'target'>({
        name: 'target',
        defaultValue: DEFAULT_ATTRIBUTE.target,
        newValue: OdsHTMLAnchorElementTarget._parent,
        value: OdsHTMLAnchorElementTarget._top,
        setup: (value) => setup({ attributes: { ['target']: value } }),
        ...config,
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
