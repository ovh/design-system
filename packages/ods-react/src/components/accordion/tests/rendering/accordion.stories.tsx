import { ACCORDION_EMPHASES, Accordion, AccordionContent, AccordionItem, AccordionTrigger, type AccordionEmphasis, EXPAND_ICON_POSITION } from '../../src';

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

const EmphasisAccordion = ({ emphasis, multiple }: { emphasis?: AccordionEmphasis, multiple: boolean }) => {
  const prefix = `${emphasis ?? 'none'}-${multiple ? 'multiple' : 'single'}`;

  return (
    <Accordion
      data-testid={ prefix }
      defaultValue={ multiple ? ['open', 'disabled'] : ['open'] }
      emphasis={ emphasis }
      multiple={ multiple }>
      <AccordionItem data-testid={ `${prefix}-item-open` } value="open">
        <AccordionTrigger data-testid={ `${prefix}-trigger-open` }>
          Open
        </AccordionTrigger>
        <AccordionContent data-testid={ `${prefix}-content-open` }>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem data-testid={ `${prefix}-item-closed` } value="closed">
        <AccordionTrigger
          data-testid={ `${prefix}-trigger-closed` }
          expandIconPosition={ EXPAND_ICON_POSITION.left }>
          Closed, icon on the left
        </AccordionTrigger>
        <AccordionContent data-testid={ `${prefix}-content-closed` }>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        data-testid={ `${prefix}-item-disabled` }
        disabled
        value="disabled">
        <AccordionTrigger data-testid={ `${prefix}-trigger-disabled` }>
          Disabled
        </AccordionTrigger>
        <AccordionContent data-testid={ `${prefix}-content-disabled` }>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const emphases = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px' }}>
    {
      [undefined, 'expand-icon-left' as AccordionEmphasis, ...ACCORDION_EMPHASES].map((emphasis) => [true, false].map((multiple) => (
        <EmphasisAccordion
          emphasis={ emphasis }
          key={ `${emphasis}-${multiple}` }
          multiple={ multiple } />
      )))
    }
  </div>
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
