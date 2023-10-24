import type { E2EPage } from '@stencil/core/testing';
import type { odsPickMethods } from '@ovhcloud/ods-common-core';
import type { SerializableOrJSHandle } from 'puppeteer';

/**
 * set a property on a component that is a function.
 * it will manage the scope and declare your function as global in order to access it into
 * the context of the page evaluation.
 *
 * passing through a page eval may be work better than :
 * ```
 * // here this does not work - must use page.$eval
 * el.setProperty('save', myCbk);
 * ```
 *
 * @see https://github.com/puppeteer/puppeteer/issues/982
 * @param page - stencil page context of test
 * @param selector - A selector to query the component to test
 * @param property - name of the property to set
 * @param fct - function to set as value of the property
 */
async function osdsSetPropertyFunction<Attributes,
  K extends odsPickMethods<Attributes> = odsPickMethods<Attributes>,
  T extends keyof K = keyof K>(page: E2EPage, selector: string, property: T, fct: K[T]): Promise<void> {
  function cbk() {
    return fct;
  }

  await page.exposeFunction('cbk', cbk);
  const props = { property };
  await page.$eval(selector,
    (elm: Element, properties) => {
      const property = (properties as typeof props).property;
      const el = elm as unknown as K;
      el[ property ] = cbk();
    },
    props as SerializableOrJSHandle,
  );
}

export {
  osdsSetPropertyFunction,
};