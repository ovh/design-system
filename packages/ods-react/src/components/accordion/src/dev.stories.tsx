import { useState } from 'react';
import { Button } from '../../button/src';
import { Text, TEXT_PRESET } from '../../text/src';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, EXPAND_ICON_POSITION } from '.';
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

export const ExpandIconPosition = () => (
  <>
    <Accordion>
      <AccordionItem value="1">
        <AccordionTrigger expandIconPosition={ EXPAND_ICON_POSITION.right }>
          <Text preset="paragraph">Icon on the right side</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <br />
    <Accordion>
      <AccordionItem value="2">
        <AccordionTrigger expandIconPosition={ EXPAND_ICON_POSITION.left }>
          <Text preset="paragraph">Icon on the left side</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </>
);

export const Product = () => (
  <Accordion>
    <AccordionItem value="1">
      <AccordionTrigger className={ style['accordion-custom-trigger'] } expandIconPosition={ EXPAND_ICON_POSITION.left }>
        <Text preset={ TEXT_PRESET.paragraph } style={{ margin: 0}}>Nom de la famille du produit</Text>
        <Text preset={ TEXT_PRESET.heading4 } as={'span'} style={{ margin: 0}}>Nom du produit</Text>
      </AccordionTrigger>
      <AccordionContent className={ style['product-details']}>
        <Text preset="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)
