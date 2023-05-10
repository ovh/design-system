jest.mock('@ovhcloud/ods-core/src/components/spinner/ods-spinner-controller'); // keep jest.mock before any

import {
  OdsSpinnerAttributes,
  OdsSpinnerController,
  OdsComponentAttributes2StringAttributes,
  odsSpinnerDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsSpinnerBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
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

    // Attributes Unit testing
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
