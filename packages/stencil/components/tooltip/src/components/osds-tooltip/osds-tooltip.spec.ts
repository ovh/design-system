jest.mock('@ovhcloud/ods-core/src/components/tooltip/ods-tooltip-controller'); // keep jest.mock before any

import {
  OdsTooltipAttributes,
  OdsTooltipController,
  OdsComponentAttributes2StringAttributes,
  odsTooltipDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsTooltipBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsTooltip } from './osds-tooltip';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-tooltip', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTooltip;
  let controller: OdsTooltipController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTooltipAttributes> } = {}) {
    const minimalAttributes: OdsTooltipAttributes = OdsCreateAttributes(attributes, odsTooltipBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTooltipAttributes>(minimalAttributes, odsTooltipDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsTooltip],
      html: `<osds-tooltip ${OdsStringAttributes2Str(stringAttributes)}>My Tooltip</osds-tooltip>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsTooltipController as unknown as jest.SpyInstance<OdsTooltipController, unknown[]>).mock.instances[0];
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
