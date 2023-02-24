jest.mock('@ovhcloud/ods-core/src/components/cart-manager/ods-cart-manager-controller'); // keep jest.mock before any

import {
  OdsCartManagerAttributes,
  OdsCartManagerController,
  OdsCartManagerFooter,
  OdsCartManagerSection,
  OdsCartSizeList,
  OdsComponentAttributes2StringAttributes,
  odsCartManagerDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsCartFooterA,
  odsCartItemA,
  odsCartItemOptionA,
  odsCartManagerBaseAttributes,
  odsCartSectionA,
  odsCartSectionsA,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { AnyHTMLElement } from '@stencil/core/internal';
import { OsdsCartItem } from '../osds-cart-item/osds-cart-item';
import { OsdsCartItemOption } from '../osds-cart-item-option/osds-cart-item-option';
import { OsdsCartManager } from './osds-cart-manager';
import { OsdsCartSection } from '../osds-cart-section/osds-cart-section';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-cart-manager', () => {
  let page: SpecPage;
  let slotHeader: HTMLElement;
  let slotEmpty: HTMLElement;
  let slotUnnamed: HTMLElement;
  let sections: NodeListOf<Element & OsdsCartSection>;
  let items: NodeListOf<Element & OsdsCartItem>;
  let itemOptions: NodeListOf<Element & OsdsCartItemOption>;
  let instance: OsdsCartManager;
  let root: (OsdsCartManager & AnyHTMLElement) | undefined;
  let controller: OdsCartManagerController;

  function findElements() {
    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotHeader = page.root.shadowRoot.querySelector('slot[name=header]');
    slotEmpty = page.root.shadowRoot.querySelector('slot[name=empty]');
    slotUnnamed = page.root.shadowRoot.querySelector('slot:not([name])');
    sections = page.root.shadowRoot.querySelectorAll<Element & OsdsCartSection>('osds-cart > osds-cart-section');
    items = page.root.shadowRoot.querySelectorAll<Element & OsdsCartItem>('osds-cart > osds-cart-section > osds-cart-item');
    itemOptions = page.root.shadowRoot.querySelectorAll<Element & OsdsCartItemOption>('osds-cart > osds-cart-section > osds-cart-item-option');
    controller = (OdsCartManagerController as unknown as jest.SpyInstance<OdsCartManagerController, unknown[]>).mock.instances[0];
  }

  async function setup({ attributes, html }: { attributes?: Partial<OdsCartManagerAttributes>, html?: string }) {
    const minimalAttributes: OdsCartManagerAttributes = OdsCreateAttributes(attributes, odsCartManagerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartManagerAttributes>(minimalAttributes, odsCartManagerDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCartManager],
      html: `<osds-cart-manager ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-manager>`,
    });

    instance = page.rootInstance;

    findElements();
    root = (page.root as unknown) as OsdsCartManager & AnyHTMLElement;
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({ attributes: {}, html: '' });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a header slot', async () => {
      await setup({ attributes: {}, html: '' });
      expect(slotHeader).toBeTruthy();
    });

    it('should have an empty slot', async () => {
      await setup({ attributes: {}, html: '' });
      expect(slotEmpty).toBeTruthy();
    });
  });


  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('size', () => {
      odsUnitTestAttribute<OdsCartManagerAttributes, 'size'>({
        ...getAttributeContextOptions<OdsCartManagerAttributes, OsdsCartManager, 'size'>({
          name: 'size',
          list: OdsCartSizeList,
          defaultValue: odsCartManagerDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsCartManagerAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsCartManagerAttributes, OsdsCartManager, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsCartManagerDefaultAttributes.flex,
          ...config
        })
      });
    });

    describe('vatMode', () => {
      odsUnitTestAttribute<OdsCartManagerAttributes, 'vatMode'>({
        ...getAttributeContextOptions<OdsCartManagerAttributes, OsdsCartManager, 'vatMode'>({
          name: 'vatMode',
          list: [true, false],
          defaultValue: odsCartManagerDefaultAttributes.vatMode,
          ...config
        })
      });
    });

    describe('period', () => {
      odsUnitTestAttribute<OdsCartManagerAttributes, 'period'>({
        ...getAttributeContextOptions<OdsCartManagerAttributes, OsdsCartManager, 'period'>({
          name: 'period',
          list: ['P1M', 'P2Y'],
          defaultValue: odsCartManagerDefaultAttributes.period,
          ...config
        })
      });
    });

    // todo currently not in error since it is undefined
    xdescribe('footer', () => {
      it('should warn user with wrong footer type', async () => {
        await setup({ attributes: {}, html: '' });
        root.footer = ('test' as unknown) as OdsCartManagerFooter;
        const throwing = page.waitForChanges();
        await expect(throwing)
          .rejects
          .toThrow()
      });
    });
  });

  describe('cart total price', () => {
    let sectionsItems: OdsCartManagerSection[];

    beforeEach(async () => {
      await setup({ attributes: {}, html: `` });
      jest.spyOn(instance.odsI18n, 'handle')
      sectionsItems = [
        {
          ...odsCartSectionA,
          item: { ...odsCartItemA, price: 3001, vat: 0 },
          options: [{ ...odsCartItemOptionA, price: 102, vat: 0 }]
        }, {
          ...odsCartSectionA,
          item: { ...odsCartItemA, price: 3003, vat: 0 },
          options: [{ ...odsCartItemOptionA, price: 105, vat: 0 }]
        }];
      root.sections = sectionsItems;
    });

    it('should compute the total', async () => {
      jest.spyOn(controller, 'getTotalAmount').mockImplementation(() => 6211)
      root.footer = { items: [{ total: 'total' }] }
      await page.waitForChanges();
      findElements();
      expect(controller.getTotalAmount).toHaveBeenCalledWith();
      expect(instance.odsI18n.handle).toHaveBeenNthCalledWith(6, 'cart.price', { price: 6211 }, instance.i18n);
    });

    it('should override total price', async () => {
      root.footer = { items: [{ total: 'total', price: 5000 }] }
      await page.waitForChanges();
      findElements();
      expect(instance.odsI18n.handle).toHaveBeenNthCalledWith(6, 'cart.price', { price: 5000 }, instance.i18n);
    });

  });

  describe('sections', () => {

    beforeEach(async () => {
      await setup({ attributes: {}, html: `` });
      root.sections = odsCartSectionsA;
      await page.waitForChanges();
      findElements();
    })

    it('should render a section', async () => {
      expect(sections.length).toBe(1);
    });

    it('should render an item', async () => {
      expect(items.length).toBe(1);
    });

    it('should render an itemOption', async () => {
      expect(itemOptions.length).toBe(1);
    });
  });

  describe('footer', () => {
    it('should render a footer', async () => {
      await setup({ attributes: {}, html: `` });
      const footer = odsCartFooterA
      root.footer = footer;
      await page.waitForChanges();
      findElements();
      expect(footer).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call validateFooter when footer change', async () => {
      await setup({ attributes: {} });
      expect(controller.validateFooter).not.toHaveBeenCalled();

      const footer = odsCartFooterA;
      root.footer = footer;
      await page.waitForChanges();

      expect(controller.validateFooter).toHaveBeenCalledTimes(1);
      expect(controller.validateFooter).toHaveBeenCalledWith(footer);
    });

    it('should call getTotalAmount from getTotalAmount method', async () => {
      await setup({ attributes: {} });
      await instance.getTotalAmount();
      expect(controller.getTotalAmount).toHaveBeenCalledTimes(1);
      expect(controller.getTotalAmount).toHaveBeenCalledWith();
    });

    it('should call getProductQuantity from getProductQuantity method', async () => {
      await setup({ attributes: {} });
      await instance.getProductQuantity();
      expect(controller.getProductQuantity).toHaveBeenCalledTimes(1);
      expect(controller.getProductQuantity).toHaveBeenCalledWith();
    });
  });
});
