import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '.';
import { FormField } from '../../form-field/src';
import { TEXT_PRESET, Text } from '../../text/src';
import style from './dev.module.css';

export default {
  component: Checkbox,
  title: 'Checkbox dev',
};

export const Default = () => (
  <Checkbox>
    <CheckboxControl />

    <CheckboxLabel>
      Checkbox label
    </CheckboxLabel>
  </Checkbox>
);

export const Disabled = () => (
  <>
    <Checkbox disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Unchecked
      </CheckboxLabel>
    </Checkbox>

    <Checkbox
      checked
      disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Checked
      </CheckboxLabel>
    </Checkbox>
  </>
);

export const InFormField = () => (
  <div>
    <Text preset={ TEXT_PRESET.label }>
      Legal considerations:
    </Text>

    <FormField>
      <Checkbox>
        <CheckboxControl />

        <CheckboxLabel>
          I agree to the terms and conditions
        </CheckboxLabel>
      </Checkbox>
    </FormField>

    <FormField>
      <Checkbox>
        <CheckboxControl />

        <CheckboxLabel>
          I agree to receive marketing communications
        </CheckboxLabel>
      </Checkbox>
    </FormField>
  </div>
);

export const Indeterminate = () => (
  <Checkbox
    checked="indeterminate"
    onCheckedChange={ (detail) => console.log('check change: ', detail) }>
    <CheckboxControl />

    <CheckboxLabel>
      Checkbox label
    </CheckboxLabel>
  </Checkbox>
);

export const Group = () => (
  <CheckboxGroup
    defaultValue={ ['checkbox2'] }
    name="group"
    onValueChange={ console.log }>
    <Checkbox value="checkbox1">
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox 1
      </CheckboxLabel>
    </Checkbox>

    <Checkbox value="checkbox2">
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox 2
      </CheckboxLabel>
    </Checkbox>
  </CheckboxGroup>
);

export const CustomStyle = () => (
  <>
    <h4>Single Checkbox with Custom Style</h4>
    <Checkbox className={ style['custom-checkbox'] }>
      <CheckboxControl className={ style['custom-checkbox-control'] } />

      <CheckboxLabel className={ style['custom-checkbox-label'] }>
        Custom styled checkbox
      </CheckboxLabel>
    </Checkbox>

    <h4>Checkbox Group with Custom Style</h4>
    <CheckboxGroup
      className={ style['custom-checkbox-group'] }
      name="custom-group">
      <Checkbox className={ style['custom-checkbox'] } value="custom1">
        <CheckboxControl className={ style['custom-checkbox-control'] } />

        <CheckboxLabel className={ style['custom-checkbox-label'] }>
          Custom checkbox 1
        </CheckboxLabel>
      </Checkbox>

      <Checkbox className={ style['custom-checkbox'] } value="custom2">
        <CheckboxControl className={ style['custom-checkbox-control'] } />

        <CheckboxLabel className={ style['custom-checkbox-label'] }>
          Custom checkbox 2
        </CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  </>
);
