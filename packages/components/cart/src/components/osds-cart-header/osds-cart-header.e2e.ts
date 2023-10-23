import type {E2EElement, E2EPage} from '@stencil/core/testing';
import type {OdsCartHeaderAttribute} from './interfaces/attributes';
import {OdsLogger} from '@ovhcloud/ods-common-core';
import {newE2EPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

const logger = new OdsLogger('osds-cart-header-e2e');

describe('e2e:osds-cart-header', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({attributes = {}, html = ''}: { attributes?: Partial<OdsCartHeaderAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCartHeaderAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-header ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-header>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-header');

    const root = await page.find('osds-cart-header');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  it('should render', async() => {
    await setup({attributes: {}, html: ''});
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });
});
