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
  
        it('should odsCollapsibleToggle emit false', () => {
          setup({ opened: true });
          const spy = jest.spyOn(component, 'emitToggle');
          controller.onToggle();
          expect(spy).toHaveBeenCalledWith(true);
        });
  
        it('should odsCollapsibleToggle emit true', () => {
          setup({ opened: false });
          const spy = jest.spyOn(component, 'emitToggle');
          controller.onToggle();
          expect(spy).toHaveBeenCalledWith(false);
        });
      });
});