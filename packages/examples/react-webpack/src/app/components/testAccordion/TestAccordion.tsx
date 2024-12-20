import type { OdsAccordionToggleEvent } from '@ovhcloud/ods-components';
import { OdsAccordion, OdsButton } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useRef, useState } from 'react';

function TestAccordion(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLOdsAccordionElement>(null)

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </OdsAccordion>

      <br /><br />

      <OdsButton onClick={ onToggleClick }
                 label="Toggle accordion" />
    </div>
  );
}

export { TestAccordion };
