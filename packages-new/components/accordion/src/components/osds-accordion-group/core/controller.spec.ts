
import type { OdsAccordionAttribute } from '../../osds-accordion/interfaces/attributes';
import type { OdsAccordionToggleEvent } from '../../osds-accordion/interfaces/events';
import { OsdsAccordion } from '../../osds-accordion/osds-accordion';
import { OsdsAccordionGroup } from '../osds-accordion-group';
import { OdsAccordionGroupController } from './controller';

class OdsAccordionMock extends OsdsAccordion {
  constructor(attribute: Partial<OsdsAccordion>) {
    super();
    Object.assign(this, attribute);
  }
}
class OdsAccordionGroupMock extends OsdsAccordionGroup {
  constructor(attribute: Partial<OsdsAccordionGroup>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-accordion-controller', () => {
  let controller: OdsAccordionGroupController;
  let component: OsdsAccordionGroup;

  function createAccordion(attributes: Partial<OdsAccordionAttribute> = {}): OdsAccordionMock {
    const accordion = new OdsAccordionMock(attributes);
    accordion.el.addEventListener = jest.fn();
    accordion.el.removeEventListener = jest.fn();

    (Object.keys(attributes) as Array<keyof OdsAccordionAttribute>)
      .forEach((key) => (accordion as any)[key] = attributes[key]);

    return accordion;
  }

  function appendOpenedAccordions(): void {
    const accordion1 = document.createElement('osds-accordion') as HTMLElement & OsdsAccordion;
    accordion1.opened = true;
    const accordion2 = document.createElement('osds-accordion') as HTMLElement & OsdsAccordion;
    accordion2.opened = true;
    component.el.appendChild(accordion1);
    component.el.appendChild(accordion2);
  }

  function setup(attributes: Partial<OsdsAccordionGroup> = {}) {
    component = new OdsAccordionGroupMock(attributes);
    controller = new OdsAccordionGroupController(component);
  }

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:beforeInit', () => {
      it('should let first accordion opened', () => {
        setup();
        appendOpenedAccordions();
        controller.beforeInit();
        expect((component.el.children[0] as HTMLElement & OsdsAccordion).opened).toBe(true);
      });

      it('should close the second accordion', () => {
        setup();
        appendOpenedAccordions();
        controller.beforeInit();
        expect((component.el.children[1] as HTMLElement & OsdsAccordion).opened).toBe(false);
      });
    });

    describe('methods:handleToggle', () => {
      it('should close the first accordion on opening second', () => {
        setup({ accordions: [createAccordion({ opened: true }), createAccordion()] });
        controller.handleToggle({ detail: true } as unknown as OdsAccordionToggleEvent, component.accordions[1]);
        expect(component.accordions[0]?.opened).toBe(false);
      });

      it('should let the disabled accordion opened on opening second', () => {
        setup({ accordions: [createAccordion({ opened: true, disabled: true }), createAccordion()] });
        controller.handleToggle({ detail: true } as unknown as OdsAccordionToggleEvent, component.accordions[1]);
        expect(component.accordions[0]?.opened).toBe(true);
      });
    });

    describe('methods:registerAccordion', () => {
      it('should push an accordion to accordion list', () => {
        const newAccordion = createAccordion();

        setup();
        controller.registerAccordion(newAccordion);
        expect(component.accordions).toEqual([newAccordion]);
      });

      it('should add odsAccordionToggle event listener', () => {
        const newAccordion = createAccordion();
        const spy = jest.spyOn(newAccordion.el, 'addEventListener');

        setup();
        controller.registerAccordion(newAccordion);
        expect(spy).toHaveBeenCalledWith('odsAccordionToggle', expect.any(Function));
      });
    });

    describe('methods:unRegisterAccordion', () => {
      it('should remove an accordion from accordion list', () => {
        const newAccordion = createAccordion();

        setup({ accordions: [newAccordion] });
        controller.unRegisterAccordion(newAccordion);
        expect(component.accordions).toEqual([]);
      });

      it('should remove odsAccordionToggle event listener', () => {
        const newAccordion = createAccordion();
        const spy = jest.spyOn(newAccordion.el, 'removeEventListener');

        setup({ accordions: [newAccordion] });
        controller.unRegisterAccordion(newAccordion);
        expect(spy).toHaveBeenCalledWith('odsAccordionToggle', expect.any(Function));
      });
    });

    describe('methods:onDestroy', () => {
      it('should reset accordion list', () => {
        setup({ accordions: [createAccordion()] });
        controller.onDestroy();
        expect(component.accordions).toEqual([]);
      });

      it('should remove all odsAccordionToggle event listener', () => {
        const accordion1 = createAccordion();
        const accordion2 = createAccordion();
        const spy1 = jest.spyOn(accordion1.el, 'removeEventListener');
        const spy2 = jest.spyOn(accordion2.el, 'removeEventListener');
        setup({ accordions: [accordion1, accordion2] });
        controller.onDestroy();
        expect(spy1).toHaveBeenCalledWith('odsAccordionToggle', expect.any(Function));
        expect(spy2).toHaveBeenCalledWith('odsAccordionToggle', expect.any(Function));
      });
    });
  });
});
