jest.mock('./core/controller'); // keep jest.mock before any import

import type { OdsTableAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTableController } from './core/controller';
import { OsdsTable } from './osds-table';

describe('spec:osds-table', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTable;
  let controller: OdsTableController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTableAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTableAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTable],
      html: `<osds-table ${odsStringAttributes2Str(stringAttributes)}></osds-table>`,
    });

    root = page.root;
    instance = page.rootInstance;

    controller = (OdsTableController as unknown as jest.SpyInstance<OdsTableController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();
    expect(root).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsTable => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('size', () => {
      odsUnitTestAttribute<OdsTableAttribute, 'size'>({
        defaultValue: DEFAULT_ATTRIBUTE.size,
        name: 'size',
        newValue: 'sm',
        setup: (value: string|undefined) => setup({ attributes: { ['size']: value } }),
        value: 'md',
        ...config,
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsTableAttribute, 'variant'>({
        defaultValue: DEFAULT_ATTRIBUTE.variant,
        name: 'variant',
        newValue: 'striped',
        setup: (value: string|undefined) => setup({ attributes: { ['variant']: value } }),
        value: '',
        ...config,
      });
    });
  });

  describe('@Watch : validate', () => {
    it('should call controller.validateSize on init and on size changes', async() => {
      await setup();
      expect(controller.validateSize).toHaveBeenCalledWith(DEFAULT_ATTRIBUTE.size);

      root?.setAttribute('size', 'sm');
      await page.waitForChanges();

      expect(controller.validateSize).toHaveBeenCalledWith('sm');
      expect(controller.validateSize).toHaveBeenCalledTimes(2);
    });

    it('should call controller.validateVariant on init and on variant changes', async() => {
      await setup();
      expect(controller.validateVariant).toHaveBeenCalledWith(DEFAULT_ATTRIBUTE.variant);

      root?.setAttribute('variant', 'striped');
      await page.waitForChanges();

      expect(controller.validateVariant).toHaveBeenCalledWith('striped');
      expect(controller.validateVariant).toHaveBeenCalledTimes(2);
    });

  });
});
