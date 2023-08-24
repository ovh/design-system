jest.mock('./core/controller'); // keep jest.mock before any import

import type { SpecPage } from '@stencil/core/testing';
import type { OdsAccordionAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute, OdsUnitTestAttributeType } from '@ovhcloud/ods-common-testing';
import { OsdsAccordion } from './osds-accordion';
import { OdsAccordionController } from './core/controller';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ACCORDION_SIZE } from './constants/accordion-size';

describe('spec:osds-accordion', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsAccordion;
  let summarySlot: HTMLElement | null | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let controller: OdsAccordionController;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsAccordionAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAccordionAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsAccordion],
      html: `<osds-accordion ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-accordion>`
    });

    root = page.root;
    instance = page.rootInstance;
    summarySlot = root?.shadowRoot?.querySelector('slot[name="summary"]');
    mainSlot = root?.shadowRoot?.querySelector('slot:not([name])');

    controller = (OdsAccordionController as unknown as jest.SpyInstance<OdsAccordionController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsAccordionAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: OdsThemeColorIntent.primary,
        value: OdsThemeColorIntent.default,
        setup: (color) => setup({ attributes: { color } }),
        ...config
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsAccordionAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: true,
        value: false,
        setup: (contrasted) => setup({ attributes: { contrasted } }),
        ...config
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsAccordionAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (disabled) => setup({ attributes: { disabled } }),
        ...config
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsAccordionAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: undefined,
        value: ODS_ACCORDION_SIZE.md,
        setup: (size) => setup({ attributes: { size } }),
        ...config
      });
    });

    describe('opened', () => {
      odsUnitTestAttribute<OdsAccordionAttribute, 'opened'>({
        name: 'opened',
        defaultValue: DEFAULT_ATTRIBUTE.opened,
        newValue: true,
        value: false,
        setup: (opened) => setup({ attributes: { opened } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });
  });

  describe('contents', () => {
    it('should have a summary slot', async () => {
      await setup();
      expect(summarySlot).toBeTruthy();
    });

    it('should have a main slot', async () => {
      await setup();
      expect(mainSlot).toBeTruthy();
    });
  });

  describe('events', () => {
    it('odsAccordionToggle', async () => {
      await setup();
      expect(instance.odsAccordionToggle).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call controller.syncOpenedOnDetail after initialization', async () => {
      await setup({attributes: { opened: false }});
      expect(controller.syncOpenedOnDetail).toHaveBeenCalledWith();
      expect(controller.syncOpenedOnDetail).toHaveBeenCalledTimes(1);
    });

    it('should call controller.syncOpenedOnDetail on open changes', async () => {
      await setup({attributes: { opened: false }});
      instance.opened = true;
      expect(controller.syncOpenedOnDetail).toHaveBeenCalledWith();
      expect(controller.syncOpenedOnDetail).toHaveBeenCalledTimes(2); // initialization + opened changed
    });

    it('should call controller.onToggle on click on details', async () => {
      await setup();
      instance.detailsEl?.dispatchEvent(new Event('toggle'));
      expect(controller.onToggle).toHaveBeenCalledWith();
      expect(controller.onToggle).toHaveBeenCalledTimes(1);
    });
  });
});
