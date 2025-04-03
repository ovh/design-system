import React from 'react-dom/client';
import { OdsAccordion, OdsButton, OdsText } from 'ods-components-react';

const Accordion = () => {
  function onDetailButtonClick() {
    console.log('click on detail button')
  }

  function onSummaryButtonClick() {
    console.log('click on summary button')
  }

  return (
    <OdsAccordion isOpen>
      <span slot="summary">
        Hello, world!
        <OdsButton id="summary-button" label="Click me summary" onClick={ onSummaryButtonClick }>
        </OdsButton>
      </span>

      <div>
        <OdsText preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </OdsText>
        <OdsButton id="detail-button" label="Click me detail" onClick={ onDetailButtonClick }>
        </OdsButton>
      </div>
    </OdsAccordion>
  );
};

export default Accordion;
