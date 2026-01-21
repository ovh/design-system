import { type AccordionChangeDetail, type AccordionProp, Accordion as AccordionRoot } from './components/accordion/Accordion';
import { AccordionContent, type AccordionContentProp } from './components/accordion-content/AccordionContent';
import { AccordionItem, type AccordionItemProp } from './components/accordion-item/AccordionItem';
import { AccordionTrigger, type AccordionTriggerProp } from './components/accordion-trigger/AccordionTrigger';

const Accordion = {
  Content: AccordionContent,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
};

export { Accordion };
export type { AccordionProp, AccordionChangeDetail, AccordionContentProp, AccordionItemProp, AccordionTriggerProp };
