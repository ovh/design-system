jest.mock('@ovhcloud/ods-core/src/components/progress-bar/ods-progress-bar-controller'); // keep jest.mock before any

import {
  OdsProgressBarAttributes,
  OdsProgressBarController,
  OdsComponentAttributes2StringAttributes,
  odsProgressBarDefaultAttributes, OdsButtonAttributes, odsButtonDefaultAttributes, OdsProgressBar,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsProgressBarBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsProgressBar } from './osds-progress-bar';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-progress-bar', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsProgressBar;
  let controller: OdsProgressBarController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsProgressBarAttributes> } = {}) {
    const minimalAttributes: OdsProgressBarAttributes = OdsCreateAttributes(attributes, odsProgressBarBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsProgressBarAttributes>(minimalAttributes, odsProgressBarDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsProgressBar],
      html: `<osds-progress-bar ${OdsStringAttributes2Str(stringAttributes)}>My ProgressBar</osds-progress-bar>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsProgressBarController as unknown as jest.SpyInstance<OdsProgressBarController, unknown[]>).mock.instances[0];
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

    describe('min', () => {
      odsUnitTestAttribute<OdsProgressBarAttributes, 'min'>({
        ...getAttributeContextOptions<OdsProgressBarAttributes, OdsProgressBar, 'min'>({
          name: 'min',
          list: [0, 10, 100],
          defaultValue: odsProgressBarDefaultAttributes.min,
          ...config
        })
      });
      it('should set a min if attribute is added', async () => {
        await setup({ attributes: { min: 10 } });
        if(!page.root) {
          throw new Error('page.root is undefined');
        }
        expect(page.root.min).toBe("10");
      });
    });

    describe('max', () => {
      odsUnitTestAttribute<OdsProgressBarAttributes, 'max'>({
        ...getAttributeContextOptions<OdsProgressBarAttributes, OdsProgressBar, 'max'>({
          name: 'max',
          list: [0, 10, 100],
          defaultValue: odsProgressBarDefaultAttributes.max,
          ...config
        })
      });
      it('should set a max if attribute is added', async () => {
        await setup({ attributes: { max: 20 } });
        if(!page.root) {
          throw new Error('page.root is undefined');
        }
        expect(page.root.max).toBe("20");
      });
    });

    describe('progress', () => {
      odsUnitTestAttribute<OdsProgressBarAttributes, 'progress'>({
        ...getAttributeContextOptions<OdsProgressBarAttributes, OdsProgressBar, 'progress'>({
          name: 'progress',
          list: [0, 10, 100],
          defaultValue: odsProgressBarDefaultAttributes.progress,
          ...config
        })
      });
      it('should set a progress if attribute is added', async () => {
        await setup({ attributes: { progress: 30 } });
        if(!page.root) {
          throw new Error('page.root is undefined');
        }
        expect(page.root.progress).toBe("30");
      });
    })
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });

    it('should call controller.defineProgressCssValue when progress attribute changes', async () => {
      await setup({ attributes: { progress: 30 } });
      expect(controller.defineProgressCssValue).toHaveBeenNthCalledWith(1, '30');
      (root as any).progress = '40';
      expect(controller.defineProgressCssValue).toHaveBeenNthCalledWith(2, '40');
      expect(controller.defineProgressCssValue).toHaveBeenCalledTimes(2);
    });
  });
});
