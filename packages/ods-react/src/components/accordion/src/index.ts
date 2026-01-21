import { type AccordionChangeDetail, type AccordionProp, Accordion as AccordionRoot } from './components/accordion/Accordion';
import { AccordionContent, type AccordionContentProp } from './components/accordion-content/AccordionContent';
import { AccordionItem, type AccordionItemProp } from './components/accordion-item/AccordionItem';
import { AccordionTrigger, type AccordionTriggerProp } from './components/accordion-trigger/AccordionTrigger';

const Accordion = Object.assign(AccordionRoot, {
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
});

export { Accordion };
export { AccordionContent, AccordionItem, AccordionTrigger };
export type { AccordionProp, AccordionChangeDetail, AccordionContentProp, AccordionItemProp, AccordionTriggerProp };
export { EXPAND_ICON_POSITION, EXPAND_ICON_POSITIONS, type ExpandIconPosition } from './constants/expand-icon-position';
