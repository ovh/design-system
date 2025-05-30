import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { Radio, RadioControl, RadioGroup, RadioLabel } from '.';
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

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="radio-group"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <RadioGroup id="radio-group">
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
  </>
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
  <RadioGroup
    disabled
    defaultValue="html">
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

export const InFormField = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          Pick a language:
        </FormFieldLabel>

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

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

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
