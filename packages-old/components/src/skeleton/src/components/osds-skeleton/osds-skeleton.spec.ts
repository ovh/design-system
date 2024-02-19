import type { OdsSkeletonAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import {
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_SKELETON_SIZE, ODS_SKELETON_SIZES } from './constants/skeleton-size';
import { OsdsSkeleton } from './osds-skeleton';

describe('spec:osds-skeleton', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSkeleton;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSkeletonAttribute> } = {}): Promise<void> {
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
      instance: (): OsdsSkeleton => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('inline', () => {
      odsUnitTestAttribute<OdsSkeletonAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: false,
        ...config,
      });
      it('should be inline if attribute is added', async() => {
        await setup({ attributes: { inline: true } });
        expect(instance.inline).toBe(true);
      });
    });

    describe('randomized', () => {
      odsUnitTestAttribute<OdsSkeletonAttribute, 'randomized'>({
        defaultValue: DEFAULT_ATTRIBUTE.randomized,
        name: 'randomized',
        newValue: true,
        setup: (value) => setup({ attributes: { ['randomized']: value } }),
        value: false,
        ...config,
      });
      it('should be randomized if attribute is added', async() => {
        await setup({ attributes: { randomized: true } });
        expect(instance.randomized).toBe(true);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSkeletonAttribute, 'size'>({
        defaultValue: DEFAULT_ATTRIBUTE.size,
        name: 'size',
        newValue: ODS_SKELETON_SIZE.sm,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        value: ODS_SKELETON_SIZE.md,
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
