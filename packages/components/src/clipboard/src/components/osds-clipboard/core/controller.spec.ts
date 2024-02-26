import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import { OcdkSurfaceMock } from '@ovhcloud/ods-cdk';
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

  function setup(attributes: Partial<OsdsClipboard> = {}): void {
    component = new OdsClipboardMock(attributes);
    controller = new OdsClipboardController(component);
  }

  beforeEach(() => {
    jest.spyOn(console, 'warn');
  });

  afterEach(() => {
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

  describe('method:getTextContent', () => {
    it('should get content text with p', async() => {
      setup();
      const content = 'some content';
      const text = controller.getTextContent(`<p>${content}</p>`);
      expect(text).toBe(content);
    });

    it('should get content text', async() => {
      setup();
      const content = 'some content';
      const text = controller.getTextContent(`${content}`);
      expect(text).toBe(content);
    });

    it('should get content text empty with comment', async() => {
      setup();
      const text = controller.getTextContent('<!-- -->');
      expect(text).toBe('');
    });

    it('should get content text with table', async() => {
      setup();
      const text = controller.getTextContent('<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr></table>');
      expect(text).toBe('CompanyContactCountry');
    });

    it('should get content text with empty string', async() => {
      setup();
      const text = controller.getTextContent('');
      expect(text).toBe('');
    });
  });

  describe('method:openSurfaceWithMessage', () => {
    it('should open surface', async() => {
      setup();
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      controller.openSurfaceWithMessage('message', 'warn message');
      expect(console.warn).not.toHaveBeenCalled();
      expect(component.surface?.opened).toBe(true);
      expect(component.surfaceMessage).toBe('message');
    });

    it('should not open surface because of empty value', async() => {
      setup();
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      controller.openSurfaceWithMessage('', 'warn message');
      expect(console.warn).toHaveBeenNthCalledWith(1, 'warn message');
      expect(component.surface?.opened).toBe(false);
      expect(component.surfaceMessage).toBe('');
    });

    it('should not open surface because of value without content', async() => {
      setup();
      component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
      component.surface!.opened = false;

      controller.openSurfaceWithMessage('<!--No content-->', 'warn message');
      expect(console.warn).toHaveBeenNthCalledWith(1, 'warn message');
      expect(component.surface?.opened).toBe(false);
      expect(component.surfaceMessage).toBe('');
    });
  });
});
