jest.mock('@ovhcloud/ods-core/src/components/icon/ods-icon-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsIconAttributes,
  OdsIconController,
  OdsIconName,
  OdsIconSizeList,
  odsIconDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsIconBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsIcon } from './osds-icon';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-icon', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsIcon;
  let controller: OdsIconController;

  async function setup({ attributes= {} }: { attributes?: Partial<OdsIconAttributes> } = {}) {
    const minimalAttributes: OdsIconAttributes = OdsCreateAttributes(attributes, odsIconBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsIconAttributes>(minimalAttributes, odsIconDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsIcon],
      html: `<osds-icon ${OdsStringAttributes2Str(stringAttributes)}></osds-icon>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsIconController as unknown as jest.SpyInstance<OdsIconController, unknown[]>).mock.instances[0];
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

    describe('aria-name', () => {
      odsUnitTestAttribute<OdsIconAttributes, 'ariaName'>({
        ...getAttributeContextOptions<OdsIconAttributes, OsdsIcon, 'ariaName'>({
          name: 'ariaName',
          list: ['An Icon', 'Oles ipsum'],
          defaultValue: odsIconDefaultAttributes.ariaName,
          ...config
        })
      });
      it('should have an aria-name content', async () => {
        await setup({ attributes: { ariaName: 'An icon' } });
        expect(instance.ariaName).toBeTruthy();
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsIconAttributes, 'color'>({
        ...getAttributeContextOptions<OdsIconAttributes, OsdsIcon, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsIconDefaultAttributes.color,
          ...config
        })
      });
      it('should set a color if attribute is added', async () => {
        const randomColor = OdsThemeColorIntentList[Math.floor(Math.random() * OdsThemeColorIntentList.length)];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsIconAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsIconAttributes, OsdsIcon, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsIconDefaultAttributes.contrasted,
          ...config
        })
      });
      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBeDefined();
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsIconAttributes, 'name'>({
        ...getAttributeContextOptions<OdsIconAttributes, OsdsIcon, 'name'>({
          name: 'name',
          list: [OdsIconName.HAMBURGER, OdsIconName.HOME],
          defaultValue: odsIconDefaultAttributes.name,
          ...config
        })
      });
      it('should set a name if attribute is added', async () => {
        const iconName = 'home';
        await setup({ attributes: { name: iconName as OdsIconName } });
        expect(instance.name).toBe(iconName);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsIconAttributes, 'size'>({
        ...getAttributeContextOptions<OdsIconAttributes, OsdsIcon, 'size'>({
          name: 'size',
          list: OdsIconSizeList,
          defaultValue: odsIconDefaultAttributes.size,
          ...config
        })
      });
      it('should set a size if attribute is added', async () => {
        const randomSize = OdsIconSizeList[Math.floor(Math.random() * OdsIconSizeList.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
