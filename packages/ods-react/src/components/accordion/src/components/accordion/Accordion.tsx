import { Accordion as VendorAccordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface AccordionChangeDetail {
  value: string[],
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
  defaultValue,
  disabled,
  multiple = true,
  onChange,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorAccordion.Root
      className={ classNames(className) }
      collapsible={ true }
      defaultValue={ defaultValue }
      disabled={ disabled }
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
  type AccordionChangeDetail,
};
