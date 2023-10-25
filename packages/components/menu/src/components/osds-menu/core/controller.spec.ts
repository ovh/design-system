import { OcdkSurface, OcdkSurfaceMock } from '@ovhcloud/ods-cdk';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';

import { OdsMenuController } from './controller';
import { OsdsMenuItem } from '../../osds-menu-item/osds-menu-item';
import { OsdsMenu } from '../osds-menu';

class OdsMenuMock extends OsdsMenu {
  constructor(attribute: Partial<OsdsMenu>) {
    super();
    Object.assign(this, attribute);
  }

  controller: OdsMenuController = jest.fn() as unknown as OdsMenuController;
  afterInit = jest.fn();
  propagateDisabledToChild = jest.fn();
  handleTriggerClick = jest.fn();
  handleTriggerKey = jest.fn();
  handleSurfaceKey = jest.fn();
  checkForClickOutside = jest.fn();
  setFocus = jest.fn();
  syncReferences = jest.fn();
}

describe('spec:ods-menu-controller', () => {
  let controller: OdsMenuController;
  let component: OsdsMenu;
  let item1: OsdsMenuItem & HTMLElement;
  let item2: OsdsMenuItem & HTMLElement;

  let loggerSpyReferences: OdsLoggerSpyReferences;
  let spyOnPropagateDisabledToChild: jest.SpyInstance<void, jest.ArgsType<OsdsMenu['propagateDisabledToChild']>>;


  Ods.instance().logging(false);
  const logger = new OdsLogger('spec:ods-menu-controller');

  function setup(attributes: Partial<OsdsMenu> = {}) {
    component = new OdsMenuMock(attributes);
    controller = new OdsMenuController(component);
    controller.menuItems = [item1, item2];
  }

  beforeEach(() => {
    item1 = document.createElement('osds-menu-item') as OsdsMenuItem & HTMLElement;
    item1.innerHTML = '<osds-button><span slot="start">Action 1</span></osds-button>';
    item2 = document.createElement('osds-menu-item') as OsdsMenuItem & HTMLElement;
    item2.innerHTML = '<osds-button><span slot="start">Action 2</span></osds-button>';

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsMenuController,
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

  describe('methods', () => {
    describe('method: handleTriggerClick', () => {
      it('should do nothing if there is no surface', async() => {
        setup(component);
        expect(() => {
          controller.handleTriggerClick();
        }).not.toThrow();
        await expect(component.surface).toBeUndefined();
      });
      it('should change the value of opened attribute on click', async() => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = false;

        await controller.handleTriggerClick();
        expect(component.surface.opened).toBe(true);
      });
    });

    describe('method: handleKeyDown', () => {
      it('should do nothing if key is not ENTER or SPACE or ESCAPE', async() => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = false;

        const event = new KeyboardEvent('keypress', {
          bubbles: true,
          cancelable: true,
          composed: true,
        });
        Object.defineProperty(event, 'key', { value: 'A' });

        const target = document.createElement('OSDS-BUTTON');
        Object.defineProperty(event, 'target', { value: target });

        await controller.handleKeyDown(event);
        expect(component.surface.opened).toBe(false);
      });

      it('should do nothing if there is no surface', async() => {
        setup(component);
        component.surface = undefined;

        const event = new KeyboardEvent('keypress', {
          bubbles: true,
          cancelable: true,
          composed: true,
        });
        Object.defineProperty(event, 'key', { value: 'A' });

        const target = document.createElement('OSDS-BUTTON');
        Object.defineProperty(event, 'target', { value: target });

        expect(() => {
          controller.handleKeyDown(event);
        }).not.toThrow();
        expect(component.surface).toBeUndefined();
      });

      it('should change the value of opened attribute on ENTER or SPACE press', async() => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = false;
        const keyEnter = new KeyboardEvent('keydown', { code : 'Enter' });
        controller.handleKeyDown(keyEnter);

        expect(component.surface.opened).toBe(true);
      });

      it('should close the surface on ESCAPE press', async() => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;

        const spyCloseSurface = jest.spyOn(controller, 'closeSurface');
        const keyEscape = new KeyboardEvent('keydown', { code : 'Escape' });
        controller.handleKeyDown(keyEscape);
        expect(spyCloseSurface).toHaveBeenCalledTimes(1);
      });

      it('should select an option with arrow down', () => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;

        const keyDown = new KeyboardEvent('keydown', { code : 'ArrowDown' });
        controller.handleKeyDown(keyDown);

        expect(item1.getAttribute('selected')).toBe('');
      });

      it('should select next option with arrow down', () => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;
        item1.focus();
        item1.setAttribute('selected', '');

        const keyDown = new KeyboardEvent('keydown', { code : 'ArrowDown' });
        controller.handleKeyDown(keyDown);

        expect(item2.getAttribute('selected')).toBe('');
      });

      it('should go back to first option with arrow down when on the last one', () => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;
        item2.focus();
        item2.setAttribute('selected', '');

        const keyDown = new KeyboardEvent('keydown', { code : 'ArrowDown' });
        controller.handleKeyDown(keyDown);

        expect(item1.getAttribute('selected')).toBe('');
      });

      it('should select previous option with arrow up', () => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;
        item2.focus();
        item2.setAttribute('selected', '');

        const keyUp = new KeyboardEvent('keydown', { code : 'ArrowUp' });
        controller.handleKeyDown(keyUp);

        expect(item1.getAttribute('selected')).toBe('');
      });

      it('should go back to last option with arrow up when on the first one', () => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;
        item1.focus();
        item1.setAttribute('selected', '');

        const keyUp = new KeyboardEvent('keydown', { code : 'ArrowUp' });
        controller.handleKeyDown(keyUp);

        expect(item2.getAttribute('selected')).toBe('');
      });

    });

    describe('method: checkForClickOutside', () => {
      it('should do nothing if there is no surface', async() => {
        setup(component);
        component.surface = undefined;

        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          composed: true,
        });

        const target = document.createElement('OSDS-LINK');
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

        const target = document.createElement('OSDS-LINK');
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

        const target = document.createElement('OSDS-LINK');
        Object.defineProperty(event, 'target', { value: target });

        component.el.appendChild(target);

        await controller.checkForClickOutside(event);
        expect(component.surface.opened).toBe(true);
      });

      it('should close the surface when click outside of the component', async() => {
        setup(component);
        component.surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
        component.surface!.opened = true;

        const spyCloseSurface = jest.spyOn(controller, 'closeSurface');

        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          composed: true,
        });

        const target = document.createElement('OSDS-BUTTON');
        Object.defineProperty(event, 'target', { value: target });

        await controller.checkForClickOutside(event);
        expect(spyCloseSurface).toHaveBeenCalledTimes(1);
      });
    });

    describe('afterInit', () => {
      it('should call propagateDisabledToChild method', async() => {
        spyOnPropagateDisabledToChild = jest.spyOn(component, 'propagateDisabledToChild').mockImplementation((disabled: boolean | undefined) => {
          logger.log('resolving propagateDisabledToChild', disabled);
        });
        setup(component);
        controller.afterInit();
        expect(spyOnPropagateDisabledToChild).toHaveBeenCalled();
      });
    });
  });
});
