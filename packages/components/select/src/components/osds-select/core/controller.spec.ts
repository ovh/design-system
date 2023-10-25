import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import { OcdkSurfaceMock } from '@ovhcloud/ods-cdk';

import { OdsSelectController } from './controller';
import type { OsdsSelectOption } from '../../osds-select-option/osds-select-option';
import { OsdsSelect } from '../osds-select';


class OdsSelectMock extends OsdsSelect {
  constructor(attribute: Partial<OsdsSelect>) {
    super();
    Object.assign(this, attribute);
  }

  surface = new OcdkSurfaceMock() as unknown as OcdkSurface;
  handleSelectClick = jest.fn();
  handleValueChange = jest.fn();
  setFocus = jest.fn();
}

describe('spec:ods-select-controller', () => {
  let controller: OdsSelectController;
  let component: OsdsSelect;
  let item1: OsdsSelectOption & HTMLElement;
  let item2: OsdsSelectOption & HTMLElement;

  function setup(attributes: Partial<OsdsSelect> = {}) {
    component = new OdsSelectMock(attributes);

    if (component.surface) {
      component.surface.opened = attributes?.opened ?? false;
    }

    item1 = document.createElement('osds-select-option') as OsdsSelectOption & HTMLElement;
    item2 = document.createElement('osds-select-option') as OsdsSelectOption & HTMLElement;
    item1.value = '1';
    item2.value = '2';

    controller = new OdsSelectController(component);
    controller.selectOptions = [item1, item2];
  }

  it('should initialize', () => {
    setup();
    expect(controller).toBeDefined();
  });

  describe('methods', () => {
    describe('methods:openSurface', () => {
      it('should open surface with default value', () => {
        setup();
        controller.openSurface();
        expect(component.opened).toBe(true);
      });

      it('should open surface', () => {
        setup({
          opened: false,
        });
        controller.openSurface();
        expect(component.opened).toBe(true);
      });

      it('should close surface', () => {
        setup({
          opened: true,
        });
        controller.closeSurface();
        expect(component.opened).toBe(false);
      });
    });

    describe('methods:handlerKeyDown', () => {
      it('should open select with enter key', () => {
        setup();
        const keyEnter = new KeyboardEvent('keydown', { code : 'Enter' });
        controller.handlerKeyDown(keyEnter);
        expect(component.handleSelectClick).toHaveBeenCalled();
      });

      it('should select option with enter key', () => {
        setup({ opened: true });
        item1.setAttribute('selected', '');
        const keyEnter = new KeyboardEvent('keydown', { code : 'Enter' });
        controller.handlerKeyDown(keyEnter);
        expect(component.handleValueChange).toHaveBeenCalled();
        expect(component.setFocus).toHaveBeenCalled();
      });

      it('should close select with escape key', () => {
        setup({ opened: true });
        const spyCloseSurface = jest.spyOn(controller, 'closeSurface');
        const keySpace = new KeyboardEvent('keydown', { code : 'Escape' });
        controller.handlerKeyDown(keySpace);
        expect(spyCloseSurface).toHaveBeenCalledTimes(1);
      });

      it('should close select with escape key and select after navigation', () => {
        setup({ opened: true, value: '2' });
        const spyCloseSurface = jest.spyOn(controller, 'closeSurface');
        const keyArraowDown = new KeyboardEvent('keydown', { code : 'ArrowDown' });
        controller.handlerKeyDown(keyArraowDown);
        const keySpace = new KeyboardEvent('keydown', { code : 'Escape' });
        controller.handlerKeyDown(keySpace);
        const selectedOption = controller.selectOptions.filter((s) => s.getAttribute('selected') === '');
        expect(selectedOption).toHaveLength(1);
        expect(spyCloseSurface).toHaveBeenCalledTimes(1);
      });

      it('should select option with arrow down', () => {
        setup({ opened: true });
        const keyArrowDown = new KeyboardEvent('keydown', { code : 'ArrowDown' });
        controller.handlerKeyDown(keyArrowDown);
        expect(item1.getAttribute('selected')).toBe('');
      });

      it('should not select option with tab because of close select', () => {
        setup({ opened: false });
        const keyTab = new KeyboardEvent('keydown', { code : 'Tab' });
        controller.handlerKeyDown(keyTab);
        expect(item1.getAttribute('selected')).toBe(null);
      });

      it('should select option with tab', () => {
        setup({ opened: true });
        const keyTab = new KeyboardEvent('keydown', { code : 'Tab' });
        controller.handlerKeyDown(keyTab);
        expect(item1.getAttribute('selected')).toBe('');
      });

      it('should select option with tab + shift', () => {
        setup({ opened: true });
        const keyTab = new KeyboardEvent('keydown', { code : 'Tab' });
        controller.handlerKeyDown(keyTab);
        controller.handlerKeyDown(keyTab);
        const keyTabShift = new KeyboardEvent('keydown', { code : 'Tab', shiftKey: true });
        controller.handlerKeyDown(keyTabShift);
        expect(item1.getAttribute('selected')).toBe('');
      });

      it('should select option with arrow up', () => {
        setup({ opened: true });
        item2.setAttribute('selected', '');
        const keyArrowUp = new KeyboardEvent('keydown', { code : 'ArrowUp' });
        controller.handlerKeyDown(keyArrowUp);
        expect(item1.getAttribute('selected')).toBe('');
        expect(item2.getAttribute('selected')).toBe(null);
      });

      it('should close select after if open and not any option selected', () => {
        setup({ opened: true });
        const keyArrowDown = new KeyboardEvent('keydown', { code : 'Enter' });
        controller.handlerKeyDown(keyArrowDown);
        expect(component.handleSelectClick).toHaveBeenCalledTimes(1);
      });

      it('should go back to first option with arrow down when on the last one', () => {
        setup({ opened: true });
        item2.focus();
        item2.setAttribute('selected', '');

        const keyDown = new KeyboardEvent('keydown', { code : 'ArrowDown' });
        controller.handlerKeyDown(keyDown);

        expect(item1.getAttribute('selected')).toBe('');
      });

      it('should go back to last option with arrow up when on the first one', () => {
        setup({ opened: true });
        item1.focus();
        item1.setAttribute('selected', '');

        const keyUp = new KeyboardEvent('keydown', { code : 'ArrowUp' });
        controller.handlerKeyDown(keyUp);

        expect(item2.getAttribute('selected')).toBe('');
      });

      it('should don\'t do anything', () => {
        setup();
        const spyCloseSurface = jest.spyOn(controller, 'closeSurface');

        const keyArrowDown = new KeyboardEvent('keydown', { code : 'A' });
        controller.handlerKeyDown(keyArrowDown);
        const keyArrowUp = new KeyboardEvent('keydown', { code : 'Maj' });
        controller.handlerKeyDown(keyArrowUp);

        expect(spyCloseSurface).not.toHaveBeenCalled();
        expect(component.setFocus).not.toHaveBeenCalled();
        expect(component.handleSelectClick).not.toHaveBeenCalled();
        expect(component.handleValueChange).not.toHaveBeenCalled();
        expect(item1.getAttribute('selected')).toBe(null);
        expect(item2.getAttribute('selected')).toBe(null);
      });
    });
  });
});
