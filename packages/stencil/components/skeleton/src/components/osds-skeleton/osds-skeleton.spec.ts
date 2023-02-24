import {
  OdsSkeletonAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsSkeletonSize,
  OdsSkeletonSizeList,
  odsSkeletonDefaultAttributes,
} from '@ovhcloud/ods-core';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsGetUnitTestAttributeBaseOptions,
  odsGetUnitTestAttributeContextOptions,
  odsUnitTestAttribute,
  odsSkeletonBaseAttributes,
} from '@ovhcloud/ods-testing';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { OsdsSkeleton } from './osds-skeleton';


describe('spec:osds-skeleton', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSkeleton;

  async function setup({ attributes= {} }: { attributes?: Partial<OdsSkeletonAttributes> } = {}) {
    const minimalAttributes: OdsSkeletonAttributes = OdsCreateAttributes(attributes, odsSkeletonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSkeletonAttributes>(minimalAttributes, odsSkeletonDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsSkeleton],
      html: `<osds-skeleton ${OdsStringAttributes2Str(stringAttributes)}></osds-skeleton>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('flex', () => {
      odsUnitTestAttribute<OdsSkeletonAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsSkeletonAttributes, OsdsSkeleton, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsSkeletonDefaultAttributes.flex,
          ...config,
        })
      });
      it('should be flex if attribute is added', async () => {
        await setup({ attributes: { flex: true } });
        expect(instance.flex).toBe(true);
      });
    });

    describe('randomized', () => {
      odsUnitTestAttribute<OdsSkeletonAttributes, 'randomized'>({
        ...getAttributeContextOptions<OdsSkeletonAttributes, OsdsSkeleton, 'randomized'>({
          name: 'randomized',
          list: [false, true],
          defaultValue: odsSkeletonDefaultAttributes.randomized,
          ...config,
        })
      });
      it('should be randomized if attribute is added', async () => {
        await setup({ attributes: { randomized: true } });
        expect(instance.randomized).toBe(true);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSkeletonAttributes, 'size'>({
        ...getAttributeContextOptions<OdsSkeletonAttributes, OsdsSkeleton, 'size'>({
          name: 'size',
          list: OdsSkeletonSizeList,
          defaultValue: odsSkeletonDefaultAttributes.size,
          ...config,
        })
      });
      it('should set a size if attribute is added', async () => {
        const randomSize = OdsSkeletonSizeList[Math.floor(Math.random() * OdsSkeletonSizeList.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
      it('should set a default size', async () => {
        await setup({ attributes: { size: undefined } });
        expect(instance.size).toBe(OdsSkeletonSize.md);
      });
    });
  });
});
