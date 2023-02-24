<script setup lang="ts">

import { OsdsCartFooter, OsdsCartHeader, OsdsCartManager } from '@ovhcloud/ods-stencil/components/vue';

// each type you import types from ODS, you will need to import the core
import { Ods, OdsCartManagerFooter, OdsCartManagerSection, OdsExternalLogger, OdsI18nHook } from '@ovhcloud/ods-core';

// a translation system of your app
import { translationSystem } from './translationSystem';

// using the logger embedded inside ODS
const logger: OdsExternalLogger = new (Ods.instance().logger)('[my vue CartManagerUsage]');

// interfacing the translation system with the component
const i18n: OdsI18nHook = (key, values) => {
  logger.log('[i18n for component]', 'ask translating key', { key, values });
  return translationSystem(key, values);
}

// define the sections data of the cart
const sections: OdsCartManagerSection[] = [
  {
    item: {
      subhead: 'item1',
      price: 3000,
      product: true,
      title: 'title item1'
    },
    options: [
      // you can use your own system in the data passed to the cart-manager
      { subhead: 'option1', price: 3000, title: translationSystem('products.title.item1.option1', { gb: '10Tb' }) },
      { subhead: 'option2', price: 3000, title: 'title option2' }
    ]
  },
  {
    item: {
      subhead: 'item2',
      title: 'title item2',
      price: 3000
    },
    options: [
      { subhead: 'option3', price: 3000, title: 'title option3' }
    ]
  }
];

// define the footer data of the cart
const footer: OdsCartManagerFooter = {
  items: [
    { title: 'test', price: 1000 },
    {
      total: translationSystem('my-cart.footer.total'),
      info: 'info',
      extra: '15',
    }
  ]
};

</script>

<template>
  <div>
    <OsdsCartManager :sections="sections" :footer="footer" :i18n="i18n">
      <OsdsCartHeader slot="header">
        {{ translationSystem('my-cart.header.title') }}
      </OsdsCartHeader>
      <span slot="footer-content">{{ translationSystem('my-cart.footer.conditions') }}</span>
      <OsdsCartFooter slot="empty">
        Your order summary is empty
      </OsdsCartFooter>
    </OsdsCartManager>
  </div>
</template>

<style scoped>

</style>
