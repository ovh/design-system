import { Accordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useAccordion } from '../../contexts/useAccordion';
import style from './accordionContent.module.scss';

type AccordionContentProp = ComponentPropsWithRef<'div'>;

const AccordionContent: FC<AccordionContentProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { emphasis } = useAccordion();

  return (
    <Accordion.ItemContent
      className={ classNames(style['accordion-content'], style[`accordion-content--${emphasis}`], className) }
      data-ods="accordion-content"
      ref={ ref }
      { ...props }>
      { children }
    </Accordion.ItemContent>
  );
});

AccordionContent.displayName = 'AccordionContent';

export {
  AccordionContent,
  type AccordionContentProp,
};
