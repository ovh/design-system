jest.mock('./core/controller'); // keep jest.mock before any import

import type { OdsMessageAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_MESSAGE_TYPE } from './constants/message-type';
import { OdsMessageController } from './core/controller';
import { OsdsMessage } from './osds-message';


describe('spec:osds-message', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsMessage;
  let controller: OdsMessageController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsMessageAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsMessageAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsMessage],
      html: `<osds-message ${odsStringAttributes2Str(stringAttributes)}></osds-message>`,
    });

    root = page.root;
    instance = page.rootInstance;

    controller = (OdsMessageController as unknown as jest.SpyInstance<OdsMessageController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsMessageAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsMessageAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('icon', () => {
      odsUnitTestAttribute<OdsMessageAttribute, 'icon'>({
        name: 'icon',
        defaultValue: DEFAULT_ATTRIBUTE.icon,
        newValue: ODS_ICON_NAME.CLOSE,
        value: ODS_ICON_NAME.OVH,
        setup: (value) => setup({ attributes: { ['icon']: value } }),
        ...config,
      });
    });

    describe('removable', () => {
      odsUnitTestAttribute<OdsMessageAttribute, 'removable'>({
        name: 'removable',
        defaultValue: DEFAULT_ATTRIBUTE.removable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['removable']: value } }),
        ...config,
      });
    });

    describe('type', () => {
      odsUnitTestAttribute<OdsMessageAttribute, 'type'>({
        name: 'type',
        defaultValue: DEFAULT_ATTRIBUTE.type,
        newValue: ODS_MESSAGE_TYPE.error,
        value: ODS_MESSAGE_TYPE.success,
        setup: (value) => setup({ attributes: { ['type']: value } }),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsMessageAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });
  });

  describe('@Watch : validate', () => {
    it('should call controller.validateColor on init and on color changes', async() => {
      await setup();
      expect(controller.validateColor).toHaveBeenCalledWith(DEFAULT_ATTRIBUTE.color);

      root?.setAttribute('color', ODS_THEME_COLOR_INTENT.success);
      await page.waitForChanges();

      expect(controller.validateColor).toHaveBeenCalledWith(ODS_THEME_COLOR_INTENT.success);
      expect(controller.validateColor).toHaveBeenCalledTimes(2);
    });

    it('should call controller.setColorForType on init and on type changes', async() => {
      await setup();
      expect(controller.setColorForType).toHaveBeenCalledWith(DEFAULT_ATTRIBUTE.type);

      root?.setAttribute('type', ODS_MESSAGE_TYPE.success);
      await page.waitForChanges();

      expect(controller.setColorForType).toHaveBeenCalledWith(ODS_MESSAGE_TYPE.success);
      expect(controller.setColorForType).toHaveBeenCalledTimes(2);
    });
  });
});
