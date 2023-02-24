import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
/**
 * common controller logic for accordion group component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsAccordionGroupController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsAccordionGroupController');
  }
  beforeInit() {
    let opened = false;
    Array.from(this.component.el.children)
      .filter((c) => c.tagName.toLowerCase() === 'osds-accordion')
      .forEach(a => {
      const accordion = a;
      if (accordion.opened && !accordion.disabled) {
        if (opened) {
          accordion.opened = false;
        }
        else {
          opened = true;
        }
      }
    });
  }
  handleToggle(event, accordion) {
    const odsAccordion = this.component.accordions.find(a => a === accordion);
    if (!(odsAccordion === null || odsAccordion === void 0 ? void 0 : odsAccordion.disabled)) {
      if (event.detail) {
        this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'expand', { accordion });
        this.component.accordions.filter(a => a !== accordion)
          .forEach((a) => {
          if (!a.disabled) {
            a.opened = false;
          }
        });
      }
    }
  }
  registerAccordion(accordion) {
    const odsHtmlAccordion = accordion;
    this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'registerAccordion', { odsHtmlAccordion });
    this.component.accordions.push(odsHtmlAccordion);
    odsHtmlAccordion.addEventListener('odsAccordionToggle', (e) => this.handleToggle(e, odsHtmlAccordion));
  }
  unRegisterAccordion(accordion) {
    var _a;
    const odsHtmlAccordion = accordion;
    this.logger.log(`[ods-accordion-group-${this.component.accordionGroupId}]`, 'unRegisterAccordion', { odsHtmlAccordion });
    (_a = this.component.accordions.find(a => a === odsHtmlAccordion)) === null || _a === void 0 ? void 0 : _a.removeEventListener('odsAccordionToggle', (e) => this.handleToggle(e, odsHtmlAccordion));
    this.component.accordions = this.component.accordions.filter(a => a !== odsHtmlAccordion);
  }
  onDestroy() {
    const accordions = this.component.accordions;
    if (accordions) {
      accordions.forEach(accordion => {
        accordion.removeEventListener('odsAccordionToggle', (e) => this.handleToggle(e, accordion));
      });
      this.component.accordions = [];
    }
  }
}
