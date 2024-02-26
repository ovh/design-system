jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsQuantityAttribute } from './interfaces/attributes';
import type { AnyHTMLElement } from '@stencil/core/internal';
import type { SpecPage } from '@stencil/core/testing';
import { OdsMockNativeMethod, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsQuantityController } from './core/controller';
import { OsdsQuantity } from './osds-quantity';

describe('spec:osds-quantity', () => {
  let page: SpecPage;
  let root: (OsdsQuantity & AnyHTMLElement) | undefined;
  let shadowRoot: ShadowRoot | null;
  let slotMinus: HTMLSlotElement | null | undefined;
  let slotPlus: HTMLSlotElement | null | undefined;
  let slotUnnamed: HTMLSlotElement | null | undefined;
  let instance: OsdsQuantity;
  let controller: OdsQuantityController;

  const ariaLabel: string = 'Quantity WAI-ARIA label';
  const ariaLabelledby: string = 'Quantity WAI-ARIA labelledby';
  const errorStatus: boolean = true;
  const name: string = 'quantity-component';

  function baseHtml(slots: { minus?: string, unnamed?: string, plus?: string }): string {
    return `
    ${slots.minus || slots.minus === '' ? slots.minus : '<button slot="minus"></button>'}
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : '<input type="number">'}
    ${slots.plus || slots.plus === '' ? slots.plus : '<button slot="plus"></button>'}
    `;
  }

  function findElements(): void {
    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotMinus = shadowRoot?.querySelector('slot[name=minus]');
    slotPlus = shadowRoot?.querySelector('slot[name=plus]');
    slotUnnamed = shadowRoot?.querySelector('slot:not([name])');
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsQuantityAttribute>, html?: string } = {}): Promise<void> {
    const baseAttributes = { ariaLabel: '', ariaLabelledby: '' };
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsQuantityAttribute>({ ...baseAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

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

  it('should render', async(): Promise<void> => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', (): void => {
    it('should have an ariaLabel attribute', async(): Promise<void> => {
      await setup({ attributes: { 'ariaLabel': ariaLabel }, html: baseHtml({}) });
      expect(root).toHaveAttribute('aria-label');
    });

    it('should have an ariaLabelledby attribute', async(): Promise<void> => {
      await setup({ attributes: { 'ariaLabelledby': ariaLabelledby }, html: baseHtml({}) });
      expect(root).toHaveAttribute('aria-labelledby');
    });

    it('should have an error attribute', async(): Promise<void> => {
      await setup({ attributes: { 'error': errorStatus }, html: baseHtml({}) });
      expect(root).toHaveAttribute('error');
    });

    it('should have a name attribute', async(): Promise<void> => {
      await setup({ attributes: { 'name': name }, html: baseHtml({}) });
      expect(root).toHaveAttribute('name');
    });
  });

  describe('contents', (): void => {
    it('should have a minus slot', async(): Promise<void> => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotMinus).toBeTruthy();
    });

    it('should have a plus slot', async(): Promise<void> => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotPlus).toBeTruthy();
    });

    it('should have an unnamed slot', async(): Promise<void> => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(slotUnnamed).toBeTruthy();
    });
  });

  describe('attributes', (): void => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('disabled', (): void => {
      odsUnitTestAttribute<OdsQuantityAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });
  });

  describe('methods', (): void => {
    describe('methods:beforeInit', (): void => {
      it('should call controller.initInput', async(): Promise<void> => {
        await setup();
        expect(controller.initInput).toHaveBeenCalledWith();
        expect(controller.initInput).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:afterInit', (): void => {
      it('should call controller.processInputValueChange', async(): Promise<void> => {
        await setup();
        expect(controller.processInputValueChange).toHaveBeenCalledWith();
        expect(controller.processInputValueChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:afterRender', (): void => {
      it('should call controller.initSlots', async(): Promise<void> => {
        await setup();
        expect(controller.initSlots).toHaveBeenCalledWith();
        expect(controller.initSlots).toHaveBeenCalledTimes(1);
      });
    });

    describe('methods:onDestroy', (): void => {
      it('should call controller.clearEventListeners on destroy', async(): Promise<void> => {
        await setup();
        root?.remove();
        await page.waitForChanges();

        expect(controller.clearEventListeners).toHaveBeenCalledWith();
        expect(controller.clearEventListeners).toHaveBeenCalledTimes(1);
      });
    });
  });
});
