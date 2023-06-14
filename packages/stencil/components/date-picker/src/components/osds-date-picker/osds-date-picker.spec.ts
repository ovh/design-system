jest.mock('@ovhcloud/ods-core/src/components/date-picker/ods-date-picker-controller'); // keep jest.mock before any

import {
  OdsDatePickerAttributes,
  OdsDatePickerController,
  OdsComponentAttributes2StringAttributes,
  odsDatePickerDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsDatePickerBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsDatePicker } from './osds-date-picker';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-date-picker', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDatePicker;
  let controller: OdsDatePickerController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatePickerAttributes> } = {}) {
    const minimalAttributes: OdsDatePickerAttributes = OdsCreateAttributes(attributes, odsDatePickerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsDatePickerAttributes>(minimalAttributes, odsDatePickerDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsDatePicker],
      html: `<osds-date-picker ${OdsStringAttributes2Str(stringAttributes)}>My DatePicker</osds-date-picker>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsDatePickerController as unknown as jest.SpyInstance<OdsDatePickerController, unknown[]>).mock.instances[0];
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
