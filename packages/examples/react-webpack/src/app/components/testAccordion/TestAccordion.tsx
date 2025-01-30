import type { OdsAccordionToggleEvent } from '@ovhcloud/ods-components';
import { OdsAccordion, OdsButton } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useRef, useState } from 'react';

function TestAccordion(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLOdsAccordionElement>(null);

  function onButtonClick() {
    console.log('click');
  }

  function onButtonSummaryClick() {
    console.log('click on summary button')
  }


  return (
    <div>
      <p>
        Accordion isOpen value: { isOpen.toString() }
      </p>

      <OdsAccordion onOdsToggle={ (e: OdsAccordionToggleEvent) => setIsOpen(e.detail.isOpen) }
        ref={ accordionRef }>
        <span slot="summary">
          Hello, world!
          <OdsButton label="Click me summary" onClick={ onButtonSummaryClick }>
          </OdsButton>
        </span>

        <span>
          Lorem ipsum dolor sit amet ...

          <OdsButton onClick={ onButtonClick }
            label="Click me" />
        </span>
      </OdsAccordion>
    </div>
  );
}

export { TestAccordion };
