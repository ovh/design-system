import {
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_SKELETON_SIZE, ODS_SKELETON_SIZES } from './constants/skeleton-size';
import type { OdsSkeletonAttribute } from './interfaces/attributes';
import { OsdsSkeleton } from './osds-skeleton';



describe('spec:osds-skeleton', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSkeleton;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSkeletonAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSkeletonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsSkeleton],
      html: `<osds-skeleton ${odsStringAttributes2Str(stringAttributes)}></osds-skeleton>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('inline', () => {
      odsUnitTestAttribute<OdsSkeletonAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
      it('should be inline if attribute is added', async() => {
        await setup({ attributes: { inline: true } });
        expect(instance.inline).toBe(true);
      });
    });

    describe('randomized', () => {
      odsUnitTestAttribute<OdsSkeletonAttribute, 'randomized'>({
        name: 'randomized',
        defaultValue: DEFAULT_ATTRIBUTE.randomized,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['randomized']: value } }),
        ...config,
      });
      it('should be randomized if attribute is added', async() => {
        await setup({ attributes: { randomized: true } });
        expect(instance.randomized).toBe(true);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSkeletonAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_SKELETON_SIZE.sm,
        value: ODS_SKELETON_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });
      it('should set a size if attribute is added', async() => {
        const randomSize = ODS_SKELETON_SIZES[Math.floor(Math.random() * ODS_SKELETON_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
      it('should set a default size', async() => {
        await setup({ attributes: { size: undefined } });
        expect(instance.size).toBe(ODS_SKELETON_SIZE.md);
      });
    });
  });
});
