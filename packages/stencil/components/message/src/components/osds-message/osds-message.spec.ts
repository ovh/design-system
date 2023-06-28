jest.mock('@ovhcloud/ods-core/src/components/message/ods-message-controller'); // keep jest.mock before any import

import {
  OdsComponentAttributes2StringAttributes,
  OdsIconName,
  OdsMessageAttributes,
  OdsMessageController,
  OdsMessageType,
  OdsMessageTypeList,
  odsMessageDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsMessageBaseAttributes,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OsdsMessage } from './osds-message';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-message', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsMessage;
  let controller: OdsMessageController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsMessageAttributes> } = {}) {
    const minimalAttributes: OdsMessageAttributes = OdsCreateAttributes(attributes, odsMessageBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMessageAttributes>(minimalAttributes, odsMessageDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsMessage],
      html: `<osds-message ${OdsStringAttributes2Str(stringAttributes)}>My Message</osds-message>`,
    });

    root = page.root;
    instance = page.rootInstance;

    controller = (OdsMessageController as unknown as jest.SpyInstance<OdsMessageController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsMessageAttributes, 'color'>({
        ...getAttributeContextOptions<OdsMessageAttributes, OsdsMessage, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsMessageDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsMessageAttributes, 'inline'>({
        ...getAttributeContextOptions<OdsMessageAttributes, OsdsMessage, 'inline'>({
          name: 'inline',
          list: [false, true],
          defaultValue: odsMessageDefaultAttributes.inline,
          ...config
        })
      });
    });

    describe('icon', () => {
      odsUnitTestAttribute<OdsMessageAttributes, 'icon'>({
        ...getAttributeContextOptions<OdsMessageAttributes, OsdsMessage, 'icon'>({
          name: 'icon',
          list: Object.values(OdsIconName),
          defaultValue: odsMessageDefaultAttributes.icon,
          ...config
        })
      });
    });

    describe('removable', () => {
      odsUnitTestAttribute<OdsMessageAttributes, 'removable'>({
        ...getAttributeContextOptions<OdsMessageAttributes, OsdsMessage, 'removable'>({
          name: 'removable',
          list: [false, true],
          defaultValue: odsMessageDefaultAttributes.removable,
          ...config
        })
      });
    });

    describe('type', () => {
      odsUnitTestAttribute<OdsMessageAttributes, 'type'>({
        ...getAttributeContextOptions<OdsMessageAttributes, OsdsMessage, 'type'>({
          name: 'type',
          list: OdsMessageTypeList,
          defaultValue: odsMessageDefaultAttributes.type,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsMessageAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsMessageAttributes, OsdsMessage, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsMessageDefaultAttributes.contrasted,
          ...config
        })
      });
    });
  });

  describe('@Watch : validate', () => {
    it('should call controller.validateColor on init and on color changes', async () => {
      await setup();
      expect(controller.validateColor).toHaveBeenCalledWith(odsMessageDefaultAttributes.color);

      root?.setAttribute('color', OdsThemeColorIntent.success);
      await page.waitForChanges();

      expect(controller.validateColor).toHaveBeenCalledWith(OdsThemeColorIntent.success);
      expect(controller.validateColor).toHaveBeenCalledTimes(2);
    });

    it('should call controller.setColorForType on init and on type changes', async () => {
      await setup();
      expect(controller.setColorForType).toHaveBeenCalledWith(odsMessageDefaultAttributes.type);

      root?.setAttribute('type', OdsMessageType.success);
      await page.waitForChanges();

      expect(controller.setColorForType).toHaveBeenCalledWith(OdsMessageType.success);
      expect(controller.setColorForType).toHaveBeenCalledTimes(2);
    });
  });
});
