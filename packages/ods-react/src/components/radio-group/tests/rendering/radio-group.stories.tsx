import { Radio, RadioGroup } from '../../src';

export default {
  component: RadioGroup,
  title: 'Tests rendering',
};

export const render = () => (
  <RadioGroup>
    <Radio
      data-testid="render"
      value="radio1" />
  </RadioGroup>
);
