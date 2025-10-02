import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, type AccordionProp, AccordionTrigger } from '../../../../ods-react/src/components/accordion/src';
import { Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<AccordionProp>;

const meta: Meta<AccordionProp> = {
  component: Accordion,
  argTypes: excludeFromDemoControls(['defaultValue', 'onChange', 'value']),
  subcomponents: { AccordionContent, AccordionItem, AccordionTrigger },
  title: 'React Components/Accordion',
};

export default meta;

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Accordion>
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
    </Accordion>
  ),
};

export const Demo: Story = {
  render: (arg: AccordionProp) => (
    <Accordion disabled={ arg.disabled } multiple={ arg.multiple }>
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
  ),
  argTypes: orderControls({
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
  }),
};

export const Default: Story = {
  globals: {
    imports: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  globals: {
    imports: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
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
    </>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Accordion disabled>
      <AccordionItem value="0">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const ItemDisabled: Story = {
  globals: {
    imports: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Accordion>
      <AccordionItem value="0" disabled>
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Controlled: Story = {
  globals: {
    imports: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [value, setValue] = useState(['0']);

    return (
      <Accordion value={ value } onChange={ (detail) => setValue(detail.value) }>
        <AccordionItem value="0">
          <AccordionTrigger>
            Hello World!
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="1">
          <AccordionTrigger>
            Hello World!
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: ({}) => (
    <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">Hello World!</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">Lorem ipsum dolor sit amet.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1" disabled>
        <AccordionTrigger>
          <Text preset="paragraph">Disabled item</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">This item is disabled.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  tags: ['!dev'],
};
