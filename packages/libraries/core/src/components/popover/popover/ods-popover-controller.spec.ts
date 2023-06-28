import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';

import { Ods } from '../../../configure/ods';
import { OdsLogger } from '../../../logger/ods-logger';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsPopover } from './ods-popover';
import { OdsPopoverController } from './ods-popover-controller';
import { OdsPopoverMock } from './ods-popover.mock';
import { OcdkSurface, OcdkSurfaceMock } from '@ovhcloud/ods-cdk';


describe('spec:ods-popover-controller', () => {
  let controller: OdsPopoverController;
  let component: OdsPopover;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsPopover> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsPopoverController(component);
  }

  beforeEach(() => {
    component = new OdsPopoverMock();
    component.el = document.createElement('osds-popover') as HTMLStencilElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsPopoverController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('method: handleTriggerClick', () => {
    it('should do nothing if there is no surface', async () => {
      setup(component);
      expect(() => { controller.handleTriggerClick() }).not.toThrow();
      await expect(component.surface).toBeUndefined();
    });
    it('should change the value of opened attribute on click', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      await controller.handleTriggerClick();
      expect(component.surface.opened).toBeTruthy();
    });
  });

  describe('method: handleTriggerKey', () => {
    it('should do nothing if key is not ENTER or SPACE or ESCAPE', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      const event = new KeyboardEvent("keypress", {
        bubbles: true,
        cancelable: true,
        composed: true
      });
      Object.defineProperty(event, 'key', { value: "A" })

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })

      await controller.handleTriggerKey(event);
      expect(component.surface.opened).toBe(false);
      expect(component.surface.close).toHaveBeenCalledTimes(0);
    });

    it('should do nothing if there is no surface', async () => {
      setup(component);

      const event = new KeyboardEvent("keypress", {
        bubbles: true,
        cancelable: true,
        composed: true
      });
      Object.defineProperty(event, 'key', { value: "A" })

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })

      expect(() => { controller.handleTriggerKey(event) }).not.toThrow();
      expect(component.surface).toBeUndefined();
    });

    it('should change the value of opened attribute on ENTER or SPACE press', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      const event = new KeyboardEvent("keypress", {
        bubbles: true,
        cancelable: true,
        composed: true
      });
      Object.defineProperty(event, 'key', { value: "Enter" })

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })

      await controller.handleTriggerKey(event);
      expect(component.surface.opened).toBeTruthy();
    });

    it('should close the surface on ESCAPE press', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      const event = new KeyboardEvent("keypress", {
        bubbles: true,
        cancelable: true,
        composed: true
      });
      Object.defineProperty(event, 'key', { value: "Escape" })

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })

      await controller.handleTriggerKey(event);
      expect(component.surface.close).toHaveBeenCalledTimes(1);
    });
  });

  describe('method: handleSurfaceKey', () => {
    it('should do nothing if key is not ESCAPE', async () => {
      setup(component);

      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      const event = new KeyboardEvent("keypress", {
        bubbles: true,
        cancelable: true,
        composed: true
      });
      Object.defineProperty(event, 'key', { value: "A" })

      await controller.handleSurfaceKey(event);
      expect(component.surface.opened).toBeTruthy();
      expect(component.surface.close).toHaveBeenCalledTimes(0);
    });

    it('should close the surface on ESCAPE press', async () => {
      setup(component);

      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      const event = new KeyboardEvent("keypress", {
        bubbles: true,
        cancelable: true,
        composed: true
      });
      Object.defineProperty(event, 'key', { value: "Escape" })

      await controller.handleSurfaceKey(event);
      expect(component.surface.close).toHaveBeenCalledTimes(1);

    });
  });

  describe('method: checkForClickOutside', () => {
    it('should do nothing if there is no surface', async () => {
      setup(component);

      const event = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true
      });

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })


      expect(() => { controller.checkForClickOutside(event) }).not.toThrow();
      await expect(component.surface).toBeUndefined();
    });

    it('should do nothing if surface is not opened', async () => {
      setup(component);

      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      const event = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true
      });

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })

      await controller.checkForClickOutside(event);
      expect(component.surface.opened).toBe(false);
    });

    it('should do nothing if event target is in the component', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      const event = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true
      });

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })

      component.el.appendChild(target);

      await controller.checkForClickOutside(event);
      expect(component.surface.opened).toBeTruthy();
      expect(component.surface.close).toHaveBeenCalledTimes(0);
    });

    it('should close the surface when click outside of the component', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      const event = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true
      });

      const target = document.createElement("OSDS-BUTTON");
      Object.defineProperty(event, 'target', { value: target })

      await controller.checkForClickOutside(event);
      expect(component.surface.close).toHaveBeenCalledTimes(1);
    });
  });

  describe('method: closeSurface', () => {
    it('should do nothing if there is no surface', async () => {
      setup(component);

      expect(() => { controller.closeSurface() }).not.toThrow();
      expect(component.surface).toBeUndefined();
    });
    it('should do nothing if surface is closed', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      expect(() => { controller.closeSurface() }).not.toThrow();
      expect(component.surface.opened).toBe(false);
      expect(component.surface.close).toHaveBeenCalledTimes(0);

    });
    it('should close the surface', async () => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      await controller.closeSurface();
      expect(component.surface.close).toHaveBeenCalledTimes(1);
    });
  });
});
