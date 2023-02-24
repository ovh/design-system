import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartManager,
  OdsCartManagerAttributes,
  OdsCartManagerSection,
  OdsComponentAttributes2StringAttributes,
  OdsI18nHook,
  OdsLogger,
  odsCartManagerDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartItemA, odsCartManagerBaseAttributes } from '@ovhcloud/ods-testing';

import { osdsE2EElement } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

const logger = new OdsLogger('osds-cart-manager-e2e');

describe('e2e:osds-cart-manager', () => {
  let page: E2EPage;
  let el: osdsE2EElement<OdsCartManager>;
  let slotEmpty: E2EElement;
  let cartElement: E2EElement;
  let footerElement: E2EElement;
  let myPriceFormatter: (num: string | number | undefined) => string;
  let myTranslations: { [key: string]: string };
  let myTranslationSystem: (key: string, values: { [key: string]: string | number | undefined }) => string;
  let i18n: OdsI18nHook;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartManagerAttributes>, html: string }) {
    const minimalAttributes: OdsCartManagerAttributes = OdsCreateAttributes(attributes, odsCartManagerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartManagerAttributes>(minimalAttributes, odsCartManagerDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-manager ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-manager>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-manager');

    slotEmpty = await page.find('osds-cart-manager >>> slot[name=empty]');
    cartElement = await page.find('osds-cart-manager >>> osds-cart');
    footerElement = await cartElement.find('osds-cart-footer >>> slot:not([name])');

    myPriceFormatter = (num) => {
      return num && typeof num === 'number' ? (
        num
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      ) : '';
    };

    myTranslations = {
      'cart.total.info': '{{products}} produits',
      'cart.price': '€ {{price}}',
    };


    // translation system to replace with the application one
    myTranslationSystem = (key, values) => {
      logger.log('[i18nHook] translating...', { key, values });
      let translation = myTranslations[key];
      Object.keys(values)
        .forEach((valueName) => {
          if (typeof values[valueName] === 'number' && valueName === 'price') {
            values[valueName] = myPriceFormatter(values[valueName]);
          }
          translation = translation.replace(`{{${valueName}}}`, `${values[valueName]}`);
        });
      return key;
    };

    // interfacing the translation system with the component
    i18n = (key, values) => {
      return myTranslationSystem(key, values);
    };

    await page.exposeFunction('functionToInject', i18n); // EXPOSE


  }

  it('should render', async () => {
    await setup({ attributes: {}, html: `` });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should display a title', async () => {
    await setup({
      attributes: {}, html: `
<osds-cart-manager-header slot="header">
       Résumé de votre commande
</osds-cart-manager-header>
`,
    });

  });


  it('should display the empty slot', async () => {
    await setup({
      attributes: {}, html: ``,
    });

    logger.log('empty', slotEmpty);
    expect(slotEmpty).toBeTruthy();

    // todo : update of unnamed content does not remove the empty slot
    // el.innerHTML = `<osds-cart-manager-item></osds-cart-manager-item>`;
    // await el.callMethod('refresh');
    // await page.waitForChanges();
    //
    // logger.log(slotEmpty);
    // expect(slotEmpty).toBeFalsy();
  });

  xit('should have a footer', async () => {
    await setup({
      attributes: {}, html: ``,
    });

    logger.log('footer', footerElement);
    expect(footerElement).toBeTruthy();
  });

  describe('methods', () => {

    describe('getProductQuantity', () => {

      it('should get the number of product', async () => {
        await setup({
          attributes: {}, html: ``,
        });

        let quantity = await el.callMethod('getProductQuantity');
        expect(quantity).toBe(0);

        const sections: OdsCartManagerSection[] = [
          { item: { ...odsCartItemA, title: 'a', price: 3000, product: true }, options: [] },
          { item: { ...odsCartItemA, title: 'b', price: 3000 }, options: [{ title: 'c', price: 600, product: true }] },
        ];
        el.setProperty('flex', true);
        el.setProperty('sections', sections);

        await page.waitForChanges();

        quantity = await el.callMethod('getProductQuantity');
        expect(quantity).toBe(2);
      });
    });

    describe('getTotalAmount', () => {

      it('should get the total amount', async () => {
        await setup({
          attributes: {}, html: ``,
        });

        let price = await el.callMethod('getTotalAmount');
        expect(price).toBe(0);

        const sections: OdsCartManagerSection[] = [
          { item: { ...odsCartItemA, title: 'a', price: 3000, vat: 600, product: true }, options: [] },
          {
            item: { ...odsCartItemA, title: 'b', price: 3000, vat: 600 },
            options: [{ title: 'c', price: 600, vat: 120 }],
          },
        ];
        const vatMode = true;
        el.setProperty('sections', sections);
        el.setProperty('vatMode', vatMode);

        await page.waitForChanges();

        price = await el.callMethod('getTotalAmount');
        expect(price).toBe(7920);
      });
    });
  });


});
