import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField } from '../../../../ods-react/src/components/form-field/src';
import { Select, SelectContent, SelectControl, type SelectControlProp, SelectLabel, type SelectProp } from '../../../../ods-react/src/components/select/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<SelectProp>;
type DemoArg = Partial<SelectProp> & Partial<SelectControlProp> & {};

const meta: Meta<SelectProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'items', 'required']),
  component: Select,
  subcomponents: { SelectContent, SelectControl, SelectLabel },
  title: 'ODS Components/Form elements/Select',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg)=> (
    <Select
      disabled={ arg.disabled }
      invalid={ arg.invalid }
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat' },
        { label: 'Hamster', value:'hamster' },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}
      multiple={ arg.multiple }
      readOnly={ arg.readOnly }>
      <SelectControl
        multipleSelectionLabel={ arg.multipleSelectionLabel }
        placeholder={ arg.placeholder } />

      <SelectContent />
    </Select>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'select' },
      options: [true, false, 'merge'],
    },
    multipleSelectionLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
      },
      control: 'text',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
  }),
};

export const CustomRenderer: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Select
      items={[
        {
          customRendererData: {
            flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
          },
          label: 'EU providers',
          options: [{
            customRendererData: {
              description: 'OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world\'s largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.',
              logo: 'https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png',
            },
            label: 'OVH Cloud',
            value:'ovh',
          }],
        },
        {
          customRendererData: {
            flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
          },
          label: 'US providers',
          options: [{
            customRendererData: {
              description: 'Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.',
              flag: 'https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg',
              logo: 'https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png',
            },
            label: 'Amazon Web Services',
            value:'aws',
          }, {
            customRendererData: {
              description: 'Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.',
              flag: 'https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png',
            },
            label: 'Microsoft Azure',
            value:'azure',
          }, {
            customRendererData: {
              description: 'Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.',
              flag: 'https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg',
              logo: 'https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png',
            },
            label: 'Google Cloud Platform',
            value:'gcp',
          }],
        },
      ]}
      multiple>
      <SelectControl customItemRenderer={ ({ selectedItems }) => (
        <span style={{ display: 'flex', flexFlow: 'row', gap: '8px', flexWrap: 'wrap' }}>
          {
            selectedItems.map((item, idx) => (
              <span style={{ display: 'flex', flexFlow: 'row', gap: '4px', alignItems: 'center' }}
                    key={ item.value }>
                <img alt="logo"
                     height={ 15 }
                     src={ item.customRendererData?.logo }
                     width={ 15 } />

                <span>{ item.label }{ idx < selectedItems.length - 1 && ', '}</span>
              </span>
            ))
          }
        </span>
      )} />

      <SelectContent
        customGroupRenderer={ ({ customData, label }) => (
          <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px', alignItems: 'center' }}>
            <img alt="flag"
                 height={ 20 }
                 src={ customData?.flag }
                 width={ 30 } />

            <span>{ label }</span>
          </div>
        )}
        customOptionRenderer={ ({ customData, label }) => (
          <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px', alignItems: 'center', padding: '8px 0' }}>
            <img alt="logo"
                 height={ 50 }
                 src={ customData?.logo }
                 width={ 50 } />
            <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>
              <span style={{ fontWeight: 'bold' }}>{ label }</span>
              <span>{ customData?.description }</span>
            </div>
          </div>
        )} />
    </Select>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Select items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
      <SelectControl />

      <SelectContent />
    </Select>
  ),
};

