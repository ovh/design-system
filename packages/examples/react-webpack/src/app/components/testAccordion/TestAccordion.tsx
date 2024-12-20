import type { OdsAccordionToggleEvent } from '@ovhcloud/ods-components';
import { OdsAccordion, OdsButton } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useRef, useState } from 'react';

function TestAccordion(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLOdsAccordionElement>(null);

  function onToggleClick() {
    accordionRef.current?.toggle();
  }

  return (
    <div>
      <p>
        Accordion isOpen value: { isOpen.toString() }
      </p>

      <OdsAccordion onOdsToggle={ (e: OdsAccordionToggleEvent) => setIsOpen(e.detail.isOpen) }
                    ref={ accordionRef }>
        <span slot="summary">Hello, world!</span>

        <span>
          Lorem ipsum dolor sit amet ...
        </span>
      </OdsAccordion>

      <br /><br />

      <OdsButton onClick={ onToggleClick }
                 label="Toggle accordion" />
    </div>
  );
}

export { TestAccordion };
