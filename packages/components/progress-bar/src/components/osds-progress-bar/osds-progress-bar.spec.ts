jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsProgressBarAttribute } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsProgressBarController } from './core/controller';
import { OsdsProgressBar } from './osds-progress-bar';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

describe('spec:osds-progress-bar', () => {
  let page: SpecPage;
  let instance: OsdsProgressBar;
  let controller: OdsProgressBarController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsProgressBarAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsProgressBarAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsProgressBar],
      html: `<osds-progress-bar ${odsStringAttributes2Str(stringAttributes)}>My Progress Bar</osds-progress-bar>`,
    });

    instance = page.rootInstance;
    controller = (OdsProgressBarController as unknown as jest.SpyInstance<OdsProgressBarController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('max', () => {
      odsUnitTestAttribute<OdsProgressBarAttribute, 'max'>({
        name: 'max',
        defaultValue: DEFAULT_ATTRIBUTE.max,
        newValue: 50,
        value: 0,
        setup: (value) => setup({ attributes: { ['max']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsProgressBarAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 50,
        value: 0,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async() => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
