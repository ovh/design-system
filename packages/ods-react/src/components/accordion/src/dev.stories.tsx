import { useState } from 'react';
import { Button } from '../../button/src';
import { Text } from '../../text/src';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.';
import style from './dev.module.css';

export default {
  component: Accordion,
  title: 'Accordion dev',
};

export const CustomStyle = () => (
  <Accordion className={ style['custom-accordion'] }>
    <AccordionItem value="1">
      <AccordionTrigger>
        My content
      </AccordionTrigger>
      <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default = () => (
  <Accordion>
    <AccordionItem value="1">
      <AccordionTrigger>
        My content
      </AccordionTrigger>
      <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Multiple = () => (
  <div>
    <Accordion>
      <AccordionItem value="1">
        <AccordionTrigger>
          <Text preset="heading-4">Multiple</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          <Text preset="heading-4">Multiple</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <br />
    <Accordion multiple={ false }>
      <AccordionItem value="3">
        <AccordionTrigger>
          <Text preset="heading-4">Non-multiple</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="4">
        <AccordionTrigger>
          <Text preset="heading-4">Non-multiple</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const Disabled = () => (
  <Accordion disabled>
    <AccordionItem value="section1">
      <AccordionTrigger>
        <Text preset="heading-4">Disabled accordion 1</Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text preset="heading-4">Disabled accordion 1</Text>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="section2">
      <AccordionTrigger>
        <Text preset="heading-4">Disabled accordion 2</Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text preset="heading-4">Disabled accordion 2</Text>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const ItemDisabled = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return <div>
    <Accordion>
      <AccordionItem value="1" disabled={ isDisabled }>
        <AccordionTrigger>
          <Text preset="paragraph">Disabled item</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2" disabled={ isDisabled }>
        <AccordionTrigger>
          <Text preset="paragraph">Non disabled item</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="3" disabled>
        <AccordionTrigger>
          <Text preset="paragraph">Disabled item</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <br />
    <Button onClick={ () => setIsDisabled(!isDisabled) }>Toggle disabled</Button>
  </div>;
};

export const Controlled = () => {
  const [value, setValue] = useState(['section1']);

  return <Accordion value={ value } onChange={ (detail) => setValue(detail.value) }>
    <AccordionItem value="section1">
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>Contenu de la section 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="section2">
      <AccordionTrigger>Section 2</AccordionTrigger>
      <AccordionContent>Contenu de la section 2</AccordionContent>
    </AccordionItem>
  </Accordion>;
};

export const Nested = () => (
  <Accordion>
    <AccordionItem value="1">
      <AccordionTrigger>
        <Text preset="heading-4">My content</Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text preset="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Accordion>
          <AccordionItem value="2">
            <AccordionTrigger>
              <Text preset="heading-6">My sub-content</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text preset="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

