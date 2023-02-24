import { EventEmitter } from '@stencil/core';
import { OdsAccordion } from './ods-accordion';
import { OdsAccordionController } from './ods-accordion-controller';
import { OdsAccordionGroup } from '../accordion-group/ods-accordion-group';
import { OdsAccordionGroupMock } from './../accordion-group/ods-accordion-group-mock';
import { OdsAccordionMock } from './ods-accordion-mock';

describe('spec:ods-accordion-controller', () => {
  let controller: OdsAccordionController;
  let component: OdsAccordion;
  let detailsEl: HTMLDetailsElement;

  function setup(attributes: Partial<OdsAccordion> = {}) {
    component = {...component, ...attributes};
    controller = new OdsAccordionController(component);
  }

  beforeEach(() => {
    component = new OdsAccordionMock();
    component.el = document.createElement('osds-accordion') as HTMLElement;
    detailsEl = document.createElement('details');
    component.detailsEl = detailsEl;
    component.odsAccordionToggle = { emit: jest.fn() } as unknown as EventEmitter<boolean>;
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:syncOpenedOnDetail', () => {
      it('should remove open details attribute', () => {
        setup({ opened: false });
        controller.syncOpenedOnDetail();
        expect(component.detailsEl?.open).toBeFalsy();
      });

      it('should set open details attribute', () => {
        setup({ opened: true });
        controller.syncOpenedOnDetail();
        expect(component.detailsEl?.open).toBeTruthy();
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
        const accordionGroup = new OdsAccordionGroupMock() as unknown as (HTMLElement & OdsAccordionGroup);
        component.el.closest = jest.fn(() => accordionGroup);
        const spy = jest.spyOn(accordionGroup, 'registerAccordion');
        setup();
        controller.beforeInit();
        expect(spy).toHaveBeenCalledWith(component.el);
      });
    });

    describe('methods:onDestroy', () => {
      it('should call unRegisterAccordion', () => {
        component.accordionGroup = new OdsAccordionGroupMock() as unknown as (HTMLElement & OdsAccordionGroup);
        const spy = jest.spyOn(component.accordionGroup, 'unRegisterAccordion');
        setup();
        controller.onDestroy();
        expect(spy).toHaveBeenCalledWith(component.el);
      });
    });
  });
});
