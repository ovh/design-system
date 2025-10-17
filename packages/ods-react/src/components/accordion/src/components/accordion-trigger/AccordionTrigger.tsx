import { Accordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './accordionTrigger.module.scss';

interface AccordionTriggerProp extends ComponentPropsWithRef<'button'> {}

const AccordionTrigger: FC<AccordionTriggerProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Accordion.ItemTrigger
      className={ classNames(style['accordion-trigger'], className) }
      data-ods="accordion-trigger"
      ref={ ref }
      { ...props }>
      <div className={ style['accordion-trigger__content'] }>
        { children }
      </div>

      <Accordion.ItemIndicator asChild>
        <Icon
          className={ style['accordion-trigger__icon'] }
          name={ ICON_NAME.chevronDown } />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

export {
  AccordionTrigger,
  type AccordionTriggerProp,
};
