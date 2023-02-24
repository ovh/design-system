import { OdsAccordion } from '../accordion/ods-accordion';
import { OdsAccordionGroup } from './ods-accordion-group';
import { OdsAccordionToggleEvent } from '../accordion/ods-accordion-type';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
/**
 * common controller logic for accordion group component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsAccordionGroupController extends OdsComponentController<OdsAccordionGroup> {
  private readonly logger = new OdsLogger('OdsAccordionGroupController');

  constructor(component: OdsAccordionGroup) {
    super(component);
  }

  beforeInit<T extends OdsAccordion>(): void {
    let opened = false;
    Array.from(this.component.el.children)
    .filter((c) => c.tagName.toLowerCase() === 'osds-accordion')
    .forEach(a => {
      const accordion = a as unknown as T;
      if (accordion.opened && !accordion.disabled) {
        if (opened) {
          accordion.opened = false;
        } else {
          opened = true;
        }
      }
    });
  }

  handleToggle<T extends OdsAccordion>(event: OdsAccordionToggleEvent, accordion: T): void {
    const odsAccordion = this.component.accordions.find(a => a === accordion);
    if (!odsAccordion?.disabled) {
      if (event.detail) {
        this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'expand', { accordion });
        this.component.accordions.filter(a => a !== accordion)
          .forEach((a) => {
            if (!a.disabled) {
              a.opened = false
            }
          });
      }
    }
  }

  registerAccordion<T extends OdsAccordion>(accordion: HTMLElement & OdsAccordion): void {
    const odsHtmlAccordion = accordion as HTMLElement & T;
    this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'registerAccordion', { odsHtmlAccordion });
    this.component.accordions.push(odsHtmlAccordion);
    odsHtmlAccordion.addEventListener('odsAccordionToggle', (e: Event) => this.handleToggle(e as OdsAccordionToggleEvent, odsHtmlAccordion))
  }

  unRegisterAccordion<T extends OdsAccordion>(accordion: HTMLElement & OdsAccordion): void {
    const odsHtmlAccordion = accordion as HTMLElement & T;
    this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'unRegisterAccordion', { odsHtmlAccordion });
    this.component.accordions.find(a => a === odsHtmlAccordion)?.removeEventListener('odsAccordionToggle', (e: Event) => this.handleToggle(e as OdsAccordionToggleEvent, odsHtmlAccordion));
    this.component.accordions = this.component.accordions.filter(a => a !== odsHtmlAccordion);
  }

  onDestroy(): void {
    const accordions = this.component.accordions;
    if (accordions) {
      accordions.forEach(accordion => {
        accordion.removeEventListener('odsAccordionToggle', (e: Event) => this.handleToggle((e as OdsAccordionToggleEvent), accordion));
      })
      this.component.accordions = [];
    }
  }

}
