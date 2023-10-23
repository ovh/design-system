// keep jest.mock before any
jest.mock('@ovhcloud/ods-cdk');
jest.mock('./core/controller');

import type {SpecPage} from '@stencil/core/testing';
import type {OdsTooltipAttribute} from './interfaces/attributes';
import {ocdkIsSurface} from '@ovhcloud/ods-cdk';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';
import {newSpecPage} from '@stencil/core/testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {ODS_TOOLTIP_VARIANT, ODS_TOOLTIP_VARIANTS} from './constants/tooltip-variant';
import {OdsTooltipController} from './core/controller';
import {OsdsTooltip} from './osds-tooltip';

describe('spec:osds-tooltip', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTooltip;
  let controller: OdsTooltipController;

  const htmlTooltipContent = '<osds-tooltip-content slot="tooltip-content">Tooltip content</osds-tooltip-content>';

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({attributes = {}, html = ''}: { attributes?: Partial<OdsTooltipAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTooltipAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTooltip],
      html: `<osds-tooltip ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-tooltip>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsTooltipController as unknown as jest.SpyInstance<OdsTooltipController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();

    expect(root?.shadowRoot).toBeDefined();
    expect(instance).toBeDefined();
  });

  it('should call validateAttributes on render', async() => {
    await setup();

    expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
  });

  describe('cdk not initialized', () => {
    it('should not have yet the ref to surface', async() => {
      (ocdkIsSurface as unknown as jest.Mock).mockImplementation(() => false);
      await setup({attributes: {}, html: ''});

      expect(instance.surface).toBeUndefined();
    });
  });

  describe('cdk initialized', () => {
    beforeEach(async() => {
      (ocdkIsSurface as unknown as jest.Mock).mockImplementation(() => true);
      await setup({html: htmlTooltipContent});
    });

    it('should have a ref to the anchor and the surface', () => {
      expect(instance.anchor).toBeDefined();
      expect(instance.surface).toBeDefined();
    });

    it('should call syncReferences of controller for anchor and surface', () => {
      expect(controller.syncReferences).toHaveBeenCalledTimes(2);
    });
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('variant', () => {
      odsUnitTestAttribute<OdsTooltipAttribute, 'variant'>({
        name: 'variant',
        defaultValue: DEFAULT_ATTRIBUTE.variant,
        newValue: ODS_TOOLTIP_VARIANT.standard,
        value: ODS_TOOLTIP_VARIANT.tip,
        setup: (value) => setup({attributes: {['variant']: value}}),
        ...config,
      });

      it('should set the variant if attribute is added', async() => {
        const randomVariant = ODS_TOOLTIP_VARIANTS[Math.floor(Math.random() * ODS_TOOLTIP_VARIANTS.length)];
        await setup({attributes: {variant: randomVariant}});
        expect(instance.variant).toBe(randomVariant);
      });
    });
  });

  describe('methods', () => {
    beforeEach(async() => {
      await setup({});
    });

    describe('checkForClickOutside', () => {
      it('should call checkForClickOutside of controller', () => {
        const event = new Event('click');

        instance.checkForClickOutside(event);

        expect(controller.checkForClickOutside).toHaveBeenCalledTimes(1);
        expect(controller.checkForClickOutside).toHaveBeenCalledWith(event);
      });
    });

    describe('closeSurface', () => {
      it('should call closeSurface of controller', async() => {
        await instance.closeSurface();

        expect(controller.closeSurface).toHaveBeenCalledTimes(1);
      });
    });

    describe('setTabindex', () => {
      it('should set tabindex', async() => {
        const dummyTabindex = 42;

        await instance.setTabindex(dummyTabindex);

        expect(instance.tabindex).toBe(dummyTabindex);
      });
    });

    describe('handleMouseEnter', () => {
      it('should call handleMouseEnter of controller', async() => {
        await instance.handleMouseEnter();

        expect(controller.handleMouseEnter).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleMouseLeave', () => {
      it('should call handleMouseLeave of controller', async() => {
        await instance.handleMouseLeave();

        expect(controller.handleMouseLeave).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleTriggerBlur', () => {
      it('should call handleTriggerBlur of controller', async() => {
        await instance.handleTriggerBlur();

        expect(controller.handleTriggerBlur).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleTriggerClick', () => {
      it('should call handleTriggerClick of controller', async() => {
        await instance.handleTriggerClick();

        expect(controller.handleTriggerClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleTriggerFocus', () => {
      it('should call handleTriggerFocus of controller', async() => {
        await instance.handleTriggerFocus();

        expect(controller.handleTriggerFocus).toHaveBeenCalledTimes(1);
      });
    });

    describe('syncReferences', () => {
      it('should call syncReferences of controller', async() => {
        (controller.syncReferences as jest.Mock).mockReset();

        await instance.syncReferences();

        expect(controller.syncReferences).toHaveBeenCalledTimes(1);
      });
    });

    describe('setSlotTooltipContent', () => {
      it('should call setSlotTooltipContent with tooltip-content', async() => {
        await setup({html: htmlTooltipContent});
        await instance.setSlotTooltipContent();

        expect(instance.hasSlotTooltipContent).toBe(true);
      });

      it('should call setSlotTooltipContent without tooltip-content', async() => {
        await instance.setSlotTooltipContent();

        expect(instance.hasSlotTooltipContent).toBe(false);
      });
    });
  });
});
