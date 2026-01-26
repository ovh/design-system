import { FormField, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, Select, SelectContent, SelectControl, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './index.module.scss';

const DOMAINS = [
  { label: '.fr', value: '.fr' },
  { label: '.com', value: '.com' },
  { label: '.dev', value: '.dev' },
];

const EmailField = (): JSX.Element => {
  return (
    <FormField>
      <FormFieldLabel>
        Email
        <FormFieldLabelSubLabel>- mandatory</FormFieldLabelSubLabel>
      </FormFieldLabel>

      <div className={ style['email-field__field'] }>
        <Input
          className={ style['email-field__field__input'] }
          name="account-name"
          pattern="^([a-zA-Z0-9]|([._\-](?![._\-])))*[a-zA-Z0-9]$"
          placeholder="Account name" />

        <Text
          className={ style['email-field__field__at'] }
          preset={ TEXT_PRESET.span }>
          @
        </Text>

        <Select
          items={ DOMAINS }
          name="domain">
          <SelectControl
            className={ style['email-field__field__select'] }
            placeholder="Select domain" />

          <SelectContent />
        </Select>
      </div>

      <FormFieldHelper>
        <Text preset={ TEXT_PRESET.caption }>
          The part before the email address (the text before the @) must follow these guidelines:
          <ul className={ style['email-field__helper__list'] }>
            <li>It must end with a letter or a number</li>
            <li>Allowed special characters are: &quot;.&quot;, &quot;_&quot;, &quot;-&quot;</li>
            <li>Special characters cannot be placed next to each other</li>
          </ul>
        </Text>
      </FormFieldHelper>
    </FormField>
  );
};

export {
  EmailField,
};
