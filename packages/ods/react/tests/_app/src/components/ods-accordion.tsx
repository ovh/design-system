import React from 'react-dom/client';
import { OdsAccordion, OdsText } from 'ods-components-react';

const Accordion = () => {
  return (
    <OdsAccordion>
      <span slot="summary">Hello, world!</span>

      <OdsText preset="span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </OdsText>
    </OdsAccordion>
  );
};

export default Accordion;
