jest.mock('@ovhcloud/ods-core/src/components/spinner/ods-spinner-controller'); // keep jest.mock before any

import {
  OdsSpinnerAttributes,
  OdsSpinnerController,
  OdsComponentAttributes2StringAttributes,
  odsSpinnerDefaultAttributes,
  OdsSpinnerSizeList,
  OdsSpinnerModeList,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsSpinnerBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OsdsSpinner } from './osds-spinner';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-spinner', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSpinner;
  let controller: OdsSpinnerController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSpinnerAttributes> } = {}) {
    const minimalAttributes: OdsSpinnerAttributes = OdsCreateAttributes(attributes, odsSpinnerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSpinnerAttributes>(minimalAttributes, odsSpinnerDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsSpinner],
      html: `<osds-spinner ${OdsStringAttributes2Str(stringAttributes)}>My Spinner</osds-spinner>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsSpinnerController as unknown as jest.SpyInstance<OdsSpinnerController, unknown[]>).mock.instances[0];
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
      odsUnitTestAttribute<OdsSpinnerAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsSpinnerAttributes, OsdsSpinner, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsSpinnerDefaultAttributes.flex,
          ...config,
        })
      });

      it('should be flex if attribute is added', async () => {
        await setup({ attributes: { flex: true } });
        expect(instance.flex).toBe(true);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsSpinnerAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsSpinnerAttributes, OsdsSpinner, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsSpinnerDefaultAttributes.contrasted,
          ...config,
        })
      });

      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBe(true);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSpinnerAttributes, 'size'>({
        ...getAttributeContextOptions<OdsSpinnerAttributes, OsdsSpinner, 'size'>({
          name: 'size',
          list: OdsSpinnerSizeList,
          defaultValue: odsSpinnerDefaultAttributes.size,
          ...config,
        })
      });

      it('should set a size if attribute is added', async () => {
        const randomSize = OdsSpinnerSizeList[Math.floor(Math.random() * OdsSpinnerSizeList.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });

    describe('mode', () => {
      odsUnitTestAttribute<OdsSpinnerAttributes, 'mode'>({
        ...getAttributeContextOptions<OdsSpinnerAttributes, OsdsSpinner, 'mode'>({
          name: 'mode',
          list: OdsSpinnerModeList,
          defaultValue: odsSpinnerDefaultAttributes.mode,
          ...config,
        })
      });

      it('should set a mode if attribute is added', async () => {
        const randomMode = OdsSpinnerModeList[Math.floor(Math.random() * OdsSpinnerModeList.length)];
        await setup({ attributes: { mode: randomMode } });
        expect(instance.mode).toBe(randomMode);
      });
    });
  });
});
