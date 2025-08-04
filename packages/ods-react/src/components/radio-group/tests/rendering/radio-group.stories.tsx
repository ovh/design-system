import { Radio, RadioControl, RadioGroup, RadioLabel } from '../../src';

export default {
  component: RadioGroup,
  title: 'Tests rendering',
};

export const render = () => (
  <RadioGroup data-testid="render">
    <Radio value="html">
      <RadioControl />

      <RadioLabel>HTML</RadioLabel>
    </Radio>

    <Radio value="css">
      <RadioControl />

      <RadioLabel>CSS</RadioLabel>
    </Radio>

    <Radio value="js">
      <RadioControl />

      <RadioLabel>JavaScript</RadioLabel>
    </Radio>
  </RadioGroup>
);
