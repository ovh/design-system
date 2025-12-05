import { ButtonGroup, ButtonGroupItem } from '../../src';

export default {
  component: ButtonGroup,
  title: 'Tests rendering',
};

export const render = () => (
  <ButtonGroup>
    <ButtonGroupItem value="1">Button 1</ButtonGroupItem>
    <ButtonGroupItem value="2">Button 2</ButtonGroupItem>
    <ButtonGroupItem value="3">Button 3</ButtonGroupItem>
  </ButtonGroup>
);
