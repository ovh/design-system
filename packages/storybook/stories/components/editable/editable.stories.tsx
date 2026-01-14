import { type Meta, type StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../ods-react/src/components/button/src';
import { Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger, type EditableProp } from '../../../../ods-react/src/components/editable/src';
import { FormField } from '../../../../ods-react/src/components/form-field/src';
import { Input } from '../../../../ods-react/src/components/input/src';
import { Select, SelectContent, SelectControl } from '../../../../ods-react/src/components/select/src';
import { Textarea } from '../../../../ods-react/src/components/textarea/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<EditableProp>;

const meta: Meta<EditableProp> = {
  argTypes: excludeFromDemoControls(['defaultEditing', 'editing', 'i18n', 'locale', 'onCancel', 'onEditChange', 'onSubmit']),
  component: Editable,
  subcomponents: { EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger },
  tags: ['new'],
  title: 'React Components/Editable',
};

export default meta;

export const Demo: Story = {
  render: () => {
    const [value, setValue] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
    const bufferValue = useRef(value);

    return (
      <Editable
        onCancel={ () => bufferValue.current = value }
        onSubmit={ () => setValue(bufferValue.current) }
        style={{ display: 'flex' }}>
        <EditableDisplay>
          <p style={{ margin: 0 }}>
            { value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty> }
          </p>
        </EditableDisplay>

        <EditableInput style={{ flex: '1 1 0' }}>
          <Textarea
            autoFocus
            defaultValue={ value }
            onChange={ (e) => bufferValue.current = e.target.value }
            style={{ resize: 'vertical', width: '100%' }}/>
        </EditableInput>

        <EditableActions />
      </Editable>
    );
  },
};

export const ComplexFormElement: Story = {
  globals: {
    imports: `import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, FormField, Input, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const [displayValue, setDisplayValue] = useState('');
    const [accountValue, setAccountValue] = useState('');
    const [domainValue, setDomainValue] = useState('');

    function onCancel(): void {
      const [account, domain] = displayValue.split('@ovhcloud');

      setAccountValue(account || '');
      setDomainValue(domain || '');
    }

    return (
      <Editable
        onCancel={ onCancel }
        onSubmit={ () => setDisplayValue(`${accountValue}@ovhcloud${domainValue}`) }>
        <EditableDisplay>
          { displayValue || <EditableDisplayEmpty>Account name</EditableDisplayEmpty> }
        </EditableDisplay>

        <EditableInput>
          <FormField style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', columnGap: '8px' }}>
            <Input
              name="account-name"
              onChange={ (e) => setAccountValue(e.target.value) }
              pattern="^([a-zA-Z0-9]|([._\-](?![._\-])))*[a-zA-Z0-9]$"
              placeholder="Account name"
              value={ accountValue } />

            <span>
              @ovhcloud
            </span>

            <Select
              items={[
                { label: '.fr', value: '.fr' },
                { label: '.com', value: '.com' },
                { label: '.dev', value: '.dev' },
              ]}
              name="domain"
              onValueChange={ ({ value }) => setDomainValue(value[0]) }
              value={ domainValue ? [domainValue] : [] }>
              <SelectControl placeholder="Select domain" />

              <SelectContent />
            </Select>
          </FormField>
        </EditableInput>

        <EditableActions />
      </Editable>
    );
  },
};

export const Controlled: Story = {
  globals: {
    imports: `import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const [displayValue, setDisplayValue] = useState('Double click to edit');
    const [value, setValue] = useState(displayValue);

    return (
      <Editable
        onCancel={ () => setValue(displayValue) }
        onSubmit={ () => setDisplayValue(value) }>
        <EditableDisplay>
          { displayValue || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty> }
        </EditableDisplay>

        <EditableInput>
          <Input
            autoFocus
            onChange={ (e) => setValue(e.target.value) }
            value={ value } />
        </EditableInput>

        <EditableActions />
      </Editable>
    );
  },
};

export const CustomActions: Story = {
  globals: {
    imports: `import { BUTTON_SIZE, BUTTON_VARIANT, Button, Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const [value, setValue] = useState('Double click to edit');
    const bufferValue = useRef(value);

    return (
      <Editable
        onCancel={ () => bufferValue.current = value }
        onSubmit={ () => setValue(bufferValue.current) }>
        <EditableDisplay>
          { value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty> }
        </EditableDisplay>

        <EditableInput>
          <Input
            autoFocus
            defaultValue={ value }
            onChange={ (e) => bufferValue.current = e.target.value } />
        </EditableInput>

        <EditableActions>
          {
            ({ editing }) => (
              editing
                ? <>
                  <EditableSubmitTrigger asChild>
                    <Button size={ BUTTON_SIZE.sm }>Submit</Button>
                  </EditableSubmitTrigger>

                  <EditableCancelTrigger asChild>
                    <Button
                      size={ BUTTON_SIZE.sm }
                      variant={ BUTTON_VARIANT.outline }>Cancel</Button>
                  </EditableCancelTrigger>
                </>
                : <EditableEditTrigger asChild>
                  <Button size={ BUTTON_SIZE.sm }>Edit</Button>
                </EditableEditTrigger>
            )
          }
        </EditableActions>
      </Editable>
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const [value, setValue] = useState('Double click to edit');
    const bufferValue = useRef(value);

    return (
      <Editable
        onCancel={ () => bufferValue.current = value }
        onSubmit={ () => setValue(bufferValue.current) }>
        <EditableDisplay>
          { value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty> }
        </EditableDisplay>

        <EditableInput>
          <Input
            autoFocus
            defaultValue={ value }
            onChange={ (e) => bufferValue.current = e.target.value } />
        </EditableInput>

        <EditableActions />
      </Editable>
    );
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => {
    const [value, setValue] = useState('Double click to edit');
    const bufferValue = useRef(value);

    return (
      <Editable
        onCancel={ () => bufferValue.current = value }
        onSubmit={ () => setValue(bufferValue.current) }>
        <EditableDisplay>
          { value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty> }
        </EditableDisplay>

        <EditableInput>
          <Input
            autoFocus
            defaultValue={ value }
            onChange={ (e) => bufferValue.current = e.target.value } />
        </EditableInput>

        <EditableActions />
      </Editable>
    );
  },
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Editable>
      <EditableDisplay>
        Some node
      </EditableDisplay>

      <EditableInput>
        <Input
          autoFocus
          defaultValue="Some node" />
      </EditableInput>

      <EditableActions />
    </Editable>
  ),
};
