import type { OsdsCartManager } from '@ovhcloud/ods-components';
import { OdsLogger } from '@ovhcloud/ods-common-core';

const logger = new OdsLogger('OsdsCart-stories');
export const CartManagerPlay = async() => {
  const myPriceFormatter = (num: number) => {
    return (
      num
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    );
  };

  const myTranslations: any = {
    'cart.total.info': '{{products}} products',
    'cart.price': '{{price}} ¤',
    'cart.extra': '{{extra}}',
    'footer.item.price': '{{price}} ¤',
  };

  const sections = [
    {
      item: {
        subhead: 'Main product subhead',
        title: 'Main product title',
        price: 3000,
        extra: 'ex.VAT / month',
        vat: 600,
        product: true,
      },
      options: [
        { subhead: 'Option available on this product', title: 'Option title', price: 3000, extra: 'ex.VAT / month', vat: 600 },
      ],
    },
    {
      item: {
        subhead: 'Another product subhead',
        title: 'Another product title',
        price: 2000,
        extra: 'ex.VAT / month',
        vat: 400,
        product: true,
      },
      options: [
        { subhead: 'Another option subhead', title: 'Another option title', price: 3000, extra: 'ex.VAT / month', vat: 600 },
        { subhead: 'Another option subhead', title: 'Another option title', price: 3000, extra: 'ex.VAT / month', vat: 600 },
      ],
    },
  ];

  const footer = {
    items: [
      { title: 'Next month', price: 2000 },
      {
        total: 'Total',
        info: 'info',
        extra: 'extra',
      },
    ],
  };

  // if (typeof CartManager === "undefined") {
  //   logger.log("test");
  //   footer.extra = args?.vatMode ? "include" : "ex.VAT / month"
  // }

  // translation system to replace with the application one
  const translationSystem = (key: string, values: any) => {
    logger.log('[i18nHook] translating...', { key, values });
    let translation = myTranslations[key];
    Object.keys(values)
      .forEach((valueName) => {
        if (typeof values[valueName] === 'number' && valueName === 'price') {
          values[valueName] = myPriceFormatter(values[valueName]);
        }
        translation = translation.replace('{{'+ valueName + '}}', values[valueName]);
      });
    return translation;
  };

  // interfacing the translation system with the component
  const i18n = (key: string, values: any) => {
    return translationSystem(key, values);
  };

  document.addEventListener('odsInitialized', ({ detail }) => {
    const instance = detail.instance;
    instance.i18n(i18n);
  });

  const cartManagerElement: (HTMLElement & OsdsCartManager) | null = document.getElementById('cart-manager-a') as (HTMLElement & OsdsCartManager);
  cartManagerElement.sections = sections;
  cartManagerElement.footer = footer;
  cartManagerElement.i18n = i18n;
};
