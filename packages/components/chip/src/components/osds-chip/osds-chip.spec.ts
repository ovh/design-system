jest.mock('./core/controller'); // keep jest.mock before any

import type {SpecPage} from '@stencil/core/testing';
import type {OdsChipAttribute} from './interfaces/attributes';
import {newSpecPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';
import {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {ODS_CHIP_SIZE} from './constants/chip-size';
import {ODS_CHIP_VARIANT} from './constants/chip-variant';
import {OdsChipController} from './core/controller';
import {OsdsChip} from './osds-chip';

describe('spec:osds-chip', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsChip;
  let controller: OdsChipController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({attributes = {}}: { attributes?: Partial<OdsChipAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsChipAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsChip],
      html: `<osds-chip ${odsStringAttributes2Str(stringAttributes)}>My Chip</osds-chip>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsChipController as unknown as jest.SpyInstance<OdsChipController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup({});
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
      odsUnitTestAttribute<OdsChipAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({attributes: {['color']: value}}),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsChipAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: true,
        value: false,
        setup: (value) => setup({attributes: {['contrasted']: value}}),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsChipAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_CHIP_SIZE.md,
        value: ODS_CHIP_SIZE.sm,
        setup: (value) => setup({attributes: {['size']: value}}),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsChipAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (value) => setup({attributes: {['inline']: value}}),
        ...config,
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsChipAttribute, 'variant'>({
        name: 'variant',
        defaultValue: DEFAULT_ATTRIBUTE.variant,
        newValue: ODS_CHIP_VARIANT.flat,
        value: ODS_CHIP_VARIANT.stroked,
        setup: (value) => setup({attributes: {['variant']: value}}),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsChipAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (value) => setup({attributes: {['disabled']: value}}),
        ...config,
      });
    });

    describe('removable', () => {
      odsUnitTestAttribute<OdsChipAttribute, 'removable'>({
        name: 'removable',
        defaultValue: DEFAULT_ATTRIBUTE.removable,
        newValue: true,
        value: false,
        setup: (value) => setup({attributes: {['removable']: value}}),
        ...config,
      });
    });

    // TODO: avoid loop with selectable mutation on the component
    describe('selectable', () => {
      odsUnitTestAttribute<OdsChipAttribute, 'selectable'>({
        name: 'selectable',
        defaultValue: DEFAULT_ATTRIBUTE.selectable,
        newValue: true,
        value: false,
        setup: (value) => setup({attributes: {['selectable']: value}}),
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
