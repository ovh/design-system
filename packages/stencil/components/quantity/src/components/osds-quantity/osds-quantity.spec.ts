jest.mock('@ovhcloud/ods-core/src/components/quantity/ods-quantity-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  OdsQuantityAttributes,
  OdsQuantityController,
  odsQuantityDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences,
  OdsMockNativeMethod,
  OdsStringAttributes2Str,
  odsQuantityBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { AnyHTMLElement } from '@stencil/core/internal';
import { OdsClearLoggerSpy } from '@ovhcloud/ods-testing/src/jest/ods-clear-logger-spy';
import { OsdsQuantity } from './osds-quantity';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-quantity', () => {
  let page: SpecPage;
  let root: (OsdsQuantity & AnyHTMLElement) | undefined;
  let shadowRoot: ShadowRoot | null;
  let slotMinus: HTMLSlotElement | null | undefined;
  let slotPlus: HTMLSlotElement | null | undefined;
  let slotUnnamed: HTMLSlotElement | null | undefined;
  let instance: OsdsQuantity;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let controller: OdsQuantityController;
  const logger = new OdsLogger('spec:osds-quantity');
  /** base html template (avoid boilerplate) */
  const baseHtml = (slots: { minus?: string, unnamed?: string, plus?: string }) =>
    `
    ${slots.minus || slots.minus === '' ? slots.minus : `<button slot="minus"></button>`}
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : `<input type="number">`}
    ${slots.plus || slots.plus === '' ? slots.plus : `<button slot="plus"></button>`}
    `

  function findElements() {
    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotMinus = shadowRoot?.querySelector('slot[name=minus]');
    slotPlus = shadowRoot?.querySelector('slot[name=plus]');
    slotUnnamed = shadowRoot?.querySelector('slot:not([name])');
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({ loggerMocked, spiedClass: OsdsQuantity });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsQuantityAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsQuantityAttributes = OdsCreateAttributes(attributes, odsQuantityBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsQuantityAttributes>(minimalAttributes, odsQuantityDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsQuantity],
      html: `<osds-quantity ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-quantity>`,
    });

    instance = page.rootInstance;
    root = (page.root as unknown) as OsdsQuantity & AnyHTMLElement;
    shadowRoot = root.shadowRoot;
    controller = (OdsQuantityController as unknown as jest.SpyInstance<OdsQuantityController, unknown[]>).mock.instances[0];
    findElements();
  }

  it('should render', async () => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a minus slot', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotMinus).toBeTruthy();
    });

    it('should have a plus slot', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotPlus).toBeTruthy();
    });

    it('should have an unnamed slot', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotUnnamed).toBeTruthy();
    });
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup: async (options) => {
        await setup({ attributes: options.attributes, html: baseHtml({}) })
      }
    };


    describe('disabled', () => {
      odsUnitTestAttribute<OdsQuantityAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsQuantityAttributes, OsdsQuantity, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsQuantityDefaultAttributes.disabled,
          ...config
        })
      });
    });

  });

  describe('methods', () => {
    describe('methods:beforeInit', () => {
      it('should call controller.initInput', async () => {
        await setup();
        expect(controller.initInput).toHaveBeenCalledWith();
        expect(controller.initInput).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:afterInit', () => {
      it('should call controller.processInputValueChange', async () => {
        await setup();
        expect(controller.processInputValueChange).toHaveBeenCalledWith();
        expect(controller.processInputValueChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:afterRender', () => {
      it('should call controller.initSlots', async () => {
        await setup();
        expect(controller.initSlots).toHaveBeenCalledWith();
        expect(controller.initSlots).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:onDestroy', () => {
      it('should call controller.clearEventListeners on destroy', async () => {
        await setup();
        root.remove();
        await page.waitForChanges();

        expect(controller.clearEventListeners).toHaveBeenCalledWith();
        expect(controller.clearEventListeners).toHaveBeenCalledTimes(1);
      });
    });
  });
});
