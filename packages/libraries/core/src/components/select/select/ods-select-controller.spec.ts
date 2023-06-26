import { OdsSelectOption } from '../public-api';
import { OdsSelect } from './ods-select';
import { OdsSelectController } from './ods-select-controller';
import { OdsSelectMock } from './ods-select.mock';

describe('spec:ods-select-controller', () => {
  let controller: OdsSelectController;
  let component: OdsSelect;
  let item1: OdsSelectOption & HTMLElement;
  let item2: OdsSelectOption & HTMLElement;

  function setup(attributes: Partial<OdsSelect> = {}) {
    component = { ...component, ...attributes };
    if (component.surface) {
        component.surface.opened = attributes?.opened ?? false;
    }
    controller = new OdsSelectController(component);
    controller.selectOptions = [item1, item2];
  }

  beforeEach(() => {
    component = new OdsSelectMock();
    item1 = document.createElement('osds-select-option') as OdsSelectOption & HTMLElement;
    item1.value = '1';
    item2 = document.createElement('osds-select-option') as OdsSelectOption & HTMLElement;
    item2.value = '2';
    component.el = document.createElement('osds-select');
    component.el.appendChild(item1);
    component.el.appendChild(item2);
  });

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
          const keyEnter = new KeyboardEvent("keydown", { code : "Enter" });
          controller.handlerKeyDown(keyEnter);
          expect(component.handleSelectClick).toHaveBeenCalled();
      });

      it('should select option with enter key', () => {
        setup({ opened: true });
        item1.setAttribute('selected', '');
        const keyEnter = new KeyboardEvent("keydown", { code : "Enter" });
        controller.handlerKeyDown(keyEnter);
        expect(component.handleValueChange).toHaveBeenCalled();
        expect(component.setFocus).toHaveBeenCalled();
      });

      it('should close select with escape key', () => {
        setup({ opened: true });
        const spyCloseSurface = jest.spyOn(controller, 'closeSurface');
        const keySpace = new KeyboardEvent("keydown", { code : "Escape" });
        controller.handlerKeyDown(keySpace);
        expect(spyCloseSurface).toHaveBeenCalledTimes(1);
      });

      it('should select option with arrow down', () => {
        setup();
        const keyArrowDown = new KeyboardEvent("keydown", { code : "ArrowDown" });
        controller.handlerKeyDown(keyArrowDown);
        expect(item1.getAttribute('selected')).toBe("");
      });

      it('should select last option with many arrow down', () => {
        setup();
        const keyArrowDown = new KeyboardEvent("keydown", { code : "ArrowDown" });
        controller.handlerKeyDown(keyArrowDown);
        controller.handlerKeyDown(keyArrowDown);
        controller.handlerKeyDown(keyArrowDown);
        controller.handlerKeyDown(keyArrowDown);
        controller.handlerKeyDown(keyArrowDown);
        expect(item2.getAttribute('selected')).toBe("");
      });

      it('should select option with arrow up', () => {
        setup();
        item2.setAttribute('selected', '');
        const keyArrowUp = new KeyboardEvent("keydown", { code : "ArrowUp" });
        controller.handlerKeyDown(keyArrowUp);
        expect(item1.getAttribute('selected')).toBe("");
        expect(item2.getAttribute('selected')).toBe(null);
      });

      it('should focus on select with arrow up', () => {
        setup();
        const keyArrowDown = new KeyboardEvent("keydown", { code : "ArrowDown" });
        controller.handlerKeyDown(keyArrowDown);
        const keyArrowUp = new KeyboardEvent("keydown", { code : "ArrowUp" });
        controller.handlerKeyDown(keyArrowUp);
        expect(component.setFocus).toHaveBeenCalledTimes(1);
      });

      it('should close select after if open and not any option selected', () => {
        setup({ opened: true });
        const keyArrowDown = new KeyboardEvent("keydown", { code : "Enter" });
        controller.handlerKeyDown(keyArrowDown);
        expect(component.handleSelectClick).toHaveBeenCalledTimes(1);
      });

      it('should don\'t do anything', () => {
        setup();
        const spyCloseSurface = jest.spyOn(controller, 'closeSurface');

        const keyArrowDown = new KeyboardEvent("keydown", { code : "A" });
        controller.handlerKeyDown(keyArrowDown);
        const keyArrowUp = new KeyboardEvent("keydown", { code : "Maj" });
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
