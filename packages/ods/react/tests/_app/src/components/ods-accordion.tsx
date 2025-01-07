import React from 'react-dom/client';
import OdsAccordion from '@ovhcloud/ods-components-react/ods-accordion';

const Accordion = () => {
  return (
    <OdsAccordion>
      <span slot="summary">Hello, world!</span>

      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </span>
    </OdsAccordion>
  );
};

export default Accordion;
