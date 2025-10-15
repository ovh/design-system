import { Accordion as VendorAccordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import styles from './accordion.module.scss';

interface AccordionChangeDetail {
  value: string[],
}

interface AccordionProp extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /**
   * The initial value of the expanded accordion items. Use when you don't need to control the value of the accordion.
   */
  defaultValue?: string[];
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * Whether multiple accordion items can be expanded at the same time.
   */
  multiple?: boolean;
  /**
   * Callback fired when the state of expanded/collapsed accordion items changes.
   */
  onChange?: (detail: AccordionChangeDetail) => void;
  /**
   * The controlled value of the expanded accordion items.
   */
  value?: string[];
}

const Accordion: FC<AccordionProp> = forwardRef(({
  className,
  defaultValue,
  disabled,
  multiple = true,
  onChange,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorAccordion.Root
      className={ classNames(styles['accordion'], className) }
      collapsible={ true }
      data-ods="accordion"
      defaultValue={ defaultValue }
      disabled={ disabled }
      ref={ ref }
      multiple={ multiple }
      onValueChange={ onChange }
      value={ value }
      { ...props } />
  );
});

Accordion.displayName = 'Accordion';

export {
  Accordion,
  type AccordionProp,
  type AccordionChangeDetail,
};
