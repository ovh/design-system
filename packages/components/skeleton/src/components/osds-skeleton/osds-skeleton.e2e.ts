import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsSkeletonAttribute } from './interfaces/attributes';

describe('e2e:osds-skeleton', () => {
  let page: E2EPage;
  let el: E2EElement;
  let skeletonElement: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsSkeletonAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSkeletonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-skeleton ${odsStringAttributes2Str(stringAttributes)}></osds-skeleton>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-skeleton');

    skeletonElement = await page.find('osds-skeleton >>> div');
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(skeletonElement).not.toBeNull();
  });
});
