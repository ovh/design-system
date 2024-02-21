import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OcdkSurfaceMock } from '@ovhcloud/ods-cdk';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { OdsClipboardController } from './controller';
import { OsdsClipboard } from '../osds-clipboard';

class OdsClipboardMock extends OsdsClipboard {
  constructor(attribute: Partial<OsdsClipboard>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-clipboard-controller', () => {
  let controller: OdsClipboardController;
  let component: OsdsClipboard;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsClipboard> = {}): void {
    component = new OdsClipboardMock(attributes);
    controller = new OdsClipboardController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsClipboardController,
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

  describe('method:checkForClickOutside', () => {
    it('should do nothing if there is no surface', async() => {
      setup();

      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      const target = document.createElement('OSDS-BUTTON');
      Object.defineProperty(event, 'target', { value: target });

      expect(() => {
        controller.checkForClickOutside(event);
      }).not.toThrow();
      await expect(component.surface).toBeUndefined();
    });

    it('should do nothing if surface is not opened', async() => {
      setup(component);

      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      const target = document.createElement('OSDS-BUTTON');
      Object.defineProperty(event, 'target', { value: target });

      await controller.checkForClickOutside(event);
      expect(component.surface.opened).toBe(false);
    });

    it('should do nothing if event target is in the component', async() => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      const target = document.createElement('OSDS-BUTTON');
      Object.defineProperty(event, 'target', { value: target });

      component.el.appendChild(target);

      await controller.checkForClickOutside(event);
      expect(component.surface.opened).toBeTruthy();
      expect(component.surface.close).toHaveBeenCalledTimes(0);
    });

    it('should close the surface when click outside of the component', async() => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      const target = document.createElement('OSDS-BUTTON');
      Object.defineProperty(event, 'target', { value: target });

      await controller.checkForClickOutside(event);
      expect(component.surface.close).toHaveBeenCalledTimes(1);
    });
  });

  describe('method:closeSurface', () => {
    it('should do nothing if there is no surface', async() => {
      setup();

      expect(() => {
        controller.closeSurface();
      }).not.toThrow();
      expect(component.surface).toBeUndefined();
    });

    it('should do nothing if surface is closed', async() => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      expect(() => {
        controller.closeSurface();
      }).not.toThrow();
      expect(component.surface.opened).toBe(false);
      expect(component.surface.close).toHaveBeenCalledTimes(0);
    });

    it('should close the surface', async() => {
      setup(component);
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = true;

      await controller.closeSurface();
      expect(component.surface.close).toHaveBeenCalledTimes(1);
    });
  });
});
