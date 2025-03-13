import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type JSX, type MouseEvent, type ReactNode, useState } from 'react';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';
import style from './odsAccordion.module.scss';

interface OdsAccordionProp extends ComponentPropsWithoutRef<'details'> {
  disabled?: boolean,
  slotDetails: ReactNode,
  slotSummary: ReactNode,
}

const OdsAccordion: FC<OdsAccordionProp> = ({
  className,
  disabled = false,
  slotDetails,
  slotSummary,
  ...props
}): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(props.open);

  function onDetailsClick(event: MouseEvent): void {
    if (disabled) {
      event.preventDefault();
    }
  }

  function onDetailsToggle(event: any): void {
    setIsExpanded(event.target.open);
  }

  return (
    <details
      className={ classNames(
        style['ods-accordion'],
        { [style['ods-accordion--disabled']]: disabled },
        className,
      )}
      onClick={ onDetailsClick }
      onToggle={ onDetailsToggle }
      { ...props }>
      <summary
        className={ style['ods-accordion__summary'] }
        tabIndex={ disabled ? -1 : 0 }>
        <div className={ style['ods-accordion__summary__slot'] }>
          { slotSummary }
        </div>

        <OdsIcon
          className={ style['ods-accordion__summary__icon'] }
          name={ isExpanded ? ODS_ICON_NAME.chevronUp : ODS_ICON_NAME.chevronDown } />
      </summary>

      <div className={ style['ods-accordion__details'] }>
        { slotDetails }
      </div>
    </details>
  );
};

export {
  OdsAccordion,
  type OdsAccordionProp,
};
