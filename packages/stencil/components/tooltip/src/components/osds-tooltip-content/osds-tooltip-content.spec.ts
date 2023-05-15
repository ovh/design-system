jest.mock('@ovhcloud/ods-core/src/components/tooltip-content/ods-tooltip-content-controller'); // keep jest.mock before any

import {
  OdsTooltipContentAttributes,
  OdsTooltipContentController,
  OdsComponentAttributes2StringAttributes,
  odsTooltipContentDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsTooltipContentBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsTooltipContent } from './osds-tooltip-content';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-tooltip-content', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTooltipContent;
  let controller: OdsTooltipContentController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTooltipContentAttributes> } = {}) {
    const minimalAttributes: OdsTooltipContentAttributes = OdsCreateAttributes(attributes, odsTooltipContentBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTooltipContentAttributes>(minimalAttributes, odsTooltipContentDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsTooltipContent],
      html: `<osds-tooltip-content ${OdsStringAttributes2Str(stringAttributes)}>My Tooltip Content</osds-tooltip-content>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsTooltipContentController as unknown as jest.SpyInstance<OdsTooltipContentController, unknown[]>).mock.instances[0];
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