export const Disabled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Select
        disabled
        items={[
          { label: 'Dog', value:'dog' },
          { label: 'Cat', value:'cat' },
          { label: 'Hamster', value:'hamster' },
          { label: 'Parrot', value:'parrot' },
          { label: 'Spider', value:'spider' },
          { label: 'Goldfish', value:'goldfish' },
        ]}>
        <SelectLabel>
          Disabled
        </SelectLabel>

        <SelectControl placeholder="Select one or more pets" />

        <SelectContent />
      </Select>

      <Select
        items={[
          { label: 'Dog', value:'dog', disabled: true },
          { label: 'Cat', value:'cat' },
          { label: 'Hamster', value:'hamster' },
          { label: 'Parrot', value:'parrot', disabled: true },
          { label: 'Spider', value:'spider' },
          { label: 'Goldfish', value:'goldfish' },
        ]}>
        <SelectLabel>
          Disabled options
        </SelectLabel>

        <SelectControl placeholder="Select one or more pets" />

        <SelectContent />
      </Select>

      <Select
        items={[
          {
            label: 'Europe',
            options: [
              { label: 'France', value: 'fr' },
              { label: 'Germany', value: 'de', disabled: true },
              { label: 'Italy', value: 'it' },
            ]
          },
          {
            disabled: true,
            label: 'Asia',
            options: [
              { label: 'China', value: 'cn', disabled: true },
              { label: 'Japan', value: 'jp', disabled: true },
              { label: 'Russia', value: 'ru', disabled: true },
            ]
          },
          {
            label: 'North America',
            options: [
              { label: 'Canada', value: 'ca' },
              { label: 'Mexico', value: 'mx' },
              { label: 'United States of America', value: 'us' },
            ]
          },
        ]}>
        <SelectLabel>
          Disabled group or group option
        </SelectLabel>

        <SelectControl />

        <SelectContent />
      </Select>
    </>
  ),
};

export const Group: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Select
      items={[
        {
          label: 'Europe',
          options: [
            { label: 'France', value: 'fr' },
            { label: 'Germany', value: 'de' },
            { label: 'Italy', value: 'it' },
          ]
        },
        {
          label: 'Asia',
          options: [
            { label: 'China', value: 'cn' },
            { label: 'Japan', value: 'jp' },
            { label: 'Russia', value: 'ru' },
          ]
        },
        {
          label: 'North America',
          options: [
            { label: 'Canada', value: 'ca' },
            { label: 'Mexico', value: 'mx' },
            { label: 'United States of America', value: 'us' },
          ]
        },
      ]}>
      <SelectControl />

      <SelectContent />
    </Select>
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <Select
        items={[
          { label: '1 vCore 2,4 GHz, 2 Go RAM', value:'hosting-1' },
          { label: '1 vCore 2,4 GHz, 4 Go RAM', value:'hosting-2' },
          { label: '2 vCores 2,4 GHz, 8 Go RAM', value:'hosting-3' },
        ]}>
        <SelectLabel>
          Select a Web hosting
        </SelectLabel>

        <SelectControl />

        <SelectContent />
      </Select>
    </FormField>
  ),
};

export const Multiple: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Select
        items={[
          { label: 'Dog', value:'dog' },
          { label: 'Cat', value:'cat' },
          { label: 'Hamster', value:'hamster' },
          { label: 'Parrot', value:'parrot' },
          { label: 'Spider', value:'spider' },
          { label: 'Goldfish', value:'goldfish' },
        ]}
        multiple>
        <SelectLabel>
          Default multiple selection
        </SelectLabel>

        <SelectControl placeholder="Select one or more pets" />

        <SelectContent />
      </Select>

      <Select
        items={[
          { label: 'Dog', value:'dog' },
          { label: 'Cat', value:'cat' },
          { label: 'Hamster', value:'hamster' },
          { label: 'Parrot', value:'parrot' },
          { label: 'Spider', value:'spider' },
          { label: 'Goldfish', value:'goldfish' },
        ]}
        multiple="merge">
        <SelectLabel>
          Merged multiple selection
        </SelectLabel>

        <SelectControl placeholder="Select one or more pets" />

        <SelectContent />
      </Select>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Select items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
      <SelectControl placeholder="Select one or more pets" />

      <SelectContent />
    </Select>
  ),
};

export const Readonly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Select
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat' },
        { label: 'Hamster', value:'hamster' },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}
      readOnly>
      <SelectControl placeholder="Select one or more pets" />

      <SelectContent />
    </Select>
  ),
};
