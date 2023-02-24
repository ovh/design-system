import { OdsAccordion } from '../accordion/ods-accordion';
import { OdsAccordionAttributes } from '../accordion/ods-accordion-attributes';
import { OdsAccordionGroup } from './ods-accordion-group';
import { OdsAccordionGroupController } from './ods-accordion-group-controller';
import { OdsAccordionGroupMock } from './ods-accordion-group-mock';
import { OdsAccordionMock } from '../accordion/ods-accordion-mock';
import { OdsAccordionToggleEvent } from '../accordion/ods-accordion-type';

export type HTMLOdsAccordionMock = OdsAccordionMock & HTMLElement;

describe('spec:ods-accordion-controller', () => {
  let controller: OdsAccordionGroupController;
  let component: OdsAccordionGroup;

  function createAccordion(attributes: Partial<OdsAccordionAttributes> = {}): HTMLOdsAccordionMock {
    const accordion = new OdsAccordionMock() as HTMLOdsAccordionMock;
    accordion.addEventListener = jest.fn();
    accordion.removeEventListener = jest.fn();

    (Object.keys(attributes) as Array<keyof OdsAccordionAttributes>)
      .forEach((key) => (accordion as any)[key] = attributes[key]);

    return accordion;
  }

  function appendOpenedAccordions(): void {
    const accordion1 = document.createElement('osds-accordion') as HTMLElement & OdsAccordion;
    accordion1.opened = true;
    const accordion2 = document.createElement('osds-accordion') as HTMLElement & OdsAccordion;
    accordion2.opened = true;
    component.el.appendChild(accordion1);
    component.el.appendChild(accordion2);
  }

  function setup(attributes: Partial<OdsAccordionGroup> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsAccordionGroupController(component);
  }

  beforeEach(() => {
    component = new OdsAccordionGroupMock();
    component.el = document.createElement('osds-accordion-group') as HTMLElement;
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:beforeInit', () => {
      it('should let first accordion opened', () => {
        appendOpenedAccordions();
        setup();
        controller.beforeInit();
        expect((component.el.children[0] as HTMLElement & OdsAccordion).opened).toBe(true);
      });

      it('should close the second accordion', () => {
        appendOpenedAccordions();
        setup();
        controller.beforeInit();
        expect((component.el.children[1] as HTMLElement & OdsAccordion).opened).toBe(false);
      });
    });

    describe('methods:handleToggle', () => {
      it('should close the first accordion on opening second', () => {
        setup({ accordions: [createAccordion({ opened: true }), createAccordion()] });
        controller.handleToggle({ detail: true } as OdsAccordionToggleEvent, component.accordions[1]);
        expect(component.accordions[0]?.opened).toBe(false);
      });

      it('should let the disabled accordion opened on opening second', () => {
        setup({ accordions: [createAccordion({ opened: true, disabled: true }), createAccordion()] });
        controller.handleToggle({ detail: true } as OdsAccordionToggleEvent, component.accordions[1]);
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
        const spy = jest.spyOn(newAccordion, 'addEventListener');

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
        const spy = jest.spyOn(newAccordion, 'removeEventListener');

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
        const spy1 = jest.spyOn(accordion1, 'removeEventListener');
        const spy2 = jest.spyOn(accordion2, 'removeEventListener');
        setup({ accordions: [accordion1, accordion2] });
        controller.onDestroy();
        expect(spy1).toHaveBeenCalledWith('odsAccordionToggle', expect.any(Function));
        expect(spy2).toHaveBeenCalledWith('odsAccordionToggle', expect.any(Function));
      });
    });
  });
});
