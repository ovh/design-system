import { OdsCheckbox, OdsCheckboxControl, OdsCheckboxLabel } from '.';
import { OdsFormField } from '../../form-field/src';
import { ODS_TEXT_PRESET, OdsText } from '../../text/src';

export default {
  component: OdsCheckbox,
  title: 'OdsCheckbox dev',
};

export const Default = () => (
  <OdsCheckbox>
    <OdsCheckboxControl />

    <OdsCheckboxLabel>
      Checkbox label
    </OdsCheckboxLabel>
  </OdsCheckbox>
);

export const Disabled = () => (
  <>
    <OdsCheckbox disabled>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Unchecked
      </OdsCheckboxLabel>
    </OdsCheckbox>

    <OdsCheckbox
      checked
      disabled>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Checked
      </OdsCheckboxLabel>
    </OdsCheckbox>
  </>
);

export const FormField = () => (
  <div>
    <OdsText preset={ ODS_TEXT_PRESET.label }>
      Legal considerations:
    </OdsText>

    <OdsFormField>
      <OdsCheckbox>
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          I agree to the terms and conditions
        </OdsCheckboxLabel>
      </OdsCheckbox>
    </OdsFormField>

    <OdsFormField>
      <OdsCheckbox>
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          I agree to receive marketing communications
        </OdsCheckboxLabel>
      </OdsCheckbox>
    </OdsFormField>
  </div>
);

export const Indeterminate = () => (
  <OdsCheckbox
    checked="indeterminate"
    onCheckedChange={ (detail) => console.log('check change: ', detail) }>
    <OdsCheckboxControl />

    <OdsCheckboxLabel>
      Checkbox label
    </OdsCheckboxLabel>
  </OdsCheckbox>
);
