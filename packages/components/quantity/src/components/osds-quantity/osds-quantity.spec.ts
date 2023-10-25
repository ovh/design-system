jest.mock('./core/controller'); // keep jest.mock before any

import { OdsMockNativeMethod, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import type { AnyHTMLElement } from '@stencil/core/internal';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsQuantityController } from './core/controller';
import type { OdsQuantityAttribute } from './interfaces/attributes';
import { OsdsQuantity } from './osds-quantity';


describe('spec:osds-quantity', () => {
  let page: SpecPage;
  let root: (OsdsQuantity & AnyHTMLElement) | undefined;
  let shadowRoot: ShadowRoot | null;
  let slotMinus: HTMLSlotElement | null | undefined;
  let slotPlus: HTMLSlotElement | null | undefined;
  let slotUnnamed: HTMLSlotElement | null | undefined;
  let instance: OsdsQuantity;
  // let loggerSpyReferences: OdsLoggerSpyReferences;
  let controller: OdsQuantityController;

  /** base html template (avoid boilerplate) */
  const baseHtml = (slots: { minus?: string, unnamed?: string, plus?: string }) =>
    `
    ${slots.minus || slots.minus === '' ? slots.minus : '<button slot="minus"></button>'}
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : '<input type="number">'}
    ${slots.plus || slots.plus === '' ? slots.plus : '<button slot="plus"></button>'}
    `;

  function findElements() {
    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotMinus = shadowRoot?.querySelector('slot[name=minus]');
    slotPlus = shadowRoot?.querySelector('slot[name=plus]');
    slotUnnamed = shadowRoot?.querySelector('slot:not([name])');
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsQuantityAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsQuantityAttribute>(attributes, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsQuantity],
      html: `<osds-quantity ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-quantity>`,
    });

    instance = page.rootInstance;
    root = (page.root as unknown) as OsdsQuantity & AnyHTMLElement;
    shadowRoot = root.shadowRoot;
    controller = (OdsQuantityController as unknown as jest.SpyInstance<OdsQuantityController, unknown[]>).mock.instances[0];
    findElements();
  }

  it('should render', async() => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a minus slot', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotMinus).toBeTruthy();
    });

    it('should have a plus slot', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotPlus).toBeTruthy();
    });

    it('should have an unnamed slot', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotUnnamed).toBeTruthy();
    });
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('disabled', () => {
      odsUnitTestAttribute<OdsQuantityAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });
  });

  describe('methods', () => {
    describe('methods:beforeInit', () => {
      it('should call controller.initInput', async() => {
        await setup();
        expect(controller.initInput).toHaveBeenCalledWith();
        expect(controller.initInput).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:afterInit', () => {
      it('should call controller.processInputValueChange', async() => {
        await setup();
        expect(controller.processInputValueChange).toHaveBeenCalledWith();
        expect(controller.processInputValueChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:afterRender', () => {
      it('should call controller.initSlots', async() => {
        await setup();
        expect(controller.initSlots).toHaveBeenCalledWith();
        expect(controller.initSlots).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:onDestroy', () => {
      it('should call controller.clearEventListeners on destroy', async() => {
        await setup();
        root?.remove();
        await page.waitForChanges();

        expect(controller.clearEventListeners).toHaveBeenCalledWith();
        expect(controller.clearEventListeners).toHaveBeenCalledTimes(1);
      });
    });
  });
});
