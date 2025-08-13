import { Accordion, AccordionContent, AccordionItem, type AccordionProp, AccordionTrigger, Text } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: AccordionProp) => (
  <Accordion disabled={ prop.disabled } multiple={ prop.multiple }>
    <AccordionItem value="0">
      <AccordionTrigger>
        <Text preset="paragraph">
          Hello World!
        </Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text preset="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </Text>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="1">
      <AccordionTrigger>
        <Text preset="paragraph">
          Bye World!
        </Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text preset="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </Text>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
