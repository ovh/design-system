import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { Toggle, ToggleControl, ToggleLabel } from '.';
import style from './dev.module.css';

export default {
  component: Toggle,
  title: 'Toggle dev',
};

export const CustomStyle = () => (
  <>
    <Toggle className={ style['custom-toggle-deprecated'] } />

    <Toggle className={ style['custom-toggle'] }>
      <ToggleControl className={ style['custom-toggle-control'] } />
    </Toggle>
  </>
);

export const Controlled = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Toggle checked={ isToggled } onCheckedChange={ () => setIsToggled(!isToggled) } />
      <p>Toggled: { isToggled.toString() }</p>

      <Toggle checked={ isToggled } onCheckedChange={ () => setIsToggled(!isToggled) }>
        <ToggleControl />
      </Toggle>
      <p>Toggled: { isToggled.toString() }</p>
    </>
  );
};

export const Default = () => (
  <>
    <Toggle />

    <Toggle>
      <ToggleControl />
    </Toggle>

    <Toggle>
      <ToggleControl />

      <ToggleLabel>Toggle</ToggleLabel>
    </Toggle>
  </>
);

export const Disabled = () => (
  <>
    <Toggle disabled />
    <Toggle defaultChecked disabled />
    <Toggle disabled withLabels />
    <Toggle defaultChecked disabled withLabels />

    <br /><br />

    <Toggle disabled>
      <ToggleControl />
    </Toggle>
    <Toggle defaultChecked disabled>
      <ToggleControl />
    </Toggle>
    <Toggle disabled withLabels>
      <ToggleControl />
    </Toggle>
    <Toggle defaultChecked disabled withLabels>
      <ToggleControl />
    </Toggle>
  </>
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
          My toggle:
        </FormFieldLabel>

        <Toggle />

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          My toggle:
        </FormFieldLabel>

        <Toggle>
          <ToggleControl />
        </Toggle>

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

export const Invalid = () => (
  <>
    <Toggle invalid />

    <Toggle invalid>
      <ToggleControl />
    </Toggle>
  </>
);

export const WithLabel = () => (
  <Toggle>
    <ToggleControl />
    <ToggleLabel>Toggle</ToggleLabel>
  </Toggle>
);

export const WithLabels = () => (
  <>
    <Toggle withLabels />

    <Toggle withLabels>
      <ToggleControl />
    </Toggle>
  </>
);

export const States = () => (
  <>
    <p>Unchecked invalid</p>
    <Toggle invalid />

    <p>Unchecked invalid & disabled</p>
    <Toggle
      disabled
      invalid />

    <p>Checked invalid</p>
    <Toggle
      defaultChecked
      invalid />

    <p>Checked invalid & disabled</p>
    <Toggle
      defaultChecked
      disabled
      invalid />

    <br /><br />

    <p>Unchecked invalid</p>
    <Toggle invalid>
      <ToggleControl />
    </Toggle>

    <p>Unchecked invalid & disabled</p>
    <Toggle
      disabled
      invalid>
      <ToggleControl />
    </Toggle>

    <p>Checked invalid</p>
    <Toggle
      defaultChecked
      invalid>
      <ToggleControl />
    </Toggle>

    <p>Checked invalid & disabled</p>
    <Toggle
      defaultChecked
      disabled
      invalid>
      <ToggleControl />
    </Toggle>
  </>
);
