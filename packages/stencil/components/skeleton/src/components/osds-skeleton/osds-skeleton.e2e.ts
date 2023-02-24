import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  OdsSkeletonAttributes,
  odsSkeletonDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsSkeletonBaseAttributes,
} from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-skeleton-e2e');

describe('e2e:osds-skeleton', () => {
  let page: E2EPage;
  let el: E2EElement;
  let skeletonElement: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsSkeletonAttributes> }) {
    const minimalAttributes: OdsSkeletonAttributes = OdsCreateAttributes(attributes, odsSkeletonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSkeletonAttributes>(minimalAttributes, odsSkeletonDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-skeleton ${OdsStringAttributes2Str(stringAttributes)}></osds-skeleton>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-skeleton');

    skeletonElement = await page.find('osds-skeleton >>> div');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(skeletonElement).not.toBeNull();
  });
});
