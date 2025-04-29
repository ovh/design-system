import { Accordion as VendorAccordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

type AccordionValueState = string[];

interface AccordionChangeDetail {
  value: AccordionValueState,
}

interface AccordionProp extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  defaultValue?: string[];
  disabled?: boolean;
  multiple?: boolean;
  onChange?: (detail: AccordionChangeDetail) => void;
  value?: string[];
}

const Accordion: FC<AccordionProp> = forwardRef(({
  className,
  multiple = true,
  onChange,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorAccordion.Root
      className={ classNames(className) }
      collapsible={ true }
      ref={ ref }
      multiple={ multiple }
      onValueChange={ onChange }
      { ...props }
    />
  );
});

Accordion.displayName = 'Accordion';

export {
  Accordion,
  type AccordionProp,
  type AccordionValueState,
  type AccordionChangeDetail,
};
