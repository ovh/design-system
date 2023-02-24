jest.mock('@ovhcloud/ods-core/src/components/accordion/ods-accordion-controller'); // keep jest.mock before any import

import { OdsAccordionAttributes, OdsAccordionController, OdsAccordionSizeList, OdsComponentAttributes2StringAttributes, odsAccordionDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, OdsUnitTestAttributeType, odsAccordionBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsAccordion } from './osds-accordion';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-accordion', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsAccordion;
  let summarySlot: HTMLElement | null | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let controller: OdsAccordionController;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsAccordionAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsAccordionAttributes = OdsCreateAttributes(attributes, odsAccordionBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsAccordionAttributes>(minimalAttributes, odsAccordionDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsAccordion],
      html: `<osds-accordion ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-accordion>`
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
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsAccordionAttributes, 'color'>({
        ...getAttributeContextOptions<OdsAccordionAttributes, OsdsAccordion, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsAccordionDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsAccordionAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsAccordionAttributes, OsdsAccordion, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsAccordionDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsAccordionAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsAccordionAttributes, OsdsAccordion, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsAccordionDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsAccordionAttributes, 'size'>({
        ...getAttributeContextOptions<OdsAccordionAttributes, OsdsAccordion, 'size'>({
          name: 'size',
          list: OdsAccordionSizeList,
          defaultValue: odsAccordionDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('opened', () => {
      odsUnitTestAttribute<OdsAccordionAttributes, 'opened'>({
        ...getAttributeContextOptions<OdsAccordionAttributes, OsdsAccordion, 'opened'>({
          name: 'opened',
          list: [false, true],
          defaultValue: odsAccordionDefaultAttributes.opened,
          ...config
        }),
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
