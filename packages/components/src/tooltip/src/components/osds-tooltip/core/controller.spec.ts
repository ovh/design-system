import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import { OcdkSurfaceMock } from '@ovhcloud/ods-cdk';
import { OdsTooltipController } from './controller';
import { ODS_TOOLTIP_VARIANT } from '../constants/tooltip-variant';
import { OsdsTooltip } from '../osds-tooltip';

class OdsTooltipMock extends OsdsTooltip {
  constructor(attribute: Partial<OsdsTooltip>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('ods-tooltip-controller', () => {
  let controller: OdsTooltipController;
  let component: OsdsTooltip;
  let consoleWarnSpy: jest.SpyInstance;

  function setup(attributes: Partial<OsdsTooltip> = {}) {
    component = new OdsTooltipMock(attributes);
    controller = new OdsTooltipController(component);
  }

  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, 'warn');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    beforeEach(() => {
      setup();
    });

    describe('checkForClickOutside', () => {
      const target = document.createElement('button');

      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.checkForClickOutside({ target });
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should do nothing if surface is not opened', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = false;

        controller.checkForClickOutside({ target });

        expect(component.surface.close).toHaveBeenCalledTimes(0);
      });

      it('should do nothing if event target is in the component', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;
        component.el.appendChild(target);

        controller.checkForClickOutside({ target });

        expect(component.surface.close).toHaveBeenCalledTimes(0);
      });

      it('should close the surface when click outside of the component', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;

        controller.checkForClickOutside({ target });

        expect(component.surface.close).toHaveBeenCalledTimes(1);
      });
    });

    describe('closeSurface', () => {
      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.closeSurface();
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should do nothing if surface is closed', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = false;

        controller.closeSurface();

        expect(component.surface.close).toHaveBeenCalledTimes(0);
      });

      it('should close the surface', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;

        controller.closeSurface();

        expect(component.surface.close).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleMouseEnter', () => {
      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.handleMouseEnter();
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should open the surface', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;

        controller.handleMouseEnter();

        expect(component.surface.open).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleMouseLeave', () => {
      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.handleMouseLeave();
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should do nothing if surface is closed', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = false;

        controller.handleMouseLeave();

        expect(component.surface.close).toHaveBeenCalledTimes(0);
      });

      it('should close the surface', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;

        controller.handleMouseLeave();

        expect(component.surface.close).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleTriggerBlur', () => {
      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.handleTriggerBlur();
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should do nothing if surface is closed', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = false;

        controller.handleTriggerBlur();

        expect(component.surface.close).toHaveBeenCalledTimes(0);
      });

      it('should close the surface', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;

        controller.handleTriggerBlur();

        expect(component.surface.close).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleTriggerClick', () => {
      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.handleTriggerClick();
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should open the surface', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;

        controller.handleTriggerClick();

        expect(component.surface.open).toHaveBeenCalledTimes(1);
      });
    });

    describe('handleTriggerFocus', () => {
      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.handleTriggerFocus();
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should open the surface', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;

        controller.handleTriggerFocus();

        expect(component.surface.open).toHaveBeenCalledTimes(1);
      });
    });

    describe('syncReferences', () => {
      it('should do nothing if there is no surface', () => {
        expect(() => {
          controller.syncReferences();
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should do nothing if there is no anchor', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;

        expect(() => {
          controller.syncReferences();
        }).not.toThrow();
        expect(component.anchor).toBeUndefined();
      });

      it('should set the surface anchor', () => {
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.anchor = document.createElement('div');

        controller.syncReferences();

        expect(component.surface.setAnchorElement).toHaveBeenCalledTimes(1);
        expect(component.surface.setAnchorElement).toHaveBeenCalledWith(component.anchor);
      });
    });

    describe('validateAttributes', () => {
      beforeEach(() => {
        setup({ variant: ODS_TOOLTIP_VARIANT.standard });
      });

      it('should not call console.warn', () => {
        controller.validateAttributes();

        expect(consoleWarnSpy).toHaveBeenCalledTimes(0);
      });

      it('should call console.warn with wrong variant', () => {
        const expected = 'The variant attribute must have a value from [standard, tip]';
        component.variant = 'variant' as ODS_TOOLTIP_VARIANT;

        controller.validateAttributes();

        expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
        expect(consoleWarnSpy).toHaveBeenCalledWith(expected);
      });
    });
  });
});
