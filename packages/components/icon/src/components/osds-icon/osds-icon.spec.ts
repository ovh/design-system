jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsIconAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_ICON_NAME } from './constants/icon-name';
import { ODS_ICON_SIZE, ODS_ICON_SIZES } from './constants/icon-size';
import { OdsIconController } from './core/controller';
import { OsdsIcon } from './osds-icon';

describe('spec:osds-icon', () => {
  const baseAttribute = { ariaName: '' };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsIcon;
  let controller: OdsIconController;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsIconAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsIconAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsIcon],
      html: `<osds-icon ${odsStringAttributes2Str(stringAttributes)}></osds-icon>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsIconController as unknown as jest.SpyInstance<OdsIconController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeDefined();
    expect(instance).toBeDefined();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('aria-name', () => {
      odsUnitTestAttribute<OdsIconAttribute, 'ariaName'>({
        name: 'ariaName',
        defaultValue: DEFAULT_ATTRIBUTE.ariaName,
        newValue: 'An Icon',
        value: 'Oles ipsum',
        setup: (value) => setup({ attributes: { ['ariaName']: value } }),
        ...config,
      });

      it('should have an aria-name content', async() => {
        await setup({ attributes: { ariaName: 'An icon' } });
        expect(instance.ariaName).toBeDefined();
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsIconAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.error,
        value: ODS_THEME_COLOR_INTENT.success,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });

      it('should set a color if attribute is added', async() => {
        const randomColor = ODS_THEME_COLOR_INTENTS[Math.floor(Math.random() * ODS_THEME_COLOR_INTENTS.length)];
        await setup({ attributes: { color: randomColor } });
        expect(instance.color).toBe(randomColor);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsIconAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });

      it('should be contrasted if attribute is added', async() => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBe(true);
        expect(instance.el.classList.contains('ods-icon--contrasted')).toBe(true);
      });

      it('should not be contrasted if attribute is false', async() => {
        await setup({ attributes: { contrasted: false } });
        expect(instance.contrasted).toBe(false);
        expect(instance.el.classList.contains('ods-icon--contrasted')).toBe(false);
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsIconAttribute, 'name'>({
        name: 'name',
        defaultValue: DEFAULT_ATTRIBUTE.name,
        newValue: ODS_ICON_NAME.ARROW_DOWN,
        value: ODS_ICON_NAME.ARROW_UP,
        setup: (value) => setup({ attributes: { ['name']: value } }),
        ...config,
      });

      it('should set a name if attribute is added', async() => {
        const iconName = ODS_ICON_NAME.HOME;
        await setup({ attributes: { name: iconName } });
        expect(instance.name).toBe(iconName);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsIconAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_ICON_SIZE.md,
        value: ODS_ICON_SIZE.sm,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });

      it('should set a size if attribute is added', async() => {
        const randomSize = ODS_ICON_SIZES[Math.floor(Math.random() * ODS_ICON_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });

    describe('hoverable', () => {
      odsUnitTestAttribute<OdsIconAttribute, 'hoverable'>({
        name: 'hoverable',
        defaultValue: DEFAULT_ATTRIBUTE.hoverable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['hoverable']: value } }),
        ...config,
      });

      it('should be hoverable if attribute is added', async() => {
        await setup({ attributes: { hoverable: true } });
        expect(instance.hoverable).toBe(true);
        expect(instance.el.classList.contains('ods-icon--hoverable')).toBe(true);
      });

      it('should not be hoverable if attribute is false', async() => {
        await setup({ attributes: { hoverable: false } });
        expect(instance.hoverable).toBe(false);
        expect(instance.el.classList.contains('ods-icon--hoverable')).toBe(false);
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
