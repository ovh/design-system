import { Accordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './accordionContent.module.scss';

type AccordionContentProp = ComponentPropsWithRef<'div'>;

const AccordionContent: FC<AccordionContentProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Accordion.ItemContent
      className={ classNames(style[ 'accordion-content' ], className) }
      ref={ ref }
      { ...props }
    >
      { children }
    </Accordion.ItemContent>
  );
});

AccordionContent.displayName = 'AccordionContent';

export {
  AccordionContent,
  type AccordionContentProp,
};
