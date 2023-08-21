jest.mock('@ovhcloud/ods-core/src/components/modal/ods-modal-controller'); // keep jest.mock before any

import {
  OdsModalAttributes,
  OdsModalController,
  OdsComponentAttributes2StringAttributes,
  odsModalDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsModalBaseAttributes,
  odsUnitTestAttribute,
  OdsUnitTestAttributeType
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsModal } from './osds-modal';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-modal', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsModal;
  let controller: OdsModalController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsModalAttributes> } = {}) {
    const minimalAttributes: OdsModalAttributes = OdsCreateAttributes(attributes, odsModalBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsModalAttributes>(minimalAttributes, odsModalDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsModal],
      html: `<osds-modal ${OdsStringAttributes2Str(stringAttributes)}>My Modal</osds-modal>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsModalController as unknown as jest.SpyInstance<OdsModalController, unknown[]>).mock.instances[0];
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

    describe('color', () => {
      odsUnitTestAttribute<OdsModalAttributes, 'color'>({
        ...getAttributeContextOptions<OdsModalAttributes, OsdsModal, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsModalDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('dismissible', () => {
      odsUnitTestAttribute<OdsModalAttributes, 'dismissible'>({
        ...getAttributeContextOptions<OdsModalAttributes, OsdsModal, 'dismissible'>({
          name: 'dismissible',
          list: [false, true],
          defaultValue: odsModalDefaultAttributes.dismissible,
          ...config
        })
      });
    });

    describe('headline', () => {
      odsUnitTestAttribute<OdsModalAttributes, 'headline'>({
        ...getAttributeContextOptions<OdsModalAttributes, OsdsModal, 'headline'>({
          name: 'headline',
          list: ['', 'On Vous Héberge ?'],
          defaultValue: odsModalDefaultAttributes.headline,
          ...config
        })
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsModalAttributes, 'masked'>({
        ...getAttributeContextOptions<OdsModalAttributes, OsdsModal, 'masked'>({
          name: 'masked',
          list: [false, true],
          defaultValue: odsModalDefaultAttributes.masked,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });
  });

  describe('controller', () => {
    it('should call controller.close', async () => {
      await setup({});
      await instance.close();

      expect(controller.close).toHaveBeenCalledTimes(1);
      expect(controller.close).toHaveBeenCalledWith();
    });

    it('should call controller.open', async () => {
      await setup({});
      await instance.open();

      expect(controller.open).toHaveBeenCalledTimes(1);
      expect(controller.open).toHaveBeenCalledWith();
    });

    it('should call controller.close on close icon click', async () => {
      await setup();

      const closeIcon = root?.shadowRoot?.querySelector('osds-icon[name="close"]') as HTMLElement;
      await closeIcon.click();
      await page.waitForChanges();

      expect(controller.close).toHaveBeenCalledTimes(1);
      expect(controller.close).toHaveBeenCalledWith();
    });
  });
});
