jest.mock('./core/controller'); // keep jest.mock before any

import type {AnyHTMLElement} from '@stencil/core/internal';
import type {SpecPage} from '@stencil/core/testing';
import type {OdsCartManagerAttribute, OdsCartManagerFooter, OdsCartManagerFooterItem, OdsCartManagerItem, OdsCartManagerSection, OdsCartManagerTotal} from './interfaces/attributes';
import type {OsdsCartItem} from '../osds-cart-item/osds-cart-item';
import type {OsdsCartItemOption} from '../osds-cart-item-option/osds-cart-item-option';
import type {OsdsCartSection} from '../osds-cart-section/osds-cart-section';
import {newSpecPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {ODS_CART_SIZE} from '../osds-cart/constants/cart-size';
import {OdsCartManagerController} from './core/controller';
import {OsdsCartManager} from './osds-cart-manager';

describe('spec:osds-cart-manager', () => {
  const baseAttribute = {sections: []};
  const odsCartItemA: OdsCartManagerItem = {title: 'item 1', price: 3000, vat: 300};
  const odsCartItemOptionA: OdsCartManagerItem = {title: 'option 1', price: 1000, vat: 200};
  const odsCartSectionA: OdsCartManagerSection = {item: odsCartItemA, options: [odsCartItemOptionA]};
  const odsCartSectionsA: OdsCartManagerSection[] = [odsCartSectionA];
  const odsCartFooterItemA: OdsCartManagerFooterItem = {title: 'footer item 1', price: 1500};
  const odsCartTotalA: OdsCartManagerTotal = {total: 'Total', price: 1500};
  const odsCartFooterA: OdsCartManagerFooter = {items: [odsCartFooterItemA, odsCartTotalA]};
  let page: SpecPage;
  let slotHeader: HTMLElement | null | undefined;
  let slotEmpty: HTMLElement | null | undefined;
  let sections: NodeListOf<Element & OsdsCartSection> | null | undefined;
  let items: NodeListOf<Element & OsdsCartItem> | null | undefined;
  let itemOptions: NodeListOf<Element & OsdsCartItemOption> | null | undefined;
  let instance: OsdsCartManager;
  let root: (OsdsCartManager & AnyHTMLElement) | undefined;
  let controller: OdsCartManagerController;

  function findElements() {
    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotHeader = page.root?.shadowRoot?.querySelector('slot[name=header]');
    slotEmpty = page.root?.shadowRoot?.querySelector('slot[name=empty]');
    sections = page.root?.shadowRoot?.querySelectorAll<Element & OsdsCartSection>('osds-cart > osds-cart-section');
    items = page.root?.shadowRoot?.querySelectorAll<Element & OsdsCartItem>('osds-cart > osds-cart-section > osds-cart-item');
    itemOptions = page.root?.shadowRoot?.querySelectorAll<Element & OsdsCartItemOption>('osds-cart > osds-cart-section > osds-cart-item-option');
    controller = (OdsCartManagerController as unknown as jest.SpyInstance<OdsCartManagerController, unknown[]>).mock.instances[0];
  }

  async function setup({attributes = {}, html = ''}: { attributes?: Partial<OdsCartManagerAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCartManagerAttribute>({...baseAttribute, ...attributes}, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsCartManager],
      html: `<osds-cart-manager ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-manager>`,
    });

    instance = page.rootInstance;

    findElements();
    root = (page.root as unknown) as OsdsCartManager & AnyHTMLElement;
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({attributes: {}, html: ''});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a header slot', async() => {
      await setup({attributes: {}, html: ''});
      expect(slotHeader).toBeTruthy();
    });

    it('should have an empty slot', async() => {
      await setup({attributes: {}, html: ''});
      expect(slotEmpty).toBeTruthy();
    });
  });


  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('size', () => {
      odsUnitTestAttribute<OdsCartManagerAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_CART_SIZE.sm,
        value: ODS_CART_SIZE.sm,
        setup: (value) => setup({attributes: {['size']: value}}),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsCartManagerAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (value) => setup({attributes: {['inline']: value}}),
        ...config,
      });
    });

    describe('vatMode', () => {
      odsUnitTestAttribute<OdsCartManagerAttribute, 'vatMode'>({
        name: 'vatMode',
        defaultValue: DEFAULT_ATTRIBUTE.vatMode,
        newValue: true,
        value: false,
        setup: (value) => setup({attributes: {['vatMode']: value}}),
        ...config,
      });
    });

    describe('period', () => {
      odsUnitTestAttribute<OdsCartManagerAttribute, 'period'>({
        name: 'period',
        defaultValue: DEFAULT_ATTRIBUTE.period,
        newValue: 'P1M',
        value: 'P2Y',
        setup: (value) => setup({attributes: {['period']: value}}),
        ...config,
      });
    });

    // TODO currently not in error since it is undefined
    xdescribe('footer', () => {
      it('should warn user with wrong footer type', async() => {
        await setup({attributes: {}, html: ''});
        // root.footer = ('test' as unknown) as OdsCartManagerFooter;
        const throwing = page.waitForChanges();
        await expect(throwing)
          .rejects
          .toThrow();
      });
    });
  });

  describe('cart total price', () => {
    let sectionsItems: OdsCartManagerSection[];

    beforeEach(async() => {
      await setup({attributes: {}, html: ''});
      jest.spyOn(instance.odsI18n, 'handle');
      sectionsItems = [
        {
          ...odsCartSectionA,
          item: {...odsCartItemA, price: 3001, vat: 0},
          options: [{...odsCartItemOptionA, price: 102, vat: 0}],
        }, {
          ...odsCartSectionA,
          item: {...odsCartItemA, price: 3003, vat: 0},
          options: [{...odsCartItemOptionA, price: 105, vat: 0}],
        }];
      root!.sections = sectionsItems;
    });

    it('should compute the total', async() => {
      jest.spyOn(controller, 'getTotalAmount').mockImplementation(() => 6211);
      root!.footer = {items: [{total: 'total'}]};
      await page.waitForChanges();
      findElements();
      expect(controller.getTotalAmount).toHaveBeenCalledWith();
      expect(instance.odsI18n.handle).toHaveBeenNthCalledWith(6, 'cart.price', {price: 6211}, instance.i18n);
    });

    it('should override total price', async() => {
      root!.footer = {items: [{total: 'total', price: 5000}]};
      await page.waitForChanges();
      findElements();
      expect(instance.odsI18n.handle).toHaveBeenNthCalledWith(6, 'cart.price', {price: 5000}, instance.i18n);
    });

  });

  describe('sections', () => {

    beforeEach(async() => {
      await setup({attributes: {}, html: ''});
      root!.sections = odsCartSectionsA;
      await page.waitForChanges();
      findElements();
    });

    it('should render a section', async() => {
      expect(sections?.length).toBe(1);
    });

    it('should render an item', async() => {
      expect(items?.length).toBe(1);
    });

    it('should render an itemOption', async() => {
      expect(itemOptions?.length).toBe(1);
    });
  });

  describe('footer', () => {
    it('should render a footer', async() => {
      await setup({attributes: {}, html: ''});
      const footer = odsCartFooterA;
      root!.footer = footer;
      await page.waitForChanges();
      findElements();
      expect(footer).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call validateFooter when footer change', async() => {
      await setup({attributes: {}});
      expect(controller.validateFooter).not.toHaveBeenCalled();

      const footer = odsCartFooterA;
      root!.footer = footer;
      await page.waitForChanges();

      expect(controller.validateFooter).toHaveBeenCalledTimes(1);
      expect(controller.validateFooter).toHaveBeenCalledWith(footer);
    });

    it('should call getTotalAmount from getTotalAmount method', async() => {
      await setup({attributes: {}});
      await instance.getTotalAmount();
      expect(controller.getTotalAmount).toHaveBeenCalledTimes(1);
      expect(controller.getTotalAmount).toHaveBeenCalledWith();
    });

    it('should call getProductQuantity from getProductQuantity method', async() => {
      await setup({attributes: {}});
      await instance.getProductQuantity();
      expect(controller.getProductQuantity).toHaveBeenCalledTimes(1);
      expect(controller.getProductQuantity).toHaveBeenCalledWith();
    });
  });
});
