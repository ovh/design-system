import type { OdsCartManagerAttribute, OdsCartManagerItem, OdsCartManagerSection } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { Ods, OdsI18nHook, OdsLogger } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


const logger = new OdsLogger('osds-cart-manager-e2e');

describe('e2e:osds-cart-manager', () => {
  const baseAttribute = { sections: [] };
  const odsCartItemA: OdsCartManagerItem = { title: 'item 1', price: 3000, vat: 300 };
  let page: E2EPage;
  let el: E2EElement;
  let myPriceFormatter: (num: string | number | undefined) => string;
  let myTranslations: Record<string, string>;
  let myTranslationSystem: (key: string, values: Record<string, string | number | undefined>) => string;
  let i18n: OdsI18nHook;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsCartManagerAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCartManagerAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-manager ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-manager>`, { timeout: 20000 });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-manager');

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

  describe('screenshots', () => {

    xit('should display only a section with an item', async() => {
      Ods.configure().i18n(i18n);
      await setup({
        attributes: {},
        html: `
<osds-cart-manager-header slot="header">
       Résumé de votre commande
</osds-cart-manager-header>
  <span slot="extra">HT / mois </span>
  <span slot="empty">empty !</span>
  <span slot="footer-content">a text</span>
`,
      });
      const sectionsItems: OdsCartManagerSection[] = [{ item: odsCartItemA, options: [] }];


      // todo : why exposing function returns a promise ? not working
      // await page.$eval("osds-cart-manager", async (elm) => {
      //     logger.log("elm", elm, "ici", this.functionToInject);
      //   logger.log('typ', typeof this.functionToInject());
      //   const fct = this.functionToInject;
      //   logger.log('fct', fct);
      //   if (elm) elm.i18n = async (...args) => {
      //     logger.log('calling', args);
      //     await this.functionToInject(...args)
      //   };
      // });

      // await page.evaluate(async () => {
      //   const elm = document.querySelector("osds-cart-manager");
      //   const color = new Promise((resolve, reject) => {
      //     resolve(() => 'hjj');
      //   });
      //   if (elm) elm.i18n = await color;
      // });

      el.setProperty('sections', sectionsItems);
      el.setProperty('footer', { items: [{ total: 'total' }] });
      await page.waitForChanges();

      await page.evaluate(() => {
        const element = document.querySelector('osds-cart-manager') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('info: no header and footer', {
        fullPage: false,
        omitBackground: true,
      });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
