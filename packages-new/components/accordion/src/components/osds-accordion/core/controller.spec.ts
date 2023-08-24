import type { EventEmitter } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { OsdsAccordion } from '../osds-accordion';
import { OdsAccordionController } from './controller';
import { OsdsAccordionGroup } from '../../osds-accordion-group/osds-accordion-group';

class OsdsAccordionMock extends OsdsAccordion {
  constructor(attribute: Partial<OsdsAccordion>) {
    super();
    Object.assign(this, attribute)
  }
  detailsEl = document.createElement('details');
  odsAccordionToggle = { emit: jest.fn() } as unknown as EventEmitter<boolean>;
}

describe('spec:ods-accordion-controller', () => {
  let controller: OdsAccordionController;
  let component: OsdsAccordion;

  function setup(attributes: Partial<OsdsAccordion> = {}) {
    component = new OsdsAccordionMock(attributes);
    controller = new OdsAccordionController(component);
  }

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:syncOpenedOnDetail', () => {
      it('should remove open details attribute', () => {
        setup({ opened: false });
        controller.syncOpenedOnDetail();
        expect(component.detailsEl?.getAttribute('open')).toBe(null);
      });

      it('should set open details attribute', () => {
        setup({ opened: true });
        controller.syncOpenedOnDetail();
        expect(component.detailsEl?.getAttribute('open')).toBeDefined();
      });
    });

    describe('methods:onToggle', () => {
      it('should not change opened value', () => {
        setup();
        controller.onToggle();
        expect(component.opened).toBe(false);
      });

      it('should set opened to true', async () => {
        setup();
        component.detailsEl?.setAttribute('open', '');
        controller.onToggle();
        expect(component.opened).toBe(true);
      });

      it('should set opened to false', () => {
        setup({ opened: true });
        controller.onToggle();
        expect(component.opened).toBe(false);
      });

      it('should odsAccordionToggle emit false', () => {
        setup();
        const spy = jest.spyOn(component, 'emitToggle');
        controller.onToggle();
        expect(spy).toHaveBeenCalledWith(false);
      });

      it('should odsAccordionToggle emit true', () => {
        setup();
        component.detailsEl?.setAttribute('open', '');
        const spy = jest.spyOn(component, 'emitToggle');
        controller.onToggle();
        expect(spy).toHaveBeenCalledWith(true);
      });
    });

    describe('methods:beforeInit', () => {
      it('should call registerAccordion', () => {
        setup();
        const accordionGroup = new OsdsAccordionGroup() as unknown as (HTMLStencilElement & OsdsAccordionGroup);
        component.el.closest = jest.fn(() => accordionGroup);
        const spy = jest.spyOn(accordionGroup, 'registerAccordion');
        controller.beforeInit();
        expect(spy).toHaveBeenCalledWith(component);
      });
    });

    describe('methods:onDestroy', () => {
      it('should call unRegisterAccordion', () => {
        setup();
        component.accordionGroup = new OsdsAccordionGroup() as unknown as (HTMLStencilElement & OsdsAccordionGroup);
        const spy = jest.spyOn(component.accordionGroup, 'unRegisterAccordion');
        controller.onDestroy();
        expect(spy).toHaveBeenCalledWith(component);
      });
    });
  });
});
