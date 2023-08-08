import type { OsdsAccordion } from '../../osds-accordion/osds-accordion';
import type { OdsAccordionToggleEvent } from '../../osds-accordion/interfaces/type';
import { OsdsAccordionGroup } from '../osds-accordion-group';
import { OdsLogger } from '@ovhcloud/ods-common-core';

export class OdsAccordionGroupController {
  private readonly logger = new OdsLogger('OdsAccordionGroupController');

  constructor(private component: OsdsAccordionGroup) { }

  beforeInit<T extends OsdsAccordion>(): void {
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

  handleToggle<T extends OsdsAccordion>(event: OdsAccordionToggleEvent, accordion: T): void {
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

  registerAccordion(accordion: OsdsAccordion): void {
    this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'registerAccordion', { accordion });
    this.component.accordions.push(accordion);
    accordion.el.addEventListener('odsAccordionToggle', (e: Event) => this.handleToggle(e as OdsAccordionToggleEvent, accordion))
  }

  unRegisterAccordion(accordion: OsdsAccordion): void {
    this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'unRegisterAccordion', { accordion });
    console.log('this.component.accordions', this.component.accordions.find(a => a === accordion));
    this.component.accordions.find(a => a === accordion)?.el.removeEventListener('odsAccordionToggle', (e: Event) => this.handleToggle(e as OdsAccordionToggleEvent, accordion));
    this.component.accordions = this.component.accordions.filter(a => a !== accordion);
  }

  onDestroy(): void {
    const accordions = this.component.accordions;
    if (accordions) {
      accordions.forEach(accordion => {
        accordion?.el.removeEventListener('odsAccordionToggle', (e: Event) => this.handleToggle((e as OdsAccordionToggleEvent), accordion));
      })
      this.component.accordions = [];
    }
  }

}
