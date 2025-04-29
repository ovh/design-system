import { Accordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './accordionItem.module.scss';

interface AccordionItemProp extends ComponentPropsWithRef<'div'> {
  disabled?: boolean;
  value: string;
}

const AccordionItem: FC<AccordionItemProp> = forwardRef(({
  children,
  className,
  disabled,
  ...props
}, ref): JSX.Element => {
  return (
    <Accordion.Item
      className={ classNames(style[ 'accordion-item' ], className) }
      disabled={ disabled }
      ref={ ref }
      { ...props }
    >
      { children }
    </Accordion.Item>
  );
});

AccordionItem.displayName = 'AccordionItem';

export {
  AccordionItem,
  type AccordionItemProp,
};
