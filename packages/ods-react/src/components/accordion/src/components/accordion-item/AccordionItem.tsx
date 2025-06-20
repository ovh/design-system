import { Accordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './accordionItem.module.scss';

interface AccordionItemProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the accordion item is disabled.
   */
  disabled?: boolean;
  /**
   * The value of the accordion item.
   */
  value: string;
}

const AccordionItem: FC<AccordionItemProp> = forwardRef(({
  children,
  className,
  disabled,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <Accordion.Item
      className={ classNames(style[ 'accordion-item' ], className) }
      disabled={ disabled }
      ref={ ref }
      value={ value }
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
