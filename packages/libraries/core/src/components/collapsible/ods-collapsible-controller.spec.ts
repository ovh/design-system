import { EventEmitter } from "@stencil/core";
import { OdsCollapsible } from "./ods-collapsible";
import { OdsCollapsibleController } from "./ods-collapsible-controller";
import { OdsCollapsibleMock } from "./ods-collapsible-mock";

describe('spec:ods-collapsible-controller', () => {
    let controller: OdsCollapsibleController;
    let component: OdsCollapsible;
  
    function setup(attributes: Partial<OdsCollapsible> = {}) {
      component = { ...component, ...attributes };
      controller = new OdsCollapsibleController(component);
    }
  
    beforeEach(() => {
      component = new OdsCollapsibleMock();
      component.el = document.createElement('osds-collapsible') as HTMLElement;
      component.odsCollapsibleToggle = { emit: jest.fn() } as unknown as EventEmitter<boolean>;
    });

    describe('methods:onToggle', () => {
        it('should set opened to true', async () => {
          setup({ opened: false });
          controller.onToggle();
          expect(component.opened).toBe(true);
        });
  
        it('should set opened to false', () => {
          setup({ opened: true });
          controller.onToggle();
          expect(component.opened).toBe(false);
        });
  
        it('should odssCollapsibleToggle emit false', () => {
          setup({ opened: true });
          const spy = jest.spyOn(component, 'emitToggle');
          controller.onToggle();
          expect(spy).toHaveBeenCalledWith(false);
        });
  
        it('should odssCollapsibleToggle emit true', () => {
          setup({ opened: false });
          const spy = jest.spyOn(component, 'emitToggle');
          controller.onToggle();
          expect(spy).toHaveBeenCalledWith(true);
        });
      });
});