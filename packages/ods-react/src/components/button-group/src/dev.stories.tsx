import { useState } from 'react';
import { BUTTON_GROUP_SIZE, ButtonGroup, ButtonGroupItem } from '.';

export default {
  component: ButtonGroup,
  title: 'ButtonGroup dev',
};

export const Controlled = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <>
      <ButtonGroup
        onValueChange={ ({ value }) => setValues(value) }
        value={ values }>
        <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
        <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
        <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
      </ButtonGroup>

      <button onClick={ () => setValues(['1']) }>
        Force value 1
      </button>
    </>
  );
};

export const Default = () => (
  <ButtonGroup>
    <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
    <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
    <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
  </ButtonGroup>
);

export const DefaultValue = () => (
  <ButtonGroup defaultValue={ ['3'] }>
    <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
    <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
    <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
  </ButtonGroup>
);

export const Disabled = () => (
  <>
    <p>Whole component disabled</p>
    <ButtonGroup disabled>
      <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
      <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
    </ButtonGroup>

    <p>Specific item disabled</p>
    <ButtonGroup>
      <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
      <ButtonGroupItem disabled value="2">Button 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
      <ButtonGroupItem disabled value="4">Button 4</ButtonGroupItem>
    </ButtonGroup>

    <p>Selected item disabled</p>
    <ButtonGroup defaultValue={ ['2'] }>
      <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
      <ButtonGroupItem disabled value="2">Button 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
      <ButtonGroupItem disabled value="4">Button 4</ButtonGroupItem>
    </ButtonGroup>
  </>
);

export const Multiple = () => (
  <ButtonGroup multiple>
    <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
    <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
    <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
    <ButtonGroupItem value="4">Button 4</ButtonGroupItem>
  </ButtonGroup>
);

export const Sizes = () => (
  <>
    <p>MD</p>
    <ButtonGroup size={ BUTTON_GROUP_SIZE.md }>
      <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
      <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
    </ButtonGroup>

    <p>SM</p>
    <ButtonGroup size={ BUTTON_GROUP_SIZE.sm }>
      <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
      <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
    </ButtonGroup>

    <p>XS</p>
    <ButtonGroup size={ BUTTON_GROUP_SIZE.xs }>
      <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
      <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
    </ButtonGroup>
  </>
);
