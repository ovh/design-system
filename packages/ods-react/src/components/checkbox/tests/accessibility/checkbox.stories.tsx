import { FormField, FormFieldLabel } from '../../../form-field/src';
import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '../../src';

export default {
  component: Checkbox,
  title: 'Tests accessibility',
};

export const GroupInFormField = () => (
  <FormField data-testid="form-field">
    <FormFieldLabel>Notifications</FormFieldLabel>

    <CheckboxGroup data-testid="group">
      <Checkbox value="mail">
        <CheckboxControl />
        <CheckboxLabel>Mail</CheckboxLabel>
      </Checkbox>

      <Checkbox value="sms">
        <CheckboxControl />
        <CheckboxLabel>SMS</CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  </FormField>
);

export const FormFieldsInGroup = () => (
  <CheckboxGroup aria-label="Options">
    <FormField>
      <Checkbox value="one">
        <CheckboxControl />
        <CheckboxLabel>One</CheckboxLabel>
      </Checkbox>
    </FormField>

    <FormField>
      <Checkbox value="two">
        <CheckboxControl />
        <CheckboxLabel>Two</CheckboxLabel>
      </Checkbox>
    </FormField>
  </CheckboxGroup>
);

export const SingleInFormField = () => (
  <FormField>
    <FormFieldLabel>Terms</FormFieldLabel>

    <Checkbox>
      <CheckboxControl />
      <CheckboxLabel>I agree</CheckboxLabel>
    </Checkbox>
  </FormField>
);
