import { type Meta, type StoryObj } from '@storybook/react';
import React, { type ChangeEvent, useEffect, useRef, useState } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../ods-react/src/components/button/src';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel } from '../../../../ods-react/src/components/form-field/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { INPUT_I18N, INPUT_TYPE, Input, type InputProp } from '../../../../ods-react/src/components/input/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { excludeFromDemoControls } from '../../support/controls';
import { staticSourceRenderConfig } from '../../support/source';

type Story = StoryObj<InputProp>;

const meta: Meta<InputProp> = {
  argTypes: excludeFromDemoControls(['i18n', 'locale', 'maskOption', 'onClear']),
  component: Input,
  title: 'React Components/Input',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input placeholder="Input" />
  ),
};

export const Clearable: Story = {
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input
      clearable
      defaultValue="Clearable" />
  ),
};

export const Datalist: Story = {
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Input list="ice-cream-flavors" />

      <datalist id="ice-cream-flavors">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
    </>
  ),
};

export const ContentAdornments: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px', alignItems: 'start' }}>{ story() }</div>],
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Input startContent="https://" />
      <Input endContent="kg" />
      <Input
        endContent=".com"
        startContent="https://" />
    </>
  ),
};

export const ContentAdornmentWithButton: Story = {
  globals: {
    imports: `import { BUTTON_SIZE, BUTTON_VARIANT, Button, ICON_NAME, Icon, Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input
      defaultValue="Some value"
      endContent={ (
        <Button
          aria-label="Copy value"
          size={ BUTTON_SIZE.xs }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.fileCopy } />
        </Button>
      ) } />
  ),
};

export const CompleteForm: Story = {
  globals: {
    imports: `import { BUTTON_VARIANT, Button, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, ICON_NAME, INPUT_TYPE, Icon, Input, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type ChangeEvent, useEffect, useRef, useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const takenAddresses = ['admin', 'api', 'www'];
    const [address, setAddress] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const [isTaken, setIsTaken] = useState(false);
    const checkTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => () => clearTimeout(checkTimer.current), []);

    // Stands in for an availability call: the field stays in its loading state, next to the
    // address suffix, until the answer comes back.
    function onAddressChange(e: ChangeEvent<HTMLInputElement>): void {
      const value = e.target.value;
      const isLongEnough = value.length > 2;

      clearTimeout(checkTimer.current);
      setAddress(value);
      setIsTaken(false);
      setIsChecking(isLongEnough);

      if (isLongEnough) {
        checkTimer.current = setTimeout(() => {
          setIsChecking(false);
          setIsTaken(takenAddresses.includes(value.toLowerCase()));
        }, 700);
      }
    }

    return (
      <form style={{ display: 'flex', flexFlow: 'column', maxWidth: '420px', rowGap: '16px' }}>
        <FormField>
          <FormFieldLabel>
            Project name
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input
            clearable
            defaultValue="Landing page"
            name="project"
            required />

          <FormFieldHelper>
            <Text preset={ TEXT_PRESET.caption }>
              Shown in the console and on your invoices.
            </Text>
          </FormFieldHelper>
        </FormField>

        <FormField invalid={ isTaken }>
          <FormFieldLabel>
            Public address
          </FormFieldLabel>

          <Input
            endContent=".hosting.ovh.net"
            loading={ isChecking }
            name="address"
            onChange={ onAddressChange }
            placeholder="my-project"
            startContent="https://"
            value={ address } />

          <FormFieldHelper>
            <Text preset={ TEXT_PRESET.caption }>
              Type at least 3 characters to check availability - "api" is already taken.
            </Text>
          </FormFieldHelper>

          <FormFieldError>
            This address is already taken.
          </FormFieldError>
        </FormField>

        <FormField>
          <FormFieldLabel>
            Admin email
          </FormFieldLabel>

          <Input
            name="email"
            placeholder="you@example.com"
            startContent={ <Icon name={ ICON_NAME.email } /> }
            type={ INPUT_TYPE.email } />
        </FormField>

        <FormField>
          <FormFieldLabel>
            Root password
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          { /* No `type` here: `maskOption` already swaps the field to a password one while the
               mask is closed, and back to text when the user reveals it. */ }
          <Input
            defaultValue="correct-horse-battery"
            maskOption={{ enable: true }}
            name="password"
            required />

          <FormFieldHelper>
            <Text preset={ TEXT_PRESET.caption }>
              At least 12 characters.
            </Text>
          </FormFieldHelper>
        </FormField>

        <FormField>
          <FormFieldLabel>
            Storage quota
          </FormFieldLabel>

          { /* The unit carries meaning, so it is referenced explicitly - the Input never adds
               its adornments to `aria-describedby` on its own. */ }
          <Input
            aria-describedby="quota-unit"
            defaultValue="20"
            endContent={ <span id="quota-unit">GB</span> }
            min="10"
            name="quota"
            type={ INPUT_TYPE.number } />
        </FormField>

        <div style={{ display: 'flex', columnGap: '8px', justifyContent: 'flex-end' }}>
          <Button variant={ BUTTON_VARIANT.outline }>
            Cancel
          </Button>

          <Button type="submit">
            Deploy
          </Button>
        </div>
      </form>
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input />
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input disabled />
  ),
};

export const FloatingNumber: Story = {
  globals: {
    imports: `import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input
      defaultValue="9.99"
      step="any"
      type={ INPUT_TYPE.number } />
  ),
};

export const InFormField: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
  ),
};

export const Loading: Story = {
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input loading />
  ),
};

export const Masked: Story = {
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input maskOption={{ enable: true }} />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Input placeholder="Input" />
  ),
};

export const ReadOnly: Story = {
  globals: {
    imports: `import { Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Input
      defaultValue="Readonly"
      readOnly />
  ),
};

export const Types: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px', alignItems: 'start' }}>{ story() }</div>],
  globals: {
    imports: `import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Input type={ INPUT_TYPE.email } placeholder="email" /><br />
      <Input type={ INPUT_TYPE.number } placeholder="number" /><br />
      <Input type={ INPUT_TYPE.password } placeholder="password" /><br />
      <Input type={ INPUT_TYPE.search } placeholder="search" /><br />
      <Input type={ INPUT_TYPE.text } placeholder="text" /><br />
      <Input type={ INPUT_TYPE.time } placeholder="time" /><br />
      <Input type={ INPUT_TYPE.url } placeholder="url" /><br />
    </>
  ),
};

export const AccessibilityFormField: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
  ),
};

export const AccessibilityContent: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Weight:
      </FormFieldLabel>

      <Input
        aria-describedby="weight-unit"
        defaultValue="42"
        endContent={ <span id="weight-unit">kg</span> } />
    </FormField>
  ),
};

export const AccessibilityI18n: Story = {
  globals: {
    imports: `import { INPUT_I18N, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Search:
      </FormFieldLabel>

      <Input
        clearable
        defaultValue="my search"
        i18n={{
          [INPUT_I18N.clearButton]: 'Clear current search',
          [INPUT_I18N.searchButton]: 'Search in database',
        }}
        type='search' />
    </FormField>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Input placeholder="Default" />
      <Input clearable defaultValue="Clearable" />
      <Input loading placeholder="Loading" />
      <Input disabled placeholder="Disabled" />
      <Input invalid placeholder="Invalid" />
      <Input readOnly defaultValue="Read only" />
      <Input clearable maskOption={{ enable: true }} defaultValue="Clearable" />
      <Input endContent="kg" startContent="~" defaultValue="Adornments" />
    </div>
  ),
};
