import { Accordion } from '@ark-ui/react/accordion';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { EXPAND_ICON_POSITION, type ExpandIconPosition } from '../../constants/expand-icon-position';
import style from './accordionTrigger.module.scss';

interface AccordionTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * The position of the expand icon.
   */
  expandIconPosition?: ExpandIconPosition,
}

const AccordionTrigger: FC<AccordionTriggerProp> = forwardRef(({
  expandIconPosition = EXPAND_ICON_POSITION.right,
  children,
  className,
  ...props
}, ref): JSX.Element => (
  <Accordion.ItemTrigger
    className={ classNames(style['accordion-trigger'], style[`accordion-trigger--expand-icon-${expandIconPosition}`], className) }
    data-ods="accordion-trigger"
    ref={ ref }
    { ...props }>
    <div className={ style['accordion-trigger__content'] }>
      { children }
    </div>

    <Accordion.ItemIndicator asChild>
      <Icon
        className={ style['accordion-trigger__icon'] }
        name={ ICON_NAME.chevronRight } />
    </Accordion.ItemIndicator>
  </Accordion.ItemTrigger>
));

AccordionTrigger.displayName = 'AccordionTrigger';

export {
  AccordionTrigger,
  type AccordionTriggerProp,
};
