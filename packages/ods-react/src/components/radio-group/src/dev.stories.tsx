import { FormField } from '../../form-field/src';
import { Radio, RadioControl, RadioGroup, RadioGroupLabel, RadioLabel } from '.';
import style from './dev.module.css';

export default {
  component: RadioGroup,
  title: 'RadioGroup dev',
};

export const CustomCSS = () => (
  <RadioGroup className={ style['custom-radio-group'] }>
    <Radio
      className={ style['custom-radio'] }
      value="html">
      <RadioControl />

      <RadioLabel className={ style['custom-radio-label'] }>HTML</RadioLabel>
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

export const Default = () => (
  <RadioGroup>
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

export const Disabled = () => (
  <RadioGroup disabled defaultValue="html">
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

export const InFormField = () => (
  <FormField>
    <RadioGroup>
      <RadioGroupLabel>
        Pick a language:
      </RadioGroupLabel>

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
  </FormField>
);

export const Orientation = () => (
  <RadioGroup orientation="horizontal">
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
