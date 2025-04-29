import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../src';

export default {
  component: Accordion,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Accordion data-testid="custom-style" style={{ height: '42px' }}>
    <AccordionItem value="1">
      <AccordionTrigger>
        My content
      </AccordionTrigger>
      <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const render = () => (
  <Accordion data-testid="render">
    <AccordionItem value="1">
      <AccordionTrigger>
        My content
      </AccordionTrigger>
      <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
